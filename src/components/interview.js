export const Interview = (interview) => {
    const interviewCard = document.createElement('div');
    interviewCard.classList.add('interview-card');

    const button = document.createElement('button');
    button.innerText = 'show';

    const { questionObj, answerObj } = interview;
    const question = '<p>' + questionObj +'</p>';

    const answer = document.createElement('p');
    answer.classList.add('hide');
    answer.innerHTML = answerObj;

    button.addEventListener('click', () => {
        button.innerText = button.innerText === 'show' ? 'hide' : 'show';
        answer.className = button.innerText === 'show' ? 'hide' : 'show';
    });

    interviewCard.innerHTML = question;
    interviewCard.appendChild(answer);
    interviewCard.appendChild(button);
    return interviewCard;
}
