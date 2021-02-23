import Header from "./components/Header";
import Search from './components/Search';
import SearchResults from "./components/SearchResults";
import Main from "./components/Main";

//import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="App">
      <Header />
    <Search />
    {/* 
    <SearchResults />
     */}
     <Main />
    </div>
  );
}

export default App;
