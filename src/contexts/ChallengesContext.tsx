import {createContext, ReactNode, useEffect, useState} from 'react';
import challenges from '../../challenges.json';

interface Challenge{
  type: 'body';
  description: string;
  amount: number;
}

interface ChallengesContextData{
  level: number;
  currentExperience: number;
  experienceToNextLevel: number;
  challengeCompleted: number;
  activeChallenge: Challenge;
  levelup: () => void;
  startNewChallenge: () => void;
  resetChallenge: () => void;
  completeChallenge: () => void;
}


interface ChallengeProviderProps{
  children:ReactNode;
}

export const ChallengesContext = createContext({} as ChallengesContextData)

export function ChallengesProvider({children}: ChallengeProviderProps){
  const [level, setLevel] = useState(1);
  const [currentExperience, setCurrentExperience ] = useState(0);
  const [challengeCompleted, setChallengeComplete ] = useState (0);

  const [activeChallenge, setActiveChallenge] = useState(null)

  const experienceToNextLevel = Math.pow((level + 1) * 4, 2)

  useEffect(() => {
    Notification.requestPermission();
  }, [])

  function levelup(){
    setLevel(level + 1);
  }

  function startNewChallenge(){
    const randomChallengeIndex = Math.floor(Math.random() * challenges.length)
    const challenge = challenges[randomChallengeIndex];

    setActiveChallenge(challenge)

    if(Notification.permission === 'granted'){
      new Notification('Novo desafio',{
        body: `Valendo ${challenge.amount}xp!`
      })
    }
  }

  function resetChallenge(){
    setActiveChallenge(null);
  }

  function completeChallenge(){
    if(!activeChallenge){
      return;
    }

    const { amount } = activeChallenge;
    let finalExperience = currentExperience + amount;

    if(finalExperience >= experienceToNextLevel){
      finalExperience = finalExperience - experienceToNextLevel;
      levelup();
    }

    setCurrentExperience(finalExperience);
    setActiveChallenge(null);
    setChallengeComplete(challengeCompleted + 1);
  }

  return(
    <ChallengesContext.Provider 
      value={{ 
        level, 
        currentExperience,
        experienceToNextLevel,
        challengeCompleted,
        levelup,
        startNewChallenge,
        activeChallenge,
        resetChallenge,
        completeChallenge
      }}
    >
      {children}
    </ChallengesContext.Provider>
  )
}