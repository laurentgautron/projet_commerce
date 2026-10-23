import { useCallback, useContext, useState } from "react";
import "./CategorySelection.css";
import { useEffect } from "react";
import { getCategories } from "../../features/products/utils";
import { CategoryContext } from "../../Context/CategoryContext";


function CategorySelection() {
    const [categories, setCategories] = useState([]);
    const [category, setCategory] = useState("");
    const {setChosenCategory} = useContext(CategoryContext);

    useEffect(() => {
        getCategories()
            .then((c) => setCategories(c))
            .catch(error => console.log("erreur survenu: ", error))
    }, [])

    function hancleChange(ev) {
        console.log("lavalue choisie: ", ev.target.value)
        setCategory(ev.target.value);
        setChosenCategory(ev.target.value)
    }


    return (
        <div className="category-selection">
            <label htmlFor="categories-select">Visiter par catégorie:</label>
            <select name="categories" id="categories-select" value={category} onChange={(ev) => hancleChange(ev)}>
                <option value="">Choisissez une catégorie</option>
                {categories && categories.map((category) => {
                    return <option key={category} value={category}>{category}</option>
                })}
            </select>
        </div>
    )
}

export default CategorySelection