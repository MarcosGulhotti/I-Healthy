import Router from "./Routes";
// import { Providers } from "./Providers";
import GlobalStyle from "./Styles/global";
import { Toaster } from "react-hot-toast";
import { BrowserRouter } from "react-router-dom";
import UserHeader from "./Components/UserHeader";

function App() {
  return (
    <>
      <Toaster />
      <BrowserRouter>
        <GlobalStyle />
        {/* <Router /> */}
        <UserHeader />
      </BrowserRouter>
    </>
  );
}

export default App;
