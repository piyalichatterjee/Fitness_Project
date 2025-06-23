import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Dispatch, SetStateAction, useEffect, useState } from "react";
import { exercisesOptions, fetchData } from "../Utils/fetchData";
import { bodypartdataList, exercisesDataList } from "../Utils/data";
import HorizontalScrollbar from "./HorizontalScrollbar";
import { HomeDataProps, targetExercisesDataProps } from "../Utils/type";
import { useQuery, useQueryClient } from "@tanstack/react-query";
import { FetchDataProps } from "@/Utils/type";
import { useSearchParams } from "react-router-dom";
// interface HomeDataProps {
//   bodyPart: string;
//   setBodyPart: Dispatch<SetStateAction<string>>;
//   setExercises: Dispatch<SetStateAction<FetchDataProps[]>>;
// }
function SearchExercises({ setExercises,}:HomeDataProps) {

  let [search, setSearch] = useState<string>("");

  // let queryClient=useQueryClient()
  // let dataValue =queryClient.getQueriesData
  // console.log(dataValue)
  // let [bodyParts, setBodyParts] = useState<string[] | undefined>();

  // useEffect(() => {
  let fetchExercisesData = async () => {
    //   // let bodyPartsData: string[] = await fetchData(
    //   //   "https://exercisedb.p.rapidapi.com/exercises/bodyPartList",
    //   //   exercisesOptions
    //   // );
    //   // let bodyPartsData = bodypartdataList;
    let bodyPartsData: string[] = (await bodypartdataList) as string[];
    //   // console.log(bodyPartsData);
    //   // setBodyParts(["all", ...bodyPartsData]);
    return ["all", ...bodyPartsData];
  };
  // fetchExercisesData();
  // }, []);
  let { data: bodyParts } = useQuery({
    queryKey: ["bodyParts"],
    queryFn: fetchExercisesData,
  });
  let exercisesFn = async () => {
    //  let exercisesData: FetchDataProps[] = await fetchData(
    // "https://exercisedb.p.rapidapi.com/exercises",
    // exercisesOptions
    // )
    // let exercisesData = exercisesDataList;
    let exercisesData = (await exercisesDataList) as FetchDataProps[];
    return exercisesData;
  };
  let { data } = useQuery({
    queryKey: ["exercises"],
    queryFn: exercisesFn,
  });
  // console.log(data);
  let handleClick = async () => {
    if (search) {
      let searchExercises = data?.filter(
        (exercises) =>
          exercises.name.toLowerCase().includes(search) ||
          exercises.target.toLowerCase().includes(search) ||
          exercises.equipment.toLowerCase().includes(search) ||
          exercises.bodyPart.toLowerCase().includes(search)
      )
      console.log(searchExercises);
      setSearch("");
      // return searchExercises;
      setExercises(searchExercises || []);
    }
  };

  return (
    <div className="text-center">
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
          onClick={handleClick}
        >
          Search
        </Button>
      </div>
      <div>
        <HorizontalScrollbar
          bodyParts={bodyParts}
          // bodyPart={bodyPart}
          // setBodyPart={setBodyPart}
        />
      </div>
    </div>
  );
}

export default SearchExercises;
