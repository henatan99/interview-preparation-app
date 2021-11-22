import { Interview } from '../components/interview';

export const InterviewList = (interviews) => {
    const InterviewListDiv = document.createElement('div');
    InterviewListDiv.classList.add('card', 'p-2', 'bg-light', 'w-100');

    interviews && interviews.length > 0 && interviews.map( interview => {
        InterviewListDiv.appendChild(Interview(interview));
    });
    return InterviewListDiv;
}
