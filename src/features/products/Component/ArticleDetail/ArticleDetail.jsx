import { useContext, useEffect, useState } from "react";
import { getArticle } from "../../utils";
import "./ArticleDetail.css";
import { useParams } from "react-router";
import { Link } from "react-router";
import BuyButton from "../../../../Component/BuyButton/BuyButton";
import { CategoryContext } from "../../../../Context/CategoryContext";


function ArticleDetail() {
    const { modifyCounter, isConnected } = useContext(CategoryContext)
    const [article, setArticle] = useState(null)
    const [error, setError] = useState(null)
    const { articleId } = useParams();

    useEffect(() => {
        getArticle(articleId)
            .then(a => setArticle(a))
            .catch(error => console.log("Erreur [ArticleDetail]: ", error))
    }, [])

    return (
        article
            ? <div className="article-detail">

                <h1>Détail de l'article:</h1>
                <h2>{article.title}</h2>
                <img src={article.image} alt={article.title} />
                <p>{article.description}</p>
                <div className="actions">
                    <BuyButton articleId={articleId} price={article.price}>Ajouter au panier</BuyButton>
                    <Link to="/">Retour à l'accueil</Link>
                    {isConnected && <Link to={`/modify/${articleId}`}>Modifier l'article</Link>}
                </div>
            </div>
            : !error ? <p>Chargement</p> : <p>{error}</p>
    )
}

export default ArticleDetail