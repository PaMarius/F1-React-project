import logo from './logo.svg';
import './App.css';
import {mockData} from './Constant/drivers.js';
import { DriverCard } from './Components/driverCard';

function App() {

  return (
    <div className='cards'>
        {mockData.map((driver, index)=>(
            <DriverCard key={driver.number} driver={driver} index={index}/> 
        ))}
    </div>
  );
}

export default App;
