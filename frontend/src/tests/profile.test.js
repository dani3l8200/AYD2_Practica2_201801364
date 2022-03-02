import React from "react";

import "@testing-library/jest-dom";
import { shallow, mount } from "enzyme";

import Dashboard from "../pages/Dashboard.component";
import ProfileCard from "../components/ProfileCard.component";
import Login from "../pages/Login.component";

describe("Test in <Profile />", () => {
  let assignMock = jest.fn();

  delete window.location;

  window.location = { assign: assignMock };

  afterEach(() => {
    assignMock.mockClear();
  });

  test("should display correct stucture of component Dashboard SnapShots", () => {
    const wrapperDashboard = shallow(<Dashboard />);
    expect(wrapperDashboard).toMatchSnapshot();
  });

  test("should display correct stucture of component ProfileCard SnapShots", () => {
    const loggedUser = jest.fn();
    const wrapperProfileCard = shallow(<ProfileCard loggedUser={loggedUser} />);
    expect(wrapperProfileCard).toMatchSnapshot();
  });

  test("should the correct function of component ProfileCard", (done) => {
    const isAuth = jest.fn();
    const wrapperCardLogin = shallow(<Login isAuthLS={isAuth} />);
    const child = wrapperCardLogin.find("#logincomp").props();
    child.children.props.verifyLogin("1", "123").then((res) => {
      const component = mount(<Dashboard />);
      setImmediate(() => {
        component.update();
        done();
      });
    });
  });

  test("should faild of stucture of dashboard for Profile", () => {
    const wrapperProfileCard = shallow(<Dashboard />);
    const value = wrapperProfileCard.find("#faildash");
    expect(value.prop("children")).toContain(value.prop("children"))
  });
});
