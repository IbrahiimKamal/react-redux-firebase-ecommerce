/** @jsxImportSource @emotion/react */

import { socialIcons } from '../../utils/socialIcons';

import { iconsListStyles } from './SocialIcons.styles';

const SocialIcons = ({ styles }) => {
  return (
    <ul css={[iconsListStyles, styles]}>
      {socialIcons.map((socialIcon) => (
        <li key={socialIcon.id}>
          <a href="https://www.google.com/">
            <span>{socialIcon.icon}</span>
          </a>
        </li>
      ))}
    </ul>
  );
};

export default SocialIcons;
