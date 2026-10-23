import { useContext } from "react"
import { CategoryContext } from "../../../Context/CategoryContext"
import { Navigate, Outlet } from "react-router"



function PrivateRoute() {
    const { isconnected } = useContext(CategoryContext)

    return (
        isconnected ? <Outlet /> : <Navigate to="/connexion" />
    )
}

export default PrivateRoute