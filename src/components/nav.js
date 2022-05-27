const Nav = () => {
  const nav = document.createElement('nav');
  nav.classList.add('navbar', 'navbar-expand', 'navbar-light', 'bg-light');
  nav.innerHTML = '<ul class="navbar-nav"><li class="nav-item"><a class="nav-link" href="/">Home</a></li><li class="nav-item"><a class="nav-link" href="/home">Form</a></li></ul>';
  return nav;
};

export default Nav;
