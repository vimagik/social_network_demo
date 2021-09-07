import './App.css';
import Header from "./components/Header/Header";
import Navigator from "./components/Navigator/Navigator";
import Content from "./components/Profile/Content";

function App() {
  return (
    <div className="App">
        <Header />
        <Navigator />
        <Content />
    </div>
  );
}

export default App;
