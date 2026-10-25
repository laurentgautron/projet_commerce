import "./ArticleForm.css";
import { useCallback, useContext, useEffect, useState } from "react";
import { modifyProduct } from "../../utils";
import { Link, useNavigate } from "react-router";
import { Form } from "../../../../Component/Form/Form";
import { CategoryContext } from "../../../../Context/CategoryContext";
import { deleteArticle } from "../../utils";
import { DivButtonsActions } from "../../../../Component/DivButtonsActions/DivButtonsActions";

function ArticleForm({ articleInfos, method, actionFunction }) {
    const [modifyForm, setModifyform] = useState({
        title: "",
        price: "",
        description: "",
        category: "",
        image: "",
        id: ""
    });
    const navigate = useNavigate()

    useEffect(() => {
        if (articleInfos) {
            setModifyform({ ...modifyForm, ...articleInfos })
        }
    }, [articleInfos])

    function handleChange(ev) {
        const { name, value } = ev.target
        setModifyform({ ...modifyForm, [name]: value })
    }

    async function handleSubmit(ev) {
        ev.preventDefault()
        actionFunction(modifyForm, method)
            .then((resp) => {
                console.log("Réponse: (modification/ajout): ", resp)
                navigate("/")
            })
            .catch(error => console.log("Erreur [ArticleForm]: ", error))
    }

    function handleDelete() {
        deleteArticle(articleInfos.id)
        .then((response) => console.log(response))
        .catch((error) => console.log(error))
    }

    function handleClick() {
        navigate("/")
    }

    return (
        <div>
            <Form metho="PUT" id="article-form" onSubmit={(ev) => handleSubmit(ev)}>
                <div className="identifiant">
                    <label htmlFor="title">Identifiant:</label>
                    <input type="number" name="id" id="idnetifiant" value={modifyForm.id} onChange={(ev) => handleChange(ev)} />
                </div>
                <div className="title">
                    <label htmlFor="title">Titre:</label>
                    <input type="text" name="title" id="title" value={modifyForm.title} onChange={(ev) => handleChange(ev)} />
                </div>
                <div className="price">
                    <label htmlFor="price">Prix:</label>
                    <input type="number" step="any" name="price" id="price" value={modifyForm.price} onChange={(ev) => handleChange(ev)} />
                </div>
                <div className="description">
                    <label htmlFor="description">Descritpion:</label>
                    <textarea row="5" col="30" name="description" value={modifyForm.description} onChange={(ev) => handleChange(ev)} />
                </div>
                <div className="category">
                    <label htmlFor="category">Catégorie:</label>
                    <input type="text" name="category" id="category" value={modifyForm.category} onChange={(ev) => handleChange(ev)} />
                </div>
                <div className="image">
                    <label htmlFor="image">Image:</label>
                    <input type="text" name="image" id="image" value={modifyForm.image} onChange={(ev) => handleChange(ev)} />
                </div>
            </Form>
            <DivButtonsActions>
                <button type="submit" form="article-form">Soumettre</button>
                {articleInfos && <button onClick={()=>handleDelete()}>Supprimer l'article</button>}
                <button onClick={() => handleClick()}>Retour à l'accueil</button>
            </DivButtonsActions>
        </div>
    )
}

export default ArticleForm