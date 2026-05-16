import { useState } from 'react';
import { projects } from '../data/data';
import Button from './UI/Button';
import Card from './UI/Card';
import Container from './Layout/Container';
import SectionHeading from './UI/SectionHeading';

function Projects() {
  const [activeProject, setActiveProject] = useState(null);

  const openModal = (project) => {
    setActiveProject(project);
  };

  const closeModal = () => {
    setActiveProject(null);
  };

  return (
    <section id="projects" className="py-16 bg-neutral-50">
      <Container>
        <SectionHeading>Projects</SectionHeading>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((project) => (
            <Card key={project.title} className="flex flex-col">
              <h3 className="text-xl font-black text-black mb-3">{project.title}</h3>
              <p className="text-black mb-4 flex-grow font-medium">{project.description}</p>
              <div className="flex flex-wrap gap-2 mb-6">
                {project.tags.map((tag) => (
                  <span
                    key={tag}
                    className="text-xs font-bold px-2 py-1 border-2 border-black bg-yellow-400 text-black"
                  >
                    {tag}
                  </span>
                ))}
              </div>
              <Button variant="outline" className="w-full" onClick={() => openModal(project)}>
                View
              </Button>
            </Card>
          ))}
        </div>
      </Container>

      {activeProject && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/70 px-4"
          onClick={closeModal}
          role="presentation"
        >
          <div
            className="bg-white border-2 border-black p-6 max-w-md w-full shadow-brutal-lg rounded-none"
            onClick={(event) => event.stopPropagation()}
            role="dialog"
            aria-modal="true"
            aria-labelledby="project-modal-title"
          >
            <h3 id="project-modal-title" className="text-2xl font-black text-black mb-3">
              {activeProject.title}
            </h3>
            <p className="text-black mb-4 font-medium">{activeProject.description}</p>
            <div className="flex flex-wrap gap-2 mb-6">
              {activeProject.tags.map((tag) => (
                <span
                  key={tag}
                  className="text-xs font-bold px-2 py-1 border-2 border-black bg-yellow-400 text-black"
                >
                  {tag}
                </span>
              ))}
            </div>
            <div className="flex flex-wrap gap-3">
              <Button href={activeProject.link}>Visit Project</Button>
              <Button variant="outline" onClick={closeModal}>
                Close
              </Button>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}

export default Projects;
