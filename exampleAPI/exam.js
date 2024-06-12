const formThemUser = document.getElementById("formThemUser");
const danhSachUser = document.getElementById("danhSachUser");
const danhSachUserArr = [];
const callAPI = "https://reqres.in/api/users";

formThemUser.addEventListener("submit", function (event) {
  event.preventDefault();

  const first_name = document.getElementById("first_name").value;
  const email = document.getElementById("email").value;

  const newUser = {
    first_name: first_name,
    email: email,
  };

  fetch(callAPI)
    .then((response) => response.json())
    .then((data) => {
      danhSachUserArr.push(...data.data);
      danhSachUserArr.push(newUser);

      renderDanhSachUser();
      formThemUser.reset();
    })
    .catch((error) => console.error("Error fetching data:", error));
});

function renderDanhSachUser() {
  danhSachUser.innerHTML = "";

  danhSachUserArr.forEach(function (user) {
    const li = document.createElement("li");
    li.textContent = `${user.first_name} - ${user.email}`;
    danhSachUser.appendChild(li);
  });
}
