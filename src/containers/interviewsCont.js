import { InterviewList } from "./interviews";
import { SearchForm } from "../components/searchForm";
import { Categories } from "./categories";

export const InterviewsContainer = (interviews) => {
    const InterviewsListCont = document.createElement('section');

    const searchForm = SearchForm();
    const interviewList = InterviewList(interviews);
    const categoriesDiv = Categories(interviews);

    InterviewsListCont.appendChild(searchForm);
    InterviewsListCont.appendChild(categoriesDiv);
    InterviewsListCont.appendChild(interviewList);

    const handleChange = (value) => {
        const filteredInterviews = interviews.filter((interview) => interview.questionObj.toLowerCase().includes(value && value.toLowerCase()));
        InterviewsListCont.replaceChild(InterviewList(filteredInterviews), InterviewsListCont.childNodes[2]);
    }

    const handleCategoryClick = (value) => {
        const filteredInterviews = interviews.filter((interview) => interview.category.toLowerCase().includes(value && value.toLowerCase()));
        InterviewsListCont.replaceChild(InterviewList(filteredInterviews), InterviewsListCont.childNodes[2]);
    }

    searchForm.addEventListener('input', () => {
        handleChange(searchForm.value);
    });

    categoriesDiv.addEventListener('click', (e) => {
        const button = e.target;
        button.value && handleCategoryClick(button.value);
    })

    return InterviewsListCont;
}