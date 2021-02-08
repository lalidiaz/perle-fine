import React, { useEffect, useState } from 'react';
//Components
import Scroll from '../components/Scroll';
import { motion, useTransform, useViewportScroll } from 'framer-motion';
import perle from '../images/perle2.jpeg';
import { Link } from 'react-router-dom';
import { MdArrowBack } from 'react-icons/md';

// const transition = { duration: 1.4, ease: [0.6, 0.1, -0.5, 0.9] };
const transition = { duration: 1.4, ease: [0.6, 0.01, -0.05, 0.9] };

const firstName = {
  animate: {
    y: 0,
    transition: {
      delayChildren: 0.6, //each letter.
      staggerChildren: 0.04,
      staggerDirection: -1 // al go from right to left.
    }
  }
};

const lastName = {
  animate: {
    y: 0,
    transition: {
      delayChildren: 0.6,
      staggerChildren: 0.04,
      staggerDirection: 1 // al go from left to right.
    }
  }
};

const letter = {
  initial: {
    y: 400
  },
  animate: {
    y: 0,
    transition: { duration: 1, ...transition }
  }
};

const Artist = ({ imageDetails }) => {
  // const opacity = useTransform(scrollYProgress, [0, 1], [1, 0]); //to make the image dissapear when scrolling
  const { scrollYProgress } = useViewportScroll();
  const scale = useTransform(scrollYProgress, [0, 1], [1, 1.15]);

  const [canScroll, setCanScroll] = useState(false);

  useEffect(() => {
    if (canScroll === false) {
      document.querySelector('body').classList.add('no-scroll');
    } else {
      document.querySelector('body').classList.remove('no-scroll');
    }
  }, [canScroll]);

  return (
    <motion.div
      onAnimationComplete={() => setCanScroll(true)}
      initial="initial"
      animate="animate"
      exit="exit"
      className="single"
    >
      <div className="container fluid">
        <div className="row center top-row">
          <div className="top">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{
                opacity: 1,
                y: 0,
                transition: { delay: 1.2, ...transition }
              }}
              className="details"
            >
              <div className="arrow">
                <Link to="/">
                  <MdArrowBack color="black" size={60} />
                </Link>
              </div>

              <div className="museum">
                <a
                  className="a"
                  href="http://www.perlefine.com/exhibitions.html"
                  target="_blank"
                >
                  Exhibitions
                </a>
              </div>
            </motion.div>
            <motion.div className="artist">
              <motion.span variants={firstName} className="first">
                <motion.span className="letters" variants={letter}>
                  P
                </motion.span>
                <motion.span className="letters" variants={letter}>
                  e
                </motion.span>
                <motion.span className="letters" variants={letter}>
                  r
                </motion.span>
                <motion.span className="letters" variants={letter}>
                  l
                </motion.span>
                <motion.span className="letters" variants={letter}>
                  e
                </motion.span>
              </motion.span>
              <motion.span variants={lastName} className="last">
                <motion.span className="letters" variants={letter}>
                  F
                </motion.span>
                <motion.span className="letters" variants={letter}>
                  i
                </motion.span>
                <motion.span className="letters" variants={letter}>
                  n
                </motion.span>
                <motion.span className="letters" variants={letter}>
                  e
                </motion.span>
              </motion.span>
            </motion.div>
          </div>
        </div>
        <div className="row bottom-row">
          <div className="bottom">
            <motion.div className="image-container-single">
              <motion.div
                initial={{
                  y: '-50%',
                  width: imageDetails.width,
                  height: imageDetails.height
                }}
                animate={{
                  y: 0,
                  width: '100%',
                  height: window.innerWidth > 1440 ? 800 : 400,
                  transition: { delay: 0.2, ...transition }
                }}
                className="thumbnail-single"
              >
                <motion.div
                  whileHover="hover"
                  transition={transition}
                  className="frame-single"
                >
                  <motion.img
                    //  style={{ opacity: opacity }}
                    style={{ scale: scale }}
                    initial={{ scale: 1.0 }}
                    animate={{
                      y: window.innerWidth > 1440 ? -1200 : 0,
                      transition: { delay: 0.2, ...transition }
                    }}
                    src={perle}
                    alt="perle-image"
                  />
                </motion.div>
              </motion.div>
            </motion.div>
          </div>
          <Scroll />
        </div>
      </div>
      <div className="detailed-information">
        <div className="container">
          <div className="row">
            <h2 className="title">
              "I never thought of myself as a student or teacher,
              <br /> but as a painter."
            </h2>
            <p>
              Perle Fine (Poule Feine)(1905–1988) was an American Abstract
              expressionist painter. Fine was most known by her combination of
              fluid and brushy rendering of the materials and her use of
              biomorphic forms encased and intertwined with irregular geometric
              shapes. <br />
              "...The very image of the Abstract Expressionist painter was a
              white, heterosexual male, and that this movement, which perceived
              itself as a glyph of individual freedom, constricted the entry of
              women, African Americans, and homosexuals, regardless of the
              nature and quality of their work." While Women have had a history
              of being left out of the arts, it was Samuel Kootz's, a New York
              Gallery owner that helped determine what art was mainstream,
              pronouncement that there would be no women artists in his gallery.
              To this which Fine promptly said, "I know I was as good as anybody
              else in there," However, Perle Fine was not the only female artist
              that was affected by this statement, artists such as Fannie
              Hillsmith and Lee Krasner were also deeply affected. Despite
              Kootz's statement, Fine had been in many solo and group shows
              during the late 1940s. Because of her success with these
              exhibitions, there was every implication that Fine was on the
              verge of success in the art world. "As the 1950s dawned ... there
              was little competition among artists either male or female, it was
              only when the door began to crack open that the gender of the
              artist began to play a more prominent role." Deirdre Robson has
              said that "The arts were gradually thought of less in terms of
              being part of the 'female' realm and more as an interest suitable
              for a hardheaded and successful businessman." Fines’ issues as a
              painter was not seen as cultural criticism that kept her on the
              brinks of Abstract Expressionism when it should’ve have had a
              place in the conversation but, it was the physical paintings
              themselves. She said it was always the painting rather than her
              being a woman and because of that, it pushed her into the artist
              she became. She battled with the canvas and solved problems in
              every piece. “Art Historian, Ann Eden Gibson says that by the
              early 1950s, Fine was right in the middle of Abstract
              Expressionism”.
            </p>
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default Artist;
