import React from "react";
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuIndicator,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
  NavigationMenuViewport,
} from "@/components/ui/navigation-menu";
import { Link } from "@radix-ui/react-navigation-menu";
import "../styles/NavBar.css";

const NavBar = () => {
  const handleScroll = (id: string) => {
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <div className="barContainer">
      <div className="sideSpacer">Jayden Webb</div>
      <NavigationMenu>
        <NavigationMenuList className="list">
          <NavigationMenuItem>
            <NavigationMenuLink>
              <Link onClick={() => handleScroll("aboutSection")}>About</Link>
            </NavigationMenuLink>
          </NavigationMenuItem>
          <NavigationMenuItem>
            <NavigationMenuLink>
              <Link onClick={() => handleScroll("classesSection")}>
                Classes
              </Link>
            </NavigationMenuLink>
          </NavigationMenuItem>
          <NavigationMenuItem>
            <NavigationMenuLink>
              <Link onClick={() => handleScroll("skillsSection")}>Skills</Link>
            </NavigationMenuLink>
          </NavigationMenuItem>
        </NavigationMenuList>
      </NavigationMenu>
      <div className="sideSpacer"></div>
    </div>
  );
};

export default NavBar;
