from fake_useragent.fake import UserAgent
import requests
import random
import sys
import time
import re
from bs4 import BeautifulSoup
import configparser
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
ua = UserAgent(use_cache_server=False)
# count_mutex=0#使用量mutex

file = 'config.ini'
# 创建配置文件对象
config_parse = configparser.ConfigParser()

# 读取文件
config_parse.read(file, encoding='utf-8')
use_count=config_parse.getint("ip","count")  #ip使用量
# 获取特定section
# ipuse = config_parse.getint('ip','count') 	# 返回结果为元组

# config_parse.set('ip',"count",str(12580))
# use_count=config_parse.getint("ip","count")
# with open("config.ini","w+") as f:
#      config_parse.write(f)

# print(ipuse)
# print(use_count)
'''
headers = {
    'Connection': 'keep-alive',
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
    # 'Cookie': 'acw_tc=2f624a6715862234817474764e34fe904cff90c9618e52b954393be92b1e1b; .ASPXANONYMOUS=53FmAw9D1gEkAAAAZjViNTMyZjgtYWQ1YS00YjJiLWJiODQtZjNhYTdlMGIzNmM4sPimJDlFh8s-f5J4XQSsiq83Wms1; UM_distinctid=17152498a1eb-03dcbb5842fbcf-4313f6f-144000-17152498a1f1ce; Hm_lvt_21be24c80829bd7a683b2c536fcf520b=1586184742,1586192780,1586220431,1586271053; crudat=2020-04-04 21:02:52; WjxUser=UserName=lyh_god; _cnzz_CV4478442=%E7%94%A8%E6%88%B7%E7%89%88%E6%9C%AC%7C%E5%85%8D%E8%B4%B9%E7%89%88%7C1586271060684; SojumpSurvey=0102A6A2B4F313DBD708FEA642C67A35DBD70800076C00790068005F0067006F00640000012F00FF28407EB2DC91E35CC31E6D4FE3C9918963C6B8D2; jpckey=%E5%8C%96%E5%A6%86; jac69541443=00021182; CNZZDATA4478442=cnzz_eid%3D293256310-1586220780-%26ntime%3D1586328780; Hm_lpvt_21be24c80829bd7a683b2c536fcf520b=1586332067; SERVERID=3f9180de4977a2b2031e23b89d53baa6|1586332066|1586330771',
    'Content-Type': 'text/plain',
    # 'Cookie': 'acw_tc=2f624a7715862250966568261e7ac176004fc2b35b0e49cfdd5d8e1c619bf4; .ASPXANONYMOUS=Z-HixRJD1gEkAAAAMmJiMGQyYzQtNjkxNS00OTE2LTgxNDgtMDg2MDQ3YTdmZTdij9Q5ZCO0wtuHW_DgxVbWy1xvSog1; LastActivityJoin=69541443,105426626886; SERVERID=2a2dcf6de1f5b497e80dc0f7231b4801|1586348794|1586348794'
}
'''

headers = {
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
    'Referer': f'https://www.wjx.cn/m/69541443.aspx',
    'Sec-Fetch-Dest': 'empty',
    'Sec-Fetch-Mode': 'cors',
    'Sec-Fetch-Site': 'same-origin',
    'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/80.0.3987.149 Safari/537.36 Edg/80.0.361.69',
    'X-Requested-With': 'XMLHttpRequest',
}


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

    # starttime = current_time(random_num(10, 45))
    # print("starttime="+starttime)

    lis = jqsignAndjqnonce(curid)
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
    jqsign = dataenc(jqnonce, ktimes)
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


def jqsignAndjqnonce(curid):
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
    headers['Cookie'] = c
    headers['User-Agent'] = head['User-Agent']
    # soup = BeautifulSoup(res.text, 'html.parser')
    # print(res.text)
    rndnum = re.search("rndnum=\".+\";", res.text).group(0)[8:-2]
    jqnonce = re.search("jqnonce=\".+\";", res.text).group(0)[9:-2]
    # useAliVerify = re.search("var useAliVerify=\d;", res.text).group(0)

    # print("useAliVerify:" + str(useAliVerify[17]))
    #
    # print("rndnum:" + str(rndnum))
    # print("jqnonce:" + str(jqnonce))
    soup = BeautifulSoup(res.text, 'html.parser')
    r_starttime = soup.find(attrs={'id': 'starttime'}).attrs['value']
    # print("starttime:"+str(r_starttime).strip())
    source = soup.find(attrs={'id': 'source'}).attrs['value']
    lis = []
    lis.append(rndnum)
    lis.append(jqnonce)
    lis.append(source)
    lis.append(r_starttime)
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
    for d in range(len(list(jq_lis))):
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
mutex=threading.Lock()
# mutex.acquire()
# mutex.release()
def update_ips():
    global  ips
    global mutex

    # lis = []
    # for i in range(3):
    #     lis.append(i + 1)
    # apiUrl = "https://ip.jiangxianli.com/api/proxy_ips?country=中国&page={}".format(random.randint(1, 7))
    # 获取IP列表
    apiUrl ="http://quansuip.com:7772/ProxyiPAPI.aspx?action=GetIPAPI&qty=15&ordernumber=501ed0ae6657ad744868e7b382fe1aa9"
    res = requests.get(apiUrl, timeout=30)
    # content = json.loads(res.text, encoding='utf-8')['data']['data']
    # 按照\n分割获取到的IP
    res_text=res.text.strip()
    if( "用完" in res_text or "ip" in res_text):
        notice_wechat("ip量用完了","{} 总数为：{}".format(current_time(0),use_count))
        sys.exit(0)
    elif("订单过期" in res_text):
        notice_wechat("订单过期了", "{} 总数为：{}".format(current_time(0),use_count))
        sys.exit(0)
    # mutex.acquire()
    ips.clear()
    items = res_text.split('\n')
    for item in items:
        ips.append(item.strip())
    # mutex.release()



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
            # apiUrl = "https://ip.jiangxianli.com/api/proxy_ips?country=中国&page={}".format(random.randint(1, 7))
            # 获取IP列表
            apiUrl ="http://quansuip.com:7772/ProxyiPAPI.aspx?action=GetIPAPI&qty=10&ordernumber=8e497788b881ad1c19ff7521990b6bd3"
            res = requests.get(apiUrl, timeout=30)
            # content = json.loads(res.text, encoding='utf-8')['data']['data']
            # 按照\n分割获取到的IP

            mutex.acquire()
            ips.clear()
            items = res.text.strip().split('\n')
            for item in items:
                ips.append(item.strip())
            # for item in content:
            #     ips.append("{}:{}".format(item['ip'], item['port']))

            mutex.release()
            print(ips)
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
default_url = "https://www.wjx.cn/m/71068471.aspx"
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



def update_config_file(num):
    # config_parse.set('ip',"count",str(12580))
    # use_count=config_parse.getint("ip","count")
    config_parse.set("ip","count",str(num))
    with open("config.ini", "w+") as f:
        config_parse.write(f)



def post_url(curid):
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
    # global use_count
    # global count_mutex
    global mutex
    while(time.sleep(0.1),True):
        '''
        mutex.acquire(blocking=False)
        if(len(ips)<=0):
            update_ips()
        mutex.release()
        '''

        proxies = {
            "https": "182.247.60.216:52142",
            "http": "182.247.60.216:52142"
        }
        ip=0
        if(len(ips)>0):
            mutex.acquire(blocking=True)
            i = random_num(0, len(ips) - 1)
            ip=ips[i]
            del ips[i]
            mutex.release()
            proxies['https'] = ip
            proxies['http'] = ip
        # break
        while(1):
            url = "https://www.wjx.cn/joinnew/processjq.ashx"
            # url="https://www.wjx.cn/joinnew/processjq.ashx?curid=69541443&starttime=2020%2F4%2F8%2015%3A47%3A45&source=directphone&submittype=1&ktimes=61&hlv=1&rn=2027509209.00021182&jpm=2&lct=10097&t=1586332080065&jqnonce=066217aa-9371-432d-862c-2bbec0bb5c38&jqsign=177306%60%60%2C8260%2C523e%2C973b%2C3ccdb1cc4b29"

            params = random_url(curid)

            # print(url)
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
                    # print(pos_str)

                    ss = '{}${}'.format(i + 1, pos_str) + '}'
                data += ss
            # parameter = parse.quote(parameter.rstrip('}'))
            data = data.rstrip('}')
            # parameter="submitdata=1%241%7D2%243%7D3%243%7D4%242%7D5%241%7D6%243%7D7%242%7D8%242%7D9%242%7D10%242%7D11%242%7D12%244%7D13%24"
            data_s = {
                "submitdata": data
            }
            # print(data_s)
            # print(str(params))
            # print(url)
            '''
            heee = {
                'Connection': 'keep-alive',
                'Pragma': 'no-cache',
                'Cache-Control': 'no-cache',
                'Accept': 'text/plain, */*; q=0.01',
                'Sec-Fetch-Dest': 'empty',
                'X-Requested-With': 'XMLHttpRequest',
                'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/80.0.3987.162 Safari/537.36',
                'Content-Type': 'application/x-www-form-urlencoded; charset=UTF-8',
                'Origin': 'https://www.wjx.cn',
                'Sec-Fetch-Site': 'same-origin',
                'Sec-Fetch-Mode': 'cors',
                'Referer': 'https://www.wjx.cn/m/69541443.aspx',
                'Accept-Language': 'zh-CN,zh-TW;q=0.9,zh;q=0.8,en-US;q=0.7,en;q=0.6',
                'Cookie': 'acw_tc=2f624a3115861933050761611e33b571dd80434ca8f944e4b1f98cfcd4f598; .ASPXANONYMOUS=jT7bwMhC1gEkAAAAZTgzYTViNTMtYTBlZi00YzU5LThkZTYtODI2YTRlOWY3ZTdl_YZjKzSQl1rIe13zZjB3AWvG-tE1; UM_distinctid=171507d124f30d-0402fa4b188329-4313f6f-144000-171507d12502a2; CNZZDATA4478442=cnzz_eid%3D1767111020-1586188379-%26ntime%3D1586188379; Hm_lvt_21be24c80829bd7a683b2c536fcf520b=1586184676,1586184742,1586192780,1586220431; Hm_lpvt_21be24c80829bd7a683b2c536fcf520b=1586220431; join_69541443=1; crudat=2020-04-04 21:02:52; SojumpSurvey=0102A7D8987B8DDAD708FEA778AA02AFDAD70800076C00790068005F0067006F00640000012F00FFF83874F5A780B3F0152028DA0B65F5DB3A58F513; WjxUser=UserName=lyh_god; SERVERID=3f9180de4977a2b2031e23b89d53baa6|1586220561|1586220547; jpckey=%E5%8C%96%E5%A6%86',
                'Content-Type': 'text/plain',
                'Cookie': 'LastActivityJoin=69541443,105388013325; SERVERID=6142ed0ee68ecc71fb491c53c82ec4a0|1586222257|1586220547'
            }
            '''
            # headers['User-Agent'] = ua.random
            # index = random_num(0, len(ips) - 1)
            # https://www.wjx.cn/joinnew/processjq.ashx?curid=69541443&starttime=2020-04-07%2009%3A30%3A36&source=directphone&submittype=1&ktimes=237&hlv=1&rn=2027509232.19314722&jpm=2&t=1586223056033&jqnonce=6dbf66f4-9a9c-449f-b646-f61e36faf41e&jqsign=1cea11a3*>f>d*33>a*e131*a16b41afa36
            # resp = requests.get(targetUrl, proxies=proxies)
            try:
                res = requests.post(
                    url, headers=headers, data=data_s, params=params,
                    proxies=proxies)
                message=res.text
                status_code=message.split('〒')[0]
                # print(status_code)
                if(int(status_code)!=10):
                    break
                print(message)
            except Exception as e:
                traceback.print_exc()

                # notice_wechat("出现bug了","时间:{} ip：{}".format(current_time(0),ip))
                # notice_wechat("出现bug了", "{}:{}".format(current_time(0), str(e)))
                break
            finally:
                time.sleep(random.uniform(0.5, 2))

#更新ip失败数目
def update_fail_count(num):
    config_parse.set("ip","fail",str(num))
    with open("config.ini", "w+") as f:
        config_parse.write(f)

def multi_thread(curid):
    try:
        post_url(curid)
    except Exception as e:
        notice_wechat("出现bug了", "{}:{}".format(current_time(0), str(e)))
        print(e)


class GetIpThread2(threading.Thread):

    def run(self):
        global mutex
        global use_count
        while True:
            if(len(ips)<=0):
                mutex.acquire()
                apiUrl ="http://quansuip.com:7772/ProxyiPAPI.aspx?action=GetIPAPI&qty=15&ordernumber=501ed0ae6657ad744868e7b382fe1aa9"
                res = requests.get(apiUrl, timeout=45)
                res_text = res.text.strip()
                if ("用完" in res_text or "ip" in res_text):
                    notice_wechat("ip量用完了", "{} 总数为：{}".format(current_time(0), use_count))
                    sys.exit(0)
                elif ("订单过期" in res_text):
                    notice_wechat("订单过期了", "{} 总数为：{}".format(current_time(0), use_count))
                    sys.exit(0)
                elif("订单不存在" in res_text):
                    notice_wechat("订单不存在", "{} 总数为：{}".format(current_time(0), use_count))
                    sys.exit(0)
                ips.clear()
                use_count = use_count + 15
                update_config_file(use_count)
                items = res_text.split('\n')
                for item in items:
                    ips.append(item.strip())
                mutex.release()




if __name__ == '__main__':
    # print("{}${}".format(3,genertate_sentence())+'}')

    # h = set()
    # while (len(h) < 10):
    #     h.add(random.randint(10, 100))
    #
    # print(h)

    # for i in range(30):
    #     headers['User-Agent']=ua.random
    #     print(headers)
    # time.sleep(5)

    # GetIpThread(10).start()

    # update_config_file(1323)
    # time.sleep(5)
    # update_config_file(12580)

    # mutex.acquire()

    GetIpThread2().start()
    time.sleep(2)
    thread_lis=[]
    for i in range(2):
        thread_lis.append(Thread(target=multi_thread,args=['71068471']))
    for item in thread_lis:
        item.start()
        time.sleep(0.2)

    print()

    # time.sleep(5)
    # post_url("71068471")
    # 2020/4/9 21:45:48
    # random_url(69541443)
    # print(dataenc("db75d87c-ad72-42db-b00f-271d2a94bd6d", 167))
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
