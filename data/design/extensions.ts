import { ICollection } from "../../src/types/types";

const browserExtensionsData: ICollection = {
  name: "Browser Extensions",
  items: [
    {
      name: "Wappalyzer",
      description: "Identify technologies on websites",
      url: "https://www.wappalyzer.com/",
      logo: "design/extensions/wappalyzer.svg",
      screenshot: "design/extensions/screen_wappalyzer.png",
      tags: [
        { name: "freemium" }
      ]
    },
    {
      name: "Chroma",
      description: "Browser Extension for picking colors and building color palettes",
      url: "https://chroma.dev",
      logo: "design/extensions/chroma.png",
      screenshot: "design/extensions/screen_chroma.png",
      tags: [
        { name: "free" }
      ]
    }
  ]
};

export default browserExtensionsData;
