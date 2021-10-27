export const Interview = (interview) => {
    const interviewCard = document.createElement('div');
    interviewCard.classList.add('interview-card');
    
    const button = document.createElement('button');
    button.innerText = 'Show';
    button.addEventListener('click', () => {
        button.innerText = button.innerText === 'Show' ? 'Hide' : 'Show'; 
    });

    const { questionObj, answerObj } = interview;
    const question = '<p>' + questionObj +'</p>';
    const answer = `<p class="${button.innerText}">` + answerObj + '</p>';

    interviewCard.innerHTML = question + answer;
    interviewCard.appendChild(button);
    return interviewCard;
}
