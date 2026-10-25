import { useContext, useEffect, useState } from "react";
import { getArticle } from "../../utils";
import "./Article.css";
import { CategoryContext } from "../../../../Context/CategoryContext";


function Article({ articleId, counter }) {
    const { modifyBasket, deleteArticle } = useContext(CategoryContext);
    const [article, setArticle] = useState(null);

    useEffect(() => {
        getArticle(articleId)
            .then(art => setArticle(art))
            .catch(error => console.log("Erreur [Article]: ", error))
    }, [])

    return (
        article &&
        <tr className="articleCard">
            <th>{article.title}</th>
            <td>{article.price} €</td>
            <td>
                <button onClick={() => modifyBasket(articleId, article.price, "+")}>+</button>
                {counter}
                <button onClick={() => modifyBasket(articleId, article.price, "-")}>-</button>
            </td>
            <td>{(article.price * counter).toFixed(2)} €</td>
            <td><button onClick={() => deleteArticle(articleId)}>Supprimer du panier</button></td>
        </tr>

    )
}

export default Article;