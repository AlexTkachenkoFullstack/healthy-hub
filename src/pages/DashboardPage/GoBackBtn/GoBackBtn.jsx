import { Link } from 'react-router-dom';
import { ReactComponent as Arrow } from '../../../assets/images/icons/arrow-right.svg'
export const GoBackBtn = () => {
  return (
    <Link to={'/'}>
      <Arrow style={{ transform: 'rotate(180deg)' }} />
    </Link>
  );
};
