import {
  NavigationMenu,
  NavigationMenuItem,
  NavigationMenuList,
} from "@/components/ui/navigation-menu";
import { TbGymnastics } from "react-icons/tb";

import { Link, useLocation } from "react-router-dom";

function Navbar() {
  const location = useLocation();
  return (
    <div>
      <NavigationMenu className="text-black flex gap-24 lg:ml-20 p-2 font-bold text-xl ml-10">
        <Link to="/">
          <TbGymnastics className="text-black text-5xl" />
        </Link>
        <NavigationMenuList>
          <NavigationMenuItem className="mx-8">
            <Link
              to="/"
              className={`${
                location.pathname == "/" && "border-b-4 border-red-600"
              } `}
            >
              Home
            </Link>
          </NavigationMenuItem>
          <NavigationMenuItem>
            <Link
              to="/exercise/:id"
              className={`${
                location.pathname == "/exercise/:id" &&
                "border-b-4 border-red-600"
              }`}
            >
              Exercise
            </Link>
          </NavigationMenuItem>
        </NavigationMenuList>
      </NavigationMenu>
    </div>
  );
}
export default Navbar;
