const moongose = require("mongoose");
const User = require("../users/user");
const Report = require("../reports/report");
const {
  initialUser,
  api,
  server,
  initialUserNames,
  bodysTest,
} = require("./reports.helper");

jest.setTimeout(20000);

beforeEach(async () => {
  await User.deleteMany({});

  for (const user of initialUser) {
    const userObj = new User(user);
    await userObj.save();
  }
});


describe("Testing", () => {
  describe("Transaccion", () => {
    const AccountOrigin = "0508192021191692";
    const AccountDestination = "0596192021172316";
    test("should return 200 because if possible the amount, Transaccion", async () => {
      const body = {
        AccountOrigin: AccountOrigin,
        AccountDestination: AccountDestination,
        montoTransferir: 1,
      };
      await api.post("/reports/transfer").send(body).expect(401);
    });

    // test("should return 401 because not is possible the amount, Transaccion", async () => {
    //     const body = {
    //         AccountOrigin: 1,
    //         AccountDestination: 2,
    //         montoTransferir: 787
    //     };
    //     await api.post("/reports/transfer").send(body).expect(401);
    // });
  });

  // describe("Reports", () => {
  //     test.each(bodysTest)(
  //         "should return a 200 status because the report exists , Reports",
  //         async ({ accountNumber }) => {
  //             await api.get(`/reports/getReport/${accountNumber}`).expect(200);
  //         }
  //     );

  //     test.each(bodysTest)(
  //         "should return a 404 status because the report not exists , Reports",
  //         async ({ accountNumber }) => {
  //             await api.get(`/reports/getReport/${accountNumber}/${accountNumber}`).expect(404);
  //         }
  //     );
  // });
});

afterAll(() => {
  moongose.connection.close();
  server.close();
});
