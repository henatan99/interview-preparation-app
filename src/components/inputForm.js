export const InputForm = () => {
    const formElem = document.createElement('form');
    formElem.classList.add('input-form');
    formElem.innerHTML = "<input class='form-input'/>" + "<button>Submit</button>";
    return formElem;
}

export default InputForm;