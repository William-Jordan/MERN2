import MyCounter from "./components/MyCounter";
import MyGitHub from "./components/MyGitHub";

function App() {
  return (
    <div className="App">
      <h1>
        Hello React!
      </h1>
      <h2>
        William Jordan - k13w244
      </h2>

      <hr />
      <MyCounter incBy={1}/><hr />
      <MyCounter incBy={2}/><hr />
      <MyGitHub /><hr />

    </div>
  );
}

export default App;