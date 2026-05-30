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
        class="h-12 border-black border-2 p-2.5 bg-[#A6FAFF] hover:bg-[#79F7FF] hover:shadow-[1px_1px_0px_rgba(0,0,0,1)] active:bg-[#00E1EF] rounded-md"
        href={url}
      >
        {text}
      </a>
    );
  }
  return (
    <button class="h-12 border-black border-2 p-2.5 bg-[#A6FAFF] hover:bg-[#79F7FF] hover:shadow-[1px_1px_0px_rgba(0,0,0,1)] active:bg-[#00E1EF] rounded-md">
      {text}
    </button>
  );
}

type Props = {
  text: string;
  url?: string;
  onClick?: JSX.EventHandlerUnion<
    HTMLButtonElement | HTMLAnchorElement,
    MouseEvent
  >;
  color?: string;
};

function Button2({ text, onClick, url, color }: Props) {
  const classStr = `flex cursor-pointer items-center rounded-md border-2 border-black ${
    color ?? "bg-[#C4A1FF]"
  } py-1 px-2 font-bold shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] transition-all hover:translate-x-[3px] hover:translate-y-[3px] hover:shadow-none`;

  return url ? (
    <a
      role="button"
      aria-label="Click to perform an action"
      onClick={onClick}
      href={url}
      class={classStr}
    >
      {text}
    </a>
  ) : (
    <button
      role="button"
      aria-label="Click to perform an action"
      onClick={onClick}
      class={classStr}
    >
      {text}
    </button>
  );
}

export { BoxUnderTitle, Button2 as Button };
