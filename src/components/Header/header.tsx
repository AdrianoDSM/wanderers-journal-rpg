import { ScrollText } from "lucide-react";
import Link from "next/link";
import { Button } from "../ui/button";


const Header: React.FC = ( ) => {
    return (
        <header className="border-b border-primary/20 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60 top-0 z-10">
        <div className="container flex h-16 items-center justify-between">
          <div className="flex items-center gap-2">
            <ScrollText className="h-6 w-6 text-primary/60" />
            <span className="text-xl font-bold tracking-wider text-secondary">Wanderers Journal</span>
          </div>
          <nav className="flex items-center gap-4 sm:gap-6">
            <Link
              href="/login"
              className="text-sm font-medium text-muted-foreground transition-colors hover:text-primary/60"
            >
              Login
            </Link>
            <Button asChild variant="default" className="bg-primary/60 hover:bg-primary/90 text-secondary">
              <Link href="/register">Register</Link>
            </Button>
          </nav>
        </div>
      </header>
    )
}

export default Header;