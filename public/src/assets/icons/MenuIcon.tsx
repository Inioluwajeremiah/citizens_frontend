const HamburgerMenuIcon = ({ width = 24, height = 24, color = "#000" }) => (
  <svg
    width={width}
    height={height}
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    // onClick={onClick}
    style={{ cursor: "pointer" }}
  >
    <rect x="3" y="6" width="18" height="2" rx="1" fill={color} />
    <rect x="3" y="11" width="18" height="2" rx="1" fill={color} />
    <rect x="3" y="16" width="18" height="2" rx="1" fill={color} />
  </svg>
);

export default HamburgerMenuIcon;
