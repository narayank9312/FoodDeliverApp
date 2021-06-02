import classes from './Header.module.css';
import mealsImage from '../../utils/images/meals.jpg';
import HeaderCartButton from './HeaderCartButton';
const Header = () => {
  return (
    <div>
      <div className={classes.header}>
        <h1>NavneetMeals</h1>
        <HeaderCartButton />
      </div>
      <div className={classes['main-image']}>
        <img src={mealsImage} alt="delicious food" />
      </div>
    </div>
  );
};

export default Header;
