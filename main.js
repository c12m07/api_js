let c = console.log;
let $container = document.getElementById("container__cards");
let fragmento = document.createDocumentFragment();
let url = "https://larnu-dev-upy5mhs63a-rj.a.run.app/api/v1/categories";

function cardsAsync() {
  async function getData() {
    try {
      let response = await axios.get(url),
        json = await response.data.communityCategories;

      json.forEach((e) => {
        const card = document.createElement("div");
        card.className = "container__user";
        card.setAttribute(
          "style",
          ` 
            background-image: url(${e.background});
            background-color: ${e.backgroundColor};
          `
        );

        card.innerHTML = `
          <img src="${e.icon}" alt="" srcset="">
          <h3>${e.name}</h3>
          <p>Total Quizzes: ${e.totalQuizzes}</p>
          <p>User: ${e.users}</p>
          <a href="https://www.larnu.com" target="_blank" >Go to LarnU</a>
        `;

        fragmento.appendChild(card);
      });

      $container.appendChild(fragmento);
    } catch (error) {
      let message = error.statusText || "Ocurrio un Error";
    }
  }
  getData();
}

cardsAsync();
