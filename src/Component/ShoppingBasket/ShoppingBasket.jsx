import { useContext } from "react";
import { Link } from "react-router";
import "./ShoppingBasket.css";
import { ShoppingCart } from "lucide-react";
import { CategoryContext } from "../../Context/CategoryContext";


function ShoppingBasket() {
    const { totalArticles, totalPrice } = useContext(CategoryContext);

    return (
        <div className="panier">
            <Link className="shopcart" to="/basket">
                <ShoppingCart size={80} color="#93c5fd" />
                <div className="bilan">
                    <span>{totalArticles}</span>
                    <span>{totalPrice.toFixed(2)} €</span>
                </div>
            </Link>
        </div>
    )
}

export default ShoppingBasket;