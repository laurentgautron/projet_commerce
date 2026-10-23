import "./AddArticlePage.css"
import ArticleForm from "../../Component/ArticleForm/ArticleForm"
import { addProduct } from "../../utils"


function AddArticlePage() {
  return (
    <div>
        <h1>Ajoutez un article après avoir rempli touts les champs suivants:</h1>
        <ArticleForm articleInfos={null} method="POST" actionFunction={addProduct}/>
    </div>
  )
}

export default AddArticlePage