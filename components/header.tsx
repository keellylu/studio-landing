"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import { Button } from "./button";
import classNames from "classnames";
import posthog from "posthog-js";


export const Header = ({ setOpen }: { setOpen: (open: boolean) => void }) => {
  const [hamburgerMenuIsOpen, setHamburgerMenuIsOpen] = useState(false);

  useEffect(() => {
    const html = document.querySelector("html");
    if (html) html.classList.toggle("overflow-hidden", hamburgerMenuIsOpen);
  }, [hamburgerMenuIsOpen]);

  useEffect(() => {
    const closeHamburgerNavigation = () => setHamburgerMenuIsOpen(false);

    window.addEventListener("orientationchange", closeHamburgerNavigation);
    window.addEventListener("resize", closeHamburgerNavigation);

    return () => {
      window.removeEventListener("orientationchange", closeHamburgerNavigation);
      window.removeEventListener("resize", closeHamburgerNavigation);
    };
  }, [setHamburgerMenuIsOpen]);

  return (
    <div className="flex justify-center"> 

      <header className="fixed top-3 left-30 z-20 w-[380px] border border-transparent-white backdrop-blur-[12px] rounded-full">
        <div className="flex h-navigation-height pl-4 pr-3">
          <Link className="flex items-center text-md" href="/">
            {/* <Logo className="mr-4 h-[1.8rem] w-[1.8rem]" />  */}
            {/* <Image className="mr-2" width={30} src={logo_img} alt="Overeasy"/> */}
            🥚 Overeasy
          </Link>

          <div
            className={classNames(
              "transition-[visibility] md:visible"
            )}
          >
            <nav
              className={classNames(
                "flex items-center top-navigation-height h-[calc(100vh_-_var(--navigation-height))] w-full overflow-auto bg-background transition-opacity duration-500 md:relative md:top-0 md:block md:h-auto md:w-auto md:translate-x-0 md:overflow-hidden md:bg-transparent md:opacity-100 md:transition-none",
                hamburgerMenuIsOpen
                  ? "translate-x-0 opacity-100"
                  : "translate-x-[-100vw] opacity-0"
              )}
            >
              <ul
                className={classNames(
                  "flex h-full flex-col md:flex-row md:items-center [&_li]:ml-6 [&_li]:border-b [&_li]:border-grey-dark md:[&_li]:border-none",
                  "ease-in [&_a:hover]:text-primary-text [&_a]:flex [&_a]:h-navigation-height [&_a]:w-full [&_a]:translate-y-8 [&_a]:items-center [&_a]:text-lg [&_a]:transition-[color,transform] [&_a]:duration-300 md:[&_a]:translate-y-0 md:[&_a]:text-sm [&_a]:md:transition-colors"
                )}
              >
                {/* <li>
                  <Link href="https://github.com/overeasy-sh/overeasy" target="_blank">Github</Link>
                </li> */}
                {/* <li>
                  <Link href="https://colab.research.google.com/drive/1Mkx9S6IG5130wiP9WmwgINiyw0hPsh3c?usp=sharing" target="_blank">Colab</Link>
                </li> */}
                {/* <li>
                  <Link href="https://docs.overeasy.sh" target="_blank">Docs</Link>
                </li> */}
              </ul>
            </nav>
          </div>

          <div className="ml-auto flex h-full items-center">
            <Button variant="secondary" href="https://forms.gle/zfLoNiZnmarLdtRr6" target="_blank"
              onClick={() => {
                setOpen(true)
                posthog.capture("GithubClicked", {'clicked_at': 'header'});
                // @ts-ignore
                gtag('event', 'conversion', {'send_to': 'AW-829256223/zQFqCNyL7JgZEJ_ktYsD'}); 
              }}
            >Get in Touch</Button>
          </div>

        </div>
      </header>
    </div>
  );
};
