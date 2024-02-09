import { useTheme } from "@suid/material";
import { JSX } from "solid-js/jsx-runtime";

function BoxUnderTitle() {
  const theme = useTheme();
  return (
    <div
      style={{
        height: "1rem",
        width: "5rem",
        "background-color": theme.palette.text.primary,
      }}
    ></div>
  );
}

type ButtonProps = {
  text: string;
  url?: string;
};

function Button({ text, url }: ButtonProps): JSX.Element {
  if (url) {
    return (
      <a
        class="h-12 border-black border-2 p-2.5 bg-[#A6FAFF] hover:bg-[#79F7FF] hover:shadow-[2px_2px_0px_rgba(0,0,0,1)] active:bg-[#00E1EF] rounded-md"
        href={url}
      >
        {text}
      </a>
    );
  }
  return (
    <button class="h-12 border-black border-2 p-2.5 bg-[#A6FAFF] hover:bg-[#79F7FF] hover:shadow-[2px_2px_0px_rgba(0,0,0,1)] active:bg-[#00E1EF] rounded-md">
      {text}
    </button>
  );
}

export { BoxUnderTitle, Button };
