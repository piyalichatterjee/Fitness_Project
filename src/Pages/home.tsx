import { FetchDataProps } from "../Utils/type";
import Exercises from "../Component/Exercises";
import HeroBanner from "../Component/HeroBanner";
import SearchExercises from "../Component/SearchExercises";
import { useState } from "react";
import { bodypartdataList } from "@/Utils/data";
import { useQuery } from "@tanstack/react-query";
import { useSearchParams } from "react-router-dom";

function home() {
  let [exercises, setExercises] = useState<FetchDataProps[]>([]);
  const [searchParams] = useSearchParams()
  const bodyPart = searchParams.get("bodypart") || "all";
  // console.log(bodyPart);

  
  return (
    <div>
      <HeroBanner />
      <SearchExercises
       setExercises={setExercises}
      />
       <Exercises 
       exercises={exercises}
       setExercises={setExercises}
       bodyPart={bodyPart}
      /> 
    </div>
  );
}

export default home;
