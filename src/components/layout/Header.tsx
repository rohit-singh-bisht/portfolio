import ThemeToggle from "../common/ThemeToggle";

export default function Header() {
  return (
    <header className="w-full p-2 touch:p-2.5 flex justify-between items-center">
      <h1 className="text-lg font-normal px-2.5">ChatGPT</h1>
      <ThemeToggle />
    </header>
  );
}
