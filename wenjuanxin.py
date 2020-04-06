from fake_useragent.fake import UserAgent
import requests
import random
from faker import Factory
import time
import math
import re
from urllib import parse
from bs4 import BeautifulSoup
import threading
import json
import jieba.analyse
from urllib.parse import urlencode

ua = UserAgent()

'''
headers = {
    # 'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64; rv:74.0) Gecko/20100101 Firefox/74.0',
    'Accept': 'text/plain, */*; q=0.01',
    'Accept-Language': 'zh-CN,zh;q=0.8,zh-TW;q=0.7,zh-HK;q=0.5,en-US;q=0.3,en;q=0.2',
    'Content-Type': 'application/x-www-form-urlencoded; charset=UTF-8',
    'X-Requested-With': 'XMLHttpRequest',
    'Origin': 'https://www.wjx.cn',
    'Connection': 'keep-alive',
    'Referer': 'https://www.wjx.cn/m/69156112.aspx',
    # 'Cookie': 'acw_tc=2f624a4c15859126853877402e62d4a0ffe71fe04433f4f22a1f6fc25631a9; .ASPXANONYMOUS=ZNpKYjtA1gEkAAAAMjIyMzdhMWEtOWI4ZS00ZjZhLTllM2YtNDk2NTQxM2RiNGY2RrlH4oMvK38t4FPe1gv1zc2TWy81; jac69156112=09093637; SERVERID=6142ed0ee68ecc71fb491c53c82ec4a0|1585914035|1585912685; Hm_lvt_21be24c80829bd7a683b2c536fcf520b=1585912686; Hm_lpvt_21be24c80829bd7a683b2c536fcf520b=1585914036; UM_distinctid=1713fc327b1155-075cd0241399148-4c302f7e-144000-1713fc327b2328; CNZZDATA4478442=cnzz_eid%3D732218403-1585910396-%26ntime%3D1585910396; jpckey=%E5%AD%A6%E5%8E%86; LastActivityJoin=69156112,105332268947; join_69156112=1',
    'Content-Type': 'text/plain'
}
'''
headers = {
    'Connection': 'keep-alive',
    'Pragma': 'no-cache',
    'Cache-Control': 'no-cache',
    'Accept': 'text/plain, */*; q=0.01',
    'Sec-Fetch-Dest': 'empty',
    'X-Requested-With': 'XMLHttpRequest',
    # 'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/80.0.3987.162 Safari/537.36',
    'Content-Type': 'application/x-www-form-urlencoded; charset=UTF-8',
    'Origin': 'https://www.wjx.cn',
    'Sec-Fetch-Site': 'same-origin',
    'Sec-Fetch-Mode': 'cors',
    'Referer': 'https://www.wjx.cn/m/69541443.aspx',
    'Accept-Language': 'zh-CN,zh-TW;q=0.9,zh;q=0.8,en-US;q=0.7,en;q=0.6',
    #'Cookie': 'acw_tc=707c9fd015861022902862957e5a12c8cfc985fc911ba2e6507fb7335474c3; .ASPXANONYMOUS=J3yj1_RB1gEkAAAAZWJkZmQwODItNzcwMy00NjZkLTliZTQtMGY1MThmZjMyYThm9f0vRsZ_HsxWyDjfkoiyf5WhNsU1; UM_distinctid=1714b10484e55-0ff6d4825411f7-4313f6f-144000-1714b10484f19d; jaward105375985068=1; SojumpABX_4563=1; award_69541443=1; jac69541443=35049556; join_69541443=1; CNZZDATA4478442=cnzz_eid%3D1132456625-1586101979-%26ntime%3D1586182979; crudat=2020-04-04 21:02:52; SojumpSurvey=0102AF1EFD8C39DAD708FEAFBE0E145BDAD70800076C00790068005F0067006F00640000012F00FF6E6B9B1D0BE3472D9E0FC237FDC4D08842BCF815; WjxUser=UserName=lyh_god; LastCheckUpdateDate=1; spiderregkey=baidu.com%c2%a7%e9%97%ae%e5%8d%b7%e6%98%9f%c2%a71; baidutgkey=%u95EE%u5377%u661F%u54C1%u4E13%u6807%u9898%7C4%7Cbaidu; Hm_lvt_21be24c80829bd7a683b2c536fcf520b=1586076438,1586184498,1586184676,1586184742; _cnzz_CV4478442=%E7%94%A8%E6%88%B7%E7%89%88%E6%9C%AC%7C%E5%85%8D%E8%B4%B9%E7%89%88%7C1586185264797; Hm_lpvt_21be24c80829bd7a683b2c536fcf520b=1586185298; SERVERID=3f9180de4977a2b2031e23b89d53baa6|1586185297|1586183192; jpckey=%E5%8C%96%E5%A6%86',
    'Content-Type': 'text/plain'
}


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
    return time.strftime("%Y-%m-%d %H:%M:%S", time.localtime(time.time() - a))


def random_num(min, max):
    '''
    范围随机数
    :param min:
    :param max:
    :return:
    '''
    return random.randrange(min, max)


def random_url(curid):
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
    starttime = current_time(random_num(10, 50))
    now_time = time.time()
    t = int(now_time * 1000)

    # 不知道有啥意义
    # source = 'directphone'
    # submittype = 1

    ktimes = random_num(110, 428) + 2
    hlv = 1
    lis = jqsignAndjqnonce()
    rn = lis[0]  # '2027509235.{}'.format(int(math.modf(now_time)[0] * 10000000))
    jpm = 2
    jqnonce = lis[1]
    source = lis[2]
    jqsign = dataenc(jqnonce, ktimes)
    '''
    curid=69541443&starttime=2020%2F4%2F4%2023%3A21%3A24&source=directphone&submittype=1&ktimes=123&hlv=1&rn=2027509235.94422000&jpm=2&t=1586013796384&jqnonce=08ddd9f8-69c1-4900-9e9e-dc211a32989e&jqsign=3%3Bggg%3Ae%3B.5%3A%602.7%3A33.%3Af%3Af.g%60122b01%3A%3B%3Af
    '''
    str = "curid={}&starttime={}&source={}&submittype=1&ktimes={}&hlv={}&rn={}&jpm={}&t={}&jqnonce={}&jqsign={}".format(
        curid, parse.quote(starttime).upper(), source, ktimes, hlv, rn, jpm, t, jqnonce, jqsign
    )

    return str


url_cookie = ''


def jqsignAndjqnonce():
    url = "https://www.wjx.cn/m/69541443.aspx"
    head = {
        # 'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64; rv:74.0) Gecko/20100101 Firefox/74.0',
        'Accept': 'text/html,application/xhtml+xml,application/xml;q=0.9,image/webp,*/*;q=0.8',
        'Accept-Language': 'zh-CN,zh;q=0.8,zh-TW;q=0.7,zh-HK;q=0.5,en-US;q=0.3,en;q=0.2',
        'Connection': 'keep-alive',
        'Cookie': 'acw_tc=2f624a4c15859126853877402e62d4a0ffe71fe04433f4f22a1f6fc25631a9; .ASPXANONYMOUS=ZNpKYjtA1gEkAAAAMjIyMzdhMWEtOWI4ZS00ZjZhLTllM2YtNDk2NTQxM2RiNGY2RrlH4oMvK38t4FPe1gv1zc2TWy81; SERVERID=0f3eb8fcde19feef85b46d49c555413b|1585933053|1585933053; Hm_lvt_21be24c80829bd7a683b2c536fcf520b=1585912686; Hm_lpvt_21be24c80829bd7a683b2c536fcf520b=1585933055; UM_distinctid=1713fc327b1155-075cd0241399148-4c302f7e-144000-1713fc327b2328; CNZZDATA4478442=cnzz_eid%3D732218403-1585910396-%26ntime%3D1585931996; jac69156112=45696809',
        'Upgrade-Insecure-Requests': '1',
        'Cache-Control': 'max-age=0',
        'Cookie': 'SERVERID=6142ed0ee68ecc71fb491c53c82ec4a0|1585921170|1585921170'
    }
    res = requests.get(url)
    cookie = res.cookies
    cookies_dict = requests.utils.dict_from_cookiejar(cookie)
    c = json2String(cookies_dict)
    headers['Cookie'] = c
    url_cookie
    # soup = BeautifulSoup(res.text, 'html.parser')
    # print(res.text)
    rndnum = re.search("rndnum=\".+\";", res.text).group(0)[8:-2]
    jqnonce = re.search("jqnonce=\".+\";", res.text).group(0)[9:-2]
    soup = BeautifulSoup(res.text, 'html.parser')
    source = soup.find(attrs={'id': 'source'}).attrs['value']
    lis = []
    lis.append(rndnum)
    lis.append(jqnonce)
    lis.append(source)
    return lis


# 求jssign和jsnonce
def dataenc(jqnonce, ktimes):
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
    for d in range(len(list(jq_lis)) - 1):
        temp = ord(jq_lis[d]) ^ b
        c += (chr(temp))

    return c


# titile_keyword = []


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
        'num': 10,
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
mutex = 0  # 标志位


class GetIpThread(threading.Thread):
    def __init__(self, fetchSecond):
        super(GetIpThread, self).__init__();
        self.fetchSecond = fetchSecond;

    def run(self):
        lis = []
        for i in range(3):
            lis.append(i + 1)
        global mutex
        while True:
            apiUrl = "https://ip.jiangxianli.com/api/proxy_ips?country=中国&page={}".format(random.randint(1, 7))
            # 获取IP列表
            res = requests.get(apiUrl, timeout=30)
            content = json.loads(res.text, encoding='utf-8')['data']['data']
            # 按照\n分割获取到的IP
            mutex = 1
            ips.clear()

            for item in content:
                ips.append("{}:{}".format(item['ip'], item['port']))

            mutex = 0
            # print("长度：{}，{}".format(len(ips),ips))
            # ips = res.split('\n');
            # # 利用每一个IP
            # for proxyip in ips:
            #
            #     if proxyip.strip() == '':
            #         continue
            #
            #     print(proxyip)
            #     # 开启一个线程
            #     CrawlThread(proxyip).start();
            # 休眠
            time.sleep(self.fetchSecond);


# 获取问卷星题目个数以及类型
default_url = "https://www.wjx.cn/m/69541443.aspx"
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

# soup.find()
div_num = len(div)
# print(div_num)
# .find_all('div'))
type_lis = []
# print(len(div[12].find_all('div', attrs={'class': 'ui-controlgroup'})[0]))
for item in div:
    # print(type(item['type']))
    option_num = 0
    if (item['type'] == '1'):
        option_num = 1
    else:
        option_num = len(item.find_all('div', attrs={'class': 'ui-controlgroup'})[0])
    # print(item['type'])
    dic_item = {
        'type': item['type'],
        'num': option_num

    }
    type_lis.append(dic_item)


def random_parameter():
    '''
    生成1$1}2$2}3$3}4$1}5$3}6$2}7$2}8$2}9$2}10$2}11$1}12$1}13$
       1$2} 2$2}3$1}4$3}5$3}6$3}7$3}8$2}9$2}10$2}11$4}12$1|2|3|4|5}13$
    :return:
    '''


    url = " https://www.wjx.cn/joinnew/processjq.ashx?" + random_url(69541443)
    parameter = ''
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
            # print(pos_str)

            ss = '{}${}'.format(i + 1, pos_str) + '}'
        parameter += ss
    parameter = parse.quote(parameter.rstrip('}'))
    # print(parameter)
    # print(url)
    headers['User-Agent']=ua.random
    res = requests.post(url, headers=headers, data={'submitdata': parameter})
    print(res.text)
    print(res.status_code)
    return


if __name__ == '__main__':
    # print("{}${}".format(3,genertate_sentence())+'}')

    # h = set()
    # while (len(h) < 10):
    #     h.add(random.randint(10, 100))
    #
    # print(h)

    print(random_parameter())
    print()

    # h={1,2,3,5,7,9,1334}
    # ss=''
    # for item in h:
    #     ss+=('|'+str(item))
    # ss=ss.lstrip('|')
    # print(ss)
    # res = requests.get("https://www.wjx.cn/m/69541443.aspx")
    # random_parameter()
    # print(genertate_sentence())

    # print(len(titile_keyword))
    # print(div_num)

    # first_head = {
    #     'Connection': 'keep-alive',
    #     'Pragma': 'no-cache',
    #     'Cache-Control': 'no-cache',
    #     'Upgrade-Insecure-Requests': '1',
    #     'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/80.0.3987.162 Safari/537.36',
    #     'Sec-Fetch-Dest': 'document',
    #     'Accept': 'text/html,application/xhtml+xml,application/xml;q=0.9,image/webp,image/apng,*/*;q=0.8,application/signed-exchange;v=b3;q=0.9',
    #     'Sec-Fetch-Site': 'cross-site',
    #     'Sec-Fetch-Mode': 'navigate',
    #     'Sec-Fetch-User': '?1',
    #     'Accept-Language': 'zh-CN,zh-TW;q=0.9,zh;q=0.8,en-US;q=0.7,en;q=0.6'
    # }
    #
    # last_head = {
    #     'Connection': 'keep-alive',
    #     'Pragma': 'no-cache',
    #     'Cache-Control': 'no-cache',
    #     'Sec-Fetch-Dest': 'empty',
    #     # 'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/80.0.3987.162 Safari/537.36',
    #     'Content-type': 'application/x-www-form-urlencoded',
    #     'Accept': '*/*',
    #     'Origin': 'https://www.qqxiuzi.cn',
    #     'Sec-Fetch-Site': 'same-origin',
    #     'Sec-Fetch-Mode': 'cors',
    #     'Referer': 'https://www.qqxiuzi.cn/zh/suiji-hanzi/',
    #     'Accept-Language': 'zh-CN,zh-TW;q=0.9,zh;q=0.8,en-US;q=0.7,en;q=0.6',
    #     # 'Cookie': 'PHPSESSID=3lf1onhvm9btb4o1j3v36rpb06; Hm_lvt_899df2cdf7f5a83a719fb1bb96982b18=1586088940,1586098893; Hm_lpvt_899df2cdf7f5a83a719fb1bb96982b18=1586099220; __gads=ID=dc5362b91b08801b:T=1586099219:S=ALNI_MZVe6pZs1c4h01Nyny6t-wtphUIZQ',
    #     'Content-Type': 'application/x-www-form-urlencoded'
    # }
    # # bllShitapi="https://suulnnka.github.io/BullshitGenerator/index.html?主题={}&随机种子={}".format(
    # #     '灭霸',random_num(214013,999999999)
    # # )
    # first_url = "https://www.qqxiuzi.cn/zh/suiji-hanzi/"
    # first_head['User-Agent']=ua.random
    # res1 = requests.get(first_url, headers=first_head)
    # token=re.search("&token=.+\'",res1.text).group(0)[7:-1]
    #
    #
    # cookie = res1.cookies
    # cookies_dict = requests.utils.dict_from_cookiejar(cookie)
    # c = json2String(cookies_dict)
    # last_head['Cookie'] = c
    #
    # last_url = "https://www.qqxiuzi.cn/zh/suiji-hanzi/show.php"
    # last_head['User-Agent']=ua.random
    # datas={
    #     'type':'ciyu',
    #     'hz1':'null',
    #     'hz2':'null',
    #     'hz3':'null',
    #     'cy2':'null',
    #     'cy3':'null',
    #     'cy4':4,
    #     'cy5':'null',
    #     'text':'',
    #     'num':15,
    #     'token':token
    #
    # }
    # res2=requests.post(last_url,headers=last_head,data=datas)
    # res2.encoding='utf-8'
    # soup2 = BeautifulSoup(res2.text, "html.parser")
    # ciyu_str=''
    # for item in soup2.select('div'):
    #      ciyu_str+=item.text
    # print(ciyu_str)

    # print(random_parameter(69541443))
    # print(parse.quote("3;ggg:e;.5:`2.7:33.:f:f.g`122b01:;:f"))
    # print(dataenc("08ddd9f8-69c1-4900-9e9e-dc211a32989e",123))
    # soup = BeautifulSoup(res.text, 'html.parser')
    # print(soup.find(attrs={'id':'source'}).attrs['value'])
    # for i in range(10):
    #     print(i)
    # print(ord('w'))
    # c, d, e, b = 365 % 10
    # print(c)
    # print(b)

    # cookie = res.cookies
    # cookies_dict = requests.utils.dict_from_cookiejar(cookie)
    # c = json2String(cookies_dict)
    # print(c)
    # soup = BeautifulSoup(res.text, 'html.parser')
    # print(res.text)
    # print(re.search("rndnum=\".+\";", res.text).group(0)[8:-2])
    # print(re.search("jqnonce=\".+\";", res.text).group(0)[9:-2])
    # print(re.search("rndnum=.*'", res))
    # url = "https://www.wjx.cn/joinnew/processjq.ashx?"
    # print(current_time(0))
    # print(current_time(3000))
    # a = 123.456
    # time_str = time.time()
    # b = math.modf(time_str)[0]
    # print(int(b * 10000000))

    # print(time.time())
    # print(int(time.time() * 1000))
    # print(time.strftime("%Y-%m-%d %H:%M:%S", time.localtime(time.time())))
    # print(random_num(150, 350))
    # print()

    # zh_CN 表示中国大陆版
    # fake = Factory().create('zh_CN')
    # # 随机产生省份
    # print(fake.province())
    # # 随机产生城市
    # print(fake.city())

    # # 产生随机手机号
    # print(fake.phone_number())
    # # 产生随机姓名
    # print(fake.name())
    # # 产生随机地址
    # print(fake.address())
    # # 随机产生国家名
    # print(fake.country())
    # # 随机产生国家代码
    # print(fake.country_code())
    # # 随机产生城市名
    # print(fake.city_name())
    #
    # # 产生随机email
    # print(fake.email())
    # # 产生随机IPV4地址
    # print(fake.ipv4())
    # # 产生长度在最大值与最小值之间的随机字符串
    # print(fake.pystr(min_chars=0, max_chars=8))
    # print(ua.random)
