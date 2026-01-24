export default function CompanyList({
    title,
    actionLabel,
    companies,
    renderRight
}) {
    return (
        <>
            <div className="view-all">
                <h2>{title}</h2>
                <span>{actionLabel}</span>
            </div>
            <ul className="list-company">
                {companies.map((company) => (
                    <li key={company.id}>
                        <div className="detail">
                            <img src={company.logo} alt={company.name} />
                            <h2>{company.name}</h2>
                        </div>
                        <div className="donate-now">{renderRight(company)}</div>
                    </li>
                ))}
            </ul>
        </>
    )
}