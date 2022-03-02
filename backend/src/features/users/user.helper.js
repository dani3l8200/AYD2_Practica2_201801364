

const app = require("../../app");
const supertest = require("supertest");
const api = supertest(app);
require("../../utils/db/database");

const server = app.listen("8885", () =>
  console.log(`Server on: ${app.get("port")}`)
);

const initialUser = [
  {
    firstnames: "test pablo",
    lastnames: "userTest",
    dpi: "8855411",
    email: "test@gmail.com",
    password: "123",
    accountNumber: 3,
    balance: 700,
  },
  {
    firstnames: "test chin",
    lastnames: "userTest",
    dpi: "988886",
    email: "test@gmail.com",
    password: "123",
    accountNumber: 4,
    balance: 780,
  },
];


const initialUserNames = [{ accountNumber: 1 }, { accountNumber: 2 }]
const initialCredentials = [{ accountNumber: 1, pass: "123" }, { accountNumber:2, pass: "123" }]

module.exports = {
  api,
  initialUser,
  initialCredentials,
  initialUserNames,
  server
}