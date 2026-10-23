import { useState } from "react";
import "./InscriptionForm.css";
import { useNavigate } from "react-router";
import { loginUser } from "../../utils";

function InscriptionForm() {
    const [loginInfos, setLoginInfos] = useState({
        id: "",
        username: "",
        email: "",
        password: ""
    });
    const navigate = useNavigate();

    function handleChange(ev) {
        const { name, value } = ev.target
        setLoginInfos({...loginInfos, [name]: value})
    }

    async function handleSubmit(ev) {
        ev.preventDefault();
        try {
            const response = await loginUser(loginInfos);
            navigate("/");
        } catch(error) {
            console.log("Erreur [InscriptionForm]: ", error)
        }

    }

    return (
        <div>
            <form metho="POST" onSubmit={(ev) => handleSubmit(ev)}>
                <div className="identifiant">
                    <label htmlFor="identifiant">Identifiant: </label>
                    <input type="number" name="id" id="identifiant" value={loginInfos.id} onChange={(ev) => handleChange(ev)}/>
                </div>
                 <div className="username">
                    <label htmlFor="username">Nom: </label>
                    <input type="text" name="username" id="username" value={loginInfos.username} onChange={(ev) => handleChange(ev)}/>
                </div>
                 <div className="email">
                    <label htmlFor="email">Email: </label>
                    <input type="email" name="email" id="email" value={loginInfos.email} onChange={(ev) => handleChange(ev)}/>
                </div>
                 <div className="password">
                    <label htmlFor="password">Mot de passe</label>
                    <input type="password" name="password" id="password" value={loginInfos.password} onChange={(ev) => handleChange(ev)}/>
                </div>
                <button type="submit">Envoyer</button>
            </form>
        </div>
    )
}

export default InscriptionForm