
import ProductItem from './productItem'

function Category(props){

    return(
        <>
            <tr>
                <td><p className='paraDark'>{props.data.title}</p></td>
            </tr>

            {
                props.data.items.map((item,index)=>
                {   
                    // console.log(props.isChecked)
                    return ((!props.isChecked || (props.isChecked && item.instock)) && item.name.toLowerCase().startsWith(props.text.toLowerCase())) && <tr><ProductItem key = {index} info={item} /></tr>
                }
                )
            }
        </>
        
    )
}
export default Category;