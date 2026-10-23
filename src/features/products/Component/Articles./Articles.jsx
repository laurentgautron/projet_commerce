import { useContext } from "react";
import "./Articles.css";
import { CategoryContext } from "../../../../Context/CategoryContext";
import Article from "../Article/Article";
import { Link } from "react-router";


function Articles() {
    const { articles, totalPrice } = useContext(CategoryContext);

    return (
        <div className="articles">
            {articles.length !== 0
                ? <table>
                    <caption>Détail des articles:</caption>
                    <thead>
                        <tr>
                            <th>Nom</th>
                            <th>Prix</th>
                            <th>Quantité</th>
                            <th>Total</th>
                            <th></th>
                        </tr>
                    </thead>
                    <tbody>
                        {articles.map((article) => {
                            return <Article key={article.id} articleId={article.id} counter={article.numbArticle} />
                        })}
                    </tbody>
                    <tfoot>
                        <tr>
                            <th scope="row" colSpan="3">Total de la commande:</th>
                            <td> {totalPrice} €</td>
                        </tr>
                    </tfoot>
                </table>
                : <p>Votre panier est vide</p>
            }
            <Link to="/">Retour à l'accueil</Link>
        </div>
    )
}

export default Articles