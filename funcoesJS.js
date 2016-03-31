


function Adicionar() {
    var Indice;

    Indice = clickCounter();
    sessionStorage.setItem(Indice, $("#NomeAnimal").val() + "; teste");
    location.href = "Quiz05.html"

}

function Editar() {

    var Indice;
    var chave = '';
    var valor = '';

    Indice = sessionStorage.length - 1;

    valor = sessionStorage.getItem(Indice)
    var str = valor;

    sessionStorage.setItem(Indice, str.split(";", 1) + ";" + $("#Complete").val());

    location.href = "Index.html"

}

function ValidarNomeAnimal() {
    if ($("#NomeAnimal").val() == "") {
        alert("Não é permitido valor em branco.");
        return false;

    }
    else {
        Adicionar();
    }

}

function ValidarComplete() {
    if ($("#Complete").val() == "") {
        alert("Não é permitido valor em branco.");
        return false;

    }
    else {
        Editar();
    }

}

function clickCounter() {

    if (sessionStorage.clickcount) {
        sessionStorage.clickcount = Number(sessionStorage.clickcount) + 1;
    } else {
        sessionStorage.clickcount = 1;
    }

    return sessionStorage.clickcount;
}

function RetornaNomeUltimoAnimal() {


    if (typeof (Storage) !== "undefined") {
        // alert(sessionStorage.length);

        var tamanho = sessionStorage.length;
        var chave = '';
        var valor = '';


        valor = sessionStorage.getItem(sessionStorage.length - 1)
        var str = valor;

        document.getElementById("divApresentacao").innerHTML = "<label> Um (a)  " + str.split(";", 1) + " ____ , mas um Macaco não.</label>";

    } else {
        document.getElementById("result").innerHTML = "Sorry, your browser does not support Web Storage...";
    }





}

function ValidarOndeVive() {
    varItens = document.getElementsByName('optResposta');

    var i = 0;
    for (i; i < varItens.length; i++) {
        if (varItens[i].checked) {

            // Verifica ainda não tem nada salvo
            if (varItens[i].value == "SIM") {
                if (sessionStorage.length == 0) {

                    var name = confirm("O animal que você pensou é o Tubarão?")
                    if (name == true) {
                        alert("Acertei!!!")
                        location.href = "Index.html"

                    }
                    else {
                        location.href = "Quiz04.html?A"
                    }
                }
                else {
                    valor = sessionStorage.getItem(sessionStorage.length - 1)
                    var str = valor;
                    var name = confirm("O animal que você pensou é o " + str.split(";", 1) + "?")
                    if (name == true) {
                        alert("Acertei!!!")
                        location.href = "Index.html"
                    }
                    else {
                        location.href = "Quiz04.html?A"
                    }
                }
            }
            else {
                var name = confirm("O animal que você pensou é o Macaco?")
                if (name == true) {
                    alert("Acertei!!!")
                    location.href = "Index.html"

                }
                else {
                    location.href = "Quiz04.html"
                }
            }
        }
    }
}
