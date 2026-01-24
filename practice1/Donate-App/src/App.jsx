import Header from "./components/Header";
import BalanceCard from "./pages/HomePage/Balance-Card";
import DonatePage from "./pages/Donation/Donate-Page";
import { Routes, Route } from "react-router-dom";
import './styles/Theme.css'
import './styles/MediaQuery.css'

function App() {
  return (
    <>
      <Header />

      <Routes>
        <Route path="/" element={<BalanceCard/>} />
        <Route path="/donate" element={<DonatePage/>} />
      </Routes>
    </>
  );
}

export default App;
