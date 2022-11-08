import "../../css/ModalForm.css"
import ContactForm from "./ContactForm";



const ModalForm = ({ closeModal }) => {
    return (
        <>
            <div className="modalContainer">
                <div className="TitleCloseBtn">
                    <button className="exitbtn" onClick={() => closeModal(false)}> x </button>
                </div>
                <h1>CONTACT</h1>
                <div className="modalBody"><ContactForm /></div>
            </div>

        </>
    );
}

export default ModalForm;