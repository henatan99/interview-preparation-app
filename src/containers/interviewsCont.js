import { InterviewList } from "./interviews";
import { SearchForm } from "../components/searchForm";

export const InterviewsContainer = (interviews, container, header) => {
    const InterviewsListCont = document.createElement('section');
    const searchForm = SearchForm();
    const interviewList = InterviewList();
    InterviewsListCont.appendChild(searchForm);
    InterviewsListCont.appendChild(interviewList);

    const handleChange = (value) => {
        const filteredInterviews = interviews.filter((interview) => interview.questionObj.toLowerCase().includes(value && value.toLowerCase()));
        header.innerText = value || '';
        // container.appendChild(InterviewList(filteredInterviews));
        interviewList.innerHTML = InterviewList(filteredInterviews);
    }

    searchForm.addEventListener('input', () => {
        handleChange(document.getElementById('search-form').value);
    });

    return InterviewsListCont;
}