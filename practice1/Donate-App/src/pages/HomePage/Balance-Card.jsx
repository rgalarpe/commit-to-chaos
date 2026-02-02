import BalanceButton from "./Action-Button";
import SuggestedCompany from "./Suggested-Companies";
import '../../styles/Home.css'
import { useAppContext } from "../../context/AppContext";
import RecentDonation from "./Recent-Donations";

export default function BalanceCard() {

  const {balance} = useAppContext()
  return (
    <section>
      <main className="home-page">
        <div className="balance">
          <h2>Available on card</h2>
          <h1>${balance.toLocaleString()}</h1>
        </div>
        <div className="limit">
          <span>Transfer Limit</span>
          <span>$12,000</span>
        </div>

        <div className="balance-btn">
          <BalanceButton />
        </div>
      </main>
        <main className="suggest-company">
            <SuggestedCompany />
        </main>
        <main className="suggest-company">
          <RecentDonation />
        </main>
    </section>
  );
}