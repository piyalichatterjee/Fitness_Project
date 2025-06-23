import Detail from "@/Component/Detail";
import ExerciseVideos from "@/Component/ExerciseVideos";
import SimilarExercises from "@/Component/SimilarExercises";
import {
  equipmentExercisesData,
  exerciseData,
  targetExercisesData,
  youtubeVideoData,
} from "@/Utils/data";
import { exercisesOptions, fetchData, youtubeOptions } from "@/Utils/fetchData";
import {
  equipmentExerciseDataProps,
  exerciseDetailDataProps,
  exerciseVideosDataProps,
  targetExercisesDataProps,
} from "@/Utils/type";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { FetchDataProps } from "../Utils/type";
// export interface exerciseDetailDataProps {
//   bodyPart: string;
//   equipment: string;
//   gifUrl: string;
//   id: string;
//   name: string;
//   target: string;
// }

// export interface exerciseVideosDataProps {
//   contents: {
//     video: {
//       channelId: string;
//       channelName: string;
//       thumbnails: {
//         url: string;
//       }[];
//       title: string;
//     };
//   }[];
// }
// export interface targetExercisesDataProps {
//   bodyPart: string;
//   equipment: string;
//   gifUrl: string;
//   id: string;
//   name: string;
//   target: string;
// }
// [];
// export interface equipmentExerciseDataProps {
//   bodyPart: string;
//   equipment: string;
//   gifUrl: string;
//   id: string;
//   name: string;
//   target: string;
// }
// [];
function ExerciseDetail() {
  let [exerciseDetail, setexerciseDetail] = useState<exerciseDetailDataProps>();
  let [exerciseVideos, setexerciseVideos] = useState<
    exerciseVideosDataProps | undefined
  >();
  let [targetMuscleExercises, setTargetMuscleExercises] =
    useState<targetExercisesDataProps[]>();
  let [equipmentExercises, setEquipmentExercises] =
    useState<equipmentExerciseDataProps[]>();
  let { id } = useParams();
  // console.log(exerciseVideos);

  useEffect(() => {
    let fetchExercisesData = async () => {
      let exerciseDbUrl = "https://exercisedb.p.rapidapi.com";
      // let youtubeSearcUrl =
      //   "https://youtube-search-and-download.p.rapidapi.com";
      // let exercisesDetailData: exerciseDetailDataProps = await fetchData(
      //   `${exerciseDbUrl}/exercises/exercise/${id}`,
      //   exercisesOptions
      // );
      let exercisesDetailData = exerciseData;
      setexerciseDetail(exercisesDetailData);
      // let exerciseVideosData:=await fetchData(`${youtubeSearcUrl}/search?query=${exercisesDetailData.name}`,youtubeOptions)
      let exerciseVideosData = youtubeVideoData;
      setexerciseVideos(exerciseVideosData);
      // let targetMuscleExerciseData:targetExercisesDataProps = await fetchData(
      //   `${exerciseDbUrl}/exercises/target/${exercisesDetailData.target}`,
      //   exercisesOptions
      // );
      let targetMuscleExerciseData = targetExercisesData;
      setTargetMuscleExercises(targetMuscleExerciseData);
      // let equipmentExerciseData:equipmentExerciseDataProps = await fetchData(
      //   `${exerciseDbUrl}/exercises/equipment/${exercisesDetailData.equipment}`,
      //   exercisesOptions
      // );
      let equipmentExerciseData = equipmentExercisesData;
      setEquipmentExercises(equipmentExerciseData);
    };
    fetchExercisesData();
  }, [id]);
  // console.log(exerciseData);
  return (
    <div>
      <Detail
        exerciseDetail={exerciseDetail}
        setexerciseDetail={setexerciseDetail}
      />
      <ExerciseVideos
        exerciseVideos={exerciseVideos}
        name={exerciseDetail?.name}
      />
      <SimilarExercises
        targetMuscleExercises={targetMuscleExercises}
        equipmentExercises={equipmentExercises}
      />
    </div>
  );
}

export default ExerciseDetail;
