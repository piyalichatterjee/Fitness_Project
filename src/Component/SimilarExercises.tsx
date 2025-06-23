import {
  equipmentExerciseDataProps,
  targetExercisesDataProps,
} from "../Utils/type";
import ExerciseCard from "./ExerciseCard";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { BiLoaderAlt } from "react-icons/bi";
import { SimilarExercisesProps } from "@/Utils/type";



function SimilarExercises({
  targetMuscleExercises,
  equipmentExercises,
}: SimilarExercisesProps) {
  // console.log(targetMuscleExercises)
  // console.log(equipmentExercises)
  return (
    <div>
      <div>
        <h1 className="text-3xl font-bold ml-20">
          Similar <span className="text-red-500">Target Muscle</span> exercises
        </h1>
        <div className="w-[90%] mx-auto">
          <Carousel className="w-full">
            <CarouselContent>
              {targetMuscleExercises?.length ? (
                targetMuscleExercises.map((item,index) => {
                  return (
                    <CarouselItem className="md:basis-1/2 lg:basis-1/3 flex items-center justify-center mt-10" key={index}>
                      <div className="border-t-4 border-red-700 mx-auto w-[70%] hover:scale-105 ease-in-out duration-1000 py-10">
                        <ExerciseCard exercise={item} />
                      </div>
                    </CarouselItem>
                  );
                })
              ) : (
                <BiLoaderAlt className="text-5xl ml-40 animate-spin" />
              )}
            </CarouselContent>
            <CarouselPrevious />
            <CarouselNext />
          </Carousel>
        </div>
      </div>
      <div>
        <h1 className="text-3xl font-bold ml-20">
          Simmilar <span className="text-red-500">Equipment</span> exercises
        </h1>
        <div className="w-[90%] mx-auto">
          <Carousel className="w-full">
            <CarouselContent>
              {equipmentExercises?.length ? (
                equipmentExercises.map((item,index) => {
                  return (
                    <CarouselItem className=" md:basis-1/2 lg:basis-1/3 flex items-center justify-center mt-10" key={index}>
                      <div className="border-t-4 border-red-700 mx-auto w-[70%] hover:scale-105 ease-in-out duration-1000 py-10">
                        <ExerciseCard exercise={item} />
                      </div>
                    </CarouselItem>
                  );
                })
              ) : (
                <BiLoaderAlt className="text-5xl ml-40 animate-spin" />
              )}
            </CarouselContent>
            <CarouselPrevious />
            <CarouselNext />
          </Carousel>
        </div>
      </div>
    </div>
  );
}

export default SimilarExercises;
