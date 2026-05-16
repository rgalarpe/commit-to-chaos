function Button({
  children,
  href,
  onClick,
  type = 'button',
  variant = 'primary',
  className = '',
}) {
  const baseStyles =
    'inline-flex items-center justify-center rounded-none border-2 border-black px-6 py-3 font-bold shadow-brutal duration-150 hover:shadow-brutal-lg hover:-translate-x-0.5 hover:-translate-y-0.5 active:translate-x-[2px] active:translate-y-[2px] active:shadow-none';

  const variants = {
    primary: 'bg-yellow-400 text-black',
    secondary: 'bg-blue-600 text-white',
    outline: 'bg-white text-black',
    danger: 'bg-red-500 text-white',
  };

  const styles = `${baseStyles} ${variants[variant]} ${className}`;

  const handleClick = (event) => {
    if (href === '#') {
      event.preventDefault();
    }
    onClick?.(event);
  };

  if (href) {
    return (
      <a href={href} className={styles} onClick={handleClick}>
        {children}
      </a>
    );
  }

  return (
    <button type={type} className={styles} onClick={onClick}>
      {children}
    </button>
  );
}

export default Button;
