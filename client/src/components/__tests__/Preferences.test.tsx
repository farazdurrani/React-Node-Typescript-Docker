import * as React from "react";
import { shallow, mount } from "enzyme";
import Preferences from "../../components/Preferences";
describe("Preferences container", () => {

    test("Preferences exists:", () => {
        const wrapper = shallow(<Preferences onSubmit={() => { return null; }} />);
        expect(wrapper.exists()).toBe(true);
    });

    test("User enters an email address and checks the box to receive further communications", () => {
        const wrapper = mount(<Preferences onSubmit={() => { return null; }} />);
        expect(wrapper.state("primaryEmailCheckbox")).toEqual(false);
        expect(wrapper.state("primaryEmailCheckboxDisabled")).toEqual(true);
        // DONOT LOSE THIS LINE. expect(wrapper.find("input").at(1).prop("disabled")).toEqual(true);
        wrapper.find("input").at(0).simulate("change", {
            target: {
                value: "a@b.c",
            }
        });
        expect(wrapper.state("primaryEmail")).toEqual("a@b.c");
        wrapper.find("input").at(1).simulate("change", {
            target: {
                checked: true,
            }
        });
        expect(wrapper.state("primaryEmailCheckbox")).toEqual(true);
        expect(wrapper.state("primaryEmailCheckboxDisabled")).toEqual(false);
    });

    test("User enters secondary email address and checks the box to receive further communications", () => {
        const wrapper = mount(<Preferences onSubmit={() => { return null; }} />);
        expect(wrapper.state("secondaryEmailCheckbox")).toEqual(false);
        expect(wrapper.state("secondaryEmailCheckboxDisabled")).toEqual(true);
        // DONOT LOSE THIS LINE. expect(wrapper.find("input").at(1).prop("disabled")).toEqual(true);
        wrapper.find("input").at(3).simulate("change", {
            target: {
                value: "a@b.c",
            }
        });
        expect(wrapper.state("secondaryEmail")).toEqual("a@b.c");
        wrapper.find("input").at(4).simulate("change", {
            target: {
                checked: true,
            }
        });
        expect(wrapper.state("secondaryEmailCheckbox")).toEqual(true);
        expect(wrapper.state("secondaryEmailCheckboxDisabled")).toEqual(false);
    });

    test("User enters improper email address and checkbox remains disabled", () => {
        const wrapper = mount(<Preferences onSubmit={() => { return null; }} />);
        expect(wrapper.state("primaryEmailCheckbox")).toEqual(false);
        expect(wrapper.state("primaryEmailCheckboxDisabled")).toEqual(true);
        // DONOT LOSE THIS LINE. expect(wrapper.find("input").at(1).prop("disabled")).toEqual(true);
        wrapper.find("input").at(0).simulate("change", {
            target: {
                value: "a@b.", // missing a value after DOT makes it an invalid email address
            }
        });
        expect(wrapper.state("primaryEmail")).toEqual("a@b.");
        // wrapper.find("input").at(1).simulate("change", {
        //     target: {
        //         checked: true,
        //     }
        // });
        expect(wrapper.state("primaryEmailCheckbox")).toEqual(false);
        expect(wrapper.state("primaryEmailCheckboxDisabled")).toEqual(true);
    });

    test("User enters improper secondary email address and checkbox remains disabled", () => {
        const wrapper = mount(<Preferences onSubmit={() => { return null; }} />);
        expect(wrapper.state("secondaryEmailCheckbox")).toEqual(false);
        expect(wrapper.state("secondaryEmailCheckboxDisabled")).toEqual(true);
        // DONOT LOSE THIS LINE. expect(wrapper.find("input").at(1).prop("disabled")).toEqual(true);
        wrapper.find("input").at(3).simulate("change", {
            target: {
                value: "a@b.",
            }
        });
        expect(wrapper.state("secondaryEmail")).toEqual("a@b.");
        expect(wrapper.state("secondaryEmailCheckbox")).toEqual(false);
        expect(wrapper.state("secondaryEmailCheckboxDisabled")).toEqual(true);
    });
});