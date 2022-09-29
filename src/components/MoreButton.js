import React from "react";

function MoreButton({handleMoreClick}) {
  function handleClick(){
    handleMoreClick()
  }
  return <button onClick={handleClick}>More sushi!</button>;
}

export default MoreButton;
