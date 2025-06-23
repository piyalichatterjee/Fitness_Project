import { exercisesOptions, fetchData } from "@/Utils/fetchData";
import ExerciseCard from "./ExerciseCard";
import { bodyPartsProps, FetchDataProps } from "../Utils/type";
import {
  Pagination,
  PaginationContent,
  PaginationEllipsis,
  PaginationItem,
  PaginationLink,
  PaginationNext,
  PaginationPrevious,
} from "@/components/ui/pagination";
import { useEffect, useState } from "react";
import { Link, useSearchParams } from "react-router-dom";
import { bodyPartBackData, bodyPartNeckData, exerciseData } from "@/Utils/data";
import { bodyPartProps, ExercisesProps } from "@/Utils/type";
import { useQuery } from "@tanstack/react-query";

function Exercises({ exercises, setExercises, bodyPart }: ExercisesProps) {
  // console.log(exercises)
  const [, setSearchParams] = useSearchParams();
  // useEffect(() => {
  let fetchExercisesData = async () => {
    // let exercisesData: bodyPartProps[] = [];
    console.log(bodyPart)
    if (bodyPart === "all") {
      // return await fetchData(
      //   "https://exercisedb.p.rapidapi.com/exercises",
      //   exercisesOptions
      // );
      return bodyPartBackData as Promise<bodyPartProps[]>;
      console.log("hi");
    } else {
      // return await fetchData(
      //   `https://exercisedb.p.rapidapi.com/exercises/bodyPart/${bodyPart}`,
      //   exercisesOptions
      // );
      return bodyPartNeckData as Promise<bodyPartProps[]>;
      console.log("hello");
    }
    // setExercises(exercisesData);
    // console.log(exercisesData);
  };
  // fetchExercisesData();
  // // }, [bodyPart]);
  let { data } = useQuery({
    queryKey: [`exercisesBox-${bodyPart}`],
    queryFn: fetchExercisesData,
  });

  console.log(data);
  // console.log(data?.length);
  //  console.log(exerciseData)
  let rowPerPage = 10;
  // let [startIndex, setStartIndex] = useState<number>(0);
  // let [endIndex, setEndIndex] = useState<number>(rowPerPage);
  const [currentPage, setCurrentPage] = useState(1);
  const rowsPerPage = 10;

  const startIdx = (currentPage - 1) * rowsPerPage;
  const endIdx = startIdx + rowsPerPage;
  const paginatedData = exercises.slice(startIdx, endIdx);
  return (
    <div className=" w-[80%] mx-auto">
      <h1 className="text-4xl font-bold mb-6">Showing Results</h1>
      <div className="flex gap-16 flex-wrap border-2 border-black">
        {data?.map((exercise, index) => {
          // console.log(exercise)
          return (
            <div
              key={index}
              className="border-t-4 border-red-700 md:w-[40%] mx-auto lg:w-[30%] hover:scale-105 ease-in-out duration-1000"
            >
              <ExerciseCard exercise={exercise} />
            </div>
          );
        })}
      </div>
      <div className="border-2 border-black">
        {data?.length && data.length > 9 && (
          <Pagination>
            <PaginationContent>
              <PaginationItem>
                <PaginationPrevious
                  to={`/?page=${currentPage}`}
                  onClick={() => setCurrentPage((p) => Math.min(p - 1))}
                />
              </PaginationItem>
              <PaginationItem>
                <PaginationLink
                  to="/"
                  onClick={() =>
                    setSearchParams((prev) => {
                      const params = new URLSearchParams(prev);
                      params.set("page", "1"); // Add or update the key
                      return params;
                    })
                  }
                >
                  1
                </PaginationLink>
              </PaginationItem>
              <PaginationItem>
                <PaginationLink
                  to="/"
                  onClick={() =>
                    setSearchParams((prev) => {
                      const params = new URLSearchParams(prev);
                      params.set("page", "2"); // Add or update the key
                      return params;
                    })
                  }
                >
                  2
                </PaginationLink>
              </PaginationItem>
              <PaginationItem>
                <PaginationLink
                  to="/"
                  onClick={() =>
                    setSearchParams((prev) => {
                      const params = new URLSearchParams(prev);
                      params.set("page", "3"); // Add or update the key
                      return params;
                    })
                  }
                >
                  3
                </PaginationLink>
              </PaginationItem>
              <PaginationItem>
                <PaginationEllipsis />
              </PaginationItem>
              <PaginationItem>
                <PaginationNext
                  to={`/?page=${currentPage}`}
                  onClick={() => setCurrentPage((p) => Math.min(p + 1))}
                />
              </PaginationItem>
            </PaginationContent>
          </Pagination>
        )}
      </div>
    </div>
  );
}

export default Exercises;
