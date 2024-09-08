import { ThemeToggle } from "@/components/theme-toggle";

export default function Header() {
  return (
    <header className="container sticky top-0 mx-auto flex justify-end py-2">
      <ThemeToggle />
    </header>
  );
}
