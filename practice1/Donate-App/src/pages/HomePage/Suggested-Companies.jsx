import CompanyList from "./CompanyList";
import { companies } from "./Companies";


export default function SuggestedCompany() {
//   const navigate = useNavigate()
  return (
    <CompanyList
      title="Company"
      actionLabel="View All"
      companies={companies}
      renderRight={(company) => (
        <button>
         {/* onClick={() => navigate(`/donate?company=${company.name}`)} */}
        
         <i className="bx bx-arrow-up-right"></i>
          Donate
        </button>
      )}
    />
  );
}