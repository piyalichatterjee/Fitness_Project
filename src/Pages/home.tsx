import Exercises from "../Component/Exercises"
import HeroBanner from "../Component/HeroBanner"
import SearchExercises from "../Component/SearchExercises"


function home() {
  return (
    <div>
      <HeroBanner/>
      <SearchExercises/>
      <Exercises/>
    </div>
  )
}

export default home
