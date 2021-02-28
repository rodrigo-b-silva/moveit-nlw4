import { useContext } from 'react';
import { ChallengeContext } from '../contexts/ChallengesContexts';
import styles from '../styles/components/Profile.module.css';

export function Profile() {
  const { level } = useContext(ChallengeContext);

  return (
    <div className={styles.profileContainer}>
      <img src="http://github.com/rodrigo-b-silva.png" alt="Profile" />
      <div>
        <strong>Rodrigo Barbosa</strong>
        <p>
          <img src="icons/level.svg" alt="level"/>
          Level { level }
        </p>
      </div>
    </div>
  )
}
