import { Button } from "@/components/ui/button";
import { targetExercisesDataProps } from "../Utils/type";
import { FetchDataProps } from "@/Utils/type";
import { ExercisesCardProps } from "@/Utils/type";
import { Link } from "react-router-dom";

// interface ExercisesCardProps {
//   exercise: FetchDataProps;
// }
function ExerciseCard({ exercise }: ExercisesCardProps) {
  // console.log(exercise);
  return (
    <Link to={`exercise/${exercise?.id}`}>
      <img src={exercise.gifUrl} alt="error" className="mt-6" />
      {/* <img
        src="src/assets/images/john-arano-h4i9G-de7Po-unsplash.jpg"
        alt="error"
        className="mt-6"
      /> */}
      <div className="mt-5 flex gap-6">
        <Button className="bg-pink-300 rounded-full cursor-pointer hover:bg-pink-600">
          {exercise?.bodyPart}
        </Button>
        <Button className="bg-orange-300 rounded-full hover:bg-orange-500 cursor-pointer">
          {exercise.target}
        </Button>
      </div>
      <h1 className="text-xl font-medium mt-4">{exercise.name}</h1>
      <h1>{exercise.id}</h1>
    </Link>
  );
}

export default ExerciseCard;
