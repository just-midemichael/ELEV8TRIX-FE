/* eslint-disable @typescript-eslint/no-explicit-any */
import { tokens } from "./tokens";

export const themeSettings = (mode: any) => {
  const colors = tokens(mode);
  return {
    palette: {
      mode: mode,
      ...(mode === "dark"
        ? {
            // Palette value for dark mode
            primary: {
              main: colors.primary[500]
            },
            secondary: {
              main: colors.greenAccent[500]
            },
            nuetral: {
              main: colors.grey[500],
              dark: colors.grey[700],
              light: colors.grey[100]
            },
            background: {
              default: colors.primary[100]
            }
          }
        : {
            //Palette for light mode
            primary: {
              main: colors.primary[400]
            },
            secondary: {
              main: colors.greenAccent[500]
            },
            neutral: {
              dark: colors.grey[700],
              main: colors.grey[500],
              light: colors.grey[100]
            },
            background: {
              default: "#fcfcfc"
            }
          })
    }
  };
};
