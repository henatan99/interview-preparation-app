import { Category } from "../components/category";

export const Categories = (interviews) => {
    const categoriesDiv = document.createElement('categories');
    categoriesDiv.classList.add('div');

    const categoriesUl = document.createElement('ul');
    categoriesUl.classList.add('ul');

    let categories = interviews.map(({ category }) => category);
    categories = [...new Set(categories)];

    categoriesDiv.appendChild(categoriesUl);
    categoriesUl.appendChild(Category('all'));
    categories.map( category => categoriesUl.appendChild(Category(category)));

    return categoriesDiv;
}