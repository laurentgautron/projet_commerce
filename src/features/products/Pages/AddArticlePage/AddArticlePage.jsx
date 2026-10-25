import "./AddArticlePage.css"
import ArticleForm from "../../Component/ArticleForm/ArticleForm"
import { addProduct } from "../../utils"
import { PageForm } from "../../../../Component/PageForm/PageForm"

function AddArticlePage() {
  return (
    <PageForm>
        <h1>Ajoutez un article après avoir rempli touts les champs suivants:</h1>
        <ArticleForm articleInfos={null} method="POST" actionFunction={addProduct}/>
    </PageForm>
  )
}

export default AddArticlePage