import "@repo/ui/globals.css";
import { Search } from "lucide-react";
import { Input } from "@repo/ui/components/ui/input";
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
} from "@repo/ui/components/ui/navigation-menu";

const Navbar = () => {
  return (
   
      <nav className="section flex items-center justify-between py-4" style={{ paddingTop: "41.55px" }}>
        {/* Left Navigation */}
        <NavigationMenu>
          <NavigationMenuList className="space-x-2">
            <NavigationMenuItem>
              <NavigationMenuTrigger className="bg-transparent hover:bg-transparent data-[state=open]:bg-transparent text-gray-400 hover:text-white data-[state=open]:text-white font-['Poppins']">
                Features
              </NavigationMenuTrigger>
              <NavigationMenuContent>
                <ul className="grid w-[400px] p-2 bg-[#1a1a1a]/80 backdrop-blur-xl rounded-2xl border border-white/10 shadow-2xl">
                  <li>
                    <NavigationMenuLink asChild>
                      <a
                        href="#"
                        className="block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-white/5 text-white"
                      >
                        <div className="text-sm font-medium leading-none">Feature 1</div>
                        <p className="line-clamp-2 text-sm leading-snug text-gray-400">
                          Description for feature 1
                        </p>
                      </a>
                    </NavigationMenuLink>
                  </li>
                  <li>
                    <NavigationMenuLink asChild>
                      <a
                        href="#"
                        className="block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-white/5 text-white"
                      >
                        <div className="text-sm font-medium leading-none">Feature 2</div>
                        <p className="line-clamp-2 text-sm leading-snug text-gray-400">
                          Description for feature 2
                        </p>
                      </a>
                    </NavigationMenuLink>
                  </li>
                  <li>
                    <NavigationMenuLink asChild>
                      <a
                        href="#"
                        className="block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-white/5 text-white"
                      >
                        <div className="text-sm font-medium leading-none">Feature 3</div>
                        <p className="line-clamp-2 text-sm leading-snug text-gray-400">
                          Description for feature 3
                        </p>
                      </a>
                    </NavigationMenuLink>
                  </li>
                </ul>
              </NavigationMenuContent>
            </NavigationMenuItem>

            <NavigationMenuItem>
              <NavigationMenuTrigger className="bg-transparent hover:bg-transparent data-[state=open]:bg-transparent text-gray-400 hover:text-white data-[state=open]:text-white font-['Poppins']">
                Innovation
              </NavigationMenuTrigger>
              <NavigationMenuContent>
                <ul className="grid w-[400px] p-2  bg-[#1a1a1a]/80 backdrop-blur-xl rounded-2xl border border-white/10 shadow-2xl">
                  <li>
                    <NavigationMenuLink asChild>
                      <a
                        href="#"
                        className="block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-white/5 text-white"
                      >
                        <div className="text-sm font-medium leading-none">Innovation 1</div>
                        <p className="line-clamp-2 text-sm leading-snug text-gray-400">
                          Description for innovation 1
                        </p>
                      </a>
                    </NavigationMenuLink>
                  </li>
                  <li>
                    <NavigationMenuLink asChild>
                      <a
                        href="#"
                        className="block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-white/5 text-white"
                      >
                        <div className="text-sm font-medium leading-none">Innovation 2</div>
                        <p className="line-clamp-2 text-sm leading-snug text-gray-400">
                          Description for innovation 2
                        </p>
                      </a>
                    </NavigationMenuLink>
                  </li>
                </ul>
              </NavigationMenuContent>
            </NavigationMenuItem>

            <NavigationMenuItem>
              <NavigationMenuTrigger className="bg-transparent hover:bg-transparent data-[state=open]:bg-transparent text-gray-400 hover:text-white data-[state=open]:text-white font-['Poppins']">
                Impact
              </NavigationMenuTrigger>
              <NavigationMenuContent>
                <ul className="grid w-[400px] p-2  bg-[#1a1a1a]/80 backdrop-blur-xl rounded-2xl border border-white/10 shadow-2xl">
                  <li>
                    <NavigationMenuLink asChild>
                      <a
                        href="#"
                        className="block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-white/5 text-white"
                      >
                        <div className="text-sm font-medium leading-none">Impact 1</div>
                        <p className="line-clamp-2 text-sm leading-snug text-gray-400">
                          Description for impact 1
                        </p>
                      </a>
                    </NavigationMenuLink>
                  </li>
                  <li>
                    <NavigationMenuLink asChild>
                      <a
                        href="#"
                        className="block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-white/5 text-white"
                      >
                        <div className="text-sm font-medium leading-none">Impact 2</div>
                        <p className="line-clamp-2 text-sm leading-snug text-gray-400">
                          Description for impact 2
                        </p>
                      </a>
                    </NavigationMenuLink>
                  </li>
                </ul>
              </NavigationMenuContent>
            </NavigationMenuItem>
          </NavigationMenuList>
        </NavigationMenu>

        {/* Center Logo */}
        <div className="flex items-center">
          <img 
            src="/Logo White PNG.png" 
            alt="TempWallets" 
            className="h-[50px] w-[200px] object-contain"
          />
        </div>

        {/* Right Navigation */}
        <div className="flex items-center gap-6">
          <a href="#" className="text-gray-400 hover:text-white transition-colors font-['Poppins']">
            Blogs
          </a>
          <a href="#" className="text-gray-400 hover:text-white transition-colors font-['Poppins']">
            Contact
          </a>
          <div className="relative">
            <Search className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-gray-400" />
            <Input
              type="search"
              placeholder="I am looking for..."
              className="w-64 rounded-full border-white/10 bg-white/5 pl-10 text-sm text-white placeholder:text-gray-400 focus-visible:ring-white/20"
            />
          </div>
        </div>
      </nav>
  
  );
};

export default Navbar;