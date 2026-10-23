import { useContext, useEffect, useState } from "react"
import { getCategories, getProductByCategory, getProducts } from "../../utils";
import ProductList from "../../Component/ProductList/ProductList";
import "./PageProducts.css";
import { CategoryContext } from "../../../../Context/CategoryContext";

function PageProducts() {
    const [products, setProducts] = useState([]);
    const [error, setError] = useState(null);
    const [isLoading, setIsLoading] = useState(true)
    const { chosenCategory } = useContext(CategoryContext)
    const [research, setResearch] = useState("")

    const productsByName = research !== ""
        ? products.filter((product) =>
            product.title
                .toLowerCase()
                .startsWith(research.toLowerCase().trim())
        )
        : null

    useEffect(() => {
            setIsLoading(true)
            const request = chosenCategory
                ? getProductByCategory(chosenCategory)
                : getProducts()

            request
                .then((p) => setProducts(p))
                .catch((error) => {
                    console.log("Erreur [PageProducts]: ", error)
                    setError(`Erreur au chargement de la page: ${error}`)
                })
                .finally(() => setIsLoading(false))
        }, [chosenCategory])

    function handleChange(ev) {
        setResearch(ev.target.value)
    }

    return (
        <div className="page-products">
            <div className="research-banner">
                <div className="research">
                    <label htmlFor="research">Recherche par nom: </label>
                    <input type="text" name="research" id="research" value={research} onChange={(ev) => handleChange(ev)} />
                </div>
                <h1>Tous les produits {chosenCategory ? chosenCategory : null}</h1>
            </div>
            {error && <p>{error}</p>}
            {isLoading
                ? <p>Chargement...</p>
                : !error
                    ? <section><ProductList productlist={productsByName ? productsByName : products} /></section>
                    : null
            }
        </div>
    )
}

export default PageProducts