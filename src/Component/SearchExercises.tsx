import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { useEffect, useState } from "react";
import {
  exercisesOptions,
  fetchData,
  FetchDataProps,
} from "../Utils/fetchData";
import { bodypartdataList, exercisesDataList } from "../Utils/data";

function SearchExercises() {
  // console.log(exercisesDataList)

  let [search, setSearch] = useState<string>("");
  let [exercises, setExercises] = useState<FetchDataProps[] | undefined>();

  useEffect(() => {
    let fetchExercisesData = async () => {
      // let bodyPartsData: string[] = await fetchData(
      //   "https://exercisedb.p.rapidapi.com/exercises/bodyPartList",
      //   exercisesOptions
      // );
      let bodyPartsData = bodypartdataList;
      console.log(bodyPartsData);
    };
    fetchExercisesData();
  }, []);

  let handelClick = async () => {
    //   // console.log(search);
    if (search) {
      // let exercisesData: FetchDataProps[] = await fetchData(
      //   "https://exercisedb.p.rapidapi.com/exercises",
      //   exercisesOptions
      // );
      // console.log(typeof exercisesData)
      let exercisesData = exercisesDataList;

      let searchExercises = exercisesData.filter(
        (exercises) =>
          exercises.name.toLowerCase().includes(search) ||
          exercises.target.toLowerCase().includes(search) ||
          exercises.equipment.toLowerCase().includes(search) ||
          exercises.bodyPart.toLowerCase().includes(search)
      );
      // console.log(searchExercises)
      setSearch("");
      setExercises(searchExercises);
    }
    // console.log(exercises)
  };

  return (
    <div className="border-2 border-black text-center">
      <h1 className="font-bold text-2xl lg:text-4xl">
        Awesome Exerises you <br />
        should Know
      </h1>
      <div className="flex justify-center items-center mt-10">
        <Input
          type="text"
          placeholder="Search Exercises"
          className="w-[300px] lg:w-[700px] py-5 rounded-r-none"
          value={search}
          onChange={(e) => setSearch(e.target.value.toLocaleLowerCase())}
        />
        <Button
          variant={"destructive"}
          className="px-5 lg:px-10 py-5 cursor-pointer rounded-l-none"
          onClick={handelClick}
        >
          Search
        </Button>
      </div>
    </div>
  );
}

export default SearchExercises;
