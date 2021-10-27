import { Interview } from '../components/interview';

export const InterviewList = (interviews) => {
    const InterviewListDiv = document.createElement('div');
    interviews && interviews.length > 0 && interviews.map( interview => {
        InterviewListDiv.appendChild(Interview(interview, 'Hide'));
    });
    return InterviewListDiv;
}
