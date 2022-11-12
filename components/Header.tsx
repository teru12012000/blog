import Headerlink from "./link";
import head from "./styles/header.css";
import GitHubIcon from '@mui/icons-material/GitHub';
import TwitterIcon from '@mui/icons-material/Twitter';
import { SNSLink } from "../data/linkdata";

const Header = () => {
  return (
    <header className={head.header}>
      <h1>TERUSIのBLOG</h1>
      <Headerlink link={SNSLink}>
        <GitHubIcon/>
        <TwitterIcon/>
        <TwitterIcon/>
      </Headerlink>
    </header>
  );
}

export default Header;