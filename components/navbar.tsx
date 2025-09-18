import React, { useState } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { Button } from '@/components/ui/button';


const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);

     const navItems = [
    { name: "Home", path: "/" },
    { name: "Features", path: "/features" },
    { name: "History", path: "/history" },
    { name: "About Us", path: "/about" }
  ];


  const pathname = usePathname();

  function isActive(path: string) {
    return pathname === path;
  }

  return (
    <nav className="sticky top-0 z-50 bg-background/95 backdrop-blur-sm border-b">
      <div className="container mx-auto px-6">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-2">
            <div className="w-16 h-16 bg-gradient-sustainability rounded-2xl flex items-center justify-center">
              <span className="text-white font-bold">
                <img src="/icon/Screenshot 2025-09-18 123354.png" alt="OpenMinds Logo" className="w-12 h-12 rounded-lg" />
              </span>
            </div>
            <span className="text-xl font-bold text-gradient-primary">OpenMinds</span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-8">
            {navItems.map((item) => (
              <Link
                key={item.path}
                href={item.path}
                className={`ransition-colors text-[oklch(.45_.02_240)] hover:text-[oklch(.65_.02_240)]
                  `}
              >
                {item.name}
              </Link>
            ))}
          </div>

          {/* Desktop CTA */}
          <div className="hidden md:flex items-center gap-4">
            <Link href="/login">
              <Button variant="outline" className="border-primary/20 text-primary hover:bg-primary/5" style={{ color: 'oklch(.45 .02 240)' }}>
                <img src="https://img.icons8.com/?size=30&id=oO0pZgktLNpK&format=png&color=000000" alt="" /> Login
              </Button>
            </Link>
            
          </div>
        </div>
      </div>
    </nav>
    );
}

export { Navbar };