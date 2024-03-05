import { useState } from "react";
import PlayLogo from "../static/images/play-button.svg";
import MoreInfo from "../static/images/more-info.svg";
import MuteIcon from "../static/images/mute.svg";
import UnmuteIcon from "../static/images/unmute.svg";
import ReactPlayer from "react-player";
import Button, { ButtonType } from "./Button/Button";

interface IHeader {
  name: string;
  overview: string;
}

const Header = ({ name, overview }: IHeader) => {
  const [isMuted, setIsMuted] = useState(true);

  return (
    <header className="header">
      <ReactPlayer
        playing={true}
        loop={true}
        width="100%"
        height="100%"
        volume={1}
        muted={isMuted}
        className="header__video"
        url="https://vimeo.com/134367421"
      />
      <h1 className="header__container-heading">{name}</h1>
      <Button
        buttonType={ButtonType.Primary}
        onClick={() => alert("not a movie!")}
        label={"Play"}
      >
        <img src={PlayLogo} alt="Play" />
      </Button>
      <Button buttonType={ButtonType.Secondary} label={"More Info"}>
        <img src={MoreInfo} alt="More Info" />
      </Button>
      <Button
        buttonType={ButtonType.IconRound}
        onClick={() => setIsMuted(!isMuted)}
        customClassName={"header__container-btnVolume"}
      >
        <img src={isMuted ? MuteIcon : UnmuteIcon} alt="Volume" />
      </Button>
      <p className="header__container-overview">{overview}</p>
      <div className="header__container--fadeBottom" />
    </header>
  );
};

export default Header;
