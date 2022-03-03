import React from "react";

import "@testing-library/jest-dom";
import { shallow } from "enzyme";

import registerService from "../helpers/registerService";
import Register from "../pages/Register.component";
import RegisterCard from "../components/RegisterCard.component";

describe("Test in <Register />", () => {
    test("should display correct stucture of component Register SnapShots", () => {
        const wrapperRegister = shallow( < Register / > );
        expect(wrapperRegister).toMatchSnapshot();
    });

    test("should display correct stucture of component RegisterLogin SnapShots", () => {
        const wrapperRegister = shallow( < RegisterCard / > );
        expect(wrapperRegister).toMatchSnapshot();
    });

    test("should the correct functioning of input for First Name CardRegister", () => {
        const wrapperCardRegister = shallow( < RegisterCard / > );
        const firstNameInput = wrapperCardRegister
            .find("#nameUser")
            .simulate("change", {
                target: { value: "Juan Perez" },
            });
        expect(firstNameInput.length).toEqual(1);
    });

    test("should the correct functioning of input for Last Name CardRegister", () => {
        const wrapperCardRegister = shallow( < RegisterCard / > );
        const lastNameInput = wrapperCardRegister
            .find("#lastNameUser")
            .simulate("change", {
                target: { value: "Roman" },
            });
        expect(lastNameInput.length).toEqual(1);
    });

    test("should the correct functioning of input for Last Name CardRegister", () => {
        const wrapperCardRegister = shallow( < RegisterCard / > );
        const dpiInput = wrapperCardRegister.find("#dpiUser").simulate("change", {
            target: { value: "299084456" },
        });
        expect(dpiInput.length).toEqual(1);
    });

    test("should the correct functioning of input for Amount CardRegister", () => {
        const wrapperCardRegister = shallow( < RegisterCard / > );
        const amountInput = wrapperCardRegister
            .find("#initialAmount")
            .simulate("change", {
                target: { value: "49992" },
            });
        expect(amountInput.length).toEqual(1);
    });

    test("should the correct functioning of input for Email CardRegister", () => {
        const wrapperCardRegister = shallow( < RegisterCard / > );
        const emailInput = wrapperCardRegister.find("#email").simulate("change", {
            target: { value: "dani3l25948@gmail.com" },
        });
        expect(emailInput.length).toEqual(1);
    });

    test("should the correct functioning of input for Password CardRegister", () => {
        const wrapperCardRegister = shallow( < RegisterCard / > );
        const passwordInput = wrapperCardRegister
            .find("#password")
            .simulate("change", {
                target: { value: "1234" },
            });
        expect(passwordInput.length).toEqual(1);
    });

    test("should the correct functioning of input for Account Number CardRegister", () => {
        const wrapperCardRegister = shallow( < RegisterCard / > );
        let noAccountInput = wrapperCardRegister
            .find("#noAccount2")
            .simulate("change", {
                target: { value: "34112232" },
            });
        expect(noAccountInput.length).toEqual(1);
    });

    test("should the correct functioning of inputs empty in CardRegister", () => {
        const wrapperCardRegister = shallow( < RegisterCard / > );
        wrapperCardRegister.find("#nameUser").simulate("change", {
            target: { value: "" },
        });
        wrapperCardRegister.find("#lastNameUser").simulate("change", {
            target: { value: "" },
        });
        wrapperCardRegister.find("#dpiUser").simulate("change", {
            target: { value: "" },
        });
        wrapperCardRegister.find("#initialAmount").simulate("change", {
            target: { value: "" },
        });
        wrapperCardRegister.find("#email").simulate("change", {
            target: { value: "" },
        });
        wrapperCardRegister.find("#password").simulate("change", {
            target: { value: "" },
        });
        const btn = wrapperCardRegister.find("#buttomregister").simulate("click");
        Promise.resolve();
        expect(btn.length).toEqual(1);
    });

    test("should the correct functioning of buttom success CardRegister", async() => {
        const wrapperCardRegister = shallow( < RegisterCard / > );
        wrapperCardRegister.find("#nameUser").simulate("change", {
            target: { value: "Juan Daniel" },
        });
        wrapperCardRegister.find("#lastNameUser").simulate("change", {
            target: { value: "Roman" },
        });
        wrapperCardRegister.find("#dpiUser").simulate("change", {
            target: { value: "299038111248" },
        });
        wrapperCardRegister.find("#initialAmount").simulate("change", {
            target: { value: "4552" },
        });
        wrapperCardRegister.find("#email").simulate("change", {
            target: { value: "dani3l25948@gmail.com" },
        });
        wrapperCardRegister.find("#password").simulate("change", {
            target: { value: "1234" },
        });
        const btn = wrapperCardRegister.find("#buttomregister").simulate("click");
        Promise.resolve();
        expect(btn.length).toEqual(1);
    });

    test("should the error functioning of buttom CardRegister", async() => {
        const wrapperCardRegister = shallow( < RegisterCard / > );
        wrapperCardRegister.find("#nameUser").simulate("change", {
            target: { value: "Juan Daniel" },
        });
        wrapperCardRegister.find("#lastNameUser").simulate("change", {
            target: { value: "Roman" },
        });
        wrapperCardRegister.find("#dpiUser").simulate("change", {
            target: { value: "2990381112" },
        });
        wrapperCardRegister.find("#initialAmount").simulate("change", {
            target: { value: "4552" },
        });
        wrapperCardRegister.find("#email").simulate("change", {
            target: { value: "dani3l25948@gmail.com" },
        });
        wrapperCardRegister.find("#password").simulate("change", {
            target: { value: "1234" },
        });
        const btn = wrapperCardRegister.find("#buttomregister").simulate("click");
        Promise.resolve();
        expect(btn.length).toEqual(1);
    });

    test("should the success call api of Register", (done) => {
        registerService.registerUser({
            firstnames: "Juan Danie",
            lastnames: "Roman",
            dpi: "299056145121326",
            balance: "293",
            email: "testin2939@mail.com",
            password: "1234",
        }).then((res) => {
            expect("funciona").toContain("funciona");
            done();
        });
    });
});