class Pojistenec {
  constructor(jazyk = "cs-CZ") {
    const zaznamyZeStorage = localStorage.getItem("zaznamy");
    this.zaznamy = zaznamyZeStorage ? JSON.parse(zaznamyZeStorage) : [];
    this.jazyk = jazyk;
    // ukládání do storage

    this.jmenoInput = document.getElementById("jmeno");
    this.prijmeniInput = document.getElementById("prijmeni");
    this.vekInput = document.getElementById("vek");
    this.telefonInput = document.getElementById("telefon");
    this.potvrditButton = document.getElementById("potvrdit");
    this.vypisElement = document.getElementById("seznam-lidi");
    //přiřazení elementů

    this._nastavData();
  }

  _nastavData() {
    //nastavení tlačítka a vstupů
    this.potvrditButton.onclick = () => {
      console.log(this.jmenoInput.value);
      if (
        this.prijmeniInput.value !== "" &&
        this.jmenoInput.value.length !== "" &&
        this.vekInput.value.length !== "" &&
        this.telefonInput.value.length !== 0
      ) {
        const zaznam = new Zaznam(
          this.jmenoInput.value,
          this.prijmeniInput.value,
          this.vekInput.value,
          this.telefonInput.value
        );
        this.zaznamy.push(zaznam);
        this.ulozZaznamy();
        this.vypisZaznamy();
        console.log(zaznam);
        location.reload(true);
      } else alert("Musíte vyplnit jméno, příjmení, věk a telefon!");
    };
  }

  ulozZaznamy() {
    localStorage.setItem("zaznamy", JSON.stringify(this.zaznamy));
  }

  vypisZaznamy() {
    console.log(this.zaznamy);
    document.write('<ul class="list-group">');
    this.vypisElement.innerHTML = "";
    for (let i = 0; i < this.zaznamy.length; i++) {
      const zaznam = this.zaznamy[i];
      this.vypisElement.innerHTML += `<li class="list-group-item"> <strong> Jméno a příjmení: </strong> ${zaznam.jmeno} ${zaznam.prijmeni} <strong> </br> Věk: </strong> ${zaznam.vek} <strong> Telefon: </strong> ${zaznam.telefon} </li>`;
    }
    document.write("</ul>");
  }
}
