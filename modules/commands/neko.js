 module.exports.config = {
	name: "neko",
	version: "2.0.0",
	hasPermssion: 0,
	credits: "Vtuan",
	description: "Random ảnh",
	commandCategory: "Hình ảnh",
	usages: "",
	cooldowns: 2
};
module.exports.run = async ({ api, event ,Users}) => {
	const axios = require('axios');
	const request = require('request');
	const fs = require("fs");
    var array = [];
    const res1 = await axios.get(`https://webapi.chaocacbannhe.repl.co/neko`);
    const res2 = await axios.get(`https://webapi.chaocacbannhe.repl.co/neko`);
    const res3 = await axios.get(`https://webapi.chaocacbannhe.repl.co/neko`);
    const res4 = await axios.get(`https://webapi.chaocacbannhe.repl.co/neko`);
    const res5 = await axios.get(`https://webapi.chaocacbannhe.repl.co/neko`);
    const res6 = await axios.get(`https://webapi.chaocacbannhe.repl.co/neko`);
    var data1 = res1.data.data;
    var data2 = res2.data.data;
    var data3 = res3.data.data;
    var data4 = res4.data.data;
    var data5 = res5.data.data;
    var data6 = res6.data.data;  
    var downloadfile1 = (await axios.get(data1, {responseType: 'stream'})).data;
    var downloadfile2 = (await axios.get(data2, {responseType: 'stream'})).data;
    var downloadfile3 = (await axios.get(data3, {responseType: 'stream'})).data;
    var downloadfile4 = (await axios.get(data4, {responseType: 'stream'})).data;
    var downloadfile5 = (await axios.get(data5, {responseType: 'stream'})).data;
    var downloadfile6 = (await axios.get(data6, {responseType: 'stream'})).data;   
    array.push(downloadfile1);
    array.push(downloadfile2);    
    array.push(downloadfile3);  
    array.push(downloadfile4);
    array.push(downloadfile5);
    array.push(downloadfile6);
  
					api.sendMessage({
						body: ``,
						attachment: array}, event.threadID, event.messageID);
				
			
}