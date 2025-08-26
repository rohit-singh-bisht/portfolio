import ThemeToggle from "../common/ThemeToggle";

export default function Header() {
  return (
    <header className="w-full p-4 flex justify-between items-center">
      <h1 className="text-xl font-bold">ChatGPT</h1>
      <ThemeToggle />
    </header>
  );
}
