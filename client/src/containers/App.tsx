import React from "react";
import axios from "axios";
import Header from "../components/Header";
import Footer from "../components/Footer";
import Preferences from "../components/Preferences";

interface MyForm {
    primaryEmailCheckbox: boolean;
    deviceTrackingCheckbox: boolean;
    secondaryEmailCheckbox: boolean;
    primaryEmail: string;
    secondaryEmail: string;
}

interface MyState {
    message: string;
}

class App extends React.Component<{}, MyState> {

    state: MyState = { message: "" };

    onFormSubmit = async (form: MyForm) => {
        if (form.primaryEmail !== "" || form.secondaryEmail !== "") {
            const response = await axios.post("api/preferences", form);
            // tslint:disable-next-line: no-console
            // console.log("faraz", response.data);
            this.setState(
                {
                    // tslint:disable-next-line: max-line-length
                    message: response.status === 200 ? "Your preferences have been updated." : "Something went wrong. Please try again"
                });
    } else {
    this.setState({ message: "There is nothing to update. Please enter an email address to update." });
}
    }

render() {
    return (
        <div className="ui container">
            <Header />
            <Preferences onSubmit={this.onFormSubmit} />
            <h4>{this.state.message}</h4>
            <Footer />
        </div>
    );
}
}
export default App;