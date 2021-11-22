export const Nav = () => {
    const nav = document.createElement('nav');
    nav.innerHTML = '<ul><li><a href="/">Home</a></li><a href="#/form"><li>Form</li></ul>';
    return nav;
}