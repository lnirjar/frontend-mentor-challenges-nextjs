import { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import { FaFacebookF, FaInstagram, FaTwitter } from "react-icons/fa6";

import { Attribution } from "@/components/attribution";

import logo from "./images/logo.svg";
import illustration from "./images/illustration-mockups.svg";

const socials = [
  { name: "facebook", url: "#", icon: FaFacebookF },
  { name: "twitter", url: "#", icon: FaTwitter },
  { name: "instagram", url: "#", icon: FaInstagram },
];

export const metadata: Metadata = {
  title: "Huddle landing page with single introductory section",
};

export default function HuddleLandingPageWithSingleIntroductorySection() {
  return (
    <div className="font-(family-name:--font-open-sans) p-10 text-white bg-violet-600 bg-[url(/huddle-landing-page-with-single-introductory-section/bg-mobile.svg)] md:bg-[url(/huddle-landing-page-with-single-introductory-section/bg-desktop.svg)] bg-no-repeat bg-contain lg:min-h-screen">
      <header>
        <Image
          width={120}
          height={30}
          src={logo}
          alt="logo"
          className="w-[120px] md:w-[200px]"
        />
      </header>

      <main className="mt-16 flex flex-col gap-16 lg:flex-row">
        <div className="flex-1">
          <Image
            width={296}
            height={209}
            src={illustration}
            alt="illustration"
            className="w-full"
          />
        </div>

        <div className="lg:w-sm xl:w-lg">
          <h1 className="font-(family-name:--font-poppins-sans) text-center lg:text-left font-semibold text-2xl md:text-3xl xl:text-4xl lg:pt-11 lg:pr-10">
            Build The Community Your Fans Will Love
          </h1>
          <p className="text-center lg:text-left my-6 md:text-lg">
            Huddle re-imagines the way we build communities. You have a voice,
            but so does your audience. Create connections with your users as you
            engage in genuine discussion.
          </p>
          <Link
            href="#"
            className="block w-52 mx-auto lg:mx-0 py-4 rounded-full text-center bg-white hover:bg-fuchsia-400 text-violet-500 hover:text-white shadow-sm hover:shadow-lg transition"
          >
            Register
          </Link>
        </div>
      </main>

      <footer>
        <div className="flex justify-center gap-2.5 mt-14 lg:mt-auto lg:justify-end">
          {socials.map((social) => {
            const Icon = social.icon;
            return (
              <Link
                key={social.name}
                href="#"
                className="flex w-7 lg:w-10 h-7 lg:h-10 justify-center items-center rounded-full border hover:text-fuchsia-400"
              >
                <Icon />
                <span className="sr-only">{social.name}</span>
              </Link>
            );
          })}
        </div>
        <Attribution color="light" />
      </footer>
    </div>
  );
}
