import InputForm from './components/inputForm';
import { InterviewList } from './containers/interviews';
import { interviews } from './helpers/interviews';
import './index.css';

const container = document.getElementById('root');

container.appendChild(InputForm());
container.appendChild(InterviewList(interviews));

