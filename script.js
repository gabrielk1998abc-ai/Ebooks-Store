let ebookSelecionado = "";

const pedido = document.getElementById("pedido");

const nomeEbook = document.getElementById("nomeEbook");

function abrirPedido(nome) {

  ebookSelecionado = nome;

  document.getElementById("nomeEbook").innerHTML =

    "Você escolheu: <b>" + nome + "</b>";

  document.getElementById("pedido").style.display = "block";

  document.getElementById("pedido").scrollIntoView({

    behavior: "smooth"

  });

}

function instagram() {

  window.open("https://instagram.com/____primesites_studio", "_blank");

}

function whatsapp() {

  let mensagem = encodeURIComponent(

    "Olá! Tenho interesse no e-book \"" + ebookSelecionado + "\"."

  );

  window.open(

    "https://wa.me/12098994182?text=" + mensagem,

    "_blank"

  );

}

function tiktok() {

  window.open("https://tiktok.com/@espebserc", "_blank");

}