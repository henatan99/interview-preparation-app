import { InterviewList } from "./interviews";
import { SearchForm } from "../components/searchForm";

export const InterviewsContainer = (interviews) => {
    const InterviewsListCont = document.createElement('section');
    const searchForm = SearchForm();
    const interviewList = InterviewList(interviews);
    InterviewsListCont.appendChild(searchForm);
    InterviewsListCont.appendChild(interviewList);

    const handleChange = (value) => {
        const filteredInterviews = interviews.filter((interview) => interview.questionObj.toLowerCase().includes(value && value.toLowerCase()));
        InterviewsListCont.replaceChild(InterviewList(filteredInterviews), InterviewsListCont.childNodes[1]);
    }

    searchForm.addEventListener('input', () => {
        handleChange(document.getElementById('search-form').value);
    });

    return InterviewsListCont;
}