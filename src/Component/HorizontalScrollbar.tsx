import * as React from "react";

import { Card, CardContent } from "../components/ui/card";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { RiBodyScanFill } from "react-icons/ri";
import { bodyPartsProps } from "@/Utils/type";
import { useSearchParams } from "react-router-dom";

// interface bodyPartProps {
//   bodyParts: string[] | undefined;
//   bodyPart: string;
//   setBodyPart: React.Dispatch<React.SetStateAction<string>>;
// }

function HorizontalScrollbar({
  bodyParts,
}:
bodyPartsProps) {
  const [searchParams, setSearchParams] = useSearchParams();
  const bodyPart = searchParams.get("bodypart") || "all";
  // console.log(bodypart);
  return (
    <div className="w-[80%] mx-auto mt-20">
      <Carousel>
        <CarouselContent>
          {bodyParts?.map((item, i) => {
            // console.log(item)
            return (
              <CarouselItem
                className="md:basis-1/2 lg:basis-1/4 mx-10 hover:scale-95 duration-1000 ease-in-out cursor-pointer"
                key={i}
              >
                <div className="p-1">
                  <Card className="border-none shadow-none ">
                    <CardContent
                      className={`flex aspect-square items-center justify-center ${
                        bodyPart === item ? "border-t-4 border-red-600" : ""
                      }`}
                      // onClick={() => setBodyPart(item)}
                      onClick={() => setSearchParams({ bodypart: item })}
                    >
                      <div className="font-semibold flex flex-col items-center gap-6">
                        <RiBodyScanFill className="text-red-600 text-5xl" />
                        <h1 className="text-xl">{item}</h1>
                      </div>
                    </CardContent>
                  </Card>
                </div>
              </CarouselItem>
            );
          })}
        </CarouselContent>
        <CarouselNext />
        <CarouselPrevious />
      </Carousel>
    </div>
  );
}

export default HorizontalScrollbar;
