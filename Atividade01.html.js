const elementoForm = document.getElementById("formulario");

elementoForm.addEventListener("submit", (e) => e.preventDefault());

const corFavorita = document.getElementById("corFavorita");

corFavorita.addEventListener("input", (e) => {
    let corNova = e.target.value;

    document.documentElement.style.setProperty("--primary-color", corNova);
});
