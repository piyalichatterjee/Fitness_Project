import { FetchDataProps } from "@/Utils/fetchData";
import Exercises from "../Component/Exercises"
import HeroBanner from "../Component/HeroBanner"
import SearchExercises from "../Component/SearchExercises"
import { useState } from "react";


function home() {
  let [exercises, setExercises] = useState<FetchDataProps[] | undefined>([]);
  let [bodyPart,setBodyPart]=useState<string>("all")
  return (
    <div>
      <HeroBanner/>
      <SearchExercises setExercises={setExercises}
      bodyPart={bodyPart}
      setBodyPart={setBodyPart}
      
      />
      <Exercises 
      exercises={exercises}
      setExercises={setExercises}
      bodyPart={bodyPart}
      />
    </div>
  )
}

export default home
