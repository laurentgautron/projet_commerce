import "./DetailButton.css";
import { Link } from "react-router";


function DetailButton({articleId}) {
  return (
    <Link className="detail-button" to={`/articledetail/${articleId}`}>Détails de l'article</Link>
  )
}

export default DetailButton