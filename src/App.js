import './App.css';
import { useEffect } from 'react';
import Input from './Components/Input';
import { Button } from './Components/Button';
import { Card } from './Components/Card';
import { useWeather } from './context/Weather';

function App() {

  const { fetchCurrentUserLocationData, fetchData } = useWeather();
  
  useEffect(() => {
  fetchCurrentUserLocationData();
  // eslint-disable-next-line react-hooks/exhaustive-deps
}, []);

  return (
    <div className="App">
      <h1>Weather Forecast</h1>
      <Input/>
      <Button className="search-box" onClick={fetchData} value="Search"/>
      <Card/>
    </div>
  );
}

export default App;