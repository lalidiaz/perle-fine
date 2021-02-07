import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import ProgressiveImage from 'react-progressive-image';
import yayoi from '../images/yayoi.jpg';

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
                <Link to={`/artist/yayoi-kusama`}>
                  <ProgressiveImage src={yayoi} placeholder={yayoi}>
                    {(src) => (
                      <motion.img
                        whileHover={{ scale: 1.1 }}
                        transition={transition}
                        src={src}
                        alt="yayoi-kusama"
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
              <div className="title">Yayoi Kusama</div>
              <div className="location">
                <span>28.538336</span>
                <span>-81.379234</span>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </main>
  </>
);

export default Home;
