'use strict'

const showme = document.querySelector("#cumpara");

const lista = document.querySelector("#lista");

showme.addEventListener("click", () => lista.classList.toggle("d-none"));