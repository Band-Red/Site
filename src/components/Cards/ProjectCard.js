export default function ProjectCard({ project, active }) {
  return (
    <div className={`project-card ${active ? "active" : ""}`}>
      <img src={project.image} alt={project.title} />
      <h3>{project.title}</h3>
    </div>
  );
}
