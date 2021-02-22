import './App.css';
import Header from "./components/Header";
import Search from './components/Search';
import Main from "./components/Main";
import Filter from "./components/Filter";

function App() {
  return (
    <div className="App">
    <Header />
    <Search />
     <Filter />
  <Main />
  
    </div>
  );
}

export default App;
