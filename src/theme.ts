import { createTheme } from '@mui/material/styles';

const baseColors = {
  background: 'hsl(60, 97%, 95%)',   // Very light yellow
  text: 'hsl(60, 30%, 15%)',         // Dark olive-brown
  card: 'hsl(60, 50%, 90%)',
  accent: 'hsl(360, 80%, 20%)',      // Strong red for buttons
  tertiary: 'hsl(120, 80%, 20%)',    // Green decorative (optional)
};

const secondaryText = modifyHSL(baseColors.text, 20, 35);

const theme = createTheme({
  palette: {
    mode: 'light',
    primary: {
      main: '#FDFD96',               // Brand yellow
    },
    secondary: {
      main: baseColors.tertiary,
    },
    background: {
      default: baseColors.background,
      paper: baseColors.card,
    },
    text: {
      primary: baseColors.text,
      secondary: secondaryText,
    },
  },
  typography: {
    fontFamily: '"Poppins", sans-serif',
    h1: {
      fontSize: '2.25rem', // ~36px
    },
    h2: {
      fontSize: '1.5rem',   // ~24px
    },
    body1: {
      fontSize: '1rem',     // 16px
    },
    caption: {
      fontSize: '0.875rem', // 14px
    },
  },
});

export default theme;

function modifyHSL(hsl: string, newSaturation?: number, newLightness?: number): string {
    const hslRegex = /hsl\(\s*(\d+),\s*(\d+)%?,\s*(\d+)%?\s*\)/;
    const match = hsl.match(hslRegex);
  
    if (!match) return hsl;
  
    const [_, hue, sat, light] = match;
    const h = parseInt(hue);
    const s = newSaturation ?? parseInt(sat);
    const l = newLightness ?? parseInt(light);
  
    return `hsl(${h}, ${s}%, ${l}%)`;
  }