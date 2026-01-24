import { useNavigate, useSearchParams } from "react-router-dom";
// import {useAppContext} from "../../context/AppContext"
import { useState } from "react";

export default function DonatePage() {
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
                <select className="form-select">
                    <option value="">Choose a company</option>
                    <option>PayPal</option>
                    <option>Stripe</option>
                    <option>MasterCard</option>
                    <option>Visa</option>
                    <option>Apple Pay</option>
                    <option>Google Pay</option>
                </select>

                <label className="form-label">Donation Amount</label>
                <input type="number" className="form-input" placeholder="$ 0.00" />

                <div className="preset-amounts">{[10,25,50,100].map((val) => 
                    <button key={val} className="preser-btn">{val}</button>
                    )}</div>

                <button className="donate-submit">
                    <i className="bx bx-heart"></i>Donate Now
                </button>
        </div>
    </section>
  )
}