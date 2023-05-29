import Link from 'next/link';
import KeyboardBackspaceRoundedIcon from '@mui/icons-material/KeyboardBackspaceRounded';
import OtherHousesRoundedIcon from '@mui/icons-material/OtherHousesRounded';
import backstyle from './styles/back.css';
import { FC } from 'react';
import { IconButton } from '@mui/material';
type Props={
  link:string;
}
const Back:FC<Props> = ({link}) => {
  return (
    <div className={backstyle.content}>
        <Link href={link}>
          <IconButton>
            <KeyboardBackspaceRoundedIcon sx={{fontSize:30,color:"black"}}/>
          </IconButton>
        </Link>
    </div>
  );
}

export default Back;