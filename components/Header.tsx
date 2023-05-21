import Headerlink from "./link";
import head from "./styles/header.css";
import GitHubIcon from '@mui/icons-material/GitHub';
import TwitterIcon from '@mui/icons-material/Twitter';
import { SNSLink } from "../data/linkdata";

const Header = () => {
  return (
    <header className={head.header}>
      <h1 className={head.titletxt}>TERUSIの技術勉強まとめ(コーディング編)</h1>
      <Headerlink link={SNSLink}>
        <GitHubIcon/>
        <TwitterIcon/>
      </Headerlink>
    </header>
  );
}

export default Header;