import { useNavigate } from "react-router-dom";

export default function PaymentButton() {
  const navigate = useNavigate();
 
  function donateClick() {
    navigate('/donate');
  }

  return (
    <>
      <div className="pay-btn" onClick={donateClick}>
        <button>Pay</button>
        <i className="bx bx-dollar"></i>
      </div>
      <div className="deposit-btn">
        <button>Deposit</button>
        <i className="bx bx-plus"></i>
        
      </div>
    </> 
  );
}