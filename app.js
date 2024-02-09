const cursor = document.querySelector(".cursor");
const main = document.getElementById("main");

main.addEventListener("mouseover", (e) => {
  console.log(e);
  cursor.style.left = e.x + "px";
  cursor.style.top = e.y + "px";
});
