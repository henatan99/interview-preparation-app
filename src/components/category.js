export const Category = (categoryText) => {
    const category = document.createElement('button');
    category.value = categoryText;
    category.innerText = categoryText;

    return category;
}