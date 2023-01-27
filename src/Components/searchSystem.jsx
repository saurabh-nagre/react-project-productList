
import SearchBar from "./searchBar";
import SearchCheckBox from "./CheckBox";

function SearchSystem(props){

    return(
        <>  
            <SearchBar setSearch={props.setSearchText} />
            <SearchCheckBox setCheckbox = {props.checkbox}/>
        </>
    )
}   

export default SearchSystem;