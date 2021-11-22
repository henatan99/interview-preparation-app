import InputForm from "../components/inputForm";

export const InputFormCont = () => {
    const inputFormCont = document.createElement('div');
    inputFormCont.classList.add('form');

    inputFormCont.appendChild(InputForm());
    return inputFormCont;
}