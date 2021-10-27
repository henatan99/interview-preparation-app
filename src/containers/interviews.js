import { Interview } from '../components/interview';
import { interviews } from '../helpers/interviews';

export const InterviewList = () => {
    const InterviewListDiv = document.createElement('div');
    interviews.map( interview => {
        InterviewListDiv.appendChild(Interview(interview, 'Hide'));
    });
    return InterviewListDiv;
}
