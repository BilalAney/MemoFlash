/** @format */

import { Link, Outlet, useNavigate } from "react-router-dom";
import styles from "../styles/Homepage.module.css";
import Input from "../components/MinorComponents/Input";
import logo from "../assets/Logo512.png";
import { useRef, useState } from "react";
import facebook from "../assets/interface_icons/facebook.svg";
import google from "../assets/interface_icons/google.svg";
import github from "../assets/interface_icons/github.svg";
import linkedin from "../assets/interface_icons/linkedin.svg";
const facts = [
  {
    id: 0,
    questionPart: "DID YOU KNOW?",
    factPart: `When you use flashcards to memorize things, you will be rich, have six packs, and become incredibly strong! Try it and see YOURSELF!`,
  },
  {
    id: 1,
    questionPart: "FUNNY FACT",
    factPart: `When you lose the chance to try my app, you will be a loser person. When you willingly don't use my app, you have lost your ambition. Go and login now and see YOURSELF!`,
  },
  {
    id: 2,
    questionPart: "VALUABLE ADVICE",
    factPart: `Don't waste your time learning how to do things, instead DO THE THINGS YOURSELF! Login now and see YOURSELF!`,
  },
  {
    id: 3,
    questionPart: "SURPRISING FACT",
    factPart: `Did you know that eating chocolate while coding can increase your productivity by 999%? Try it out now and see the magic happen! Try and see YOURSELF!`,
  },
  {
    id: 4,
    questionPart: "INTERESTING FACT",
    factPart: `Research shows that listening to classical music while debugging can help you find bugs faster. Give it a try and become a debugging maestro! Try and see YOURSELF!`,
  },
  {
    id: 5,
    questionPart: "MIND-BLOWING FACT",
    factPart: `Scientists have discovered that staring at the color blue for 10 minutes every day can boost your creativity. Dive into our app now and unleash your inner artist! Try and see YOURSELF!`,
  },
  {
    id: 6,
    questionPart: "AMAZING DISCOVERY",
    factPart: `Recent studies indicate that drinking water upside down can increase your IQ by 50 points. Try it today and become a genius! Try and see YOURSELF!`,
  },
  {
    id: 7,
    questionPart: "UNBELIEVABLE TRUTH",
    factPart: `Believe it or not, watching cat videos for an hour a day can improve your problem-solving skills. Embrace the cuteness and level up your brainpower! Try and see YOURSELF!`,
  },
  {
    id: 8,
    questionPart: "SHOCKING REVELATION",
    factPart: `You'll be amazed to learn that smelling rosemary can enhance your memory by 75%. Inhale the scent of success and unlock your full potential! Try and see YOURSELF!`,
  },
];

export default function Homepage() {
  //TODO:: Remove all refs, they are useless now
  const randomNumberFrom0To4 = Math.round(Math.random() * 4);
  const currentRandomNumber = useRef(randomNumberFrom0To4);

  const leftSectionStyles = {
    backgroundImage: `url("/src/assets/bgs/bg${currentRandomNumber.current}.jpg")`,
    backgroundPosition: "center",
  };

  const fact = facts.at(Math.floor(Math.random() * facts.length));
  const currentFact = useRef(fact);

  //  Why useRef? because the whole page will get re-rendered with eac keytroke in the input fields,
  //  So I want to keep the fact and the background not changed accross re-renders

  return (
    <main className={styles.Homepage}>
      <section className={styles.leftSection} style={leftSectionStyles}>
        <div className={styles.factBox}>
          <h3>{currentFact.current.questionPart}</h3>
          <p>{currentFact.current.factPart}</p>
        </div>
      </section>

      <section className={styles.rightSection}>
        <img src={logo} />
        <Outlet />

        <h3 className={styles.middleBar}>
          OR <span>CONTINUE WITH</span>
        </h3>
        <div className={styles.linkMethods}>
          <img src={google} />
          <img src={facebook} />
          <img src={github} />
          <img src={linkedin} />
        </div>
        <footer>All rights reserved MemoFlash 2024</footer>
      </section>
    </main>
  );
}
