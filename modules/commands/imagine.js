const axios = require('axios');
const fs = require('fs-extra');

module.exports.config = {
  name: 'imagine',
  version: '1.0.0',
  hasPermission: 0,
  credits: 'JARiF',
  description: 'gen images from text',
  usePrefix: true,
  commandCategory: 'image',
  cooldowns: 5,
  usages: "Type !imagine your prompts | (model number) | (ratio)\nHere are the Supported models:\n1: IMAGINE_V4_Beta\n2: V4_CREATIVE\n3: IMAGINE_V3\n4: IMAGINE_V1\n5: PORTRAIT\n6: REALISTIC\n7: ANIME\n8: ANIME_V2\n9: COSMIC\n10: COMIC_V2\n11: MARBLE\n12: MINECRAFT\n13: DISNEY\n14: MACRO_PHOTOGRAPHY\n15: GTA\n16: STUDIO_GHIBLI\n17: DYSTOPIAN\n18: STAINED_GLASS\n19: PRODUCT_PHOTOGRAPHY\n20: PSYCHEDELIC\n21: SURREALISM\n22: GRAFFITI\n23: GHOTIC\n24: RAINBOW\n25: AVATAR\n26: PALETTE_KNIFE\n27: CANDYLAND\n28: CLAYMATION\n29: EUPHORIC\n30: ORIGAMI\n31: POP_ART\n32: RENAISSANCE\n33: FANTASY\n34: EXTRA_TERRESTRIAL\n35: WOOLITIZE\n36: NEO_FAUVISM\n37: AMAZONIAN\n38: SHAMROCK_FANTASY\n39: ABSTRACT_VIBRANT\n40: NEON\n41: CUBISM\n42: ROCOCO\n43: LOGO\n44: HAUNTED\n45: KAWAII_CHIBI\n46: FIREBENDER\n47: WATERBENDER\n48: FORESTPUNK\n49: ELVEN\n50: SAMURAI\n51: AQUASTIC\n52: VIBRAN_VIKING\n53: ABSTRACT_CITYSCAPE\n54: FIREBENDER\n55: ILLUSTRATION\n56: PAINTING\n57: ICON\n58: RENDER\n59: COLORING_BOOK\n60: PAPERCUT_STYLE\n61: KNOLLING_CASE\n62: ARCHITECTURE\n63: INTERIOR\n64: CYBERPUNK\n67: LANDSCAPESTICKER\n68: GLASS_ART\n69: RETRO\n70: POSTER_ART\n71: INK\n72: JAPANESE_ART\n74: VAN_GOGH\n75: STEAMPUNK\n76: RETROWAVE\n77: POLY_ART\n78: VIBRANT\n79: MYSTICAL\n80: CINEMATIC_RENDER\n81: FUTURISTIC\n82: POLAROID\n84: PICASO\n85: SKETCH\n86: COMIC_BOOK\n87: DREAM_SHAPER\n88: IMAGINE_V41\n89: REV_ANIMATED\n90: TOON_YOU\n91: UR5\n92: EPIC_REALISM\n93: MEINA_MIX\n94: RENDER3D\n95: DELIBERATE\n96: MAJIK_MIX\n97: DISNEY\n98: ORANGE_MIX\n99: LYRIEL\n100: RPG\n\nSupported Ratio's:\n1. 1:1\n2. 9:16\n3. 16:9\n\nUsage: !imagine boy | 3 | 3"
};

module.exports.run = async function ({ api, event, args }) {
  try {
      const query = args.join(" ");
      if (!query) {
        return api.sendMessage("Please provide a prompt to generate image.", event.threadID, event.messageID);
      }

      let prompt, model, ratio;
      if (query.includes("|")) {
        const [promptText, modelText, ratioText] = query.split("|")
          .map((str) => str.trim());
        prompt = promptText;
        model = modelText;
        ratio = ratioText;
      } else {
        prompt = query;
        model = "90";
        ratio = "1";
      }
      const waitingMessage = await api.sendMessage("Please wait..", event.threadID, event.mesaageID);

    const API = `https://midjourney.emma999999.repl.co/imagine?prompt=${encodeURIComponent(
        prompt
)}&model=${model}&
ratio=${ratio}`;

    const timeout = 20000;
    const imageStreamPromise = axios.get(API, { responseType: 'arraybuffer' });

    try {
      const imageStream = await Promise.race([
        imageStreamPromise,
        new Promise((_, reject) =>
          setTimeout(() => {
            api.unsendMessage(waitingMessage.messageID);
            reject(new Error('API Err.'));
          }, timeout)
        ),
      ]);

      if (imageStream) {
        const path = __dirname + `/cache/midjourney.png`;
        fs.writeFileSync(path, Buffer.from(imageStream.data, 'utf-8'));
  api.sendMessage( {
            attachment: fs.createReadStream(path),
          },
          event.threadID,
          () => {
            fs.unlinkSync(path);
            api.unsendMessage(waitingmessage, event.messageID);
          },
          event.messageID
        );
      } else {

        api.sendMessage("Error...", event.threadID, event.messageID);
      }
    } catch (error) {
    console.error(error);
      api.sendMessage(error.message, event.threadID, event.messageID);
    }
  } catch (error) {
    console.error(error);
    api.sendMesaage(error.message, event.threadID, event.messageID);
   }
};

//visit this API Docs for APIs : https://api-docs.annie-jarif.repl.co/