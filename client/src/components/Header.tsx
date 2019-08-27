import React from "react";
import { Header, Segment, Image } from "semantic-ui-react";
// import logo from '../static/logo.png'
const logo = require("../static/logo.png");

const HeaderContent = () => (
  <Segment clearing={true}>
    <Header as="h6" floated="left">
        <Image
            style={{"fontSize": 50}}
            src={logo}
            as="a"
            href="https://www.dmdconnects.com/"
            target="_blank"
        />
    </Header>
    <Header as="h3" floated="left">
        <br />&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; DMD Preference Center
    </Header>
  </Segment>
);
export default HeaderContent;