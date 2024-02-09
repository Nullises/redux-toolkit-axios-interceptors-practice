import ReactDOM from "react-dom/client";
// import Counter from "./Counter.jsx";
import "./index.css";
import { store } from "./store";
import { Provider } from "react-redux";
// import Pokemon from "./Pokemon";
import Todo from "./Todo";

ReactDOM.createRoot(document.getElementById("root")).render(
  <Provider store={store}>
    {/*<Counter />*/}
    {/*<Pokemon />*/}
    <Todo />
  </Provider>
);
