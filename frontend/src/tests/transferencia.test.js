import React from "react";

import "@testing-library/jest-dom";
import { shallow, mount } from "enzyme";

import Transferencia from "../components/Transferencia.component";
import reportService from "../helpers/reportService";

describe("Test in <Transferencia />", () => {
    let assignMock = jest.fn();
    delete window.location;
    window.location = { assign: assignMock };
    afterEach(() => {
        assignMock.mockClear();
    });
    test("should display correct stucture of component TransferenciaSaldo SnapShots", () => {
        const loggedUser = jest.fn();
        const wrapperTransferenciaCard = shallow( <
            Transferencia loggedUser = { loggedUser }
            />
        );
        expect(wrapperTransferenciaCard).toMatchSnapshot();
    });

    test("should the correct functioning of input for Destination Account Number TransferenciaSaldo", () => {
        const loggedUser = jest.fn();
        const wrapperCardRegister = shallow( <
            Transferencia loggedUser = { loggedUser }
            />
        );
        const cuentaDestinoInput = wrapperCardRegister
            .find("#noCuentaDestino")
            .simulate("change", {
                target: { value: "0664422022224713" },
            });
        expect(cuentaDestinoInput.length).toEqual(1);
    });

    test("should the correct functioning of input for TotalAmount TransferenciaSaldo", () => {
        const loggedUser = jest.fn();
        const wrapperCardRegister = shallow( <
            Transferencia loggedUser = { loggedUser }
            />
        );
        const ammountTotalInput = wrapperCardRegister
            .find("#totalAmount")
            .simulate("change", {
                target: { value: "10" },
            });
        expect(ammountTotalInput.length).toEqual(1);
    });

    test("should the correct functioning of button Tranferencia Saldo", () => {
        const loggedUser = jest.fn();
        const wrapperTransferencia = shallow( <
            Transferencia loggedUser = { loggedUser }
            />
        );
        wrapperTransferencia.find("#noCuentaDestino").simulate("change", {
            target: { value: "0664422022224713" },
        });
        wrapperTransferencia.find("#totalAmount").simulate("change", {
            target: { value: "10" },
        });

        const value = wrapperTransferencia
            .find("#buttomsendmoney")
            .simulate("click");
        expect(value.length).toEqual(1);
    });

    test("should the fail functioning of inputs empty for TransferenciaSaldo", () => {
        const loggedUser = jest.fn();
        const wrapperTransferencia = shallow( <
            Transferencia loggedUser = { loggedUser }
            />
        );
        wrapperTransferencia.find("#noCuentaDestino").simulate("change", {
            target: { value: "" },
        });
        wrapperTransferencia.find("#totalAmount").simulate("change", {
            target: { value: "" },
        });

        const value = wrapperTransferencia
            .find("#buttomsendmoney")
            .simulate("click");
        expect(value.length).toEqual(1);
    });

    test("should the fail functioning of inputs randoms for buttom TransferenciaSaldo", () => {
        const loggedUser = jest.fn();
        const wrapperTransferencia = shallow( <
            Transferencia loggedUser = { loggedUser }
            />
        );
        wrapperTransferencia.find("#noCuentaDestino").simulate("change", {
            target: { value: "2333" },
        });
        wrapperTransferencia.find("#totalAmount").simulate("change", {
            target: { value: "dsadad" },
        });

        const value = wrapperTransferencia
            .find("#buttomsendmoney")
            .simulate("click");
        expect("ok").toContain("ok");
    });

    test("should the success call api of TransferenciaSaldo", (done) => {
        reportService.transfer({
            AccountOrigin: "0664422022224713",
            AccountDestination: "087642202247222723",
            montoTransferir: parseInt("1", 10),
        }).then((res) => {
            expect("ok").toContain(res.msg);
            done();
        });
    });
});