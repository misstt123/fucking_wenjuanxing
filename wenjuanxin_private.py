# -*- coding: utf-8 -*-
# @Time    : 2020/4/9
# @Author  : lyh-god
# @FileName: wenjuanxin.py
# @Software: PyCharm

from fake_useragent.fake import UserAgent
import requests
import random
import sys
import time
import re
from bs4 import BeautifulSoup
import configparser
from requests.adapters import HTTPAdapter
from threading import Thread  # 导入线程函数
from threading import Lock
import threading
import traceback
# import math
# from faker import Factory
# from urllib import parse
# import json
# import jieba.analyse
# from urllib.parse import urlencode
ua = UserAgent(use_cache_server=False,path="fake_useragent_0.1.11.json")
# count_mutex=0#使用量mutex

file = 'config.ini'
# 创建配置文件对象
config_parse = configparser.ConfigParser()

# 读取文件
config_parse.read(file, encoding='utf-8')
use_count = config_parse.getint("ip", "count")  # ip使用量
use_fail = config_parse.getint("ip", "fail")  # ip失败数量
read_urid = config_parse.getint("wjx", "id")  # 问卷星id号


# 一系列的工具方法
def notice_wechat(title, content):
    '''
    server酱通知
    :param title: 标题
    :param content: 内容
    '''
    '''server酱通知微信'''
    api = "https://sc.ftqq.com/SCU34444T9181517902763d900d77d88739ea0dc75e9056544359e.send"
    data = {
        'text': title,
        'desp': content
    }
    req = requests.post(api, data)


# json转成字符串cookie
def json2String(data):
    json_data = dict(data)
    # print(json_data)
    # keys = json_data.keys()
    # values = json_data.values()
    # i=0
    str = ''
    for key, value in json_data.items():
        prefix = "{}={};".format(key, value)
        str += prefix
    return str.rstrip(';')


def current_time(a):
    '''
    a:秒数
    返回当前时间
    :return:
    '''
    return time.strftime("%Y/%m/%d %H:%M:%S", time.localtime(time.time() - a))


def random_num(min, max):
    '''
    范围随机数
    :param min:
    :param max:
    :return:
    '''
    return random.randint(min, max)


# 使用中文分词器生成句子
def genertate_sentence():
    # jieba生成器
    # head = {
    #     'authority': 'suulnnka.github.io',
    #     'pragma': 'no-cache',
    #     'cache-control': 'no-cache',
    #     'upgrade-insecure-requests': '1',
    #     'user-agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/80.0.3987.162 Safari/537.36',
    #     'sec-fetch-dest': 'document',
    #     'accept': 'text/html,application/xhtml+xml,application/xml;q=0.9,image/webp,image/apng,*/*;q=0.8,application/signed-exchange;v=b3;q=0.9',
    #     'sec-fetch-site': 'same-origin',
    #     'sec-fetch-mode': 'navigate',
    #     'sec-fetch-user': '?1',
    #     'accept-language': 'zh-CN,zh-TW;q=0.9,zh;q=0.8,en-US;q=0.7,en;q=0.6',
    #     'cookie': '_ga=GA1.1.1671311673.1586085770; Hm_lvt_058d1e446dd338b69f2e385ba2f930f2=1586085992,1586086005,1586086197,1586086240; Hm_lpvt_058d1e446dd338b69f2e385ba2f930f2=1586086496; _ga_BM8WXEWW3P=GS1.1.1586085769.1.1.1586086550.0'
    # }
    # for x in jieba.analyse.extract_tags(sentence, withFlag=True):
    #     titile_keyword.append(x)
    # num = random_num(0, len(titile_keyword) - 1)
    # bllShitapi = "https://suulnnka.github.io/BullshitGenerator/index.html?主题={}&随机种子={}".format(
    #     titile_keyword[num], random_num(214013, 999999999)
    # )
    #
    # res = requests.get(bllShitapi, head)
    # soup = BeautifulSoup(res.text, "html.parser")
    # soup.div
    first_head = {
        'Connection': 'keep-alive',
        'Pragma': 'no-cache',
        'Cache-Control': 'no-cache',
        'Upgrade-Insecure-Requests': '1',
        'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/80.0.3987.162 Safari/537.36',
        'Sec-Fetch-Dest': 'document',
        'Accept': 'text/html,application/xhtml+xml,application/xml;q=0.9,image/webp,image/apng,*/*;q=0.8,application/signed-exchange;v=b3;q=0.9',
        'Sec-Fetch-Site': 'cross-site',
        'Sec-Fetch-Mode': 'navigate',
        'Sec-Fetch-User': '?1',
        'Accept-Language': 'zh-CN,zh-TW;q=0.9,zh;q=0.8,en-US;q=0.7,en;q=0.6'
    }

    last_head = {
        'Connection': 'keep-alive',
        'Pragma': 'no-cache',
        'Cache-Control': 'no-cache',
        'Sec-Fetch-Dest': 'empty',
        # 'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/80.0.3987.162 Safari/537.36',
        'Content-type': 'application/x-www-form-urlencoded',
        'Accept': '*/*',
        'Origin': 'https://www.qqxiuzi.cn',
        'Sec-Fetch-Site': 'same-origin',
        'Sec-Fetch-Mode': 'cors',
        'Referer': 'https://www.qqxiuzi.cn/zh/suiji-hanzi/',
        'Accept-Language': 'zh-CN,zh-TW;q=0.9,zh;q=0.8,en-US;q=0.7,en;q=0.6',
        # 'Cookie': 'PHPSESSID=3lf1onhvm9btb4o1j3v36rpb06; Hm_lvt_899df2cdf7f5a83a719fb1bb96982b18=1586088940,1586098893; Hm_lpvt_899df2cdf7f5a83a719fb1bb96982b18=1586099220; __gads=ID=dc5362b91b08801b:T=1586099219:S=ALNI_MZVe6pZs1c4h01Nyny6t-wtphUIZQ',
        'Content-Type': 'application/x-www-form-urlencoded'
    }
    # bllShitapi="https://suulnnka.github.io/BullshitGenerator/index.html?主题={}&随机种子={}".format(
    #     '灭霸',random_num(214013,999999999)
    # )
    first_url = "https://www.qqxiuzi.cn/zh/suiji-hanzi/"
    first_head['User-Agent'] = ua.random
    res1 = requests.get(first_url, headers=first_head)
    token = re.search("&token=.+\'", res1.text).group(0)[7:-1]

    cookie = res1.cookies
    cookies_dict = requests.utils.dict_from_cookiejar(cookie)
    c = json2String(cookies_dict)
    last_head['Cookie'] = c

    last_url = "https://www.qqxiuzi.cn/zh/suiji-hanzi/show.php"
    last_head['User-Agent'] = ua.random
    datas = {
        'type': 'ciyu',
        'hz1': 'null',
        'hz2': 'null',
        'hz3': 'null',
        'cy2': 'null',
        'cy3': 'null',
        'cy4': 4,
        'cy5': 'null',
        'text': '',
        'num': 2,
        'token': token

    }
    res2 = requests.post(last_url, headers=last_head, data=datas)
    res2.encoding = 'utf-8'
    soup2 = BeautifulSoup(res2.text, "html.parser")
    ciyu_str = ''
    for item in soup2.select('div'):
        ciyu_str += item.text

    return ciyu_str


ips = []  # ip列表
mutex = threading.Lock()

# 获取问卷星题目个数以及类型
default_url = f"https://www.wjx.cn/m/{read_urid}.aspx"
default_head = {
    'Connection': 'keep-alive',
    'Pragma': 'no-cache',
    'Cache-Control': 'no-cache',
    'Upgrade-Insecure-Requests': '1',
    # 'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/80.0.3987.162 Safari/537.36',
    'Sec-Fetch-Dest': 'document',
    'Accept': 'text/html,application/xhtml+xml,application/xml;q=0.9,image/webp,image/apng,*/*;q=0.8,application/signed-exchange;v=b3;q=0.9',
    'Sec-Fetch-Site': 'none',
    'Sec-Fetch-Mode': 'navigate',
    'Sec-Fetch-User': '?1',
    'Accept-Language': 'zh-CN,zh-TW;q=0.9,zh;q=0.8,en-US;q=0.7,en;q=0.6'
}
default_head['User-Agent'] = ua.random
res = requests.get(default_url, headers=default_head)
soup = BeautifulSoup(res.text, 'html.parser')
div = soup.find_all("div", attrs={'class': 'field ui-field-contain'})
div_num = len(div)

type_lis = []
for item in div:

    option_num = 0
    if (item['type'] == '1'):
        option_num = 1
    else:
        option_num = len(item.find_all('div', attrs={'class': 'ui-controlgroup'})[0])
    dic_item = {
        'type': item['type'],
        'num': option_num

    }
    type_lis.append(dic_item)


class GetIpThread2(threading.Thread):
    def __init__(self,fetchTime):
        threading.Thread.__init__(self)
        self.fetchTime=fetchTime
    def run(self):

        global mutex
        global use_count
        while True:
            if (len(ips) <= 0):
                mutex.acquire()
                apiUrl ="http://kuyukuyu.com/agents/get?uuid=6aaf8268-4bf4-4b2d-91fe-4c339cca136d"
                res = requests.get(apiUrl, timeout=45)
                res_text = res.text.strip()
                if ("用完" in res_text or "ip" in res_text):
                    notice_wechat("ip量用完了", "{} 总数为：{}".format(current_time(0), use_count))
                    sys.exit(0)
                elif ("订单过期" in res_text):
                    notice_wechat("订单过期了", "{} 总数为：{}".format(current_time(0), use_count))
                    sys.exit(0)
                elif ("订单不存在" in res_text):
                    notice_wechat("订单不存在", "{} 总数为：{}".format(current_time(0), use_count))
                    sys.exit(0)
                # ips.clear()
                use_count = use_count + 20
                self.update_config_file(use_count)
                items = res_text.split('\n')
                for item in items:
                    ips.append(item.strip())
                mutex.release()
            time.sleep(self.fetchTime)

    def update_config_file(self, num):
        # config_parse.set('ip',"count",str(12580))
        # use_count=config_parse.getint("ip","count")
        config_parse.set("ip", "count", str(num))
        with open("config.ini", "w+") as f:
            config_parse.write(f)


class Wenjuanx(threading.Thread):  # 继承父类threading.Thread

    def __init__(self, threadID, curid):
        threading.Thread.__init__(self)
        self.ips=[]
        self.update_ips()
        self.threadID = threadID
        self.curid = curid
        self.use_fail=config_parse.getint("ip","fail"+self.threadID)
        self.use_count=config_parse.get("ip","count"+self.threadID)
        self.headers = {
            'Accept': 'text/plain, */*; q=0.01',
            'Accept-Encoding': 'gzip, deflate, br',
            'Accept-Language': 'zh-CN,zh;q=0.9,en;q=0.8,en-GB;q=0.7,en-US;q=0.6',
            'Cache-Control': 'no-cache',
            'Connection': 'keep-alive',
            'Content-Type': 'application/x-www-form-urlencoded; charset=UTF-8',
            # 'Cookie': r'jpckey=%E5%8C%96%E5%A6%86',
            'Host': 'www.wjx.cn',
            'Origin': 'https://www.wjx.cn',
            'Pragma': 'no-cache',
            'Referer': f'https://www.wjx.cn/m/{self.curid}.aspx',
            'Sec-Fetch-Dest': 'empty',
            'Sec-Fetch-Mode': 'cors',
            'Sec-Fetch-Site': 'same-origin',
            # 'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/80.0.3987.149 Safari/537.36 Edg/80.0.361.69',
            'X-Requested-With': 'XMLHttpRequest',
        }

    def run(self):  # 把要执行的代码写到run函数里面 线程在创建后会直接运行run函数
        try:
            self.post_url(self.curid)
        except Exception as e:
            notice_wechat("出现bug了", "{}:{}".format(current_time(0), str(e)))
            print(e)

    def update_ips(self):

        apiUrl = "http://quansuip.com:7772/ProxyiPAPI.aspx?action=GetIPAPI&qty=5&ordernumber=501ed0ae6657ad744868e7b382fe1aa9"
        res = requests.get(apiUrl, timeout=7)
        res_text = res.text.strip()
        if ("用完" in res_text or "ip" in res_text):
            notice_wechat("ip量用完了", "{} 总数为：{}".format(current_time(0), use_count))
            sys.exit(0)
        elif ("订单过期" in res_text):
            notice_wechat("订单过期了", "{} 总数为：{}".format(current_time(0), use_count))
            sys.exit(0)
        self.use_count=self.use_count+5
        self.update_config_count(self.use_count)
        items = res_text.split('\n')
        for item in items:
            self.ips.append(item.strip())

    def update_config_count(self, num):
        # config_parse.set('ip',"count",str(12580))
        # use_count=config_parse.getint("ip","count")
        config_parse.set("ip", "count"+self.threadID, str(num))
        with open("config.ini", "w+") as f:
            config_parse.write(f)

    def update_config_fail(self, num):
        config_parse.set("ip", "fail"+self.threadID, str(num))
        with open("config.ini", "w+") as f:
            config_parse.write(f)

    def random_url(self, curid):
        '''
        随机请求参数
        :return:
            curid: 69156112
            starttime: 2020/4/3 20:15:01
            source: directphone
            submittype: 1
            ktimes: 150
            hlv: 1
            rn: 2027509235.12717626 2027509235.09093637 2027509235.80409534
            jpm: 17
            t: 1585916212527
            jqnonce: 61a28b7e-460b-4762-8b49-783d09ec1e09
            jqsign: 70`39c6d,571c,5673,9c58,692e18db0d18
        '''

        # starttime = current_time(random_num(10, 45))
        # print("starttime="+starttime)

        lis = self.jqsignAndjqnonce(curid)
        # 不知道有啥意义
        # source = 'directphone'
        # submittype = 1

        ktimes = random_num(110, 428) + 2
        # print("ktimes:" + str(ktimes))
        hlv = 1
        # 此处测试用
        # time.sleep(random_num(10, 45))
        # time.sleep(random_num(0.5,6))

        rn = lis[0]  # '2027509235.{}'.format(int(math.modf(now_time)[0] * 10000000))
        jpm = 2
        jqnonce = lis[1]
        # print(jqnonce)
        source = lis[2]
        jqsign = self.dataenc(jqnonce, ktimes)
        # print(jqsign)
        now_time = time.time()
        t = int(now_time * 1000)
        # print("t=" + str(t))

        starttime = lis[3].strip()
        # print("starttime: " + str(starttime))
        # print(jqsign)
        '''
        curid=69541443&starttime=2020%2F4%2F4%2023%3A21%3A24&source=directphone&submittype=1&ktimes=123&hlv=1&rn=2027509235.94422000&jpm=2&t=1586013796384&jqnonce=08ddd9f8-69c1-4900-9e9e-dc211a32989e&jqsign=3%3Bggg%3Ae%3B.5%3A%602.7%3A33.%3Af%3Af.g%60122b01%3A%3B%3Af
        '''
        params = {
            "curid": curid,
            "starttime": starttime,
            "source": source,
            "submittype": 1,
            "ktimes": ktimes,
            "hlv": hlv,
            "rn": rn,
            "jpm": jpm,
            "t": t,
            "jqnonce": jqnonce,
            "jqsign": jqsign
        }
        '''
        url = "curid={}&starttime={}&source={}&submittype=1&ktimes={}&hlv={}&rn={}&jpm={}&t={}&jqnonce={}&jqsign={}".format(
            curid, parse.quote(starttime).upper(), source, ktimes, hlv, rn, jpm, t, jqnonce, jqsign
        )
        '''
        return params

    def jqsignAndjqnonce(self, curid):
        url = f"https://www.wjx.cn/m/{curid}.aspx"
        head = {
            'Connection': 'keep-alive',
            'Pragma': 'no-cache',
            'Cache-Control': 'no-cache',
            'Upgrade-Insecure-Requests': '1',
            # 'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/80.0.3987.162 Safari/537.36',
            'Sec-Fetch-Dest': 'document',
            'Accept': 'text/html,application/xhtml+xml,application/xml;q=0.9,image/webp,image/apng,*/*;q=0.8,application/signed-exchange;v=b3;q=0.9',
            'Sec-Fetch-Site': 'none',
            'Sec-Fetch-Mode': 'navigate',
            'Sec-Fetch-User': '?1',
            'Accept-Language': 'zh-CN,zh-TW;q=0.9,zh;q=0.8,en-US;q=0.7,en;q=0.6',
        }
        head['User-Agent'] = ua.random
        res = requests.get(url, headers=head)
        cookie = res.cookies
        cookies_dict = requests.utils.dict_from_cookiejar(cookie)
        c = json2String(cookies_dict)
        self.headers['Cookie'] = c
        self.headers['User-Agent'] = head['User-Agent']
        # soup = BeautifulSoup(res.text, 'html.parser')
        # print(res.text)
        rndnum = re.search("rndnum=\".+\";", res.text).group(0)[8:-2]
        jqnonce = re.search("jqnonce=\".+\";", res.text).group(0)[9:-2]
        # useAliVerify = re.search("var useAliVerify=\d;", res.text).group(0)

        # print("useAliVerify:" + str(useAliVerify[17]))
        # print("rndnum:" + str(rndnum))
        # print("jqnonce:" + str(jqnonce))
        soup = BeautifulSoup(res.text, 'html.parser')
        r_starttime = soup.find(attrs={'id': 'starttime'}).attrs['value']
        source = soup.find(attrs={'id': 'source'}).attrs['value']
        lis = []
        lis.append(rndnum)
        lis.append(jqnonce)
        lis.append(source)
        lis.append(r_starttime)
        return lis

    # 求jssign和jsnonce
    def dataenc(self, jqnonce, ktimes):
        '''
            var c, d, e, b = ktimes % 10;
            for (0 == b && (b = 1),
                     c = [],
                     d = 0; d < a.length; d++)
                e = a.charCodeAt(d) ^ b,
                    c.push(String.fromCharCode(e));
            return c.join("")
        '''
        b = ktimes % 10
        c = ""
        jq_lis = list(jqnonce)
        if (b == 0):
            b = 1
        for d in range(len(list(jq_lis))):
            temp = ord(jq_lis[d]) ^ b
            c += (chr(temp))

        return c

    def post_url(self, curid):
        '''
        生成1$1}2$2}3$3}4$1}5$3}6$2}7$2}8$2}9$2}10$2}11$1}12$1}13$
           1$2} 2$2}3$1}4$3}5$3}6$3}7$3}8$2}9$2}10$2}11$4}12$1|2|3|4|5}13$
        :return:
        '''
        '''
        # 代理服务器
        proxyHost = "http-dyn.abuyun.com"
        proxyPort = "9020"

        # 代理隧道验证信息
        proxyUser = "HNC36064U98618ND"
        proxyPass = "279E10A0B0AB2457"

        proxyMeta = "http://%(user)s:%(pass)s@%(host)s:%(port)s" % {
            "host": proxyHost,
            "port": proxyPort,
            "user": proxyUser,
            "pass": proxyPass,
        }
        '''
        proxies = {
            "https": "182.247.60.216:52142",
            "http": "182.247.60.216:52142"
        }
        while (time.sleep(0.05), True):

            while(len(self.ips) <= 0):
                self.update_ips()
            i = random_num(0, len(self.ips) - 1)
            ip = self.ips[i]
            del self.ips[i]
            proxies['https'] = ip
            proxies['http'] = ip
            url = "https://www.wjx.cn/joinnew/processjq.ashx"
            # url="https://www.wjx.cn/joinnew/processjq.ashx?curid=69541443&starttime=2020%2F4%2F8%2015%3A47%3A45&source=directphone&submittype=1&ktimes=61&hlv=1&rn=2027509209.00021182&jpm=2&lct=10097&t=1586332080065&jqnonce=066217aa-9371-432d-862c-2bbec0bb5c38&jqsign=177306%60%60%2C8260%2C523e%2C973b%2C3ccdb1cc4b29"

            params = self.random_url(curid)

            data = ''
            for i in range(div_num):

                if (type_lis[i]['type'] == '1'):
                    ss = '{}${}'.format(i + 1, genertate_sentence()) + '}'
                elif (type_lis[i]['type'] == '3'):
                    ss = '{}${}'.format(i + 1, random_num(1, int(type_lis[i]['num']))) + '}'
                elif (type_lis[i]['type'] == '4'):

                    single_num = random_num(0, int(type_lis[i]['num']))
                    h_set = set()
                    while (len(h_set) < single_num):
                        h_set.add(random.randint(1, int(type_lis[i]['num'])))
                    pos_str = ''
                    for item in h_set:
                        pos_str += ('|' + str(item))
                    pos_str = pos_str.lstrip('|')
                    ss = '{}${}'.format(i + 1, pos_str) + '}'
                data += ss
            # parameter = parse.quote(parameter.rstrip('}'))
            data = data.rstrip('}')
            # parameter="submitdata=1%241%7D2%243%7D3%243%7D4%242%7D5%241%7D6%243%7D7%242%7D8%242%7D9%242%7D10%242%7D11%242%7D12%244%7D13%24"
            data_s = {
                "submitdata": data
            }
            count = 0  # 单个ip使用计数器
            while (True):
                try:
                    s=requests.session()
                    # 重试次数为3
                    s.mount('http://', HTTPAdapter(max_retries=3))
                    s.mount('https://', HTTPAdapter(max_retries=3))
                    res = s.post(
                        url, headers=self.headers, data=data_s, params=params,
                        proxies=proxies,timeout=16)
                    count = count + 1
                    message = res.text
                    status_code = message.split('〒')[0]
                    if (int(status_code) != 10):
                        break
                    print("{}:{}".format(self.threadID, message))
                except Exception as e:
                    if (count == 0):
                        use_fail=self.use_fail+1
                        self.update_config_fail(use_fail)
                    repr(e)
                    break
                finally:
                    time.sleep(random.uniform(0.5, 1.3))



if __name__ == '__main__':

    GetIpThread2(10).start()
    time.sleep(2)

    for i in range(3):
        Wenjuanx(i + 1, str(read_urid)).start()
        time.sleep(0.2)

    print()
