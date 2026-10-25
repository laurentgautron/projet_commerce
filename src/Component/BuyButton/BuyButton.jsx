import { useContext } from "react";
import "./BuyButton.css";
import { CategoryContext } from "../../Context/CategoryContext";


function BuyButton({articleId, price}) {
    const { modifyBasket } = useContext(CategoryContext);

    return (
        <button onClick={() => modifyBasket(articleId, price, "+")}>Ajouter au panier</button>
    )
}

export default BuyButton