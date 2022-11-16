function Search ({ search, setSearch }) {

    function handleChange(e) {
        console.log(e.target.value)
        setSearch(e.target.value)
    }

    return (
        <form className='search-form'>
            <input  className='search-bar' placeholder="Enter a Trailer Name..." onChange={handleChange}></input>
        </form>
    )
}

export default Search;