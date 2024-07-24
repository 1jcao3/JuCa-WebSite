import { FaAddressBook } from "react-icons/fa";
import { MdWork } from "react-icons/md";

export default function Career() {
  const dataStudy = [
    {
      id: 1,
      title: "Bachiller acádmico",
      company: "Colegio Salesiano de Duitama",
      description: "Bachiller acádemico con excelentes notas y destacado por su compormiso, disciplina y habilidad para aprender",
      date: "2019",
    },
    {
        id: 2,
        title: "Tecnico Laboral",
        company: "Ministerio de las tic",
        description: "Curso con el ministerio de las tic de Colombia, programacion con especialidad web",
        date: "2020",
      },
    {
      id: 3,
      title: "Ingenieria de sistemas y computación",
      company: "Universidad Pedagogica y Tecnologica de Colombia",
      description: `Estudiante de ingenieria de sitemas caracterizado por el desarollo de 
      habilidades y bases en conceptos de programacion orientada objetos , teorica y aplicada`,
      date: "2020-2022",
    },
    {
      id: 4,
      title: "Ingenieria de sistemas",
      company: "Universidad Nacional Abierta y a Distancia",
      description: "Estudiante de ingenieria caracterizado por el alto rendimiento y la consolidacion de bases",
      date: "presente",
    },
  ];
  const dataJobs = [
    {
      id: 1,
      title: "Tutor de python",
      company: "Kodland",
      description: "Tutor para niños en plataforma web , dicatando clases y practicas",
      date: "2024",
    },
    {
        id: 2,
        title: "Desarrollador front-end",
        company: "Sternenzel EIRL",
        description: `Trabajo como desarrolador fornt-end para la creacion y manteniemiento de paginas web.
        Trabajo en equipo empleando figma ,react git ,git hub y jira `,
        date: "2024",
      },
    

  ];
  return (
    <>
    <div>
      <h2 className="mt-8 flex  justify-start font-bold">Career</h2>

      {dataStudy.map((data) => (
        <div
          className="md:h-40 h-64 flex flex-col items-start justify-start mt-6 mb-10 hover:shadow-lg hover:bg-[#4e377022] transition-all duration-300 hover:-translate-y-2"
          key={data.id}
        >
          <div >
            <h2 className="flex flex-row items-center justify-between text-justify gap-2 mb-3 font-bold">
              <FaAddressBook className="icons"></FaAddressBook>
              {data.title}
            </h2>

            <div className=" md:h-40 h-64 mt-[-32px] border-solid border-[1px] border-[#a3a3a3] w-[1px]  absolute"></div>
          </div>
          <div className="px-6 flex flex-col items-start justify-start">
            <p className="icons text-justify">{data.company}</p>
            <p className="icons text-justify">{data.description}</p>
            <p className="icons">{data.date}</p>
          </div>
        </div>
      ))}
    </div>
    <div>
    <h2 className="mt-8 flex  justify-start font-bold">Jobs</h2>

    {dataJobs.map((data) => (
      <div
        className="md:h-40 h-64 flex flex-col items-start justify-start mt-6 mb-10 hover:shadow-lg hover:bg-[#4e377022] transition-all duration-300 hover:-translate-y-2"
        key={data.id}
      >
        <div >
          <h2 className="flex flex-row items-center justify-between text-justify gap-2 mb-3 font-bold">
            <MdWork className="icons"></MdWork>
            {data.title}
          </h2>

          <div className=" md:h-40 h-64 mt-[-32px] border-solid border-[1px] border-[#a3a3a3] w-[1px]  absolute"></div>
        </div>
        <div className="px-6 flex flex-col items-start justify-start">
          <p className="icons text-justify">{data.company}</p>
          <p className="icons text-justify">{data.description}</p>
          <p className="icons">{data.date}</p>
        </div>
      </div>
    ))}
  </div>
  </>
  );
}
