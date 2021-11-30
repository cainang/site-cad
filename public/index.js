function cadastrarQuest() {
  var array = new Array($(".item_Errado")[0].value, $(".item_Errado")[1].value, $(".item_Errado")[2].value)
  let dificuldade = $("#dificuldade option:selected").val();
  let textencode = encodeURI(dificuldade);
  let count = 0;
  if ($(".Pergunta").val() == "" || $(".item_Correto").val() == "" || dificuldade == "") {
    M.toast({ html: 'Pergunta ou item correto está vazio 😥' })
    return;
  }
  array.map(item => {
    if (item == "") {
      count++;
    }
  })
  if (count != 0) {
    M.toast({ html: 'Item está vazio 😥' })
    return;
  }
  const data = {
    pergunta: $(".Pergunta").val(),
    itens: array,
    item_correto: $(".item_Correto").val()
  }
  axios({
    method: "post",
    url: 'https://d1c0-104-196-56-105.ngrok.io/create/quest?dificudade=' + textencode,
    data: data,

  }).then(function (response) {
    M.toast({ html: 'Cadastrado com sucesso, Kazim e Luciano ❤' })
    console.log(response);
  })
    .catch(function (error) {
      M.toast({ html: 'Erro ao cadastrar 😥' })
      console.log(error);
    })
}

$(".btnCadastrar").on("click", () => {
  cadastrarQuest();
})

$(document).ready(function () {
  $('select').formSelect();

});
