import { useState, useEffect } from "react"
import "./Products.css"

const Products = () =>{
    const[products, setProducts ] = useState([])

    useEffect(()=>{
        fetch("data.json")
     .then((response)=> response.json())
     .then ((data) => setProducts(data))
    }, [])

    return products.map((product) =>{
        return(
            <div className="card" key={product.id} >
            <img src={product.img} alt="img-prodct-card" />
            <h3>{product.modelo} </h3>
            <h4> $ {product.precio} </h4>
            <button>Comprar</button>
        </div>
    )
    });

  
}

export default Products;