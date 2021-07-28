import './App.css';
import Users from './components/users';
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  return (
    <div className="App" >
      <header className="App-header">
      <h1 style={{color:'pink' }}>WORKSHOP PROPS</h1>
      <div style={{border:"solid 5px white" , maxwidth:'100vw'}}>
       <Users/>
       </div>
      
      </header>
    </div>
  );
}

export default App;
