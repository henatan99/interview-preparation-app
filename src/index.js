import InputForm from './components/inputForm';
import { InterviewList } from './containers/interviews';

const container = document.getElementById('root');

container.appendChild(InputForm());
container.appendChild(InterviewList());