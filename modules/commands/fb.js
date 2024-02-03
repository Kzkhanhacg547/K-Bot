var axios = require('axios');

function readURL(url, isAudio) {
  var cb;
  var returnPromise = new Promise(function (resolve, reject) {
    cb = function (err, res) {
      if (err) reject(err);
      resolve(res);
    }
  });

  axios({
    method: 'GET',
    url,
    responseType: 'stream'
  })
    .then(function (res) {
      var ext = res.headers['content-type'].split('/').pop();
      if (!isAudio) res.data.path = Date.now() + '.' + ext;
      else res.data.path = Date.now() + '.mp3';
      return res.data;
    })
    .then(function (res) {
      return cb(null, res);
    })
    .catch(cb);

  return returnPromise;
}

function readID(url) {
  var cheerio = require('cheerio');
  var returnPromise = new Promise(function (resolve, reject) {
    cb = function (err, res) {
      if (err) reject(err);
      resolve(res);
    }
  });

  axios
    .get(url)
    .then(function (res) {
      var $ = cheerio.load(res.data);
      return $('link[rel="alternate"]')
        .attr('href')
        .split('/')
        .filter((v) => isNaN(parseInt(v)) == false)[0];
    })
    .then(function (res) {
      return cb(null, res);
    })
    .catch(function (err) {
      console.log(err);
      return cb(err);
    });

  return returnPromise;
}

class GraphResponse {
  get config() {
    return {
      name: 'fb',
      version: 'Deprecated',
      hasPermission: 0,
      credits: 'Sam',
      description: 'Download All type From Facebook',
      commandCategory: 'Media',
      usages: '{p}{m} {type} {url}',
      cooldowns: 5
    }
  }
  async run({ api, event, args }) {
    var txt = function (res, react) {
      var { messageID, threadID, senderID } = event;
      return api.sendMessage(res, threadID, function (e, i) {
        if (e) txt(`ÄĂ£ xáº£y ra lá»—i\nError:\n${e}`);
        else if (react) global.client.handleReaction.push({
          name: 'fb',
          author: senderID,
          type: 'Media',
          messageID: i.messageID,
          url: react
        });
      }, messageID);
    }
    return api.getAccess(async function (err, token) {
      if (err) {
        switch (err.type) {
          case 'submitCode':
            return txt('Vui lĂ²ng táº¯t 2FA Ä‘á»ƒ cĂ³ thá»ƒ xĂ i');
          default:
            console.log(err);
            return txt('ÄĂ£ xáº£y ra lá»—i, vui lĂ²ng kiá»ƒm tra console');
        }
      }
      if (!args[0]) 
      return txt('{p}{m} help Ä‘á»ƒ xem cĂ¡ch xĂ i');
      try {
        var Graph = {
          get: function httpGet(postID) {
            var cb;
            var returnPromise = new Promise(function (resolve, reject) {
              cb = function (err, resData) {
                if (err) reject(err);
                resolve(resData);
              }
            });

            api
              .httpGet('https://graph.facebook.com/v1.0/' + postID + '?access_token='+ token)
              .then(function (res) {
                return cb(null, JSON.parse(res));
              })
              .catch(function (err) {
                console.log(err);
                return cb(err);
              });

            return returnPromise;
          },
          post: function httpPost(url, form) {
            var cb;
            var returnPromise = new Promise(function (resolve, reject) {
              cb = function (err, resData) {
                if (err) reject(err);
                resolve(resData);
              }
            });

            api
              .httpPost(url, form)
              .then(function (res) {
                return cb(null, JSON.parse(res.split('\n')[0]));
              })
              .catch(function (err) {
                console.log(err);
                return cb(err);
              });

            return returnPromise;
          }
        }
        switch (args[0].toLowerCase()) {
          case 'help':
          case '-h':
            var msg = 
              `DĂ¹ng {p}{m}:\n` +
              `- help/-h xem cách xài\n` +
              `- reel/-r {url} dán link cần tải\n` + 
              `- watch/-w {url} tải link watch\n` +
              `- story/-s {url} tải link story\n` +
              `- post/-p {url} tải link post`;
            return txt(msg);
          case 'story':
          case '-s':
            var isStory = /https:\/\/(www|m)\.facebook\.com\/stories\/(\d+)\/([^.]+)\/\?(bucket_count|view_single)/g.exec(args[1]);
            if (isStory == null) 
              return txt('URL is not accept');
            var st = await Graph
              .post('https://www.facebook.com/api/graphql/', {
                doc_id: '5804889792887763',
                fb_api_req_friendly_name: "StoriesSuspenseContentPaneRootWithEntryPointQuery",
                variables: JSON.stringify({
                  UFI2CommentsProvider_commentsKey: "StoriesSuspenseContentPaneRootWithEntryPointQuery",
                  blur: 10,
                  bucketID: isStory[2],
                  displayCommentsContextEnableComment: true,
                  displayCommentsContextIsAdPreview: false,
                  displayCommentsContextIsAggregatedShare: false,
                  displayCommentsContextIsStorySet: false,
                  displayCommentsFeedbackContext: null,
                  feedbackSource: 65,
                  feedLocation: "COMET_MEDIA_VIEWER",
                  focusCommentID: null,
                  initialBucketID: isStory[2],
                  initialLoad: true,
                  isStoryCommentingEnabled: false,
                  scale: 1,
                  shouldDeferLoad: false,
                  shouldEnableArmadilloStoryReply: false,
                  shouldEnableLiveInStories: true,
                  shouldEnableLiveInStoriesDropdown: false
                }),
              server_timestamps: !0
              });
            var st = st.data.bucket;
            var ser = st.unified_stories.edges.find((v) => v.node.id == isStory[3]).node;
            return txt({
              body: 
                `Owner: ` + st.story_bucket_owner.name +
                `\nReaction To Convert Audio`,
              attachment: await readURL(ser.attachments[0].media.playable_url_quality_hd)
            }, ser.attachments[0].media.playable_url_quality_hd);
          case 'watch':
          case '-w':
            if (args[1].includes('fb.watch')) args[1] = 'https://www.facebook.com/watch?v=' + (await readID(args[1]));
            var URI = args[1].match(/\/(?:videos|reel|watch)(?:\/?)(?:\?v=)?(\d+)/);
            if (URI == null || URI.length < 2) 
              return txt('URL is not accept');
            var wt = await Graph
              .get(URI[1]);
            return txt({
              body: 
                `Owner: ` + wt.from.name +
                `\nDesc: ` + (wt.name + '\n' || '') + wt.description +
                `\nReaction To Convert Audio`,
              attachment: await readURL(wt.source)
            }, wt.source);
          case 'reel':
          case '-r':
            var URI = args[1].match(/\/(?:videos|reel|watch)(?:\/?)(?:\?v=)?(\d+)/);
            if (URI == null || URI.length < 2) 
              return txt('URL is not accept');
            var rl = await Graph
              .get(URI[1]);
            if (rl.error) 
              return txt(rl.error.message);
            return txt({
              body: 
                `Owner: ` + (!!rl.from == true ? rl.from.name : null) +
                `\nDesc: ` + rl.description +
                `\nReaction To Convert Audio`,
              attachment: await readURL(rl.source)
            }, rl.source);
          case 'post':
          case '-p':
            var URI = /\.com\/(story\.php\?story_fbid=(\S+)&id|(\S+)\/posts\/(\S+)\/\?)/g.exec(args[1]).filter(v => v != undefined);
            if (URI == null || URI.length < 2) 
              return txt('URL is not accept');
            // Ráº£nh tĂ­nh tiáº¿p
          default:
            return txt('{p}{m} help để xem cách xài');
        }
      } catch (e) {
        console.log(e);
        return txt('ÄĂ£ xáº£y ra lá»—i\n' + e);
      }
    });
  }
  async handleReaction({ api, event, handleReaction }) {
    var { userID, threadID, messageID } = event;
    var fs = require('fs');
    if (userID != handleReaction.author) return;
    return api.sendMessage({
      attachment: await readURL(handleReaction.url, true)
    }, threadID, messageID);
  }
}

module.exports = new GraphResponse();