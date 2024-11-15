// Fetch

// First Way
// fetch("s").then((response) =>
//   response
//     .json()
//     .then((data) => data.map((user) => console.log(user.name, user.address)))
//     .catch((Error) => console.log(console.error("Error 404")))
// );

// Second Way

// async function get() {
//   const response = await fetch("https://jsonplaceholder.typicode.com/users");
//   const data = await response.json();
//   data.map((user) => console.log(user.name, user.address));
// }
// get()
//   .then((response) => console.log("api fetched"))
//   .catch((error) => console.error("Error 404"));

// Third Way
