const profileCard = document.getElementById("profile-card");
const container = document.getElementById("container");

async function fetchData() {
  const response = await fetch("https://dummyjson.com/users/");
  const data = await response.json();
  const users = data.users;

  console.log(users);
  bindData(users);
}

fetchData();

function bindData(users) {
  users.forEach((user) => {
    const cardClone = profileCard.cloneNode(true);
    const titless = cardClone.querySelector("#title");
    const imgs = cardClone.querySelector("#user-img");
    const userId = cardClone.querySelector("#userId");
    const userEmailss = cardClone.querySelector("#email");
    titless.innerHtml = `${user.firstName} ${user.lastName}`;
    userEmailss.innerHtml = user.email;
    userId.innerHtml = user.id;
    imgs.src = user.image;
    container.appendChild(cardClone);
    let dataClone = container.appendChild(cardClone);
    // console.log(cardClone);
    console.log(dataClone);
  });
}
