import { useNavigate, useSearchParams } from "react-router-dom";
import {useAppContext} from "../../context/AppContext"
import { useState } from "react";


export default function DonatePage() {
    const { donate, showToast, balance } = useAppContext();

    const navigate = useNavigate();

    const [params] = useSearchParams();
    const defaultCompany = params.get("company") || "";

    const [selectedCompany, setSelectedCompany] = useState(defaultCompany);
    const [amount, setAmount] = useState("");

    const handleDonate = () => {
        if(!selectedCompany) {
            showToast("Please select a company to donate to.");
            return
        }

        if(!amount){
            showToast("Please enter an amount")
            return
        }
        
        if(amount <= 0) {
            showToast("Please enter a valid donation.");
            return
        }

        if(amount > 0) {
            showToast("Insufficient balance");
            return
        }

        const result = donate(selectedCompany, Number(amount))

        if(result.success) {
            showToast(result.message, "success");
            
            setAmount("");
            setSelectedCompany("");
            
            setTimeout(() => {
                navigate("/");
            }, 1000);
        }
    }

  return (
    <section className="donation-page">
        <div className="donation-header">
            <button className="back-button" onClick={() => navigate('/')}>
                <i className="bx bx-left-arrow-alt"></i> Back
            </button>
            <h1 className="donation-title">Make a Donation</h1>
        </div>    
           
        <div className="donation-card">
                <i className="bx bx-heart"></i>

                <label className="form-label">Select Company</label>
                <select className="form-select"
                    value={selectedCompany}
                    onChange={(e) => setSelectedCompany(e.target.value)} >
                    <option value="">Choose a company</option>
                    <option>PayPal</option>
                    <option>Stripe</option>
                    <option>MasterCard</option>
                    <option>Visa</option>
                    <option>Apple Pay</option>
                    <option>Google Pay</option>
                </select>

                <label className="form-label">Donation Amount</label>
                <input type="number" 
                className="form-input" 
                placeholder="$ 0.00" 
                value={amount} 
                onChange={(e) => setAmount(e.target.value)}/>

                <div className="preset-amounts">{[10,25,50,100].map((val) => 
                    <button key={val} className="preser-btn"
                    onClick={() => setAmount(val)}>{val}</button>
                    )}
                    </div>

                <button className="donate-submit" onClick={handleDonate}>
                    <i className="bx bx-heart"></i>Donate Now
                </button>
        </div>
    </section>
  )
}
