import { useContext } from 'react';
import { ChallengesContext } from '../contexts/ChallengesContext';
import styles from '../styles/components/Profile.module.css';

export function Profile(){

  const { level } = useContext(ChallengesContext);

  return(
    <div className={styles.profileContainer}>
      <img src="https://avatars.githubusercontent.com/u/54911601?s=460&u=a056f8fe18f0443495181df39b4daf0eb94d95b3&v=4" alt="Alan Junior"/>
      <div>
        <strong>Alan Junior</strong>
        <p>
          <img src="icons/up.svg" alt="Level"/>
          Level {level}
          </p>
      </div>
    </div>
  );
}