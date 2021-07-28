/** @jsxImportSource @emotion/react */

import { useHistory } from 'react-router';

import { cardStyles, footerStyles, imgStyles } from './CategoryCard.styles';

const CategoryCard = ({ category }) => {
  const { categoryTitle, categoryImg, path } = category;

  const history = useHistory();

  return (
    <div css={cardStyles} onClick={() => history.push(path)}>
      <img src={categoryImg} alt={categoryTitle} css={imgStyles} />
      <div css={footerStyles}>
        <h4>{categoryTitle}</h4>
      </div>
    </div>
  );
};

export default CategoryCard;
