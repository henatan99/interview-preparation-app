export const SearchForm = () => {
    const searchFormElem = document.createElement('input');
    searchFormElem.setAttribute('type', 'text');
    searchFormElem.setAttribute('id', 'search-form')

    return searchFormElem;
}
