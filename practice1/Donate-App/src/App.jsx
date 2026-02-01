import Header from "./components/Header";
import BalanceCard from "./pages/HomePage/Balance-Card";
import DonatePage from "./pages/Donation/Donate-Page";
import { Routes, Route } from "react-router-dom";
import './styles/Theme.css'
import './styles/MediaQuery.css'
import Toast from "./components/Toast";
import { useAppContext } from "./context/AppContext";

function App() {
  const { toast } = useAppContext();

  return (
    <>
      <Header />

      <Routes>
        <Route path="/" element={<BalanceCard/>} />
        <Route path="/donate" element={<DonatePage/>} />
      </Routes>
      <Toast toast={toast} />
    </>
  );
}

export default App;
