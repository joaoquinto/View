const containerReference = document.querySelector("header");
const posts = document.querySelectorAll(".container-itens li");

document.addEventListener("scroll", scrollHandle);

function getPositionAtCenter(element) {
  const { top, left, width, height } = element.getBoundingClientRect();
  return {
    x: left + width / 2,
    y: top + height / 2,
  };
}

function getDistanceBetweenElement(a, b) {
  const aPosition = getPositionAtCenter(a);
  const bPosition = getPositionAtCenter(b);
  return Math.hypot(aPosition.x - bPosition.x, aPosition.y - bPosition.y);
}

function scrollHandle() {
  posts.forEach((post, index) => {
    const distance = getDistanceBetweenElement(post, containerReference);
    console.log(`index: ${index} | distance: ${distance}`);
  });
}
