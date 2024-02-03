const router = require("express").Router();
const { readdirSync } = require('fs-extra');
const path = require('path');
try {
    var i, j;
    let srcPath = path.join(__dirname, "/data_uptime/");
    const hosting = readdirSync(srcPath).filter((file) => file.endsWith(".js"));
    for (i of hosting) {
        var { index, name } = require(srcPath + i);
        router.get(name, index);
	    console.log(i)
    }
    const getDirs = readdirSync(srcPath).filter((file) => !file.endsWith(".js") && !file.endsWith(".json"));
    for (var dir of getDirs) {
        fileName = readdirSync(path.join(__dirname, '/data_uptime/' + dir + '/')).filter((file) => file.endsWith(".js"));
        for (j of fileName) {
            var { index, name } = require(path.join(__dirname, '/data_uptime/' + dir + '/') + j);
            router.get(name, index);
		console.log(j)
        }
    }
} catch (e) { console.log(e); }

module.exports = router;