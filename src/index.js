import InputForm from './components/inputForm';
import { interviews } from './helpers/interviews';
import { InterviewsContainer } from './containers/interviewsCont';
import './index.css';

const container = document.getElementById('root');

container.appendChild(InputForm());
container.appendChild(InterviewsContainer(interviews));
