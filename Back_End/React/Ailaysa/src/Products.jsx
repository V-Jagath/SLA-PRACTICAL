import { useLocation } from "react-router-dom"

const Products = () => {
    const location = useLocation()
    const id = location.state.product

    const deleteData = () => {
        
    }

    return (
        <>
            <button onClick={deleteData}>deleteData</button>
        </>
    )
}

export default Products