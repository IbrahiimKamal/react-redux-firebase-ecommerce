/** @jsxImportSource @emotion/react */

import { servicesData } from '../../utils/servicesData';
import AppCol from '../Responsive/AppCol/AppCol';
import {
  cardHeaderStyles,
  cardStyles,
  imgContainerStyles,
  imgStyles,
  textStyles,
  titleStyles,
} from './ServicesCard.styls';

const ServicesCard = () => {
  return (
    <>
      {servicesData.map(({ id, title, text, serviceImg }) => (
        <AppCol key={id} cols="col-10 col-md-6 col-lg-4 col-xl-3 mx-auto mb-3">
          <div css={cardStyles}>
            <div css={cardHeaderStyles}>
              <h3 css={titleStyles}>{title}</h3>
              <p css={textStyles}>{text}</p>
            </div>
            <div css={imgContainerStyles}>
              <img css={imgStyles} src={serviceImg} alt={title} />
            </div>
          </div>
        </AppCol>
      ))}
    </>
  );
};

export default ServicesCard;
