//desabilitado inicialmente
document.getElementById("botao30").disabled = true;
document.getElementById("botao1").disabled = true;
document.getElementById("botao2").disabled = true;



class Caixa {
    constructor() {
        this.timer = null;
        this.preco30 = 1.00;
        this.preco1 = 1.75;
        this.preco2 = 2.00;
}

calcularTroco() {
    const entrada = Number(document.getElementById("valor").value);
  const troco30 = (entrada - this.preco30).toFixed(2);
  const troco1 = (entrada - this.preco1).toFixed(2);
  const troco2 = (entrada - this.preco2).toFixed(2);
  
  if (entrada < this.preco30) {
        document.getElementById("troco30").textContent = "Valor insuficiente";
            document.getElementById("botao30").disabled = true;
        document.getElementById("troco1").textContent = "Valor insuficiente";
            document.getElementById("botao1").disabled = true;
        document.getElementById("troco2").textContent = "Valor insuficiente";
            document.getElementById("botao2").disabled = true;
    return;
  } else if (entrada < this.preco1 && entrada >= this.preco30) {
        document.getElementById("troco30").textContent = "troco estimado: R$ " + troco30;
            document.getElementById("botao30").disabled = false;
        document.getElementById("troco1").textContent = "Valor insuficiente";
            document.getElementById("botao1").disabled = true;
        document.getElementById("troco2").textContent = "Valor insuficiente";
            document.getElementById("botao2").disabled = true;
  } else if (entrada < this.preco2 && entrada >= this.preco1) {
        document.getElementById("troco30").textContent = "troco estimado: R$ " + troco30;
            document.getElementById("botao30").disabled = false;
        document.getElementById("troco1").textContent = "troco estimado: R$ " + troco1;
            document.getElementById("botao1").disabled = false;
        document.getElementById("troco2").textContent = "Valor insuficiente";
            document.getElementById("botao2").disabled = true;
  } else {
        document.getElementById("troco30").textContent = "troco estimado: R$ " + troco30;
            document.getElementById("botao30").disabled = false;
        document.getElementById("troco1").textContent = "troco estimado: R$ " + troco1;
            document.getElementById("botao1").disabled = false;
        document.getElementById("troco2").textContent = "troco estimado: R$ " + troco2;
            document.getElementById("botao2").disabled = false;
  }
  //professor!! caso tenha uma maneira mais simples de fazer o codigo acima (if, else), por favor me ensine!
}

iniciarTempo(opcaoSelecionada) {
    //nao deixa + de 1 timer rodando ao mesmo tempo
    if (this.timer !== null) {
        return;
    }

    let minutos;
    if (opcaoSelecionada === document.getElementById("botao30")) {
        minutos = 30;
    } else if (opcaoSelecionada === document.getElementById("botao1")) {
        minutos = 60;
    } else if (opcaoSelecionada === document.getElementById("botao2")) {
        minutos = 120;
    } else {
        return;
    }

    let tempoRestante = minutos * 60;

    this.timer = setInterval(() => {
        const horas = Math.floor(tempoRestante / 3600);
        const minutosRestantes = Math.floor((tempoRestante % 3600) / 60);
        const segundos = tempoRestante % 60;

        document.getElementById("tempoRestante").textContent = `${horas.toString().padStart(2, '0')}:${minutosRestantes.toString().padStart(2, '0')}:${segundos.toString().padStart(2, '0')}`;
        if (tempoRestante <= 0) {
            clearInterval(this.timer);
            this.timer = null;

            //abre popup
            document.getElementById("popupOverlay").style.display = "flex";
            return;
        };
        tempoRestante--;
    }, 1000);
}

fecharPopup() {
    document.getElementById("popupOverlay").style.display = "none";
};
};

const caixa = new Caixa();