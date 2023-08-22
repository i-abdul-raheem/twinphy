
export const Header = ({text}) => {
  const goBack = () => {
    window.history.back();
  };
  return (
    <header className='header bg-white'>
      <div className='container'>
        <div className='main-bar'>
          <div className='left-content'>
            <a onClick={goBack} className='back-btn'>
              <i className='fa-solid fa-arrow-left'></i>
            </a>
            <h4 className='title mb-0'>{text}</h4>
          </div>
          <div className='mid-content'></div>
          <div className='right-content'></div>
        </div>
      </div>
    </header>
  );
};
