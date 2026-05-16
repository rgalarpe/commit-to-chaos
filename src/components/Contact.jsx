import { useState } from 'react';
import { FaGithub, FaLinkedin, FaEnvelope } from 'react-icons/fa';
import { contact } from '../data/data';
import Button from './UI/Button';
import Card from './UI/Card';
import Container from './Layout/Container';
import SectionHeading from './UI/SectionHeading';

const inputClass =
  'w-full border-2 border-black rounded-none px-4 py-2 bg-white text-black focus:outline-none focus:ring-2 focus:ring-black';

function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });

  const handleLinkClick = (event) => {
    event.preventDefault();
  };

  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log('Form submitted');
    setFormData({ name: '', email: '', message: '' });
  };

  return (
    <section id="contact" className="py-16 bg-neutral-50">
      <Container>
        <SectionHeading>Contact</SectionHeading>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 max-w-4xl mx-auto">
          <Card>
            <h3 className="text-xl font-black text-black mb-6">Get in touch</h3>
            <ul className="space-y-4">
              <li>
                <a
                  href="#"
                  onClick={handleLinkClick}
                  className="flex items-center gap-3 text-black font-bold border-2 border-black bg-yellow-400 px-4 py-2 shadow-brutal duration-150 hover:shadow-brutal-lg hover:-translate-x-0.5 hover:-translate-y-0.5"
                >
                  <FaEnvelope className="text-xl shrink-0" aria-hidden />
                  {contact.email}
                </a>
              </li>
              <li>
                <a
                  href={contact.github}
                  onClick={handleLinkClick}
                  className="flex items-center gap-3 text-white font-bold border-2 border-black bg-blue-600 px-4 py-2 shadow-brutal duration-150 hover:shadow-brutal-lg hover:-translate-x-0.5 hover:-translate-y-0.5"
                >
                  <FaGithub className="text-xl shrink-0" aria-hidden />
                  GitHub
                </a>
              </li>
              <li>
                <a
                  href={contact.linkedin}
                  onClick={handleLinkClick}
                  className="flex items-center gap-3 text-white font-bold border-2 border-black bg-red-500 px-4 py-2 shadow-brutal duration-150 hover:shadow-brutal-lg hover:-translate-x-0.5 hover:-translate-y-0.5"
                >
                  <FaLinkedin className="text-xl shrink-0" aria-hidden />
                  LinkedIn
                </a>
              </li>
            </ul>
          </Card>

          <Card>
            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <label htmlFor="name" className="block text-sm font-black text-black mb-1">
                  Name
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  className={inputClass}
                />
              </div>
              <div>
                <label htmlFor="email" className="block text-sm font-black text-black mb-1">
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className={inputClass}
                />
              </div>
              <div>
                <label htmlFor="message" className="block text-sm font-black text-black mb-1">
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  rows={4}
                  className={`${inputClass} resize-y`}
                />
              </div>
              <Button type="submit" variant="secondary">
                Send Message
              </Button>
            </form>
          </Card>
        </div>
      </Container>
    </section>
  );
}

export default Contact;
