import { exerciseDetailDataProps } from "../Utils/type";
import { exerciseDetailProps } from "@/Utils/type";
import { IoWoman } from "react-icons/io5";
import { IoBody } from "react-icons/io5";
import { TbGymnastics } from "react-icons/tb";

// interface exerciseDetailProps {
//   exerciseDetail: exerciseDetailDataProps | undefined;
//   setexerciseDetail: React.Dispatch<
//     React.SetStateAction<exerciseDetailDataProps | undefined>
//   >;
// }
function Detail({ exerciseDetail, setexerciseDetail }: exerciseDetailProps) {
  // console.log(exerciseDetail);
  let { bodyPart, equipment, gifUrl, name, target } = exerciseDetail || {};
  return (
    <div className="flex flex-col xl:flex-row gap-10 justify-around items-center w-[90%] mx-auto">
      <img src={gifUrl} alt="error" />
      <div className="px-20">
        <h1 className="text-6xl font-bold">{name}</h1>
        <p className="flex flex-col my-6">
          Exercises keep you strong . {name}
          <span>is one of the best</span>
          <span>
            exercises to target your {target} . It will help you improve your
            mood and gain energy.
          </span>
        </p>
        <div className="font-medium text-xl">
          <div className="flex items-center gap-4">
            <IoWoman className="text-red-600 text-3xl rounded-full bg-yellow-200 p-4 w-14 h-14 cursor-pointer" />
            <span>Upper Arms</span>
          </div>
          <div className="flex items-center gap-4 my-6">
            <IoBody className="text-red-600 text-3xl rounded-full bg-yellow-200 p-4 w-14 h-14 cursor-pointer" />
            <span>Biceps</span>
          </div>
          <div className="flex items-center gap-4">
            <TbGymnastics className="text-red-600 text-3xl rounded-full bg-yellow-200 p-4 w-14 h-14 cursor-pointer" />
            <span>Body Weight</span>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Detail;
