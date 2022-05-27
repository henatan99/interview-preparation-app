import InterviewList from './interviews';
import SearchForm from '../components/searchForm';
import Categories from './categories';

const InterviewsContainer = (interviews) => {
  let inputSearch = null;
  let categoryFilter = null;
  let clickedCategory = null;

  const InterviewsListCont = document.createElement('section');
  InterviewsListCont.classList.add('section', 'p-1', 'p-lg-4', 'd-flex', 'flex-column', 'align-items-center');

  const searchForm = SearchForm();
  const interviewList = InterviewList(interviews);
  const categoriesDiv = Categories(interviews);

  InterviewsListCont.appendChild(categoriesDiv);
  InterviewsListCont.appendChild(searchForm);
  InterviewsListCont.appendChild(interviewList);

  const handleFilter = () => {
    const filteredInterviews = interviews.filter(
      (interview) => (
        !inputSearch
          || interview.questionObj
            .toLowerCase().includes(inputSearch && inputSearch.toLowerCase())
      )
            && ((!categoryFilter || categoryFilter === 'all')
            || interview.category
              .toLowerCase().includes(categoryFilter && categoryFilter.toLowerCase())),
    );
    InterviewsListCont.replaceChild(
      InterviewList(filteredInterviews), InterviewsListCont.childNodes[2],
    );
  };

  const handleChange = (value) => {
    inputSearch = value;
    handleFilter();
  };

  const handleCategoryClick = (value) => {
    categoryFilter = value;
    if (clickedCategory) { clickedCategory.className = 'btn btn-primary m-1'; }
    handleFilter();
  };

  searchForm.addEventListener('input', () => {
    handleChange(searchForm.value);
  });

  categoriesDiv.addEventListener('click', (e) => {
    const button = e.target;
    if (clickedCategory) { clickedCategory.className = 'btn btn-secondary m-1'; }
    clickedCategory = button instanceof HTMLButtonElement ? button : clickedCategory;
    button.value && handleCategoryClick(button.value);
  });

  return InterviewsListCont;
};

export default InterviewsContainer;
