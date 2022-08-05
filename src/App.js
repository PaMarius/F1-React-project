import logo from './logo.svg';
import './App.css';
import {mockData} from './Constant/drivers.js';
import { DriverCard } from './Components/DriverCard/driverCard';
import { useEffect, useState } from 'react';
import {Filter} from './Components/NavBar/FilterDriver/filter'


function App() {
  const [allDrivers, setAllDrivers] = useState(mockData.sort((a, b) =>
  b.points - a.points));
  
  const increasePoints = (key) => {
    allDrivers.find((driver)=>driver.number === key ).points++
    setAllDrivers([...allDrivers].sort((a, b) =>
    b.points - a.points))
  };
  
  const decreasePoints = (key) => {
    allDrivers.find((driver)=>driver.number === key ).points--
    setAllDrivers([...allDrivers].sort((a, b) =>
    b.points - a.points))
  };



  const [filter, setFilter] = useState('');
  useEffect(()=>{
    let filteredDrivers = [...mockData].filter(driver => 
      driver.firstName.toLowerCase().includes(filter.trim().toLowerCase().slice(0 , filter.indexOf(' '))) || driver.lastName.toLowerCase().includes(filter.toLowerCase().slice(0 , filter.indexOf(' '))
     ))
     console.log(filteredDrivers)
     setAllDrivers(filteredDrivers)  
 }, [filter]) 
  
  


  return (
  <>
    <div className='formula1-title'>Formula 1</div>
    <div className='nav-bar'>
    <input id="filter"
          name="filter"
          type="text"
          value={filter}
          onChange={event => setFilter(event.target.value)}
        />
    </div>
    <div className='cards'>
        {allDrivers.map((driver, index)=>(
            <DriverCard key={driver.number} driver={driver} index={index} increase={increasePoints} decrease={decreasePoints}/> 
        ))}
    </div>
    </>
  );
}

export default App;
