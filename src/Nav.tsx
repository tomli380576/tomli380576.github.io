import Stack from "@suid/material/Stack";

function NavBar() {
  return (
    <header class="sticky top-0 w-[70%]">
      <nav class="flex-no-wrap relative rounded flex w-full items-center justify-between bg-teal-100 py-2 shadow-md shadow-black/5 dark:bg-neutral-600 dark:shadow-black/10 lg:flex-wrap lg:justify-start lg:py-4">
        <div class="flex flex-row items-center  px-5 justify-between w-full">
          <h3 class="text-xl hover:underline underline-offset-2">
            Work Experience
          </h3>
          <h3 class="text-xl hover:underline underline-offset-2">Projects</h3>
          <h3 class="text-xl hover:underline underline-offset-2">Contact Me</h3>
          <Stack direction={"row"} spacing={1}>
            <button class="flex w-10 h-10 cursor-pointer items-center rounded-md border-2 border-black bg-[#w] py-1 px-2 font-bold shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] transition-all hover:translate-x-[3px] hover:translate-y-[3px] hover:shadow-none">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
              >
                <path d="M4.98 3.5c0 1.381-1.11 2.5-2.48 2.5s-2.48-1.119-2.48-2.5c0-1.38 1.11-2.5 2.48-2.5s2.48 1.12 2.48 2.5zm.02 4.5h-5v16h5v-16zm7.982 0h-4.968v16h4.969v-8.399c0-4.67 6.029-5.052 6.029 0v8.399h4.988v-10.131c0-7.88-8.922-7.593-11.018-3.714v-2.155z" />
              </svg>
            </button>
          </Stack>
        </div>
      </nav>
    </header>
  );
}

export default NavBar;
