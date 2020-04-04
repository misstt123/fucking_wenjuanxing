from fake_useragent.fake import UserAgent
import requests
import random
from faker import Factory
import time
import math
import re
from bs4 import BeautifulSoup
from urllib.parse import urlencode

headers = {
    # 'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64; rv:74.0) Gecko/20100101 Firefox/74.0',
    'Accept': 'text/plain, */*; q=0.01',
    'Accept-Language': 'zh-CN,zh;q=0.8,zh-TW;q=0.7,zh-HK;q=0.5,en-US;q=0.3,en;q=0.2',
    'Content-Type': 'application/x-www-form-urlencoded; charset=UTF-8',
    'X-Requested-With': 'XMLHttpRequest',
    'Origin': 'https://www.wjx.cn',
    'Connection': 'keep-alive',
    'Referer': 'https://www.wjx.cn/m/69156112.aspx',
    'Cookie': 'acw_tc=2f624a4c15859126853877402e62d4a0ffe71fe04433f4f22a1f6fc25631a9; .ASPXANONYMOUS=ZNpKYjtA1gEkAAAAMjIyMzdhMWEtOWI4ZS00ZjZhLTllM2YtNDk2NTQxM2RiNGY2RrlH4oMvK38t4FPe1gv1zc2TWy81; jac69156112=09093637; SERVERID=6142ed0ee68ecc71fb491c53c82ec4a0|1585914035|1585912685; Hm_lvt_21be24c80829bd7a683b2c536fcf520b=1585912686; Hm_lpvt_21be24c80829bd7a683b2c536fcf520b=1585914036; UM_distinctid=1713fc327b1155-075cd0241399148-4c302f7e-144000-1713fc327b2328; CNZZDATA4478442=cnzz_eid%3D732218403-1585910396-%26ntime%3D1585910396; jpckey=%E5%AD%A6%E5%8E%86; LastActivityJoin=69156112,105332268947; join_69156112=1',
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


def random_parameter():
    str = 'curid=69156112'
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
    source = 'directphone'
    submittype = 1
    ktimes = random_num(200, 575)
    hlv = 1
    rn = '2027509235.{}'.format(int(math.modf(now_time)[0] * 10000000))
    jpm = 17

    return




def jqsignAndjqnonce():
    url = "https://www.wjx.cn/m/69156112.aspx"
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
    print(res.cookies)

    soup = BeautifulSoup(res.text, 'html.parser')
    # print(res.text)
    rndnum = re.search("rndnum=\".+\";", res.text).group(0)[8:-2]
    jqnonce = re.search("jqnonce=\".+\";", res.text).group(0)[9:-2]


def dataenc(ktimes):
    # function
    # dataenc(a)
    # {
    #     var
    # c, d, e, b = ktimes % 10;
    # for (0 == b & & (b = 1),
    #      c =[],
    # d = 0; d < a.length; d++)
    # e = a.charCodeAt(d) ^ b,
    # c.push(String.fromCharCode(e));
    # return c.join("")
    # }

    return





def random_url():
    '''
    随机请求url
    :return:
    '''
    return


ua = UserAgent()

if __name__ == '__main__':
    res = requests.get("https://www.wjx.cn/m/69156112.aspx")
    cookie=res.cookies
    cookies_dict=requests.utils.dict_from_cookiejar(cookie)
    c=json2String(cookies_dict)
    print(c)
    soup = BeautifulSoup(res.text, 'html.parser')
    # print(res.text)
    # print(re.search("rndnum=\".+\";", res.text).group(0)[8:-2])
    # print(re.search("jqnonce=\".+\";", res.text).group(0)[9:-2])
    # print(re.search("rndnum=.*'", res))
    url = "https://www.wjx.cn/joinnew/processjq.ashx?"
    # print(current_time(0))
    # print(current_time(3000))
    a = 123.456

    time_str = time.time()
    b = math.modf(time_str)[0]
    print(int(b * 10000000))
    # print(time.time())
    print(int(time.time() * 1000))
    # print(time.strftime("%Y-%m-%d %H:%M:%S", time.localtime(time.time())))
    # print(random_num(150, 350))
    print()
    # zh_CN 表示中国大陆版
    fake = Factory().create('zh_CN')

    # 随机产生省份
    print(fake.province())
    # 随机产生城市
    print(fake.city())

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
