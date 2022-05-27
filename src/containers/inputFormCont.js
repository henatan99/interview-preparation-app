import InputForm from '../components/inputForm';

const InputFormCont = () => {
  const inputFormCont = document.createElement('div');
  inputFormCont.classList.add('form card');

  inputFormCont.appendChild(InputForm());
  return inputFormCont;
};

export default InputFormCont;
