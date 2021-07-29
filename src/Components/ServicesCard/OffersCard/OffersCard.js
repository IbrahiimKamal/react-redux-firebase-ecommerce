/** @jsxImportSource @emotion/react */

import AppCol from '../../Responsive/AppCol/AppCol';

import { offersInfo } from '../../../utils/offersInfo';

import {
  cardStyles,
  imgStyles,
  textStyles,
  titleStyles,
} from './OffersCard.styles';

const OffersCard = () => {
  return (
    <>
      {offersInfo.map(({ id, title, text, offersImg }) => (
        <AppCol key={id} cols="col-11 col-md-6 col-lg-4 mx-auto mb-4">
          <div css={cardStyles}>
            <img src={offersImg} alt="avatar" css={imgStyles} />
            <h4 css={titleStyles}>{title}</h4>
            <p css={textStyles}>{text}</p>
          </div>
        </AppCol>
      ))}
    </>
  );
};

export default OffersCard;
