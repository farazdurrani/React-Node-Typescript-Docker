import * as React from "react";
import { shallow } from "enzyme";
import StaticContent from "../StaticContent";

describe("StaticContent container", () => {
  test("StaticContent shows content:", () => {
    const result = shallow(<StaticContent />).contains("TODO:");
    expect(result).toBeTruthy();
  });
});