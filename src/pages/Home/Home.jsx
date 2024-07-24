
import AboutMe from "./AboutMe/AboutMe";
import Career from "./Career/Career";
import Projects from "./MyProjects/MyProjects";
import ProfileSection from "./ProfileSection/ProfileSection";

export default function Home() {
  return (
    <>
      
      <main className="container m-auto my-10 flex md:flex-row flex-col">
        <ProfileSection></ProfileSection>
        <section className="w-[70%] h-full m-auto mb-2 mt-3 md:mt-10 p-2 lg:mr-14">

         <AboutMe></AboutMe>
         <Projects></Projects>  
         <Career></Career>
        </section>

      </main>
     
    </>
  );
}
