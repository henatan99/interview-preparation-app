
// Both set of different routes and template generation functions
let routes = {};
let templates = {};

// Register a template (this is to mimic a template engine)
let template = (name, templateFunction) => {
    return templates[name] = templateFunction;
}

// Define the routes. Each route is described with a route path & a template to render
// when entering that path. A template can be a string (file name), or a function that
// will directly create the DOM objects.

let route = (path, template) => {
    if (typeof template == "function") {
        return routes[path] = template;
    } else if (typeof template == "string") {
        return routes[path] = templates[template];
    } else {
        return;
    }
}

template('home', () => {
    app.innerHTML = '';
    app.appendChild(nav());
    return app;
});

template('template-interviews', () => {
    app.innerHTML = '';
    app.appendChild(nav());
    app.appendChild(InterviewsContainer(interviews));
    return app;
})

template('template-form', () => {
    app.innerHTML = '';
    app.appendChild(nav());
    app.appendChild(InputFormCont());
    return app;
})

route('/', 'home');
route('/interviews', 'template-interviews');
route('/form', 'template-form');

let resolveRoute = (route) => {
    try {
     return routes[route];
    } catch (error) {
        throw new Error("The route is not defined");
    }
};

let router = (evt) => {
    const url = window.location.hash.slice(1) || "/";
    const routeResolved = resolveRoute(url);
    routeResolved();
};

window.addEventListener('load', router);
window.addEventListener('hashchange', router);