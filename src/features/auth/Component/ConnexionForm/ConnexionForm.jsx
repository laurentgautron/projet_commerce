import { useContext, useState } from "react";
import "./ConnexionForm.css";
import { useNavigate } from "react-router";
import { CategoryContext } from "../../../../Context/CategoryContext";
import DetailErrorMessage from "../DetailErrorMessage/DetailErrorMessage";
import { loginApiAuthRi7 } from "../../utils";
import { Form } from "../../../../Component/Form/Form";

function ConnexionForm() {
    const [loginInfos, setLoginInfos] = useState({
        email: "",
        password: ""
    });
    const [errorInfos, setErrorInfos] = useState(null)
    const { setIsConnected } = useContext(CategoryContext);
    const navigate = useNavigate()

    function handleChange(ev) {
        const { name, value } = ev.target
        setLoginInfos({...loginInfos, [name]: value});
    }

    async function handleSubmit(ev) {
        ev.preventDefault()
        try {
            const response = await loginApiAuthRi7(loginInfos)
            if (response.error) {
                setErrorInfos({error: response.error, message: response.message, details: response.details})
            } else {
                sessionStorage.setItem('authRi7-token', response.token)
                setIsConnected(true)
                navigate("/")
            }
        } catch(error) {
            console.log("Erreur ConnexionForm]: ", error)
        }
    }

    return (
        <div className="connexion-form">
            <Form method="POST" onSubmit={(ev) => handleSubmit(ev)}>
                <div className="email">
                    <label htmlFor="email">Email: </label>
                    <input type="email" name="email" value={loginInfos.email} id="email" onChange={(ev) => handleChange(ev)} />
                </div>
                <div className="password">
                    <label htmlFor="password">Mot de passe: </label>
                    <input type="password" name="password" value={loginInfos.password} id="password" onChange={(ev) => handleChange(ev)} />
                </div>
                <button type="submit">Connexion</button>
            </Form>
            <DetailErrorMessage errorInfos={errorInfos} />
        </div>
    )
}

export default ConnexionForm