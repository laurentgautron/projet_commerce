import { Link, useSearchParams } from "react-router";
import "./Header.css";
import { useContext, useEffect, useState } from "react";
import { getCategories } from "../../features/products/utils";
import ShoppingBasket from "../ShoppingBasket/ShoppingBasket";
import CategorySelection from "../CategorySelection/CategorySelection";
import { CategoryContext } from "../../Context/CategoryContext";
import { NavLink } from "../NavLink/NavLink";

function Header() {
    const { isConnected } = useContext(CategoryContext);
    
    return (
        <div className="banner">
            <h1>Les commerçants du 17</h1>
            <CategorySelection />
            <nav>
                {isConnected && <NavLink to="/add">Ajouter un article</NavLink>}
                <NavLink to="/connexion">Connexion</NavLink>
                <NavLink to="/inscription">Inscription</NavLink>
                <ShoppingBasket />
            </nav>
        </div>
    )
}

export default Header