import "./PageConnexion.css";
import ConnexionForm from "../../Component/ConnexionForm/ConnexionForm";
import { PageForm } from "../../../../Component/PageForm/PageForm";


function PageConnexion() {
  return (
    <PageForm>
        <h1>Connectez-vous avec votre nom et votre mot de passe</h1>
        <ConnexionForm />
    </PageForm>
  )
}

export default PageConnexion