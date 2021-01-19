import AddTask from "./components/AddTask";
import Footer from "./components/Footer";
import Header from "./components/Header";
import Tasks from "./components/Tasks";
import { TaskContextProvider } from "./taskContext/taskContext";
import { BrowserRouter as Router, Route } from "react-router-dom";
import About from "./components/About";

function App() {
  return (
    <Router>
      <TaskContextProvider>
        <div className="container">
          <Header />
          <Route exact path="/">
            <AddTask />
            <Tasks />
          </Route>

          <Route path="/about">
            <About />
          </Route>
          <Footer />
        </div>
      </TaskContextProvider>
    </Router>
  );
}

export default App;
