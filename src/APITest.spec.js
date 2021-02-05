const { getUsers } = require("./testing/usersAPI");

beforeAll(() => {
  require("whatwg-fetch");
});

describe("Users API", () => {
  test("it returns an array of users", async () => {
    const expected = [
      {
        "id": 1,
        "firstName": "John",
        "lastName": "Doe",
        "email": "john.doe@gmail.com",
        "dob": 1595493789
      },
      {
        "id": 2,
        "firstName": "Michael",
        "lastName": "Tan",
        "email": "michael.tan@gmail.com",
        "dob": 9875456545
      },
      {
        "id": 3,
        "firstName": "Tommy",
        "lastName": "Cruise",
        "email": "tommy.cruise@gmail.com",
        "dob": 5486758123
      },
      {
        "id": 4,
        "firstName": "Jamie",
        "lastName": "Bond",
        "email": "Jamie.Bond@gmail.com",
        "dob": 5498758654
      },
      {
        "id": 5,
        "firstName": "Heime",
        "lastName": "Cruise",
        "email": "Heime.cruise@gmail.com",
        "dob": 8754897854
      },
      {
        "id": 6,
        "firstName": "Nicholas",
        "lastName": "Tan",
        "email": "Nicholas.Tan@gmail.com",
        "dob": 5849756859
      },
      {
        "id": 7,
        "firstName": "Lame",
        "lastName": "Tan",
        "email": "Lame.Tan@gmail.com",
        "dob": 2154685958
      },
      {
        "id": 8,
        "firstName": "Jane",
        "lastName": "Chan",
        "email": "Jane.Chan@gmail.com",
        "dob": 2457890532
      },
      {
        "id": 9,
        "firstName": "Heikie",
        "lastName": "Chuan",
        "email": "Heikie.Chuan@gmail.com",
        "dob": 3534123123
      },
      {
        "id": 10,
        "firstName": "Tink",
        "lastName": "Craze",
        "email": "Tink.Craze@gmail.com",
        "dob": 5489785489
      },
      {
        "id": 11,
        "firstName": "Tim",
        "lastName": "Cruise",
        "email": "Tim.cruise@gmail.com",
        "dob": 5486758123
      },
      {
        "id": 12,
        "firstName": "gekki",
        "lastName": "ccash",
        "email": "gekki.ccash@gmail.com",
        "dob": 5486758123
      },
      {
        "id": 13,
        "firstName": "jinne",
        "lastName": "chan",
        "email": "jinne.chan@gmail.com",
        "dob": 8754985678
      }
    ]

    const json = await getUsers("http://localhost:5000/users?_sort=id");

    expect(json).toMatchObject(expected);
  });

  describe("Users API", () => {
    test("it returns an array of users", async () => {
      const expectedPerPage = [
        {
          "id": 1,
          "firstName": "John",
          "lastName": "Doe",
          "email": "john.doe@gmail.com",
          "dob": 1595493789
        },
        {
          "id": 2,
          "firstName": "Michael",
          "lastName": "Tan",
          "email": "michael.tan@gmail.com",
          "dob": 9875456545
        },
        {
          "id": 3,
          "firstName": "Tommy",
          "lastName": "Cruise",
          "email": "tommy.cruise@gmail.com",
          "dob": 5486758123
        },
        {
          "id": 4,
          "firstName": "Jamie",
          "lastName": "Bond",
          "email": "Jamie.Bond@gmail.com",
          "dob": 5498758654
        },
        {
          "id": 5,
          "firstName": "Heime",
          "lastName": "Cruise",
          "email": "Heime.cruise@gmail.com",
          "dob": 8754897854
        },
        {
          "id": 6,
          "firstName": "Nicholas",
          "lastName": "Tan",
          "email": "Nicholas.Tan@gmail.com",
          "dob": 5849756859
        },
        {
          "id": 7,
          "firstName": "Lame",
          "lastName": "Tan",
          "email": "Lame.Tan@gmail.com",
          "dob": 2154685958
        },
        {
          "id": 8,
          "firstName": "Jane",
          "lastName": "Chan",
          "email": "Jane.Chan@gmail.com",
          "dob": 2457890532
        },
        {
          "id": 9,
          "firstName": "Heikie",
          "lastName": "Chuan",
          "email": "Heikie.Chuan@gmail.com",
          "dob": 3534123123
        },
        {
          "id": 10,
          "firstName": "Tink",
          "lastName": "Craze",
          "email": "Tink.Craze@gmail.com",
          "dob": 5489785489
        }
      ]

      const json = await getUsers("http://localhost:5000/users?_sort=id?_page=1&_limit=10");

      expect(json).toMatchObject(expectedPerPage);
    })})

});