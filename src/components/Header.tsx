import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, Globe, ChevronDown } from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
} from "@/components/ui/navigation-menu";

interface NavItem {
  name: string;
  href: string;
  isRoute?: boolean;
  children?: { name: string; href: string }[];
}

const navItems: NavItem[] = [
  { name: "Home", href: "/", isRoute: true },
  { name: "Academy", href: "/academy", isRoute: true },
  { name: "Media Coverage", href: "/media-coverage", isRoute: true },
  { name: "Resources", href: "#resources" },
  { name: "Events", href: "#events" },
  { name: "About", href: "#about" },
  { name: "Contact", href: "#contact" },
];

export function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <motion.header
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? "bg-card/95 backdrop-blur-md shadow-soft"
          : "bg-transparent"
      }`}
    >
      <div className="container mx-auto px-4 lg:px-8">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <Link
            to="/"
            className="flex items-center gap-3"
          >
            <motion.div
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              className="flex items-center gap-3"
            >
              <div className="w-12 h-12 rounded-full bg-gradient-hero flex items-center justify-center shadow-soft">
                <Globe className="w-7 h-7 text-primary-foreground" />
              </div>
              <div className="hidden sm:block">
                <span className="font-display text-lg font-semibold text-foreground">
                  GFSRD
                </span>
                <span className="block text-xs text-muted-foreground">
                  Sustainable Rural Development
                </span>
              </div>
            </motion.div>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden lg:block">
            <NavigationMenu>
              <NavigationMenuList className="gap-1">
                {navItems.map((item) =>
                  item.children ? (
                    <NavigationMenuItem key={item.name}>
                      <NavigationMenuTrigger className="bg-transparent text-sm font-medium text-foreground hover:text-primary">
                        {item.name}
                      </NavigationMenuTrigger>
                      <NavigationMenuContent>
                        <ul className="grid w-48 gap-1 p-2">
                          {item.children.map((child) => (
                            <li key={child.name}>
                              <NavigationMenuLink asChild>
                                <a
                                  href={child.href}
                                  className="block px-4 py-2 text-sm rounded-md hover:bg-secondary transition-colors"
                                >
                                  {child.name}
                                </a>
                              </NavigationMenuLink>
                            </li>
                          ))}
                        </ul>
                      </NavigationMenuContent>
                    </NavigationMenuItem>
                  ) : item.isRoute ? (
                    <NavigationMenuItem key={item.name}>
                      <NavigationMenuLink asChild>
                        <Link
                          to={item.href}
                          className="px-4 py-2 text-sm font-medium text-foreground hover:text-primary transition-colors"
                        >
                          {item.name}
                        </Link>
                      </NavigationMenuLink>
                    </NavigationMenuItem>
                  ) : (
                    <NavigationMenuItem key={item.name}>
                      <NavigationMenuLink asChild>
                        <a
                          href={item.href}
                          className="px-4 py-2 text-sm font-medium text-foreground hover:text-primary transition-colors"
                        >
                          {item.name}
                        </a>
                      </NavigationMenuLink>
                    </NavigationMenuItem>
                  )
                )}
              </NavigationMenuList>
            </NavigationMenu>
          </nav>

          {/* CTA Buttons */}
          <div className="hidden lg:flex items-center gap-3">
            <Button variant="ghost" size="sm" className="text-muted-foreground">
              EN <ChevronDown className="ml-1 w-3 h-3" />
            </Button>
            <Button variant="hero">Join Us</Button>
          </div>

          {/* Mobile Menu Toggle */}
          <button
            className="lg:hidden p-2 text-foreground"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            className="lg:hidden bg-card border-t border-border"
          >
            <nav className="container mx-auto px-4 py-4">
              {navItems.map((item, index) => 
                item.isRoute ? (
                  <Link
                    key={item.name}
                    to={item.href}
                    className="block py-3 text-foreground font-medium border-b border-border/50 last:border-0"
                    onClick={() => setIsMobileMenuOpen(false)}
                  >
                    <motion.span
                      initial={{ opacity: 0, x: -20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: index * 0.05 }}
                    >
                      {item.name}
                    </motion.span>
                  </Link>
                ) : (
                  <motion.a
                    key={item.name}
                    href={item.href}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: index * 0.05 }}
                    className="block py-3 text-foreground font-medium border-b border-border/50 last:border-0"
                    onClick={() => setIsMobileMenuOpen(false)}
                  >
                    {item.name}
                  </motion.a>
                )
              )}
              <Button variant="hero" className="w-full mt-4">
                Join Us
              </Button>
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.header>
  );
}
