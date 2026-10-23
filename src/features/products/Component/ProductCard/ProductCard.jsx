import "./ProductCard.css";
import DetailButton from "../../../../Component/DetailButton/DetailButton";

function ProductCard({id, title, image, price}) {
    return (
        <li className="card">
            <h5>{title}</h5>
            <img src={image} alt={title} />
            <p>{price} €</p>
            <DetailButton articleId={id}/>
        </li>
    )
}

export default ProductCard