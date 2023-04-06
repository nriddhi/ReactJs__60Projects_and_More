import { useSelector } from "react-redux";
import CreatePost from "../../components/createPost";
import {useGetUserDataQuery} from "../../store/Apislice"
import Header from "../../components/header";
import LeftHome from "../../components/home/left";
import RightHome from "../../components/home/right";
import SendVerification from "../../components/home/sendVerification";
import Stories from "../../components/home/stories";
import "./style.css";
export default function Home({setVisible}) {
  const { data, isLoading} = useGetUserDataQuery();

  if(isLoading) return 'Loading...';

  return (
    <div className="home">
      <Header />
      <LeftHome user={data} />
      <div className="home_middle">
        <Stories />
        <SendVerification user={data} setVisible={setVisible} />
        <CreatePost user={data} />
      </div>
      <RightHome user={data} />
    </div>
  );
}
