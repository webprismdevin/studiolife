import { mode } from "@chakra-ui/theme-tools";

const themeConfig = {
  useSystemColorMode: false,
  initialColorMode: "light",
  colors: {
    brand: {
      black: "#000000",
      white: "#FFFFFF",
      silver: "#9FA49E",
      magnolia: "#E5E1EA",
      alabaster: "#e3eae1d",
      platinum: "#eae6e1",
      metallic: "#A09EA4"
    },
  },
  fonts: {
    heading: "Raleway, sans-serif",
    body: "Raleway, sans-serif",
  },
  components: {
    Button: {
      variants: {
        solid: (props: any) => ({
          bg: mode("black", "white")(props),
          color: mode("whiteAlpha.900", "whiteAlpha.900")(props),
          _hover: {
            color: mode("black", "whiteAlpha.900")(props),
          },
        })
      },
    },
    Heading: {
      baseStyle: {
        fontWeight: "regular",
      },
      sizes: {
        "4xl": {
          fontSize: ["6xl", null, "120px"],
        },
        "2xl": {
          fontSize: ["4xl", null, "56px"],
        },
      },
    },
  },
};

export default themeConfig;
