import ThemeToggle from "../common/ThemeToggle";

export default function Header() {
  return (
    <header className="w-full p-4 border-b border-gray-300 dark:border-gray-700 flex justify-between items-center">
      <h1 className="text-xl font-bold">My Portfolio</h1>
      <ThemeToggle />
    </header>
  );
}
