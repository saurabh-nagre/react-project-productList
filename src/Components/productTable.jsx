import Category from './category';
import jsonData from './data.json'

function ProductTable(props){
    return (
        <>  
            <table>
                <tr>
                    <th>Name</th>
                    <th>Price</th>
                </tr>
                
                {
                    jsonData.products.map((product)=>{
                        // console.log(product)
                        return <Category text={props.compareText} isChecked={props.showInStock} data={product}/>   
                    } 
                    )
                }
            </table>
        </>
    )
}
export default ProductTable;