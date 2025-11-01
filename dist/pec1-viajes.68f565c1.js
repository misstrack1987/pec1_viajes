let o=document.getElementById("destinos");o.innerHTML=[{ciudad:"Lisboa",precio:79,pais:"Portugal"},{ciudad:"Roma",precio:95,pais:"Italia"},{ciudad:"París",precio:110,pais:"Francia"}].map(o=>`
    <article class="card">
      <h3>${o.ciudad}</h3>
      <p>${o.pais}</p>
      <strong>desde ${o.precio}\u{20AC}</strong>
    </article>`).join(""),document.getElementById("cta").addEventListener("click",()=>{window.scrollTo({top:o.offsetTop,behavior:"smooth"}),console.log("Mostrando destinos…")});
//# sourceMappingURL=pec1-viajes.68f565c1.js.map
