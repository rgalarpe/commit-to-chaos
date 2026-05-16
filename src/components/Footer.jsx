import { profile } from '../data/data';
import Button from './UI/Button';
import Container from './Layout/Container';

function Footer() {
  const currentYear = new Date().getFullYear();

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="py-8 bg-yellow-400 border-t-2 border-black">
      <Container>
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-black text-sm font-bold">
            &copy; {currentYear} {profile.name}. All rights reserved.
          </p>
          <Button variant="outline" onClick={scrollToTop}>
            Back to Top
          </Button>
        </div>
      </Container>
    </footer>
  );
}

export default Footer;
