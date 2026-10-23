import "./App.css";
import { Routes, Route } from "react-router";
import Header from "./Component/Header/Header";
import Basket from "./features/products/Pages/BasketPage/Basket";
import AppContext from "./Context/CategoryContext";
import PageProducts from "./features/products/Pages/PagesProducts/PageProducts";
import ArticleDetail from "./features/products/Component/ArticleDetail/ArticleDetail";
import PageConnexion from "./features/auth/pages/PageConnexion/PageConnexion";
import PageInscription from "./features/auth/pages/PageInscription/PageInscription";
import ModifyProductPage from "./features/products/Pages/ModifyProductPage/ModifyProductPage";
import AddArticlePage from "./features/products/Pages/AddArticlePage/AddArticlePage";
import PrivateRoute from "./features/products/PrivateRoute/PrivateRoute";
import { Link } from "react-router";

function App() {
    return (
        <>
            <AppContext>
                <Header />
                <Routes>
                    <Route path="/" element={<PageProducts />} />
                    <Route path="/basket" element={<Basket />} />
                    <Route path="/articledetail/:articleId" element={<ArticleDetail />} />
                    <Route path="/connexion" element={<PageConnexion />} />
                    <Route path="/inscription" element={<PageInscription />} />
                    <Route element={<PrivateRoute />} >
                        <Route path="/modify/:articleId" element={<ModifyProductPage />} />
                        <Route path="/add" element={<AddArticlePage />} />
                    </Route>
                    <Route path="*" element= {
                        <>
                            <h1>Page introuvable !</h1>
                            <Link to="/">Retour à la page d'accueil</Link>
                        </>
                    } />
                </Routes>
            </AppContext>
        </>
    )
}

export default App