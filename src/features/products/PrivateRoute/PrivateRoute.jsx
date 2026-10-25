import { useContext, useState, useEffect } from "react"
import { CategoryContext } from "../../../Context/CategoryContext"
import { Navigate, Outlet } from "react-router"
import { checkAuth } from "../../auth/utils"


function PrivateRoute() {
    const { isConnected, setIsConnected, finishAuth } = useContext(CategoryContext)

    if (!finishAuth) return (<p>Chargment</p>)

    return (
        isConnected ? <Outlet /> : <Navigate to="/connexion" />
    )
}

export default PrivateRoute