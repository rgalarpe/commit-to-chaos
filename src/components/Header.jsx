import Container from './Layout/Container';

const navLinks = [
  { label: 'Home', href: '#hero' },
  { label: 'Skills', href: '#skills' },
  { label: 'Experience', href: '#experience' },
  { label: 'Projects', href: '#projects' },
  { label: 'Contact', href: '#contact' },
];

function Header() {
  const handleNavClick = (event) => {
    event.preventDefault();
    const href = event.currentTarget.getAttribute('href');
    const target = document.querySelector(href);
    target?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <header className="sticky top-0 z-50 bg-yellow-400 border-b-2 border-black shadow-brutal">
      <Container>
        <nav className="flex items-center justify-between py-4">
          <a
            href="#hero"
            onClick={handleNavClick}
            className="text-lg font-black text-black border-2 border-black bg-white px-3 py-1 shadow-brutal duration-150 hover:shadow-brutal-lg hover:-translate-x-0.5 hover:-translate-y-0.5"
          >
            AM
          </a>
          <ul className="hidden sm:flex items-center gap-2">
            {navLinks.map((link) => (
              <li key={link.href}>
                <a
                  href={link.href}
                  onClick={handleNavClick}
                  className="text-sm font-bold text-black border-2 border-black bg-white px-3 py-1 shadow-brutal duration-150 hover:shadow-brutal-lg hover:-translate-x-0.5 hover:-translate-y-0.5"
                >
                  {link.label}
                </a>
              </li>
            ))}
          </ul>
        </nav>
      </Container>
    </header>
  );
}

export default Header;
