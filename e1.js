const user = {
  username: "prabin",
  price: 900,
  welcomemessage: function () {
    console.log(`${user.username}, welcome here`);
    console.log(this);
  },
};

user.welcomemessage();
user.username = "sam";
user.welcomemessage();
