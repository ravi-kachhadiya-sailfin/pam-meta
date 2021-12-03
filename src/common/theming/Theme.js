import { createMuiTheme } from "@material-ui/core/styles";
import "@fontsource/source-sans-pro";

const FONT_FAMILY = "Source sans pro";
const STANFORD_ACCENT_BLUE = "#009ABB";
const STANFORD_BACKGROUND_BLUE = "#F0F4F5";
const STANFORD_GRAY = "#999999";
const STANFORD_LIGHT_GRAY = "#CCCCCC";
const STANFORD_LINK_BLUE = "#007C92";
const STANFORD_LINE_GRAY = "#DDDDDD";
const STANFORD_MEDIUM_GRAY = "#666666";
const STANFORD_TEXT_GRAY = "#333333";
const WHITE = "#FFFFFF";

export const Theme = createMuiTheme({
  typography: {
    fontFamily: FONT_FAMILY,
    fontSize: 15,
    fontWeight: 500,
  },
  palette: {
    primary: {
      main: STANFORD_ACCENT_BLUE,
      light: STANFORD_BACKGROUND_BLUE,
      dark: STANFORD_LINK_BLUE,
    },
    grey: {
      300: STANFORD_LINE_GRAY,
      400: STANFORD_LIGHT_GRAY,
      500: STANFORD_GRAY,
      700: STANFORD_MEDIUM_GRAY,
    },
    text: {
      primary: STANFORD_TEXT_GRAY,
      secondary: STANFORD_MEDIUM_GRAY,
    },
  },
  overrides: {
    /** Styling for Table component **/
    MuiTableCell: {
      stickyHeader: {
        backgroundColor: STANFORD_MEDIUM_GRAY,
        color: WHITE,
      },
      head: {
        padding: "10px 8px",
      },
      root: {
        padding: "10px 8px",
        fontSize: "15px",
        "& a": {
          color: STANFORD_ACCENT_BLUE,
          "& .MuiSvgIcon-root": {
            color: STANFORD_TEXT_GRAY,
          },
        },
      },
      sizeSmall: {
        padding: "8px",
      },
    },
    MuiTableContainer: {
      root: {
        overflowX: "hidden",
      },
    },
    MuiTableSortLabel: {
      icon: {
        alignSelf: "baseline",
      },
      root: {
        "&$active": {
          color: WHITE,
          opacity: 1,
          "&& $icon": {
            opacity: 1,
            color: WHITE,
          },
        },
        "&:hover": {
          opacity: 1,
          color: WHITE,
          "&& $icon": {
            opacity: 1,
            color: WHITE,
          },
        },
      },
    },
    /** Styling for Checkbox component **/
    MuiCheckbox: {
      colorPrimary: {
        "&$checked": {
          color: STANFORD_TEXT_GRAY,
        },
      },
    },
    /** Styling for Button component **/
    MuiButton: {
      root: {
        fontSize: "15px",
      },
      outlinedPrimary: {
        color: STANFORD_ACCENT_BLUE,
        borderColor: STANFORD_ACCENT_BLUE,
      },
      textPrimary: {
        color: STANFORD_ACCENT_BLUE,
      },
    },
    /** Styling for Typography**/
    MuiTypography: {
      h1: {
        fontWeight: 500,
        fontSize: "25px",
        lineHeight: "37.5px",
      },
      h2: {
        fontSize: "21px",
        fontWeight: 600,
        lineHeight: "31.5px",
      },
      subtitle1: {
        fontSize: "15px",
        fontWeight: 600,
        lineHeight: "22.5px",
      },
      body1: {
        fontSize: "17px",
        fontWeight: 500,
        lineHeight: "25.5px",
      },
      body2: {
        fontSize: "15px",
        fontWeight: 500,
        lineHeight: "22.5px",
      },
      caption: {
        fontSize: "13px",
        fontWeight: 500,
        lineHeight: "19.5px",
      },
    },
    /** Styling for MUI Link**/
    MuiLink: {
      root: {
        color: STANFORD_ACCENT_BLUE,
      },
    },
    /** Styling for MUI Dialog Title**/
    MuiDialogTitle: {
      root: {
        fontSize: "21px",
        fontWeight: 600,
      },
    },
    MuiSvgIcon: {
      root: {
        "&$colorPrimary": {
          color: STANFORD_ACCENT_BLUE,
        },
      },
    },
    /** Styling for MUI Icon Button**/
    MuiIconButton: {
      root: {
        color: STANFORD_TEXT_GRAY,
      },
    },
    /** Styling for MUI Tooltip**/
    MuiTooltip: {
      tooltip: {
        fontSize: "13px",
      },
    },
    /** Styling for MUI Alert**/
    MuiAlert: {
      root: {
        fontSize: "15px",
        fontWeight: 500,
      },
    },
  },
});
