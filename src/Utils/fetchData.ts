import { exercisesOptionsProps } from "./type";

export let exercisesOptions = {
  method: "GET",
  headers: {
    "x-rapidapi-host": "exercisedb.p.rapidapi.com",
    "x-rapidapi-key": import.meta.env.VITE_RAPID_API_KEY,
  },
};
export let youtubeOptions = {
  method: "GET",
  headers: {
    "x-rapidapi-host": "youtube-search-and-download.p.rapidapi.com",
    "x-rapidapi-key": import.meta.env.VITE_RAPID_API_KEY,
  },
};

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
