import { reversePalette } from "styled-theme/composer";

const theme = {};

theme.palette = {
  primary: ["#7045af"],
  secondary: ["#76dbd1"],
  grayscale: ["#282828", "#ededed", "#ffffff"]
};

theme.reversePalette = reversePalette(theme.palette);

theme.fonts = {
  primary:
    'BlinkMacSystemFont,-apple-system,"Segoe UI",Roboto,Oxygen,"Helvetica Neue",Helvetica,Arial,sans-serif',
  heading: "Raleway, sans-serif"
};

theme.sizes = {
  maxWidth: "900px"
};

export default theme;
