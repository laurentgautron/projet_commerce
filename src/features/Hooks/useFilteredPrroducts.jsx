import { useContext } from "react";
import { CategoryContext } from "../../Context/CategoryContext";

function useFilteredProducts(productlist) {

    const { chosenCategory } = useContext(CategoryContext);

    const filteredProducts = chosenCategory
        ? productlist.filter((product) => product.category === chosenCategory).slice(-5)
        : productlist

    return filteredProducts
}

export default useFilteredProducts

