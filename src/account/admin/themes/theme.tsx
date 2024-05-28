import { Theme, createTheme } from "@mui/material/styles";
import { useMemo, useState } from "react";
import { themeSettings } from "./themeSettings";

export const useMode = () => {
  const [mode, setMode] = useState("light");

  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const colorMode = useMemo<Theme | any>(
    () => ({
      toggleColorMode: () => {
        setMode((prev) => (prev === "light" ? "dark" : "light"));
      }
    }),
    []
  );
  const theme = useMemo<Theme>(() => createTheme(themeSettings(mode)), [mode]);

  return [theme, colorMode];
};
