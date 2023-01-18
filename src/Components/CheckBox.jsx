import './styles.css'

function SearchCheckBox (props){
    
    return (
        <>
            <input type='checkbox' className='checkbox' onChange={(event) => {
                // console.log(event.target.checked)
                props.setCheckbox(event.target.checked)}}/><br></br>
            <p>Only show products in stock</p>
        </>
    )
}    


export default SearchCheckBox;