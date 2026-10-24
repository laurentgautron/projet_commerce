import { createContext, useState, useEffect } from "react";
import { checkAuth } from "../features/auth/utils";

export const CategoryContext = createContext(null);

function AppContext({children}) {
    const  [chosenCategory, setChosenCategory] = useState(null);
    const [isConnected, setIsConnected] = useState(false);
    const [articles, setArticles] = useState([]);

    const totalPrice = articles.length === 0 ? 0 : articles.reduce((sum, article) => sum + article.numbArticle * article.price, 0);

    const totalArticles = articles.length === 0 ? 0 : articles.reduce((sum, article) => sum + article.numbArticle, 0)

    function modifyCounter(id, price, operator) {
        const art = articles.find(article => article.id === id)
        if (!art) setArticles([...articles, { id: id, price: price, numbArticle: 1}])
        else {
            setArticles(
                articles.map(
                    a => a.id === id 
                    ? {...a, numbArticle: operator === "+" ? a.numbArticle + 1 : Math.max(0, a.numbArticle - 1)}
                    : a
                )
            )
        }
    }

    function deleteArticle(id) {
        const newList = articles.filter(article => article.id !== id)
        setArticles(newList)
    }

    const value = {
        chosenCategory,
        setChosenCategory,
        articles,
        setArticles,
        modifyCounter,
        totalArticles,
        totalPrice,
        deleteArticle,
        isConnected,
        setIsConnected, 
    }

    return (
        <CategoryContext.Provider value={value}>
            {children}
        </CategoryContext.Provider>
    )
}

export default AppContext;