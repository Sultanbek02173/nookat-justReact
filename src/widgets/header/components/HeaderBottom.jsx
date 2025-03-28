import logo from "../../../shared/images/logo.png";
import HeaderMenu from './HeaderMenu';

const HeaderBottom = () => {

 

  return (
    <div 
    className='headerBottom'
    >
      <div className="headerBottom_img">
        <h3>НООКАТ РАЙОНДУК МАМЛЕКЕТТИК АДМИНИСТРАЦИЯСЫ</h3>
        <img src={logo} alt="Logo" />
        <h3>НООКАТСКАЯ РАЙОННАЯ ГОСУДАРСТВЕННАЯ АДМИНИСТРАЦИЯ</h3>
      </div>
      <HeaderMenu />
    </div>
  );
};

export default HeaderBottom;
