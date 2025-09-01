const toggleBtn = document.createElement("button");
toggleBtn.innerText = "🌙 Toggle Dark Mode";
toggleBtn.style.margin = "10px";
document.querySelector("header").appendChild(toggleBtn);

toggleBtn.addEventListener("click", () => {
  document.body.classList.toggle("dark");
});
