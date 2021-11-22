import { InterviewsContainer } from "./containers/interviewsCont";
import { InputFormCont } from "./containers/inputFormCont";
import { Nav } from "./components/nav";
import { interviews } from "./helpers/interviews";
import { MyRouter } from "./helpers/routing"; 

const App = () => {
    const app = document.createElement('div');
    app.classList.add('container', 'pt-4');

    app.appendChild(InterviewsContainer(interviews));
    return app;
}

export default App;