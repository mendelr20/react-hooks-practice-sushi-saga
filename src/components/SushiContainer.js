import React, {useState} from "react";
import MoreButton from "./MoreButton";
import Sushi from "./Sushi";

function SushiContainer({sushiList, handleSushiEaten}) {
  const [firstIndex, setFirstIndex] = useState(0)
  const [lastIndex, setLastIndex] = useState(4)

  const sushiDisplay = sushiList.map((sushi) => {
    return <Sushi sushi={sushi} handleSushiEaten={handleSushiEaten}/>
  }).slice(firstIndex, lastIndex)

  function handleMoreClick(){
    if(lastIndex < sushiList.length -1){
      setFirstIndex(firstIndex + 4)
      setLastIndex(lastIndex + 4)
    } else {
      setFirstIndex(0)
      setLastIndex(4)
    }
  }
  
  return (
    <div className="belt">
      {sushiDisplay}
      <MoreButton handleMoreClick={handleMoreClick}/>
    </div>
  );
}

export default SushiContainer;
