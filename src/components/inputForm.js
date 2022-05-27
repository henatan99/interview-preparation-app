export const InputForm = () => {
    const formElem = document.createElement('form');

    formElem.classList.add('input-form form-group');
    formElem.innerHTML = '<textarea class="form-input form-control"/>' + '<button class="btn">Submit</button>';
    return formElem;
}

export default InputForm;