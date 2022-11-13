import Link from 'next/link';
import OtherHousesRoundedIcon from '@mui/icons-material/OtherHousesRounded';
import backstyle from './styles/back.css';
const Back = () => {
  return (
    <div className={backstyle.content}>
        <Link href="/">
          <OtherHousesRoundedIcon className={backstyle.icon}/>
          <p className={backstyle.p}>TOP</p>   
        </Link>
    </div>
  );
}

export default Back;