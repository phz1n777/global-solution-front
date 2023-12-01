const campoNome = document.querySelector("#nome");
const campoEmail = document.querySelector("#email");
const buttonValidacao = document.querySelector("button");


const clearForm = () => {
    campoNome.value = '';
    campoEmail.value = '';
  }

buttonValidacao.addEventListener("click", function(event) {
    event.preventDefault();

    if(campoNome.value.trim() === '') {
        alert("Preencha o campo nome");
        return false;
    }

    if(campoEmail.value.trim() === '') {
        alert("Preencha o campo email")
        return false;
    }
    else{
        alert("Agradecemos o contato!")
    }
    clearForm();
});