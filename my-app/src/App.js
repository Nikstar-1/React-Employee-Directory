import './App.css';
import Header from "./components/Header";
import Search from './components/SearchForm';
import SearchResults from "./components/SearchResults";
import Main from "./components/Main";


function App() {
  return (
    <div className="App">
    <Header />
    <Search />
    <SearchResults />
     <Main />
  
    </div>
  );
}

export default App;
