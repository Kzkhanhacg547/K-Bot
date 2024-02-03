const axios = require("axios");

function isValidUrl(url) {
  try {
    new URL(url);
    return true;
  } catch (e) {
    return false;
  }
}

module.exports.config = {
  name: 'downl',
  version: "1.0.0",
  hasPermssion: 0,
  credits: "Kz Khánhh",
  description: "Download dữ liệu của 1 vài loại link",
  commandCategory: "Công Cụ",
  usages: "/downl + link",
  usePrefix: false,
  cooldowns: 0,
};

module.exports.run = async function({ api, event, args }) {
  const i = async (url) => {
    try {
      const response = await axios.get(url, { responseType: "stream" });

      // Kiểm tra status code
      if (response.status === 200) {
        return response.data;
      } else {
        throw new Error(`Không thể truy cập dữ liệu từ link. Status code: ${response.status}`);
      }
    } catch (error) {
      throw new Error(`Không thể truy cập dữ liệu từ link. Lỗi: ${error.message}`);
    }
  };

  const links = event.type === 'message_reply' ? event.messageReply.body.split('\n') : args.join(' ').split('\n');

  const validLinks = [];
  const invalidLinks = [];
  const mediaLinks = [];

  links.forEach((link, index) => {
    if (!isValidUrl(link)) {
      invalidLinks.push(index + 1);
    } else {
      validLinks.push(link);
      mediaLinks.push(link);
    }
  });

  if (invalidLinks.length > 0) {
    const errorMessage = `Link thứ ${invalidLinks.join(', ')} không đúng định dạng. Đang loại bỏ...`;
    api.sendMessage({ body: errorMessage, attachment: [] }, event.threadID);
  }

  const getAttachments = async (links) => {
    const results = await Promise.all(links.map(async link => {
      try {
        const data = await i(link);
        return { success: true, link, data };
      } catch (error) {
        return { success: false, link, error };
      }
    }));
    return results;
  };

  const sendAttachments = async (attachments, successMessage, failureMessage) => {
    for (const attachment of attachments) {
      if (attachment.success) {
        api.sendMessage({ body: `${successMessage} Link: ${attachment.link}`, attachment: [attachment.data] }, event.threadID);
      } else {
        api.sendMessage({
          body: `${failureMessage} Link thứ ${invalidLinks.indexOf(attachment.link) + 1}: ${attachment.link}\nError: ${attachment.error.message}`,
          attachment: [],
        }, event.threadID);

        // Thử lại sau một khoảng thời gian
        setTimeout(async () => {
          const retryResult = await getAttachments([attachment.link]);
          sendAttachments(retryResult, successMessage, failureMessage);
        }, 5000); // Thử lại sau 5 giây (có thể điều chỉnh thời gian)
      }
    }
  };

  const mediaResults = await getAttachments(mediaLinks);
  const successfulDownloads = mediaResults.filter(result => result.success).length;

  api.sendMessage({
    body: `Đang tải ${successfulDownloads} link...`,
    attachment: []
  }, event.threadID);

  sendAttachments(mediaResults, 'Đã tải thành công 1 dữ liệu', 'Không thể truy cập dữ liệu từ link');
}
