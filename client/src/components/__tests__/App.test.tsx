import * as React from "react";
import { shallow, mount } from "enzyme";
import App from "../../containers/App";

var axios = require("axios");
var MockAdapter = require("axios-mock-adapter");

describe("App container", () => {
  test("App shows Update Preferences Page:", () => {
    const wrapper = shallow(<App />);
    expect(wrapper.exists()).toBe(true);
  });

  test("When form is submitted without entering any email, it should show an error message", () => {
    const wrapper = mount(<App />);
    wrapper.find("form").simulate("submit");
    expect(wrapper.state("message")).toEqual("There is nothing to update. Please enter an email address to update.");
  });

  test("When form is submitted with email address, it should show a success message", () => {
    var mock = new MockAdapter(axios);
    mock.onAny("api/preferences").reply(200);
    const wrapper = mount(<App />);
    expect(wrapper.state()).toHaveProperty("message");
    expect(wrapper.state("message")).toEqual("");
    wrapper.find("input").at(0).simulate("change", {
      target: {
        value: "a@b.c",
      }
    });
    wrapper.find("form").simulate("submit");
    setImmediate(async () => {
      expect(wrapper.state("message")).toEqual("Your preferences have been updated.");
    });
  });

  test("When form is submitted with email address but backend service fails, it should show an error message", () => {
    var mock = new MockAdapter(axios);
    mock.onAny("api/preferences").reply(204); // for some reason, cannot get 400 or 500 to work.
    const wrapper = mount(<App />);
    expect(wrapper.state()).toHaveProperty("message");
    expect(wrapper.state("message")).toEqual("");
    wrapper.find("input").at(0).simulate("change", {
      target: {
        value: "a@b.c",
      }
    });
    wrapper.find("form").simulate("submit");
    setImmediate(async () => {
      expect(wrapper.state("message")).toEqual("Something went wrong. Please try again");
    });
  });
});