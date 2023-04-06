import { Feeling, LiveVideo, Photo } from "../../svg";
import UserMenu from "../header/userMenu";
import {setHidden, setVisible} from '../../store/Appslice';
import "./style.css";
import { useDispatch, useSelector } from 'react-redux';

export default function CreatePost({ user }) {
  const dispatch = useDispatch();

  return (
    <div className="createPost">
      <div className="createPost_header">
        <img src={user?.user?.picture} alt="" />
        <div className="open_post hover2"
         onClick={() => {
          dispatch(setVisible());
        }}>
          What's on your mind, {user?.user?.name} ?
        </div>
      </div>
      <div className="create_splitter"></div>
      <div className="createPost_body">
        <div className="createPost_icon hover1">
          <LiveVideo color="#f3425f" />
          Live Video
        </div>
        <div className="createPost_icon hover1">
          <Photo color="#4bbf67" />
          Photo/Video
        </div>
        <div className="createPost_icon hover1">
          <Feeling color="#f7b928" />
          Feeling/Activity
        </div>
      </div>
    </div>
  );
}
