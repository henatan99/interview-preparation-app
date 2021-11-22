// import InputForm from './components/inputForm';
// import { interviews } from './helpers/interviews';
// import { InterviewsContainer } from './containers/interviewsCont';
import App from './app';
import './index.css';
import 'bootstrap/dist/css/bootstrap.min.css';

const container = document.getElementById('root');
container.classList.add('container', 'hero');

// container.appendChild(InputForm());
// container.appendChild(InterviewsContainer(interviews));
container.appendChild(App());