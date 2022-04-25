function CriaCalculadora() {
  this.display = document.querySelector(".display");
  this.btnClear = document.querySelector(".btn-del");

  this.inicia = () => {
    this.cliqueBotoes();
    this.pressionaEnter();
  };

  this.pressionaEnter = () => {
    document.addEventListener("keypress", (e) => {
      if (e.keyCode !== 13) return;
      this.realizaconta();
    });
  };

  this.apagaUm = () => {
    this.display.value = this.display.value.slice(0, -1);
  };

  this.realizaconta = () => {
    let conta = this.display.value;

    try {
      conta = eval(conta);

      if (!conta) {
        alert("Conta invalida");
        return;
      }
      this.display.value = String(conta);
    } catch (e) {
      alert("Conta invalida");
    }
  };

  this.cliqueBotoes = () => {
    document.addEventListener("click", (e) => {
      const el = e.target;

      if (el.classList.contains("btn-num")) this.btnParaDisplay(el.innerText);

      if (el.classList.contains("btn-clear")) this.display.value = "";

      if (el.classList.contains("btn-del")) this.apagaUm();

      if (el.classList.contains("btn-eq")) this.realizaconta();
    });
  };

  this.btnParaDisplay = (valor) => {
    this.display.value += valor;
    this.display.focus();
  };
}

const calculadora = new CriaCalculadora();
calculadora.inicia();
