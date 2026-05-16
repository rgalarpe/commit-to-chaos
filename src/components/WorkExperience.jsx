import { workExperience } from '../data/data';
import Card from './UI/Card';
import Container from './Layout/Container';
import SectionHeading from './UI/SectionHeading';

function WorkExperience() {
  return (
    <section id="experience" className="py-16 bg-neutral-50">
      <Container>
        <SectionHeading>Work Experience</SectionHeading>
        <div className="space-y-6 max-w-3xl mx-auto">
          {workExperience.map((job) => (
            <Card key={`${job.company}-${job.period}`}>
              <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-2 mb-4">
                <div>
                  <h3 className="text-xl font-black text-black">{job.role}</h3>
                  <p className="font-bold mt-1 inline-block bg-red-500 text-white border-2 border-black px-2 py-0.5">
                    {job.company}
                  </p>
                </div>
                <p className="text-sm font-bold shrink-0 border-2 border-black bg-blue-600 text-white px-2 py-1">
                  {job.period}
                </p>
              </div>
              <ul className="list-none space-y-2 text-black font-medium">
                {job.description.map((item) => (
                  <li key={item} className="flex gap-2">
                    <span className="font-black">→</span>
                    {item}
                  </li>
                ))}
              </ul>
            </Card>
          ))}
        </div>
      </Container>
    </section>
  );
}

export default WorkExperience;
