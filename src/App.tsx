import "./App.css";
import Login from "./component/Login";
import LoadingOverlay from "./component/LoadingOverlay";

function App() {
  return (
    <>
      <Login />
      <LoadingOverlay message="ログイン中..." size="large" color="text-blue-500" />
    </>
  )
}

export default App;
