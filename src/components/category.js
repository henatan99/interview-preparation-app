const Category = (categoryText) => {
  const category = document.createElement('button');
  category.classList.add('btn', 'btn-secondary', 'm-1');

  category.value = categoryText;
  category.innerText = categoryText;

  return category;
};

export default Category;
