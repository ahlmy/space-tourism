import styles from "./HomePage.module.css";
import { ExploreButton } from "@/components";

const HomePage = () => {
  return (
    <main>
      <div className={styles.home}>
        <div className={styles.desc}>
          <h2>So, you want to travel to</h2>
          <h1>Space</h1>
          <p>
            Let’s face it; if you want to go to space, you might as well
            genuinely go to outer space and not hover kind of on the edge of it.
            Well sit back, and relax because we’ll give you a truly out of this
            world experience!
          </p>
        </div>
        <div className={styles.btn}>
          <ExploreButton />
        </div>
      </div>
    </main>
  );
};
export default HomePage;
