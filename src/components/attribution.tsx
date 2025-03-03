export const Attribution = ({ color }: { color: "light" | "dark" }) => {
  const textColor =
    color === "light"
      ? "text-white [&_a]:text-[#e9edc9]"
      : "text-black [&_a]:text-[#3e52a3]";

  return (
    <div className={`fixed w-full bottom-0 left-0 ${textColor}`}>
      <p className="text-xs text-center">
        Challenge by{" "}
        <a href="https://www.frontendmentor.io?ref=challenge" target="_blank">
          Frontend Mentor
        </a>
        . Coded by <a href="https://nirjar.com">Nirjar Lohakare</a>.
      </p>
    </div>
  );
};
