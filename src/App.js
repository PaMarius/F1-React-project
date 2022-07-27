import logo from './logo.svg';
import './App.css';
import {mockData} from './Constant/drivers.js';
import { DriverCard } from './Components/driverCard';

function App() {
  let indexDriver;

  const sortedMockData = mockData.sort((a, b) =>
  b.points - a.points
);

  return (
  <>
    <div className='formula1-title'>Formula 1</div>
    <div className='cards'>
        {sortedMockData.map((driver, index)=>(
            <DriverCard  key={driver.number} driver={driver} index={index}/> 
        ))}
    </div>
    </>
  );
}

export default App;
