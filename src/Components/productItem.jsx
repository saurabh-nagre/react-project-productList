import './styles.css'

function ProductItem(props){
    return(
        <>
            <td className={props.info.instock ? "" :"out-of-stock"}>{props.info.name}</td>
            <td>{props.info.price}</td>
        </>
    )
}

export default ProductItem;