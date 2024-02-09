import { JSX, createSignal } from "solid-js";

type CardProps = {
  title: string;
  subtitle?: string;
  children?: JSX.Element;
  externalLinkButton?: JSX.Element;
  timestamp?: Date | string;
  coverImgUrl?: string;
};

function Card({
  children,
  title,
  subtitle,
  externalLinkButton,
  timestamp,
  coverImgUrl,
}: CardProps): JSX.Element {
  const [clamp, setClamp] = createSignal(true);

  return (
    <div class="w-80 h-full border-black border-2 rounded-md hover:shadow-[8px_8px_0px_rgba(0,0,0,1)] bg-white overflow-hidden">
      <article class="w-full h-full">
        {coverImgUrl && (
          <figure class="w-full h-1/2 border-black border-b-2 overflow-hidden">
            <img
              loading="lazy"
              src={coverImgUrl}
              alt="thumbnail"
              class="w-full h-60 object-cover"
            />
          </figure>
        )}
        <div class="px-6 py-5 text-left h-full">
          {timestamp && (
            <p class="text-base mb-4">
              {typeof timestamp === "string"
                ? timestamp
                : timestamp.toLocaleDateString()}
            </p>
          )}
          <h1 class="text-[32px] mb-0">{title}</h1>
          {subtitle && <h2 class="text-[14px] font-semibold">{subtitle}</h2>}
          <p class={clamp() ? "text-xs my-4 line-clamp-4" : "text-xs my-4 "}>
            {children}
          </p>
          <div class="flex flex-row h-full justify-between items-center">
            <strong
              class="hover:underline"
              onClick={(e) => {
                e.preventDefault();
                setClamp(!clamp());
              }}
            >
              Read {clamp() ? "More" : "Less"}
            </strong>
            {externalLinkButton ?? <></>}
          </div>
        </div>
      </article>
    </div>
  );
}

export default Card;
