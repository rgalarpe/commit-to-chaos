function Card({ children, className = '', hover = true }) {
  const hoverStyles = hover
    ? 'duration-150 hover:shadow-brutal-lg hover:-translate-x-0.5 hover:-translate-y-0.5'
    : '';

  return (
    <div
      className={`border-2 border-black p-4 bg-white shadow-brutal rounded-none ${hoverStyles} ${className}`}
    >
      {children}
    </div>
  );
}

export default Card;
