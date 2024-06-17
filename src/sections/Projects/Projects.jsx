import styles from './ProjectsStyles.module.css';
import Spotify from '../../assets/Spotify.png';
import freshBurger from '../../assets/fresh-burger.png';
import ChatApplication from '../../assets/Chat Application.jpeg';
import fitLift from '../../assets/fitlift.png';
import ProjectCard from '../../common/ProjectCard';

function Projects() {
  return (
    <section id="projects" className={styles.container}>
      <h1 className="sectionTitle">Projects</h1>
      <div className={styles.projectsContainer}>
        <ProjectCard
          src={Spotify}
          link="https://github.com/Aryamnsls/SpotifyClone.github.io"
          h3="Spotify"
          p="Streaming App"
        />
        <ProjectCard
          src={freshBurger}
          link="https://github.com/Aryamnsls/React-Series-/tree/main/Reciepe%20Web%20App"
          h3="Recipe Website"
          p="Food Restaurant"
        />
        <ProjectCard
          src={ChatApplication}
          link="https://github.com/Aryamnsls/nextjs-chat"
          h3="Chat Application"
          p="NextJs WebApp"
        />
        <ProjectCard
          src={fitLift}
          link="https://github.com/Aryamnsls/React-Series-/tree/main/Fit-Tracker-Web-App"
          h3="FitLift"
          p="Fitness App"
        />
      </div>
    </section>
  );
}

export default Projects;
