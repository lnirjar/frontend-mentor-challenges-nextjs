"use client";

import { usePathname } from "next/navigation";

const darkBgPages = ["/huddle-landing-page-with-single-introductory-section"];

export const Attribution = () => {
  const pathname = usePathname();

  const textColor = darkBgPages.includes(pathname)
    ? "text-white [&_a]:text-[#e9edc9]"
    : "text-black [&_a]:text-[#3e52a3]";

  return (
    <footer className={`fixed w-full bottom-0 ${textColor}`}>
      <p className="text-xs text-center">
        Challenge by{" "}
        <a href="https://www.frontendmentor.io?ref=challenge" target="_blank">
          Frontend Mentor
        </a>
        . Coded by <a href="https://nirjar.com">Nirjar Lohakare</a>.
      </p>
    </footer>
  );
};
