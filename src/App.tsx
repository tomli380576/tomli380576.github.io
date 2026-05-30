import NavBar from "./Nav";
import Projects from "./Projects";
import { Stack, ThemeProvider, createTheme } from "@suid/material";
import WorkExperiences from "./WorkExp";

const theme = createTheme({
  typography: { fontFamily: "Poppins " },
});

export default function App() {
  return (
    <ThemeProvider theme={theme}>
      <div class="flex items-center flex-col">
        <div class="flex items-center flex-col space-y-5 flex-wrap w-[70%]">
          <NavBar />
          <Projects />
          <WorkExperiences />
        </div>
      </div>
    </ThemeProvider>
  );
}
