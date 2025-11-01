const destinos = [
  { ciudad: "Lisboa", precio: 79, pais: "Portugal" },
  { ciudad: "Roma", precio: 95, pais: "Italia" },
  { ciudad: "París", precio: 110, pais: "Francia" },
];

const contenedor = document.getElementById("destinos");
contenedor.innerHTML = destinos
  .map(
    (d) => `
    <article class="card">
      <h3>${d.ciudad}</h3>
      <p>${d.pais}</p>
      <strong>desde ${d.precio}€</strong>
    </article>`
  )
  .join("");

document.getElementById("cta").addEventListener("click", () => {
  window.scrollTo({ top: contenedor.offsetTop, behavior: "smooth" });
  console.log("Mostrando destinos…");
});
