import React, {useEffect, useState} from  "react";
import SushiContainer from "./SushiContainer";
import Table from "./Table";

const API = "http://localhost:3001/sushis";

function App() {
  const [sushiList, setSushiList] = useState([])
  const [money, setMoney] = useState(50)
  

  useEffect(()=>{
    fetch(API)
    .then(res => res.json())
    .then(data => setSushiList(data))
  }, [])

  function handleSushiEaten(sushiObj){
    if(sushiObj.price <= money){
      const updatedEatenArr = sushiList.filter((sushi)=>{
        if (sushi.id === sushiObj.id){
          return false
        } else {
          return sushi
        }
      })
      setSushiList(updatedEatenArr)
      setMoney(money - sushiObj.price)
    } else {
      alert("ADD MORE MONEY!!")
    }
  }
  
  return (
    <div className="app">
      <SushiContainer sushiList={sushiList} handleSushiEaten={handleSushiEaten} />
      <Table money={money} />
    </div>
  );
}

export default App;
