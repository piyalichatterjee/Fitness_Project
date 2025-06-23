import { Dispatch, SetStateAction } from "react";

export interface FetchDataProps {
  bodyPart: string;
  equipment: string;
  gifUrl: string;
  id: string;
  name: string;
  target: string;
}
[];
export interface exercisesOptionsProps {
  method: string;
  headers: {
    "x-rapidapi-host": string;
    "x-rapidapi-key": string;
  };
}
export interface ExercisesProps {
  exercises: FetchDataProps[];
  setExercises: React.Dispatch<React.SetStateAction<FetchDataProps[]>>;
  bodyPart: string;
}
export interface bodyPartProps {
  bodyPart: string;
  equipment: string;
  gifUrl: string;
  id: string;
  name: string;
  target: string;
}
[];
export interface ExercisesCardProps {
  exercise: FetchDataProps;
}
export interface exerciseDetailDataProps {
  bodyPart: string;
  equipment: string;
  gifUrl: string;
  id: string;
  name: string;
  target: string;
}

export interface exerciseVideosDataProps {
  contents: {
    video: {
      channelId: string;
      channelName: string;
      thumbnails: {
        url: string;
      }[];
      title: string;
    };
  }[];
}
export interface targetExercisesDataProps {
  bodyPart: string;
  equipment: string;
  gifUrl: string;
  id: string;
  name: string;
  target: string;
}
[];
export interface equipmentExerciseDataProps {
  bodyPart: string;
  equipment: string;
  gifUrl: string;
  id: string;
  name: string;
  target: string;
}
[];
export interface ExerciseVideosProps {
  exerciseVideos: exerciseVideosDataProps | undefined;
  name: string | undefined;
}
export interface SimilarExercisesProps {
  targetMuscleExercises: targetExercisesDataProps[] | undefined;
  equipmentExercises: equipmentExerciseDataProps[] | undefined;
}
 export interface exerciseDetailProps {
  exerciseDetail: exerciseDetailDataProps | undefined;
  setexerciseDetail: React.Dispatch<
    React.SetStateAction<exerciseDetailDataProps | undefined>
  >;
}
 export interface HomeDataProps {
  setExercises: Dispatch<SetStateAction<FetchDataProps[]>>;
}
export interface bodyPartsProps {
  bodyParts: string[] | undefined;
  // bodyPart: string;
  // setBodyPart: React.Dispatch<React.SetStateAction<string>>;
}