import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

export default function Projects() {
  const [projects, setProjects] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    fetch('https://juca-website.onrender.com/api/projects')
      .then(response => {
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }
        return response.json();
      })
      .then(data => {
        const parsedData = data.map(project => ({
          ...project,
          images: JSON.parse(project.images)
        }));

        setProjects(parsedData);
        console.log(parsedData); // Verifica la estructura aquí
        
        setLoading(false);
      })
      .catch(error => {
        console.error('Error:', error);
        setError(error);
        setLoading(false);
      });
  }, []);

  if (loading) return <p className="flex items-center justify-center">Loading...</p>;
  if (error) return <div className="flex items-center justify-center"><p  >Error loading projects: {error.message}</p></div>;

  return (
    <section>
      <h2 className="mt-6 flex justify-start font-bold">Pricipal projects</h2>
      <div className="grid md:grid-cols-2 md:grid-rows-2 grid-cols-1 grid-rows-4 gap-4">

        
        {projects.map(project => (

          <Link to={`/projects/${project.id}`} key={project.id}>
          <div className="border-solid border-2 bed-about mt-5 rounded hover:bg-black hover:shadow-xl hover:-translate-y-2" key={project.id}>
            <h2 className="font-bold p-3 text-xl ">{project.name}</h2>

            <div className=" w-auto md:h-64   h-60 items-center justify-center ">

              <img  className="w-full h-full object-contain p-3 " src={project.images[0]} alt="imageproject" />
            </div>
            <div className="py-3 text-justify  md:mx-16 m-6">
            <p className="icons">{project.description}</p>
            <p>Language: <span className="icons">{project.language}</span></p>
            </div>
          </div>
          </Link>
        ))}

      </div>
    </section>
  );
}
