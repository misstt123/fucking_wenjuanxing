import execjs
import time
import base64
import requests
from PIL import Image

js = execjs.compile(
    '''
        function dataenc(a, ktimes) {
          var c, d, e,
          b = ktimes % 10;
          for (0 == b && (b = 1), c = [], d = 0; d < a.length; d++) e = a.charCodeAt(d) ^ b,
          c.push(String.fromCharCode(e));
          return c.join('')
        }
    '''
)

fillblank_answer = {
     "answer1": ["吃饭", "睡觉", "打豆豆", "其实我就是豆豆", "豆豆霸王"]
}

########### baidu AI OCR ######################
# AK为官网获取的API Key， SK为官网获取的Secret Key
AK = "GxhszBL7gZUCHCATmmqyjw1z"
SK = "ODxgm5LSO4BdiVT0cIYnaD02THOLKm3Y"

class BAIDU_OCR():
    def __init__(self, ak, sk):
        host = f'https://aip.baidubce.com/oauth/2.0/token?grant_type=client_credentials&client_id={AK}&client_secret={SK}'
        response = requests.get(host)
        if response:
            self.AT = response.json().get('access_token')

    def get_validate(self):
        request_url = "https://aip.baidubce.com/rest/2.0/ocr/v1/general_basic"

        self._gif2png()
        with open('spam.png', "rb") as f:
            img = base64.b64encode(f.read())

        params = {
            "image":img,
            "language_type": "ENG",    
        }
        access_token = self.AT
        request_url = request_url + "?access_token=" + access_token
        headers = {'content-type': 'application/x-www-form-urlencoded'}
        response = requests.post(request_url, data=params, headers=headers).json()
        if response:
            try:
                txt = response["words_result"][0]["words"].replace(" ", "")
            except:
                time.sleep(2)
                return ""

        if len(txt) != 4:
            return ""
        else:
            return txt

    def _gif2png(self):
        im = Image.open("spam.gif")
        im.save('spam.png')

ocr = BAIDU_OCR(AK, SK)
if __name__ == "__main__":
    print(ocr.get_validate())