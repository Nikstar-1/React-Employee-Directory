const [title, setTitle] = useState('')

const SearchBar = () => (
    <form action="/" method="get">
        <label htmlFor="header-search">
            <span className="visually-hidden">Search Directory</span>
        </label>
        <input
            type="text"
            id="header-search"
            placeholder="Search Employees"
            name="s" 
            
        />
        <input onChange={event => setTitle(event.target.value)} />
        <button type="submit">Search</button>
    </form>
);



export default SearchBar;