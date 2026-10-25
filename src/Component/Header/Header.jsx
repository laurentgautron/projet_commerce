import { Link, useNavigate, useSearchParams } from "react-router";
import "./Header.css";
import { useContext, useEffect, useState } from "react";
import { getCategories } from "../../features/products/utils";
import ShoppingBasket from "../ShoppingBasket/ShoppingBasket";
import CategorySelection from "../CategorySelection/CategorySelection";
import { CategoryContext } from "../../Context/CategoryContext";
import { NavLink } from "../NavLink/NavLink";

function Header() {
    const { isConnected, setIsConnected } = useContext(CategoryContext);
    
    function handleClick() {
        sessionStorage.removeItem('authRi7-token')
        setIsConnected(false)
    }

    return (
        <div className="banner">
            <h1>Les commerçants du 17</h1>
            <CategorySelection />
            <nav>
                {isConnected
                    ? <div>
                        <NavLink to="/add">Ajouter un article</NavLink>
                        <NavLink to="/" onClick={() => handleClick()}>Déconnexion</NavLink>
                    </div>
                    : <div>
                        <NavLink to="/inscription">Inscription</NavLink>
                        <NavLink to="/connexion">Connexion</NavLink>
                    </div>
                }
                <ShoppingBasket />
            </nav>
        </div>
    )
}

export default Header