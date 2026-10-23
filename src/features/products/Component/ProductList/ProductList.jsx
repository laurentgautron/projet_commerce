import "./ProductList.css";
import ProductCard from "../ProductCard/ProductCard";
import { useContext } from "react";
import { CategoryContext } from "../../../../Context/CategoryContext";
import useFilteredProducts from "../../../Hooks/useFilteredPrroducts";

function ProductList({ productlist }) {
    
    const filteredProducts = useFilteredProducts(productlist);
    
    return (
        <div className="productlist">
            {filteredProducts.length === 0
                ? <p>Chargement...</p>
                : <ul>
                    {filteredProducts.map((product) => {
                        return <ProductCard {...product} key={product.id} />
                    })}
                </ul>
            }
        </div>
    )
}

export default ProductList