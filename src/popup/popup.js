import generateId from "../utils/generateId"

console.log('Popup script running...')
// Your popup script code

const btn = document.querySelector(".action-button");
const res = document.querySelector(".res")

btn.addEventListener("click", () => {
  const newId = generateId(16);
  res.textContent = newId
})