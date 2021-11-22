
export class MyRouter {
    constructor (parentComponent, routeHashArray) {  // routeHashArray = {'path1': component1'}, ..]
        this.routeHashArray = routeHashArray;
        this.parentComponent = parentComponent;
    }

    router () {
        const url = window.location.hash.slice(1) || "/";
        alert(url);
        try {
            let component = this.routeHashArray[`${url}`];
            this.parentComponent.innerHTML = '';
            return this.parentComponent.appendChild(component);
        } catch (error) {
            throw new Error("The route is not defined");
        }
    }

    setRoutes () {
        window.addEventListener('load', this.router());
        window.addEventListener('hashchange', this.router());
    }
}