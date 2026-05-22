const elementoForm = document.getElementById("formulario");

elementoForm.addEventListener("submit", (e) => e.preventDefault());

const corFavorita = document.getElementById("corFavorita");

corFavorita.addEventListener("input", (e) => {
    let corNova = e.target.value;

    localStorage.setItem("primaryColor", corNova);

    document.documentElement.style.setProperty("--primary-color", corNova);
});

document.addEventListener(
    "DOMContentLoaded", () => {
        if (localStorage.getItem("primaryColor")){
           corFavorita.value = localStorage.getItem("primaryColor");
           document.documentElement.style.setProperty("--primary-color", corFavorita.value);

        }

        const rootSyles =
            window.getComputedStyle(document.documentElement);

        const primaryColor =
            rootSyles
                .getPropertyValue("--primary-color").trim()

        elementoCor.value = primaryColor;

    });
