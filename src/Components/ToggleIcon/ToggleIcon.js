import { useState } from 'react';

import './ToggleIcon.css';

const ToggleIcon = (props) => {
  const [state, setState] = useState(false);
  const toggleStyles = state ? 'wrapper menu--is-revealed' : 'wrapper';

  return (
    <div style={props.style} className={toggleStyles}>
      <button className="menu-toggle" onClick={() => setState(!state)}>
        <span className="icon-bars"></span>
      </button>
    </div>
  );
};

export default ToggleIcon;
