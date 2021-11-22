export const Interview = (interview) => {
    const interviewCard = document.createElement('div');
    interviewCard.classList.add('interview-card', 'card', 'mb-3', 'p-1', 'text-dark', 'w-100');

    const button = document.createElement('button');
    button.classList.add('btn', 'btn-primary', 'toggle');
    button.innerText = 'show answer';

    const { questionObj, answerObj } = interview;
    const question = '<p class="p">' + questionObj +'</p>';

    const answer = document.createElement('p');
    answer.classList.add('hide');
    answer.innerHTML = answerObj;

    button.addEventListener('click', () => {
        button.innerText = button.innerText === 'show answer' ? 'hide answer' : 'show answer';
        answer.className = button.innerText === 'show answer' ? 'hide' : 'show';
    });

    interviewCard.innerHTML = question;
    interviewCard.appendChild(answer);
    interviewCard.appendChild(button);
    return interviewCard;
}
