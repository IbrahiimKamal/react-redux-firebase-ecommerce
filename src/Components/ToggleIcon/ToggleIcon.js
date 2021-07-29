import './ToggleIcon.css';

const ToggleIcon = ({ style, isSidebarActive, setIsSidebarActive }) => {
  const toggleStyles = isSidebarActive
    ? 'wrapper menu--is-revealed'
    : 'wrapper';

  return (
    <div style={style} className={toggleStyles}>
      <button
        className="menu-toggle"
        onClick={() => setIsSidebarActive(!isSidebarActive)}
      >
        <span className="icon-bars"></span>
      </button>
    </div>
  );
};

export default ToggleIcon;
