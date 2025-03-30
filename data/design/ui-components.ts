import { ICollection } from "../../src/types/types";

const uiComponentsData: ICollection = {
  name: "UI Components",
  introduction: "A collection of pre-designed UI components and libraries to speed up development. Find buttons, forms, navigation elements, and more to create polished, user-friendly interfaces.",
  items: [
    {
      name: "Tailwind UI",
      description: "Official Tailwind CSS Components",
      url: "https://tailwindui.com/",
      logo: "design/ui-components/tailwind-ui.png",
      tags: [
        {
          name: "freemium"
        },
        {
          name: "tailwind"
        },
        {
          name: "react"
        }
      ]
    },
    {
      name: "Meraki UI",
      description: "Elegant, modern, and customizable UI components.",
      url: "https://merakiui.com/",
      logo: "design/ui-components/meraki-ui.png",
      tags: [
        {
          name: "free"
        },
        {
          name: "os"
        },
        {
          name: "tailwind"
        }
      ]
    },
    {
      name: "Preline UI",
      description: "Set of prebuilt UI components based on Tailwind CSS",
      url: "https://preline.co",
      logo: "design/ui-components/preline.png",
      tags: [
        {
          name: "free"
        },
        {
          name: "os"
        },
        {
          name: "tailwind"
        },
        {
          name: "react"
        }
      ]
    }
  ]
};

export default uiComponentsData;
