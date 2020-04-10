import re
from urllib import parse
import datetime
import time
import requests
from lxml import etree
import random
from config import ocr, js, fillblank_answer

class WJX():
    def __init__(self):
        self.fetch_headers = {
	        "Accept": "text/html,application/xhtml+xml,application/xml;q=0.9,image/webp,image/apng,*/*;q=0.8,application/signed-exchange;v=b3;q=0.9",
	        "Accept-Encoding": "gzip, deflate, br",
           "Accept-Language": "zh-CN,zh;q=0.9,en;q=0.8,en-GB;q=0.7,en-US;q=0.6",
	        "Cache-Control": "no-cache",
	        "Connection": "keep-alive",
	        "Host": "www.wjx.cn",
	        "Pragma": "no-cache",
	        "Sec-Fetch-Dest": "document",
	        "Sec-Fetch-Mode": "navigate",
	        "Sec-Fetch-Site": "none",
	        "Sec-Fetch-User": "?1",
	        "Upgrade-Insecure-Requests": "1",
	        "User-Agent": "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/80.0.3987.149 Safari/537.36 Edg/80.0.361.69",
        }

    def fetch_query(self, code):
        self.query_code = code
        query_url = f"https://www.wjx.cn/jq/{code}.aspx"

        resp = requests.get(url=query_url, headers=self.fetch_headers).text

        self.rn = re.search('var rndnum="(.*?)";', resp, re.S).group(1)
        self.jqnonce = re.search('var jqnonce="(.*?)";', resp, re.S).group(1)
        self.starttime = re.search('var starttime="(.*?)";', resp, re.S).group(1)
        
        html = etree.HTML(resp)

        questions = html.xpath('//div[@class="div_table_radio_question"]')
        question_lst = []
        for q in questions:
            if q.xpath(".//textarea"): # 填空题
                question_lst.append({
                    "type": "fillblank",
                    "answer": "answer1"
                    })
            elif q.xpath(".//input[@type='radio']"): # 单选题
                opts_count = len(q.xpath(".//input[@type='radio']"))
                question_lst.append({
                    "type": "single",
                    "opts_count": opts_count
                    })
            elif q.xpath(".//input[@type='checkbox']"): # 多选题
                opts_count = len(q.xpath(".//input[@type='checkbox']"))
                question_lst.append({
                    "type": "multiple",
                    "opts_count": opts_count
                    })
        self.q_lst = question_lst


    def post(self):
        submitdata = ""
        for index,item in enumerate(self.q_lst):
            if submitdata:
                submitdata += "}"

            if item['type'] == "fillblank":
                tmp = random.choice(fillblank_answer[item['answer']])
            elif item['type'] == "single":
                tmp = random.randint(1, item['opts_count'])
            elif item['type'] == "multiple":
                opts_count = item['opts_count']
                tmp = "|".join([str(i) for i in random.sample(range(1, opts_count+1), random.randint(1, opts_count))])

            submitdata += f"{index+1}${tmp}"

        self.s = requests.Session()

        post_url = "https://www.wjx.cn/joinnew/processjq.ashx"
        headers = {
            'Accept': 'text/plain, */*; q=0.01',
            'Accept-Encoding': 'gzip, deflate, br',
            'Accept-Language': 'zh-CN,zh;q=0.9,en;q=0.8,en-GB;q=0.7,en-US;q=0.6',
            'Cache-Control': 'no-cache',
            'Connection': 'keep-alive',
            'Content-Type': 'application/x-www-form-urlencoded; charset=UTF-8',
            #'Cookie': r'jpckey=%E5%8C%96%E5%A6%86',
            'Host': 'www.wjx.cn',
            'Origin': 'https://www.wjx.cn',
            'Pragma': 'no-cache',
            'Referer': f'https://www.wjx.cn/m/{self.query_code}.aspx',
            'Sec-Fetch-Dest': 'empty',
            'Sec-Fetch-Mode': 'cors',
            'Sec-Fetch-Site': 'same-origin',
            'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/80.0.3987.149 Safari/537.36 Edg/80.0.361.69',
            'X-Requested-With': 'XMLHttpRequest',
            }

        ktimes = random.randint(91, 173)

        params = {
            "curid": self.query_code,
            "starttime": self.starttime,
            "source": "directphone",
            "submittype": 1,
            "ktimes": ktimes,
            "hlv": 1,
            "rn": self.rn,
            "jpm": 2,
            "t": int(time.time() * 1000),
            "jqnonce": self.jqnonce,
            "jqsign": js.call("dataenc", self.jqnonce, ktimes),
        }
        print("params:"+str(params))
        print("submitdata:"+str(submitdata))
        form_data = {
            "submitdata": submitdata        
        }

        proxies = {
            "http":"124.113.219.91:32105",
            "https": "124.113.219.91:32105"
        }

        resp = self.s.post(url=post_url, headers=headers, data=form_data, params=params).text
        if "验证码" in resp:
            print("遭遇验证码，正在处理......")
            txt = self._get_validate()
            if txt:
                params["validate_text"] = self._get_validate() # 获取验证码
            else:
                print("百度识图失败了！")
                return 
            post_resp = self.s.post(url=post_url, headers=headers, data=form_data, params=params)
            resp = post_resp.text
            if "验证码" in resp:
                print("验证码处理失败，回头再尝试吧！")
            else:
                print("有验证码：", resp)
        else:
            print("无验证码：", resp)
        
        time.sleep(random.randint(1, 2))
    
    def _get_validate(self):
        spam_url = "https://www.wjx.cn/wjx/join/AntiSpamImageGen.aspx"
        params = {
            "q": self.query_code,
            "t": int(time.time()*1000)
        }
        spam_headers = {
            'Accept': 'image/webp,image/apng,image/*,*/*;q=0.8',
            'Accept-Encoding': 'gzip, deflate, br',
            'Accept-Language': 'zh-CN,zh;q=0.9,en;q=0.8,en-GB;q=0.7,en-US;q=0.6',
            'Cache-Control': 'no-cache',
            'Connection': 'keep-alive',
            'Host': 'www.wjx.cn',
            'Pragma': 'no-cache',
            'Referer': f'https://www.wjx.cn/m/{self.query_code}.aspx',
            'Sec-Fetch-Dest': 'image',
            'Sec-Fetch-Mode': 'no-cors',
            'Sec-Fetch-Site': 'same-origin',
            'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/80.0.3987.149 Safari/537.36 Edg/80.0.361.69',
        }
        resp = self.s.get(url=spam_url, params=params, headers=spam_headers)

        img = resp.content
        with open("spam.gif", "wb") as f:
            f.write(img)
        return  ocr.get_validate()
        

if __name__ == "__main__":
    wjx = WJX()
    wjx.fetch_query("69541443")
    while True:
        wjx.post()