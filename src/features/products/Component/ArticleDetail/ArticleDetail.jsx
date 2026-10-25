import { useContext, useEffect, useState } from "react";
import { getArticle } from "../../utils";
import "./ArticleDetail.css";
import { useNavigate, useParams } from "react-router";
import { Link } from "react-router";
import BuyButton from "../../../../Component/BuyButton/BuyButton";
import { CategoryContext } from "../../../../Context/CategoryContext";
import { DivButtonsActions } from "../../../../Component/DivButtonsActions/DivButtonsActions";

function ArticleDetail() {
    const { modifyCounter, isConnected } = useContext(CategoryContext)
    const [article, setArticle] = useState(null)
    const [error, setError] = useState(null)
    const { articleId } = useParams();
    const navigate = useNavigate()

    useEffect(() => {
        getArticle(articleId)
            .then(a => setArticle(a))
            .catch(error => console.log("Erreur [ArticleDetail]: ", error))
    }, [])

    return (
        article
            ? <div className="article-detail">
                <h1>Détail de l'article:</h1>
                <div className="presentation">
                    <h2>{article.title}</h2>
                    <div className="detail">
                        <div>
                            <img src={article.image} alt={article.title} />
                            <p className="price">{article.price} €</p>
                        </div>
                        <p>{article.description}</p>
                    </div>
                </div>
                <DivButtonsActions>
                    <BuyButton articleId={articleId} price={article.price}>Ajouter au panier</BuyButton>
                    <button onClick={() => navigate('/')}>Retour à l'accueil</button>
                    {isConnected && <button onClick={() => navigate(`/modify/${articleId}`)}>Modifier l'article</button>}
                </DivButtonsActions>
            </div>
            : !error ? <p>Chargement</p> : <p>{error}</p>
    )
}

export default ArticleDetail