import React from 'react';
import { useState } from 'react';
import { Link } from 'react-router-dom';
import { useLocation } from 'react-router-dom';
import { Button } from '@/components/ui/button';


const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);

     const navItems = [
    { name: "Home", path: "/" },
    { name: "Features", path: "/features" },
    { name: "History", path: "/history" },
    { name: "About Us", path: "/about" }
  ];


    const location = useLocation();

    function isActive(path: string) {
        return location.pathname === path;
    }

  return (
    <nav className="sticky top-0 z-50 bg-background/95 backdrop-blur-sm border-b">
      <div className="container mx-auto px-6">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <Link to="/" className="flex items-center gap-2">
            <div className="w-8 h-8 bg-gradient-sustainability rounded-lg flex items-center justify-center">
              <span className="text-white font-bold">AI</span>
            </div>
            <span className="text-xl font-bold text-gradient-primary">LCA Tool</span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-8">
            {navItems.map((item) => (
              <Link
                key={item.path}
                to={item.path}
                className={`transition-colors ${
                  isActive(item.path)
                    ? "text-primary font-medium"
                    : "text-muted-foreground hover:text-foreground"
                }`}
              >
                {item.name}
              </Link>
            ))}
          </div>

          {/* Desktop CTA */}
          <div className="hidden md:flex items-center gap-4">
            <Link to="/non-expert">
              <Button variant="outline" className="border-primary/20 text-primary hover:bg-primary/5">
                🎯 Quick Start
              </Button>
            </Link>
            <Link to="/expert">
              <Button className="bg-gradient-technology text-white">
                🧑‍💻 Expert Mode
              </Button>
            </Link>
          </div>
        </div>
      </div>
    </nav>
    );
}