import CompanyList from "./CompanyList";
import { companies } from "./Companies";
import { Navigate, useNavigate } from "react-router-dom";


export default function SuggestedCompany() {
  const navigate = useNavigate()
  return (
    <CompanyList
      title="Company"
      actionLabel="View All"
      companies={companies}
      renderRight={(item) => (
        <button onClick={() => navigate(`/donate?company=${item.name}`)}>

         <i className="bx bx-arrow-up-right"></i>
          Donate
        </button>
      )}
    />
  );
}