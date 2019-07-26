import React from "react";
import serviceConfig from "../config/service";

class App extends React.Component {
    render() {
        return (
            <div className="App">
                Assalam o Alaikum
                <hr />
                Alhamdulillah
                <br />
                {serviceConfig.key1}
            </div>
        );
    }
}
export default App;
