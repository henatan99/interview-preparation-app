import { InterviewList } from "./interviews";
import { SearchForm } from "../components/searchForm";
import { Categories } from "./categories";

export const InterviewsContainer = (interviews) => {
    var inputSearch = null;    
    var categoryFilter = null;
    var clickedCategory = null;

    const InterviewsListCont = document.createElement('section');

    const searchForm = SearchForm();
    const interviewList = InterviewList(interviews);
    const categoriesDiv = Categories(interviews);

    InterviewsListCont.appendChild(searchForm);
    InterviewsListCont.appendChild(categoriesDiv);
    InterviewsListCont.appendChild(interviewList);

    const handleFilter = () => {
        const filteredInterviews = interviews.filter(
            (interview) =>
            (!inputSearch || interview.questionObj.toLowerCase().includes(inputSearch && inputSearch.toLowerCase())) && 
            ((!categoryFilter || categoryFilter === 'all') || interview.category.toLowerCase().includes(categoryFilter && categoryFilter.toLowerCase()))
            );
        InterviewsListCont.replaceChild(InterviewList(filteredInterviews), InterviewsListCont.childNodes[2]);
    }

    const handleChange = (value) => {
        inputSearch = value;
        handleFilter();
    }

    const handleCategoryClick = (value) => {
        categoryFilter = value;
        if (clickedCategory) {clickedCategory.className = 'show-category'};
        handleFilter();
    }

    searchForm.addEventListener('input', () => {
        handleChange(searchForm.value);
    });

    categoriesDiv.addEventListener('click', (e) => {
        const button = e.target;
        if (clickedCategory) {clickedCategory.className = null};
        clickedCategory = button instanceof HTMLButtonElement ? button : clickedCategory;
        button.value && handleCategoryClick(button.value);
    });

    return InterviewsListCont;
}