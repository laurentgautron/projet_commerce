import { useContext } from "react";
import { Link } from "react-router";
import "./ShoppingBasket.css";
import { ShoppingCart } from "lucide-react";
import { CategoryContext } from "../../Context/CategoryContext";


function ShoppingBasket() {
    const { totalArticles, totalPrice } = useContext(CategoryContext);

    return (
        <div className="panier">
            <h5>Panier:</h5>
            <Link className="shopcart" to="/basket">
                <ShoppingCart size={60} color="#93c5fd" />
                <div className="bilan">
                    <span> {totalArticles} Article{totalArticles > 1 ? 's' : null}</span>
                    <span>{totalPrice} €</span>
                </div>
            </Link>
        </div>
    )
}

export default ShoppingBasket;