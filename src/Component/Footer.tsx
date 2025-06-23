import { TbGymnastics } from "react-icons/tb";
import { GoHeartFill } from "react-icons/go";
function Footer() {
  return (
    <div className="bg-pink-200 flex flex-col items-center gap-10 py-5">
      <p className="flex items-center">
        <TbGymnastics className="text-6xl" />
        <span className="text-3xl font-bold text-amber-900">Golds Gym</span>
      </p>
      <p className="flex items-center gap-2 font-medium">
        Made with{" "}
        <span className="text-red-500">
          <GoHeartFill />
        </span>{" "}
        by TypeScript Mastery
      </p>
    </div>
  );
}
export default Footer;
