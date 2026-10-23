import { useContext } from "react";
import "./BuyButton.css";
import { CategoryContext } from "../../Context/CategoryContext";


function BuyButton({articleId, price}) {
    const { modifyCounter } = useContext(CategoryContext);

    return (
        <button onClick={() => modifyCounter(articleId, price, "+")}>Ajouter au panier</button>
    )
}

export default BuyButton