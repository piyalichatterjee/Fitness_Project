export interface FetchDataProps {
  bodyPart: string;
  equipment: string;
  gifUrl: string;
  id: string;
  name: string;
  target: string;
  secondaryMuscles: string[];
  instructions: string[];
}
[];

export interface exercisesOptionsProps {
  method: string;
  headers: {
    "x-rapidapi-host": string;
    "x-rapidapi-key": string;
  };
}
export let exercisesOptions = {
  method: "GET",
  headers: {
    "x-rapidapi-host": "exercisedb.p.rapidapi.com",
    "x-rapidapi-key": import.meta.env.VITE_RAPID_API_KYE,
  },
};
// console.log(exercisesOptions.headers["x-rapidapi-key"]);
// console.log(import.meta.env.VITE_RAPID_API_KYE);
// console.log(typeof import.meta.env.VITE_RAPID_API_KYE);

// export let fetchData = async(url:string, options:exercisesOptionsProps) => {
//   let response = await fetch(url, options);
//     // console.log(options)
//     // console.log(rsesponse)
//   let data = await response.json();
// // console.log(data)
//   return data;
// };
export async function fetchData<T>(
  url: string,
  options: exercisesOptionsProps
): Promise<T> {
  let response = await fetch(url, options);
  // console.log(options)
  // console.log(rsesponse)
  let data = await response.json();
  // console.log(data)
  return data;
}
// console.log(fetchData("https://exercisedb.p.rapidapi.com/exercises", exercisesOptions))
