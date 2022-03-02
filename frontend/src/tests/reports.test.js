import React from "react";

import "@testing-library/jest-dom";
import { shallow, mount } from "enzyme";

import Reporte from "../components/Reporte.component";
import { getReport } from "../helpers/reportService";
import GenerateReport from "../utils/generateReport.component";
import Login from "../pages/Login.component";

describe("Test in <Reports/>", () => {
  let assignMock = jest.fn();
  delete window.location;
  window.location = { assign: assignMock };
  afterEach(() => {
    assignMock.mockClear();
  });
  test("should display correct stucture of component Reports SnapShots", () => {
    const fn = jest.fn();
    const wrapperCardLogin = shallow(<Reporte loggedUser={fn} />);
    expect(wrapperCardLogin).toMatchSnapshot();
  });

  // test("should display correct stucture of component GenerateReport SnapShots", () => {
  //   const loggedUser = jest.fn();
  //   const transacEmitidas = jest.fn();
  //   const transacRecibidas = jest.fn();
  //   const wrapperCardLogin = shallow(
  //     <GenerateReport
  //       loggedUser={loggedUser}
  //       transacEmitidas={transacEmitidas}
  //       transacRecibidas={transacRecibidas}
  //     />
  //   );
  //   expect(wrapperCardLogin).toMatchSnapshot();
  // });

  // test("should the fall call api of GetReports", (done) => {
  //   getReport({
  //     NoAccount: "0495192021555622",
  //   }).then((res) => {
  //     expect("ok").toContain("ok");
  //     done();
  //   });
  // });

  test("should testing funtions of Component Reporte", (done) => {
    const isAuth = jest.fn();
    const wrapperCardLogin = shallow(<Login isAuthLS={isAuth} />);
    const child = wrapperCardLogin.find("#logincomp").props();
    child.children.props.verifyLogin("1", "123").then((res) => {
      const fn = jest.fn();
      const component = mount(<Reporte loggedUser={fn} />);
      setImmediate(() => {
        component.update();
        done();
      });
    });
  });

  // test("should fail the testing buttom generateReport", (done) => {
  //   const isAuth = jest.fn();
  //   const wrapperCardLogin = shallow(<Login isAuthLS={isAuth} />);
  //   const child = wrapperCardLogin.find("#logincomp").props();
  //   child.children.props.verifyLogin("0495192021555622", "1234").then((res) => {
  //     const fn = jest.fn();
  //     const component = shallow(<Reporte loggedUser={fn} />);
  //     component.find("#buttondownload").simulate("click");
  //     expect("ok").toContain("ok");
  //     done();
  //   });
  // });
});
