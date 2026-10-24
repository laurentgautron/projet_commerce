import { useContext, useState, useEffect } from "react"
import { CategoryContext } from "../../../Context/CategoryContext"
import { Navigate, Outlet } from "react-router"
import { checkAuth } from "../../auth/utils"


function PrivateRoute() {
    const { isConnected, setIsConnected } = useContext(CategoryContext)
    const [isloading, setIsloading] = useState(true)

    useEffect(() => {
        checkAuth()
            .then(() => setIsConnected(true))
            .catch(() => setIsConnected(false))
            .finally(() => setIsloading(false))
    }, [])

    if (isloading) return (<p>Chargment</p>)

    return (
        isConnected ? <Outlet /> : <Navigate to="/connexion" />
    )
}

export default PrivateRoute