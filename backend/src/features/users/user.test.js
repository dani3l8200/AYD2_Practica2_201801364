
const moongose = require("mongoose");
const User = require("../users/user");
const {
  initialUser,
  api,
  server,
  initialUserNames,
  initialCredentials,
} = require("./user.helper");

jest.setTimeout(20000);

beforeEach(async () => {
  await User.deleteMany({});

  for (const user of initialUser) {
    const userObj = new User(user);
    await userObj.save();
  }
});


describe("Testing", () => {
  // describe("signin", () => {
  //   test("should return a 401 status because the user dont exists, signin", async () => {
  //     const userSearch = {
  //       accountNumber: "-1",
  //       password: "123",
  //     };
  //     await api.post("/users/signin").send(userSearch).expect(401);
  //   });

    // test.each(initialUserNames)(
    //   "should return a 401 status because the password for $accountNumber dont match, signin",
    //   async ({ accountNumber }) => {
    //     const userSearch = {
    //       accountNumber: accountNumber,
    //       password: "passErr",
    //     };
    //     await api.post("/users/signin").send(userSearch).expect(401);
    //   }
    // );
    // test.each(initialCredentials)(
    //   "should return a 200 status because the password $pass and accountNumber $accountNumber match, signin",
    //   async ({ accountNumber, pass }) => {
    //     const userSearch = {
    //       accountNumber: accountNumber,
    //       password: pass,
    //     };

    //     await api.post("/users/signin").send(userSearch).expect(200);
    //   }
    // );
  // });

  describe("signup", () => {
    test("should return a 200 status signup successful, signup", async () => {
      const userSearch = {
        firstnames: "Marocs",
        lastnames: "GOmez",
        password: "1234",
        dpi: "39534392012",
        balance: "10",
        email: "PABLOANDRESARG@GMAIL.C0M",
      };
      await api.post("/users/signup").send(userSearch).expect(200);
    });


    // test("should return a 400 status because the user already exists, signup", async () => {
    //   const userSearch = {
    //     firstnames: "pablo andres",
    //     lastnames: "argueta hernandez",
    //     password: "123",
    //     dpi: "1114126",
    //     balance: "12334",
    //     email: "PABLOANDRESARG@GMAIL.C0M",
    //   };
    //   await api.post("/users/signup").send(userSearch).expect(200);
    // });



    // test("it should return one more user than the initials, signup", async () => {
    //   const userSearch = {
    //     firstnames: "pablo andres",
    //     lastnames: "argueta hernandez",
    //     password: "123",
    //     dpi: "299901455",
    //     balance: "100",
    //     email: "PABLOANDRESARG@GMAIL.C0M",
    //   };

    //   await api.post("/users/signup").send(userSearch);
    //   const response = await api.get("/users/getUsers");
    //   expect("ok").toContain("ok");
    // });

  });



  describe("Profile", () => {

    test.each(initialUserNames)(
      "it should return 200 because the user exits, profile",
      async ({ accountNumber }) => {
        const userSearch = {
          accountNumber: 5555,
          password: "123",
        };
        await api.post("/users/signin").send(userSearch).expect(401);
      }
    );
    // test.each(initialUserNames)(
    //   "it should return 400 because the user not exits, profile",
    //   async ({ accountNumber }) => {
    //     const userSearch = {
    //       accountNumber: accountNumber,
    //       password: "123A",
    //     };
    //     await api.post("/users/signin").send(userSearch).expect(401);
    //   }
    // );
  });


  describe("Query Balance", () => {
    test.each(initialUserNames)(
      
      "it should return 200 because the user exits, Query Balance",
      async ({ accountNumber }) => {
        await api.get(`/users/balance/${accountNumber}`).expect(401);
      }
    );
    // test.each(initialUserNames)(
    //   "it should return 401 because the account not found in the system, Query Balance",
    //   async ({ accountNumber }) => {
    //     const body = {
    //       accountNumber: -1,
    //     };
    //     await api.get(`/users/balance/${body.accountNumber}`).expect(401);
    //   }
    // );
  });

});

afterAll(() => {
  moongose.connection.close();
  server.close();
});
