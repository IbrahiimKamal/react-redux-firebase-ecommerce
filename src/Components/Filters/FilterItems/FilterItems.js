/** @jsxImportSource @emotion/react */

import { useState } from 'react';

import { filterCategories } from '../../../utils/filterCategories';
import lineImg from '../../../Assets/images/line1.png';

import {
  itemStyle,
  lineStyle,
  listStyle,
  titleStyle,
} from './FilterItems.styles';

const FilterItems = ({ handleChange }) => {
  const [activeIndex, setActiveIndex] = useState(0);

  const onClickHandler = (text, index) => {
    handleChange(text);
    setActiveIndex(index);
  };

  return (
    <div css={listStyle}>
      <h3 css={titleStyle}>Categories</h3>
      <img css={lineStyle} src={lineImg} alt="line" />

      <ul>
        {filterCategories.map((category, index) => (
          <li
            key={category.categoryName}
            css={itemStyle}
            onClick={(e) => onClickHandler(e.target.textContent, index)}
            className={activeIndex === index ? 'active' : ''}
          >
            {category.categoryName}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default FilterItems;
