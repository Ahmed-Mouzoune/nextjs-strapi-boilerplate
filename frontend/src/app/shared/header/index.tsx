import { ThemeToggle } from "@/components/theme-toggle"

export default function Header() {
  return (
    <header className="container flex justify-end py-5 mx-auto">
      <ThemeToggle />
    </header>
  )
}
