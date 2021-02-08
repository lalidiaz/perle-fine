import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import ProgressiveImage from 'react-progressive-image';
import perle from '../images/perle2.jpeg';

const transition = { duration: 0.6, ease: [0.43, 0.13, 0.23, 0.96] };

const Home = ({ imageDetails, image }) => (
  <>
    <main>
      <div className="container">
        <div className="row center">
          <div className="image-container">
            <div
              className="thumbnail"
              ref={image}
              style={{
                width: imageDetails.width,
                height: imageDetails.height
              }}
            >
              <div className="frame">
                <Link to={`/artist/perle`}>
                  <ProgressiveImage src={perle} placeholder={perle}>
                    {(src) => (
                      <motion.img
                        // whileTap={{ scale: 1.0 }}
                        // whileHover={{ scale: 1.1 }}
                        transition={transition}
                        src={src}
                        alt="elaine"
                      />
                    )}
                  </ProgressiveImage>
                </Link>
              </div>
            </div>
            <motion.div
              className="information"
              exit={{ opacity: 0 }}
              transition={transition}
            >
              <div className="art">
                <span>
                  Abstract <span>&#8212;</span> Expressionism
                </span>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </main>
  </>
);

export default Home;
