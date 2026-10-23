import { useContext, useState } from "react";
import "./ConnexionForm.css";
import { useNavigate } from "react-router";
import { connexionUser } from "../../utils";
import { CategoryContext } from "../../../../Context/CategoryContext";

function ConnexionForm() {
    const [connexionInfos, setConnexionInfos] = useState({
        username: "",
        password: ""
    });
    const { setIsConnected } = useContext(CategoryContext);
    const navigate = useNavigate()

    function handleChange(ev) {
        const { name, value } = ev.target
        setConnexionInfos({...connexionInfos, [name]: value});
    }

    async function handleSubmit(ev) {
        ev.preventDefault()
        try {
            const response = await connexionUser(connexionInfos)
            sessionStorage.setItem('fastStoreApi-token', response.token)
            setIsConnected(true)
            navigate("/")
        } catch(error) {
            console.log("Erreur cConnexionForm]: ", error)
        }
    }

    return (
        <div>
            <form method="POST" onSubmit={(ev) => handleSubmit(ev)}>
                <div className="username">
                    <label htmlFor="username">Nom: </label>
                    <input type="text" name="username" value={connexionInfos.username} id="username" onChange={(ev) => handleChange(ev)} />
                </div>
                <div className="password">
                    <label htmlFor="password">Mot de passe: </label>
                    <input type="password" name="password" value={connexionInfos.password} id="password" onChange={(ev) => handleChange(ev)} />
                </div>
                <button type="submit">Connexion</button>
            </form>
        </div>
    )
}

export default ConnexionForm