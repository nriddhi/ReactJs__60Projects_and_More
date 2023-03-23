import Header from "../../components/header/Header";
import Leftsidebar from "../../components/leftsidebar/LeftSidebar";
import RightSidebar from "../../components/rightsidebar/RightSidebar";
import Timeline from "../../components/timeline/Timeline";

export default function Home() {
  return (
    <>
      <div className="theme-layout">
        <Header />
        <section>
          <div className="gap gray-bg">
            <div className="container-fluid">
              <div className="row">
                <div className="col-lg-12">
                  <div className="row" id="page-contents">
                    <Leftsidebar />
                    <Timeline />
                    <RightSidebar />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
    </>
  );
}
