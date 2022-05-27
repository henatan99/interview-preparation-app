// Both set of different routes and template generation functions
const routes = {};
const templates = {};

// Register a template (this is to mimic a template engine)
const template = (name, templateFunction) => (() => {
  templates[name] = templateFunction;
  return templates[name];
});

// Define the routes. Each route is described with a route path & a template to render
// when entering that path. A template can be a string (file name), or a function that
// will directly create the DOM objects.

const route = (path, template) => {
  if (typeof template === 'function') {
    routes[path] = template;
    return routes[path];
  } if (typeof template === 'string') {
    routes[path] = templates[template];
    return routes[path];
  }
  return 0;
};

template('home', (app, nav) => {
  app.innerHTML = '';
  app.appendChild(nav());
  return app;
});

template('template-interviews', (app, InterviewsContainer, nav, interviews) => {
  app.innerHTML = '';
  app.appendChild(nav());
  app.appendChild(InterviewsContainer(interviews));
  return app;
});

template('template-form', (app, InputFormCont, nav) => {
  app.innerHTML = '';
  app.appendChild(nav());
  app.appendChild(InputFormCont());
  return app;
});

route('/', 'home');
route('/interviews', 'template-interviews');
route('/form', 'template-form');

const resolveRoute = (route) => {
  try {
    return routes[route];
  } catch (error) {
    throw new Error('The route is not defined');
  }
};

const router = () => {
  const url = window.location.hash.slice(1) || '/';
  const routeResolved = resolveRoute(url);
  routeResolved();
};

window.addEventListener('load', router);
window.addEventListener('hashchange', router);