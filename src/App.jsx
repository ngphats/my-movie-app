import "./App.css";
import Header from "./components/Header";
import HeaderNew from "./components/HeaderNew";

function App() {
  return (
    <>
      <HeaderNew/>
      <p className="my-4 h-2 border border-cyan-500 bg-cyan-500"></p>
      <Header/>
    </>
  );
}

export default App;
