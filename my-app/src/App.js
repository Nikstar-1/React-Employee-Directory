import Header from "./components/Header";
import SearchForm from './components/SearchForm';
import SearchResults from "./components/SearchResults";
import Main from "./components/Main";

//import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="App">
     <Header />
    
     <SearchForm />
     {/*
    <SearchResults />
     {/*
     <Main />
     */}
    </div>
  );
}

export default App;
