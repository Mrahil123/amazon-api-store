import "./App.css";
import Widget from "./components/Widget.js";
function App() {
  return (
    <div>
      <Widget search="mi a3" title="MI STORE" />
      <Widget search="iphone" title="IPHONE STORE" isSmall />
    </div>
  );
}

export default App;
