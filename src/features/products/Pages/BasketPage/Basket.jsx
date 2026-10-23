import { useContext } from "react";
import "./Basket.css";
import { CategoryContext } from "../../../../Context/CategoryContext";
import Articles from "../../Component/Articles./Articles";

function Basket() {

    return (
        <div className="basket">
            <h2>Votre panier:</h2>
            <Articles />
        </div>
    )
}

export default Basket