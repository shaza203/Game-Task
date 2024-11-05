import { Ui } from "./ui.js";

export class Details {
  constructor(id) {
    this.ui = new Ui();
    document.getElementById("btnClose").addEventListener("click", () => {
      document.querySelector(".games").classList.remove("d-none");
      document.querySelector(".details").classList.add("d-none");
    });
    this.getDetails(id);
  }
  async getDetails(gamesId) {
    const loading = document.querySelector(".loading");
    loading.classList.remove("d-none");

    const options = {
      method: "GET",
      headers: {
        "X-RapidAPI-Key": "29f773e617msh1d0d33b56cbc9dcp1862bfjsncb4c71dd9d58",
        "X-RapidAPI-Host": "free-to-play-games-database.p.rapidapi.com",
      },
    };

    const api = await fetch(
      `https://free-to-play-games-database.p.rapidapi.com/api/game?id=${gamesId}`,
      options
    );
    const response = await api.json();
    this.ui.displayDetails(response);
    loading.classList.add("d-none");
  }
}
