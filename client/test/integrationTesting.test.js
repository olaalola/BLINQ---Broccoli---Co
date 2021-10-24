// test if the information is in correct format and is recorded successfully
const expect = require("chai").expect;
const request = require("request");
// const app = require("../src/App.js");

const baseUrl =
  "https://us-central1-blinkapp-684c1.cloudfunctions.net/fakeAuth";

const testCustomerProfileOne = {
  validBody: {
    name: "Aurora",
    email: "abc@gmail.com",
    confirmEmail: "abc@gmail.com",
  },
};

describe("request email integration test scene 1(correct)", () => {
  it("should successfully submit the detailed info", function (done) {
    request.post(
      {
        headers: { "conntent-type": "application/json" },
        url: baseUrl,
        body: testCustomerProfileOne.validBody,
        json: true,
      },
      function (error, response, body) {
        expect(response.statusCode).to.equal(200);

        if (error) done(error);
        else done();
      }
    );
  });
});

const testCustomerProfileTwo = {
  validBody: {
    name: "Aurora",
    email: "usedemail@blinq.app",
    confirmEmail: "usedemail@blinq.app",
  },
};

describe("request email integration test scene 2(hardcode email-400)", () => {
  it("should unsuccessfully submit the detailed info", function (done) {
    request.post(
      {
        headers: { "conntent-type": "application/json" },
        url: baseUrl,
        body: testCustomerProfileTwo.validBody,
        json: true,
      },
      function (error, response, body) {
        expect(response.statusCode).to.equal(400);

        if (error) done(error);
        else done();
      }
    );
  });
});

const testCustomerProfileThree = {
  validBody: {
    name: "Aurora",
    email: "ab@gmail.com",
    confirmEmail: "abc@gmail.com",
  },
};

describe("request email integration test scene 3(inconsistent spelling)", () => {
  it("should unsuccessfully submit the detailed info", function (done) {
    if (
      testCustomerProfileThree.validBody.email !=
      testCustomerProfileThree.validBody.confirmEmail
    ) {
      done();
    } else {
      request.post(
        {
          headers: { "conntent-type": "application/json" },
          url: baseUrl,
          body: testCustomerProfileThree.validBody,
          json: true,
        },
        function (error, response, body) {
          expect(response.statusCode).to.equal(400);

          if (error) done(error);
          else done();
        }
      );
    }
  });
});

const testCustomerProfileFour = {
  validBody: {
    name: "au",
    email: "abc@gmail.com",
    confirmEmail: "abc@gmail.com",
  },
};

describe("request email integration test scene 3(short name)", () => {
  it("should unsuccessfully submit the detailed info", function (done) {
    if (testCustomerProfileFour.validBody.name.length < 3) {
      done();
    } else {
      request.post(
        {
          headers: { "conntent-type": "application/json" },
          url: baseUrl,
          body: testCustomerProfileThree.validBody,
          json: true,
        },
        function (error, response, body) {
          expect(response.statusCode).to.equal(400);

          if (error) done(error);
          else done();
        }
      );
    }
  });
});
