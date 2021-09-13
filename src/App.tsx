import Router from "./Routes";
import { Providers } from "./Providers";
import GlobalStyle from "./Styles/global";
import { Toaster } from "react-hot-toast";
import { BrowserRouter } from "react-router-dom";

function App() {
  return (
    <>
      <Toaster />
      <Providers>
        <BrowserRouter>
          <GlobalStyle />
          <Router />
        </BrowserRouter>
      </Providers>
    </>
  );
}

export default App;
