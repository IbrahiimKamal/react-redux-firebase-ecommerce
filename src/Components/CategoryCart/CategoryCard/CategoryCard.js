/** @jsxImportSource @emotion/react */

import { useHistory } from 'react-router';
import { LazyLoadImage } from 'react-lazy-load-image-component';

import { cardStyles, footerStyles, imgStyles } from './CategoryCard.styles';

const CategoryCard = ({ category }) => {
  const { categoryTitle, categoryImg, path } = category;

  const history = useHistory();

  return (
    <div css={cardStyles} onClick={() => history.push(path)}>
      {/* <img src={categoryImg} alt={categoryTitle} css={imgStyles} /> */}
      <LazyLoadImage
        src={categoryImg}
        alt={categoryTitle}
        css={imgStyles}
        effect="blur"
        className="lazy-load-image-background lazy-load-image-loaded"
      />
      <div css={footerStyles}>
        <h4>{categoryTitle}</h4>
      </div>
    </div>
  );
};

export default CategoryCard;
