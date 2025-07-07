let carIndex = 0;
const carImages = ["https://tse3.mm.bing.net/th/id/OIP.62ApquOSHji29obUzlfScwHaEj?r=0&rs=1&pid=ImgDetMain&o=7&rm=3", "https://www.supercars.net/blog/wp-content/uploads/2018/08/Bugatti-Chiron.jpg", "https://tse1.mm.bing.net/th/id/OIP.TTmJAq4zsIE8yqxOZtq9VwHaEl?r=0&rs=1&pid=ImgDetMain&o=7&rm=3"];

function changeCar() {
  carIndex = (carIndex + 1) % carImages.length;
  document.getElementById("mainCar").src = carImages[carIndex];
}

function updatePreview() {
  const email = document.getElementById("email").value;
  document.getElementById("preview").textContent = "We'll send updates to: " + email;
}

function changeTheme(brand) {
  document.body.className = brand;
}

function highlight(img) {
  document.querySelectorAll(".gallery img").forEach(el => el.classList.remove("highlighted"));
  img.classList.add("highlighted");
}

function showThanks() {
  document.getElementById("thanksMessage").textContent = "Thanks for your comment!";
}

function toggleGallery() {
  const gallery = document.querySelector(".gallery");
  gallery.style.display = gallery.style.display === "none" ? "block" : "none";
}