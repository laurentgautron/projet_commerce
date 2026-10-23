import { useParams } from "react-router";
import "./ModifyProductPage";
import { useEffect, useState } from "react";
import { getArticle } from "../../utils";
import ArticleForm from "../../Component/ArticleForm/ArticleForm";
import { Link } from "react-router";
import { modifyProduct } from "../../utils";

function ModifyProductPage() {
    const { articleId } = useParams();
    const [article, setArticle] = useState(null)

    useEffect(() => {
        getArticle(articleId)
        .then(art => setArticle({
            id: art.id,
            image: art.image,
            price: art.price,
            title: art.title,
            description: art.description,
            category: art.category
        }))
        .catch(error => console.log("Erreur [ModifyProductPage]: ", error))
    }, [])

    return (
        <div>
            <Link>Retour à la page d'accueil</Link>
            <ArticleForm articleInfos={article} method="PUT" actionFunction={modifyProduct}/>
        </div>
    )
}

export default ModifyProductPage