import { Switch, Route } from "react-router-dom";
import ChoosePage from "../Pages/ChoosePage";
import Home from "../Pages/Home";
import PageRegister from "../Pages/PageRegister";
import LoginPage from "../Pages/Login";
import { Dashboard } from "../Pages/Dashboard";
import PatientCalendar from "../Pages/PatientCalendar";
import SearchPage from "../Pages/Search";
import DoctorCalendar from "../Pages/DoctorCalendarPage";
import { useAuth } from "../Providers/Auth";
import { ContactPage } from '../Pages/ContactPage'
import { AnimatePresence } from  "framer-motion"

const Router = () => {
  const { isAuth } = useAuth();

  return (
    <AnimatePresence>
    <Switch>
        <Route exact path="/">
          <Home />
        </Route>
        
        <Route exact path="/patient">
          <PageRegister />
        </Route>
        <Route exact path='/contact'>
          <ContactPage />
        </Route>

        <Route exact path="/professional">
          <PageRegister profissional />
        </Route>

        <Route path="/choosepage">
          <ChoosePage />
        </Route>

        <Route path="/login">
          <LoginPage />
        </Route>

        <Route path="/calendar">
          <PatientCalendar />
        </Route>

        <Route path="/dashboard">
          <Dashboard />
        </Route>

        <Route path="/search">
          <SearchPage />
        </Route>
        <Route path="/doctorcalendar">
          <DoctorCalendar />
        </Route>
      </Switch>
    </AnimatePresence>
  );
};

export default Router;
