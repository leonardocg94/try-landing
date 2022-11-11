ScrollReveal({ reset: true }).reveal(".flush");

//Manejo de cierre del menú al seleccionar una opción
const navigationLinks = document.querySelectorAll(".navigation__link");
const menu = document.querySelector("#navi-toggle");

for (let link of navigationLinks) {
  link.addEventListener("click", () => {
    menu.checked = false;
  });
}

//Extraccion de los datos del formulario
const form = document.querySelector("#dataForm");
const subButton = document.querySelector("#submitButton");
const username = document.querySelector("#name");
const email = document.querySelector("#email");
const phone = document.querySelector("#phone");

const saveContact = async () => {
  subButton.disabled = true;
  subButton.value = "Enviando...";
  try {
    const res = await fetch("contact.php", {
      method: "POST",
      body: JSON.stringify({
        name: username.value,
        email: email.value,
        phone: phone.value,
      }),
      headers: {
        "Content-Type": "application/json; charset=UTF-8",
      },
    });
    console.log("res\n", res);
    const text = await res.text();
    console.log("text\n", text);
    // const r = await res.json();
    // console.log("r", r);
    username.value = ""
    email.value = ""
    phone.value = ""
    window.location.href = window.location.protocol + "#success"
  } catch (error) {
    console.log(error);
  }
  subButton.disabled = false;
  subButton.value = "Enviar &rarr;";
};

form.addEventListener("submit", (e) => {
  e.preventDefault();
  saveContact();
});
