import React from "react";
import { Segment } from "semantic-ui-react";

const FooterContent = () => (
    <Segment clearing={true}>
        <div className="ui vertical footer segment">
            <div className="ui container">
                <a href="https://github.com/farazdurrani/React-Node-Typescript-Docker">Source Code</a>
            </div>
        </div>
    </Segment>
);

export default FooterContent;