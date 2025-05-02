import { createTheme } from "@mui/material/styles";

const theme = createTheme({
  cssVariables: true,
  palette: {
    primary: {
      main: "#6B3E3B",
      light: "#A76D6B",
      dark: "#4B2A2A",
    },
    secondary: {
      main: "#D7B377",
      light: "#E9D3A8",
      dark: "#B99051",
    },
    background: {
      default: "#FFF8E7",
      paper: "#FFFFFF",
    },
    text: {
      primary: "#333333",
      secondary: "#655A43",
    },
  },
  typography: {
    fontFamily: 'Lora, "Playfair Display", serif',
    h1: {
      fontFamily: "Playfair Display, serif",
      fontWeight: 700,
    },
    h2: {
      fontFamily: "Playfair Display, serif",
      fontWeight: 700,
    },
    h3: {
      fontFamily: "Playfair Display, serif",
      fontWeight: 600,
    },
    h4: {
      fontFamily: "Playfair Display, serif",
      fontWeight: 600,
    },
    h5: {
      fontFamily: "Lora, serif",
      fontWeight: 600,
    },
    h6: {
      fontFamily: "Lora, serif",
      fontWeight: 500,
    },
    button: {
      fontFamily: "Lora, serif",
      fontWeight: 500,
      textTransform: "none",
    },
  },
  components: {
    MuiButton: {
      styleOverrides: {
        root: {
          borderRadius: 8,
          padding: "10px 20px",
        },
      },
    },
    MuiCard: {
      styleOverrides: {
        root: {
          borderRadius: 12,
          boxShadow: "0 4px 20px rgba(0, 0, 0, 0.08)",
        },
      },
    },
  },
});

export default theme;
