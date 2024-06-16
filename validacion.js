//Haz tú validación en javascript acá

document.addEventListener("DOMContentLoaded", function() {
    const form = document.querySelector("form");
    const nome = document.querySelector("#nome");
    const email = document.querySelector("#email");
    const assunto = document.querySelector("#assunto");
    const mensagem = document.querySelector("#mensagem");

    form.addEventListener("submit", function(event) {
        if (nome.value.trim() === "" || email.value.trim() === "" || assunto.value.trim() === "" || mensagem.value.trim() === "") {
            alert("Por favor, preencha todos os campos.");
            event.preventDefault();
        } else if (!validateEmail(email.value)) {
            alert("Por favor, insira um endereço de e-mail válido.");
            event.preventDefault();
        }
    });

    function validateEmail(email) {
        const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        return re.test(email);
    }
});