export const Interview = (interview, btnText) => {
    const interviewCard = document.createElement('div');
    interviewCard.classList.add('interview-card');
    const { questionObj, answerObj } = interview;
    const question = '<p>' + questionObj +'</p>';
    const answer = '<p>' + answerObj + '</p>';
    const button = '<button onClick="handleClick()" >' + btnText + '<button>'; 
    interviewCard.innerHTML = question + answer + button;
    return interviewCard;
}
