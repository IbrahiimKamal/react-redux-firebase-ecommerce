/** @jsxImportSource @emotion/react */

import { Link } from 'react-router-dom';

import {
  cardFooterStyles,
  cardStyles,
  fruitImageStyles,
  imgContainerStyles,
  newStyles,
  commonStyles,
} from './MealCard.styles';

import fish from '../../Assets/fish.jpg';
import beefImage from '../../Assets/beef.jpg';
import Button from '../Button/Button';

const MealCard = () => {
  return (
    <section className="py-5">
      <div className="container">
        <div className="row">
          <div className="col-10 col-md-6 col-lg-4 col-xl-3 mx-auto">
            <div css={cardStyles}>
              {/* card image */}
              <Link to="/" css={imgContainerStyles}>
                <img css={fruitImageStyles} src={fish} alt="fruit" />
              </Link>
              {/* card footer */}
              <div css={cardFooterStyles}>
                <p css={commonStyles}>Baked salmon with fennel</p>
                <p css={commonStyles}>Egyptian</p>
                <p css={commonStyles}>$22</p>
                <Button />
                <span css={newStyles}>new</span>
              </div>
            </div>
          </div>

          <div className="col-10 col-md-6 col-lg-4 col-xl-3 mx-auto">
            <div css={cardStyles}>
              {/* card image */}
              <Link to="/" css={imgContainerStyles}>
                <img css={fruitImageStyles} src={fish} alt="fruit" />
              </Link>
              {/* card footer */}
              <div css={cardFooterStyles}>
                <p css={commonStyles}>Baked salmon with fennel</p>
                <p css={commonStyles}>Egyptian</p>
                <p css={commonStyles}>$22</p>
                <Button />
                <span css={newStyles}>new</span>
              </div>
            </div>
          </div>

          <div className="col-10 col-md-6 col-lg-4 col-xl-3 mx-auto">
            <div css={cardStyles}>
              {/* card image */}
              <Link to="/" css={imgContainerStyles}>
                <img css={fruitImageStyles} src={fish} alt="fruit" />
              </Link>
              {/* card footer */}
              <div css={cardFooterStyles}>
                <p css={commonStyles}>Baked salmon with fennel</p>
                <p css={commonStyles}>Egyptian</p>
                <p css={commonStyles}>$22</p>
                <Button />
                <span css={newStyles}>new</span>
              </div>
            </div>
          </div>

          <div className="col-10 col-md-6 col-lg-4 col-xl-3 mx-auto">
            <div css={cardStyles}>
              {/* card image */}
              <Link to="/" css={imgContainerStyles}>
                <img css={fruitImageStyles} src={fish} alt="fruit" />
              </Link>
              {/* card footer */}
              <div css={cardFooterStyles}>
                <p css={commonStyles}>Baked salmon with fennel</p>
                <p css={commonStyles}>Egyptian</p>
                <p css={commonStyles}>$22</p>
                <Button />
                <span css={newStyles}>new</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default MealCard;
