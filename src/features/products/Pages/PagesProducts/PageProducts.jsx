import { useContext, useEffect, useState } from "react"
import { getCategories, getProducts } from "../../utils";
import ProductList from "../../Component/ProductList/ProductList";
import "./PageProducts.css";
import { CategoryContext } from "../../../../Context/CategoryContext";

function PageProducts() {
    const [products, setProducts] = useState([]);
    const [error, setError] = useState(null);
    const [isLoading, setIsLoading] = useState(true)
    const { chosenCategory } = useContext(CategoryContext)

    useEffect(() => {
        getProducts()
            .then((p) => setProducts(p))
            .catch(error => {
                console.log("Erreur [PageProducts]: ", error)
                setError(`Erreur au chargement de la page: ${error}`)
            })
            .finally(() => setIsLoading(false))
    }, [])


    return (
        <div className="page-products">
            <div className="research-banner">
                <div className="research">
                    <label htmlFor="research">Recherche par nom: </label>
                    <input type="text" name="research" id="research" />
                </div>
                <h1>Tous les produits {chosenCategory ? chosenCategory : null}</h1>
            </div>
            {error && <P>{error}</P>}
            {isLoading
                ? <p>Chargement...</p>
                : !error
                    ? <section><ProductList productlist={products} /></section>
                    : null
            }
        </div>
    )
}

export default PageProducts