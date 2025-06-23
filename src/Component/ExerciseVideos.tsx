import { exerciseVideosDataProps } from "../Utils/type";
import { ExerciseVideosProps } from "@/Utils/type";
import { TbLoader2 } from "react-icons/tb";

// interface ExerciseVideosProps {
//   exerciseVideos: exerciseVideosDataProps | undefined;
//   name: string | undefined;
// }

function ExerciseVideos({ exerciseVideos, name }: ExerciseVideosProps) {
  // console.log( exerciseVideos?.contents)
  // console.log(typeof exerciseVideos?.contents)
  // console.log(name)
  if (!exerciseVideos?.contents.length)
    return <TbLoader2 className="animate-spin text-4xl m-10" />;
  return (
    <div className="py-10  w-[90%] mx-auto">
      <h1 className="md:text-5xl text-3xl font-bold pb-10">
        Watch <span className="text-red-600">{name}</span> exercise video
      </h1>
      <div className="flex gap-5 justify-between flex-wrap">
        {exerciseVideos?.contents.slice(0, 3).map((item, index) => {
          // console.log(item.video.thumbnails[0].url)
          return (
            <a
              href={`https://www.youtube.com/watch?v=${item.video.channelId}`}
              key={index}
            >
              <img
                src={item.video.thumbnails[0].url}
                alt={item.video.title}
                className="rounded-tl-3xl w-[500px]"
              />
              <div className="py-5 text-xl font-medium">
                <h1>{item.video.title}</h1>
                <h1>{item.video.channelName}</h1>
              </div>
            </a>
          );
        })}
      </div>
    </div>
  );
}

export default ExerciseVideos;
