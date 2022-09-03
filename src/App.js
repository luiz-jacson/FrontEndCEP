import './App.css';
import CampoBusca from './componentes/CampoBusca';
import CardEndereco from './componentes/CardEndereco';

function App() {
  return (
    <div className="App">
      <CampoBusca placeholder = {'Digite o CEP'}/>
      <CardEndereco/>
    </div>
  );
}

export default App;
