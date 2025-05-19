import { FetchDataProps } from "@/Utils/fetchData";
import ExerciseCard from "./ExerciseCard";

interface ExercisesProps {
  exercises: FetchDataProps[] | undefined;
  setExercises: React.Dispatch<
    React.SetStateAction<FetchDataProps[] | undefined>
  >;
  bodyPart: string;
}

function Exercises({ exercises, setExercises, bodyPart }: ExercisesProps) {
  // console.log(exercises)
  return (
    <div className=" w-[80%] mx-auto">
      <h1 className="text-4xl font-bold mb-6">Shwing Resuls</h1>
      <div className="flex gap-10 flex-wrap">
        {exercises?.map((exercise, index) => {
          // console.log(exercise)
          return (
            <div
              key={index}
              className="border-t-4 border-red-700 md:w-[40%] mx-auto lg:w-[30%]"
            >
              <ExerciseCard exercise={exercise} />
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default Exercises;
