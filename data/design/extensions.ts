import { ICollection } from "../../src/types/types";

const browserExtensionsData: ICollection = {
  name: "Browser Extensions",
  introduction: "Discover browser and design extensions that streamline your workflow. From developer tools to UI enhancements, these handy add-ons help you work faster and more efficiently.",
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
