import { useState } from "react";
import "./InscriptionForm.css";
import { useNavigate } from "react-router";
import { registerApiAuthRi7 } from "../../utils";
import DetailErrorMessage from "../DetailErrorMessage/DetailErrorMessage";

function InscriptionForm() {
    const [registerInfos, setRegisterInfos] = useState({
        username: "",
        email: "",
        password: ""
    });
    const [error, setError] = useState({})
    const [errorInfos, setErrorInfos] = useState(null)
    const navigate = useNavigate();

    function handleChange(ev) {
        const { name, value } = ev.target
        setRegisterInfos({ ...registerInfos, [name]: value })
    }

    async function handleSubmit(ev) {
        ev.preventDefault();
        try {
            const response = await registerApiAuthRi7(registerInfos);
            if (response.error) setErrorInfos({ error: response.error, message: response.message, details: response.details })
            else navigate("/");
        } catch (error) {
            console.log("Erreur [InscriptionForm]: ", error)
        }

    }

    return (
        <div>
            <form metho="POST" onSubmit={(ev) => handleSubmit(ev)}>
                <div className="username">
                    <label htmlFor="username">Nom: </label>
                    <input type="text" name="username" id="username" value={registerInfos.username} onChange={(ev) => handleChange(ev)} />
                </div>
                <div className="email">
                    <label htmlFor="email">Email: </label>
                    <input type="email" name="email" id="email" value={registerInfos.email} onChange={(ev) => handleChange(ev)} />
                </div>
                <div className="password">
                    <label htmlFor="password">Mot de passe</label>
                    <input type="password" name="password" id="password" value={registerInfos.password} onChange={(ev) => handleChange(ev)} />
                </div>
                <button type="submit">Envoyer</button>
            </form>
            <DetailErrorMessage errorInfos={errorInfos} />
        </div>
    )
}

export default InscriptionForm