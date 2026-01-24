import BalanceButton from "./Action-Button";
import SuggestedCompany from "./Suggested-Companies";
import '../../styles/Home.css'

export default function BalanceCard() {
  return (
    <section>
        <main className="home-page">
            <div className="balance">
                <h2>Available on card</h2>
                <h1>$5,750.20</h1>

            </div>

            <div className="limit">
                <span>Tramsfer Limit</span>
                <span>$10,000.00</span>
            </div>

            <div className="balance-btn"><BalanceButton /></div>
            <div className="suggest-company">
                <SuggestedCompany />
            </div>
            <div className="suggest-company"></div>
        </main>
    </section>
  );
}   