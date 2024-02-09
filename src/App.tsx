import Button from "@suid/material/Button";
import Projects from "./Projects";
import { Stack, ThemeProvider, createTheme } from "@suid/material";

const theme = createTheme({
  typography: { fontFamily: "Poppins " },
});

export default function App() {
  return (
    <ThemeProvider theme={theme}>
      <div class="flex flex-col items-center flex-wrap">
        <Projects />
      </div>
    </ThemeProvider>
  );
}
