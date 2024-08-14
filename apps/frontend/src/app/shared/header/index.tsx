import { ThemeToggle } from "@/components/theme-toggle";

export default function Header() {
  return (
    <header className="container mx-auto flex justify-end py-5">
      <ThemeToggle />
    </header>
  );
}
