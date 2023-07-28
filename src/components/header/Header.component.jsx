import "./header.styles.css";
const Header = () => {
  const openNewTabHandler = () => {
    window.open("https://google.com", "_blank");
  };
  const fullScreen = () => {
    if (document.fullscreenElement) {
      document.exitFullscreen();
    } else {
      document.documentElement.requestFullscreen();
    }
  };
  return (
    <div className="header-container shadow">
      <button className="close-tab"></button>
      <button className="open-new-tab" onClick={openNewTabHandler}></button>
      <button className="full-screen" onClick={fullScreen}></button>
    </div>
  );
};

export default Header;
