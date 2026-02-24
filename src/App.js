import './App.css';
import { useEffect } from 'react';
import Input from './Components/Input';
import { Button } from './Components/Button';
import { Card } from './Components/Card';


import { useWeather } from './context/Weather';
function App() {
  const Weather =useWeather();

  useEffect(()=>{
    Weather.fetchCurrentUserLocationData()
  },[])


  return (
    <div className="App">
      <h1>Weather Forecast</h1>
      <Input/>
      <Button className="search-box" onClick={Weather.fetchData} value="Search"/>
      <Card/>
      {/* <Button value="Referesh"/> */}



    </div>
  );
}

export default App;
