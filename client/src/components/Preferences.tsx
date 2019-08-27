import React from "react";
import StaticContent from "./StaticContent";

interface MyProps {
  // tslint:disable-next-line: no-any
  onSubmit?: (form: any) => void;
}

let isEmailValid = email => {
  // tslint:disable-next-line: max-line-length
  var emailCheck = /^[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?$/i;
  return emailCheck.test(email);
};

/* Class based Component */
class Preferences extends React.Component<MyProps> {

  state = {
    primaryEmailCheckbox: false,
    primaryEmailCheckboxDisabled: true,
    deviceTrackingCheckbox: false,
    secondaryEmailCheckbox: false,
    secondaryEmailCheckboxDisabled: true,
    primaryEmail: "",
    secondaryEmail: ""
  };

  primaryEmailCheckboxRef = React.createRef<HTMLInputElement>();
  secondaryEmailCheckboxRef = React.createRef<HTMLInputElement>();

  onPrimaryEmailChange = e => {
    this.setState({ primaryEmail: e.target.value });
    let checkbox = this.primaryEmailCheckboxRef.current;
    if (isEmailValid(e.target.value)) {
      checkbox.disabled = false;
      this.setState({ primaryEmailCheckboxDisabled: false });
    } else {
      checkbox.checked = false;
      checkbox.disabled = true;
    }
  }

  onSecondaryEmailChange = e => {
    this.setState({ secondaryEmail: e.target.value});
    let checkbox = this.secondaryEmailCheckboxRef.current;
    if (isEmailValid(e.target.value)) {
      checkbox.disabled = false;
      this.setState({ secondaryEmailCheckboxDisabled: false });
    } else {
      checkbox.checked = false;
      checkbox.disabled = true;
    }
  }

  onFormSubmit = e => {
    e.preventDefault();
    this.props.onSubmit(this.state);
  }

  render() {
    return (
      <div className="ui segment">
        <StaticContent />
        <form onSubmit={this.onFormSubmit} className="ui form">
          <h3>Email Address</h3>
          <div className="ui mini icon input">
            {/* tslint:disable-next-line: max-line-length */}
            <input type="email" value={this.state.primaryEmail} placeholder="Enter email..." onChange={this.onPrimaryEmailChange} />
          </div>
          &nbsp; &nbsp; {/* some space between email field and checkbox */}
          <div className="ui checkbox">
            {/* tslint:disable-next-line: max-line-length */}
            <input type="checkbox" disabled={this.state.primaryEmailCheckboxDisabled} ref={this.primaryEmailCheckboxRef} onChange={e => this.setState({ primaryEmailCheckbox: e.target.checked })} /><label> Continue to receive further email communications from DMD </label>
          </div>
          <h3>Device Tracking</h3>
          <div className="ui checkbox">
            {/* tslint:disable-next-line: max-line-length */}
            <input type="checkbox" onChange={e => this.setState({ deviceTrackingCheckbox: e.target.checked })} /><label> Continue to identify my device so relevant content can be delivered to me from DMD </label>
          </div>
          <p>If you have a preferred email address for communications from DMD please provide here</p>
          <div className="ui mini icon input">
            {/* tslint:disable-next-line: max-line-length */}
            <input type="email" value={this.state.secondaryEmail} placeholder="Enter email..." onChange={this.onSecondaryEmailChange} />
          </div>
          &nbsp; &nbsp; {/* some space between email field and checkbox */}
          <div className="ui checkbox">
            {/* tslint:disable-next-line: max-line-length */}
            <input type="checkbox" disabled={this.state.secondaryEmailCheckboxDisabled} ref={this.secondaryEmailCheckboxRef} onChange={e => this.setState({ secondaryEmailCheckbox: e.target.checked })} /><label> Continue to receive further email communications from DMD </label>
          </div>
          <br />
          <br />
          <div className="field">
            <button type="submit" className="ui button">Update my preferences </button>
          </div>
        </form >
      </div >
    );
  }
}

export default Preferences;
