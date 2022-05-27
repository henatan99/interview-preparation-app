const SearchForm = () => {
  const searchFormElem = document.createElement('input');
  searchFormElem.setAttribute('type', 'text');
  searchFormElem.setAttribute('id', 'search-form');
  searchFormElem.setAttribute('placeholder', 'Search Interview Question By Keyword');
  searchFormElem.classList.add('form-control', 'mt-4', 'mb-4');

  return searchFormElem;
};

export default SearchForm;
