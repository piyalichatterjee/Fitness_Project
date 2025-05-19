import { Button } from "@/components/ui/button";

function HeroBanner() {
  return (
    <div className="flex items-center  ml-10 lg:ml-20 h-screen xl:mt-20">
      <div>
        <h2 className="text-red-500 font-bold text-2xl">Fitness Club</h2>
        <h1 className="flex flex-col text-4xl lg:text-6xl font-medium py-8 gap-3">
          <span>Sweat, Smile</span>
          <span>And Repeat</span>
        </h1>
        <p className="font-serif pb-10">
          Check out the most ffective exerises personalized to you
        </p>
        <Button variant={"destructive"} className="cursor-pointer">
          Explore Exercises
        </Button>

        <h1 className="text-[160px] relative left-[30%] opacity-20 text-red-600 hidden xl:block">
          Exercise
        </h1>
      </div>
      <div>
        <img
          src="src/assets/images/john-arano-h4i9G-de7Po-unsplash.jpg"
          alt="error"
          className="w-0 xl:w-[900px] absolute right-0 top-0 object-cover h-[700px] rounded-bl-[50px]"
        />
      </div>
    </div>
  );
}

export default HeroBanner;
