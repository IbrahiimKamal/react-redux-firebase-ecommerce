/** @jsxImportSource @emotion/react */

import { socialIcons } from '../../utils/socialIcons';

import { iconsListStyles } from './SocialIcons.styles';

const SocialIcons = ({ styles }) => {
  return (
    <ul css={[iconsListStyles, styles]}>
      {socialIcons.map((socialIcon) => (
        <li key={socialIcon.id}>
          <a href={socialIcon.path} target="_blank" rel="noreferrer">
            <span>{socialIcon.icon}</span>
          </a>
        </li>
      ))}
    </ul>
  );
};

export default SocialIcons;
