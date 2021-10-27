import InputForm from './components/inputForm';
import { InterviewList } from './containers/interviews';
import { interviews } from './helpers/interviews';

const container = document.getElementById('root');

container.appendChild(InputForm());
container.appendChild(InterviewList(interviews));