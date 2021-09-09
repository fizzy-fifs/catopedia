import logo from './logo.svg';
import './App.css';
import SelectABreed from './components/SelectABreed/SelectABreed';
import background from './imgs/img3.jpg'

function App() {
  return (
    <div className="Catopedia" style={{ backgroundImage: `url(${background})`}}>
      <SelectABreed />
    </div>
  );
}

export default App;
