import { createContext, useState, useContext } from "react";


const AppContext = createContext();

export function AppProvider({ children }) {
    const [balance, setBalance] = useState(1005757);
    const [donations, setDonations] = useState([]);
    const [supportedCompanies, setSupportedCompanies] = useState([]);

    const [toast, setToast] = useState({
        message: "",
        type: "", // success, error, info
    });

    const showToast = (message, type = "error") => {
        setToast({ message, type });

        setTimeout(() => {
            setToast({ message: "", type: "" });
        }, 2000);
    }

    const validateBalance = (amount) => balance >= amount;

    const deposit = (amount) => {
        setBalance((prev) => prev + amount );
    }

    const donate = (company, amount) => {
        if(!validateBalance(amount)) {
            return { success: false, message: "Insufficient balance!" };
        }

        setBalance((prev) => prev - amount )

        const newDonation = {
            company,
            amount,
            data: new Date().toISOString(),
        }

        setDonations((prev) => [ ...prev, newDonation ])

        setSupportedCompanies((prev) => {
            const existing = prev.find((c) => c === company);

            if(existing) {
                return prev.map((c) => c.company === company ? { ...c, total: c.total + amount } : c );
            }
            return [ ...prev, { company, total: amount } ];
        })

        return { success: true, message: "Donation successful!" };
        
    }
    return (
        <AppContext.Provider
            value={{
                balance,
                donations,
                supportedCompanies,
                donate,
                deposit,
                validateBalance,
                toast,
                showToast,
            }}
            >
        {children}
        </AppContext.Provider>
    )


}

export const useAppContext = () => useContext(AppContext);