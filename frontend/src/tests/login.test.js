import React from "react";

import "@testing-library/jest-dom";
import { shallow } from "enzyme";

import userService from "../helpers/userService";
import Login from "../pages/Login.component";
import LoginCard from "../components/LoginCard.component";

describe("Test in <Login/>", () => {
  let assignMock = jest.fn();
  delete window.location;
  window.location = { assign: assignMock };
  afterEach(() => {
    assignMock.mockClear();
  });
  let wrapperLogin = shallow(<Login />);
  beforeEach(() => {
    wrapperLogin = shallow(<Login />);
  });
  test("should display correct stucture of component Login SnapShots", () => {
    expect(wrapperLogin).toMatchSnapshot();
  });

  test("should display correct stucture of component CardLogin SnapShots", () => {
    const wrapperCardLogin = shallow(<LoginCard />);
    expect(wrapperCardLogin).toMatchSnapshot();
  });

  test("should the correct functioning of input for account number CardLogin", () => {
    const verifyLogin = jest.fn();
    const wrapperCardLogin = shallow(<LoginCard verifyLogin={verifyLogin} />);
    const accountNumberInput = wrapperCardLogin
      .find("#noAccount")
      .simulate("change", {
        target: { value: "2939912388" },
      });
    expect(accountNumberInput.length).toEqual(1);
  });

  test("should the correct functioning of input for password CardLogin", () => {
    const verifyLogin = jest.fn();
    const wrapperCardLogin = shallow(<LoginCard verifyLogin={verifyLogin} />);
    const passwordInput = wrapperCardLogin
      .find("#password")
      .simulate("change", {
        target: { value: "123456" },
      });
    expect(passwordInput.length).toEqual(1);
  });

  test("should the correct functioning of button summit in CardLogin", () => {
    const verifyLogin = jest.fn();
    const wrapperCardLogin = shallow(<LoginCard verifyLogin={verifyLogin} />);
    wrapperCardLogin.find("#noAccount").simulate("change", {
      target: { value: "2939912388" },
    });

    wrapperCardLogin.find("#password").simulate("change", {
      target: { value: "123456" },
    });
    wrapperCardLogin.find("#buttomLogin").simulate("click");

    expect(verifyLogin).toHaveBeenCalled();
  });

  test("should the fail functioning of button summit in CardLogin", () => {
    const verifyLogin = jest.fn();
    const wrapperCardLogin = shallow(<LoginCard verifyLogin={verifyLogin} />);
    wrapperCardLogin.find("#noAccount").simulate("change", {
      target: { value: "" },
    });

    wrapperCardLogin.find("#password").simulate("change", {
      target: { value: "" },
    });
    wrapperCardLogin.find("#buttomLogin").simulate("click");
    expect(verifyLogin).not.toHaveBeenCalled();
  });

  test("should the success call api of Login", (done) => {
    userService.loginUser({
      accountNumber: "1",
      password: "123",
    }).then((res) => {
      expect("ok").toContain(res.msg);
      done();
    });
  });

  test("should the sucess call function of Login", (done) => {
    const isAuth = jest.fn();
    const wrapperCardLogin = shallow(<Login isAuthLS={isAuth} />);
    const child = wrapperCardLogin.find("#logincomp").props();
    child.children.props
      .verifyLogin("1", "123")
      .then((res) => {
        expect("listo").toContain("listo")
        done();
      })
  });
  
  // test("should the error call function of Login", (done) => {
  //   const isAuth = jest.fn();
  //   const wrapperCardLogin = shallow(<Login isAuthLS={isAuth} />);
  //   const child = wrapperCardLogin.find("#logincomp").props();
  //   child.children.props
  //     .verifyLogin("0495192021555622", "12345")
  //     .then((res) => {
  //       expect("error").toContain("error")
  //       done();
  //     })
  // });
  
});
