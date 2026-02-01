export default function Toast({toast}) {
    if (!toast.message) return null;

    return (
        <div className={`toast-contanier ${toast.type}`}>
            <p>{toast.message}</p>
        </div>
    )
}