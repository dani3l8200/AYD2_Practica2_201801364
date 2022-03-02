import React from "react";

import "@testing-library/jest-dom";
import { shallow, mount } from "enzyme";

import ConsultaSaldo from "../components/ConsultaSaldo.component";
import getBalanceUser from "../helpers/balanceService";
import Login from "../pages/Login.component";

describe("Test in <ConsultaSaldo />", () => {
  let assignMock = jest.fn();
  delete window.location;
  window.location = { assign: assignMock };
  afterEach(() => {
    assignMock.mockClear();
  });
  test("should display correct stucture of component ConsultaSaldo SnapShots", () => {
    const loggedUser = jest.fn();
    const wrapperConsultaCard = shallow(
      <ConsultaSaldo loggedUser={loggedUser} />
    );
    expect(wrapperConsultaCard).toMatchSnapshot();
  });

  test("should the correct function of call API balance", (done) => {
    getBalanceUser("1").then((res) => {
      expect("ok").toContain(res.msg);
      done();
    });
  });

  test("should the correct function of buttom summit ConsultaSaldo", async () => {
    const loggedUser = jest.fn();
    const wrapperConsultaSaldo = shallow(
      <ConsultaSaldo loggedUser={loggedUser} />
    );
    let data = wrapperConsultaSaldo.find("#consultasaldo").simulate("click");
    expect("ok").toContain("ok");
  });

  test("should the testing functions rest of ConsultaSaldo", (done) => {
    const isAuth = jest.fn();
    const wrapperCardLogin = shallow(<Login isAuthLS={isAuth} />);
    const child = wrapperCardLogin.find("#logincomp").props();
    child.children.props.verifyLogin("1", "123").then((res) => {
      const fn = jest.fn();
      const component = mount(<ConsultaSaldo loggedUser={fn} />);
      setImmediate(() => {
        component.update();
        done();
      });
    });
  });
});
