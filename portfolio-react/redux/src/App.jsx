import "./index.css";
import Home from "./pages/Home";
import AboutMe from "./pages/AboutMe";
import BudgetDivision from "./pages/BudgetDivision"
import CheckWeather from "./pages/CheckWeather"
import Games from "./pages/Games"
import QuoteOfTheDay from "./pages/QuoteOfTheDay"
import ForMenu from "./components/ForMenu"
import Registration from "./components/Registration"
import Login from "./components/Login"

function App() {
  return (
    <>
      <Home />
      <AboutMe/>
      <BudgetDivision/>
      <CheckWeather/>
      <Games/>
      <QuoteOfTheDay/>
      <ForMenu/>
      <Registration/>
      <Login/>
    </>
  );
}

export default App;
