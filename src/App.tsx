import Header from "./components/Header";
import { Outlet } from "react-router-dom";

function App() {
  return <>
    <Header />
    <main><Outlet /></main>
    <footer></footer>
  </>;
}

export default App;
