const user = {
    email: "user@user.com",
    password: "odsfofjowf"
}

for (const key in user) {
    console.log(user[key]);
}

const batman = {
  name: "Bruce",
  parents: false,
  city: "Gotham",
  age: 50,
};
for (const propiedad in batman) {
  console.log(
    "La propiedad " + propiedad + " tiene como valor " + batman[propiedad]
  );
}