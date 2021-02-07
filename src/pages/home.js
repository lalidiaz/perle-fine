import * as React from 'react';
import { Link } from 'react-router-dom';
import ProgressiveImage from 'react-progressive-image';
import yayoi from '../images/yayoi.jpg';

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
                <Link to={`/artist/yayo-kusama`}>
                  <ProgressiveImage src={yayoi} placeholder={yayoi}>
                    {(src) => <img src={src} alt="Yayoi kusama" />}
                  </ProgressiveImage>
                </Link>
              </div>
            </div>
            <div className="information">
              <div className="title">Yayoi Kusama</div>
              <div className="location">
                <span>28.538336</span>
                <span>-81.379234</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
  </>
);

export default Home;
