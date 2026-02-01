import { useAppContext } from "../../context/AppContext";
import { companies } from "./Companies";
import CompanyList from "./CompanyList";

export default function RecentDonation() {
  const { donations } = useAppContext();

  const recent = donations.slice(0, 5);

  if (recent.length === 0) {
    return (
      <div className="empty-state">
        <h3>No donations yet</h3>
        <p>Start supporting companies you love</p>
      </div>
    );
  }

  const mapped = recent.map((don) => {
    const company = companies.find((c) => c.name === don.company);
    return {
      id: don.date,
      name: don.company,
      logo: company?.logo,
      amount: don.amount,
    };
  });

  return (
    <CompanyList
      title="Recent Donation"
      actionLable="View All"
      companies={mapped}
      renderRight={(item) => (
        <span className="donate-amount">${item.amount.toFixed(2)}</span>
      )}
    />
  );
}