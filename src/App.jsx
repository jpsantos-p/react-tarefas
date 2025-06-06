import LoginProvider from "./contexts/LoginContext";
import Home from "./pages/home";
import Rotas from "./routes/Rotas";

const App = () => {

  return (
    <>
      <LoginProvider>
        <Rotas />
      </LoginProvider>
    </>
  );
}

export default App;
