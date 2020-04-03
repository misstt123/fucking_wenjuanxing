from fake_useragent.fake import UserAgent
import requests
from faker import Factory
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
ua = UserAgent()

if __name__ == '__main__':
    url = "https://www.wjx.cn/m/69156112.aspx"
    print()
    # print(ua.random)
