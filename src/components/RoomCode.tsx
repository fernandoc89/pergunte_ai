import copyImg from '../assets/images/copy.svg';

import '../styles/room-code.scss';

type RoomCodeProps = {
  code: string;
}

export function RoomCode(props: RoomCodeProps ) {
  function copyRoomCodeToClipBoard() {
    navigator.clipboard.writeText(props.code);
  }
  return (
    <button className="room-code" onClick={copyRoomCodeToClipBoard}>
      <div>
        <img src={copyImg} alt="Copy room code" />
      </div>
      <span>Sala #-MfJbAii_IE4cJB-A2Q2</span>
    </button>
  )
}