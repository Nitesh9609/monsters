import './search.style.css'
const Search = ({changing}) => {
    return(

        <>
            <input className='search-box' 
            type = "text" 
            placeholder="Search Monsters"
            onChange= {changing}
       />

            
        
        </>
       
    )
}

export default Search