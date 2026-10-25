import "./PageInscription.css";
import InscriptionForm from "../../Component/InscriptionForm/InscriptionForm";
import { PageForm } from "../../../../Component/PageForm/PageForm";

function PageInscription() {
  return (
    <PageForm>
        <h1>Formulaire d'incsription au site</h1>
        <InscriptionForm />
    </PageForm>
  )
}

export default PageInscription