import React, {Fragment} from 'react';
import Header from "./Header";
import Sidebar from "./Sidebar";
import ContentsPosts from "./Contents-Posts";
import '../css/Back-Css-Inc';

function ContentsHome(props) {
    return (
        <Fragment>
            <Header></Header>
            <Sidebar></Sidebar>
            <ContentsPosts></ContentsPosts>
        </Fragment>
    );
}

export default ContentsHome;