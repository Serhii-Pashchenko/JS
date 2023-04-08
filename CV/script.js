function scale() {
  let photo = document.querySelector(".photo");
  photo.classList.toggle("photo-scale");
  return photo.classList.contains("photo-scale");
};

function scroll(event) {
  if(event.key === "c" || event.key === "C" || event.key === "l" || event.key === "L" || event.key === "s" || event.key === "S" || event.key === "h" || event.key === "H" || event.key === "w" || event.key === "W" || event.key === "e" || event.key === "E") {
    const btn = document.getElementById(`${event.key}`);
    btn.scrollIntoView({behavior: 'smooth'});
  }
};