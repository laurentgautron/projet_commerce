import { useContext } from "react"
import { CategoryContext } from "../../../Context/CategoryContext"
import { Navigate, Outlet } from "react-router"



function PrivateRoute() {
    const { isConnected } = useContext(CategoryContext)
    console.log("private isconnected: ", isConnected)

    return (
        isConnected ? <Outlet /> : <Navigate to="/connexion" />
    )
}

export default PrivateRoute