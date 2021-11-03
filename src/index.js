import InputForm from './components/inputForm';
import { interviews } from './helpers/interviews';
import { InterviewsContainer } from './containers/interviewsCont';
import './index.css';

const container = document.getElementById('root');
const header = document.createElement('h1');

container.appendChild(header); 
container.appendChild(InputForm());
container.appendChild(InterviewsContainer(interviews, container, header));
