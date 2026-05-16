import { skills } from '../data/data';
import Container from './Layout/Container';
import SectionHeading from './UI/SectionHeading';

const levelStyles = {
  Advanced: 'bg-yellow-400 text-black',
  Intermediate: 'bg-blue-600 text-white',
  Beginner: 'bg-red-500 text-white',
};

function Skills() {
  return (
    <section id="skills" className="py-16 bg-neutral-50">
      <Container>
        <SectionHeading>Skills</SectionHeading>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 max-w-4xl mx-auto">
          {skills.map((skill) => (
            <div
              key={skill.name}
              className="flex items-center justify-between border-2 border-black bg-white p-4 shadow-brutal duration-150 hover:shadow-brutal-lg hover:-translate-x-0.5 hover:-translate-y-0.5"
            >
              <span className="font-black text-black text-lg">{skill.name}</span>
              <span
                className={`text-xs font-bold px-2 py-1 border-2 border-black ${levelStyles[skill.level]}`}
              >
                {skill.level}
              </span>
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
}

export default Skills;
