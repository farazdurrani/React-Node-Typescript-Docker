import React from "react";
import { Header, Segment, Image } from "semantic-ui-react";
// import logo from '../static/logo.png'
const logo = require("../static/logo.png");

const HeaderContent = () => (
  <Segment clearing={true}>
    <Header as="h6" floated="left">
        <Image
            style={{"fontSize": 25}}
            src={logo}
            as="a"
            href="https://stackoverflow.com/users/4828463/faraz-durrani?tab=profile"
            target="_blank"
        />
    </Header>
    <Header as="h3" floated="left">
        <br />&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; React/Node.js Prototype Application
    </Header>
  </Segment>
);
export default HeaderContent;