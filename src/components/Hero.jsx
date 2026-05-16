import { profile } from '../data/data';
import Button from './UI/Button';
import Container from './Layout/Container';

function Hero() {
  const scrollToContact = (event) => {
    event.preventDefault();
    document.querySelector('#contact')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section id="hero" className="py-16 bg-neutral-50">
      <Container>
        <div className="text-center max-w-2xl mx-auto">
          <img
            src={profile.avatar}
            alt={`${profile.name} profile`}
            className="w-32 h-32 md:w-40 md:h-40 rounded-full border-4 border-black shadow-brutal-lg mx-auto mb-8 object-cover"
          />
          <h1 className="text-5xl md:text-7xl font-black text-black mb-4">
            {profile.name}
          </h1>
          <p className="text-xl md:text-2xl font-bold text-black mb-2 bg-yellow-400 inline-block border-2 border-black px-4 py-1 shadow-brutal">
            {profile.title}
          </p>
          <p className="text-black mt-6 mb-8 leading-relaxed font-medium">{profile.bio}</p>
          <div className="flex flex-wrap items-center justify-center gap-4">
            <Button href={profile.resumeLink}>Download Resume</Button>
            <Button variant="secondary" href="#contact" onClick={scrollToContact}>
              Contact Me
            </Button>
          </div>
        </div>
      </Container>
    </section>
  );
}

export default Hero;
