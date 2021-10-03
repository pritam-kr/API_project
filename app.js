const url = "https://reqres.in/api/users?page=1";
const btnUser = document.querySelector("#btn_user");

btnUser.addEventListener("click", (e) => {
  e.preventDefault();
  fetchData();
});

function fetchData() {
  fetch(url)
    .then((res) => {
      return res.json();
    })
    .then((data) => {
        console.log(data)
      var user = "";
      data.data.forEach((ecahUser) => {
        user += `
            
            <div class="user-card">
            <img src="${ecahUser.avatar}">
            <h2>${ecahUser.first_name} ${ecahUser.last_name}<span> <a href ="mailto:${ecahUser.email}"<i class="fas fa-envelope"></i></a></span></h2>
            </div>

            `;

            document.querySelector('.user-container').innerHTML = user
      });
    });
}
