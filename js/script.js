document.addEventListener('DOMContentLoaded', () => {
  let btns = document.querySelectorAll(".square")

  btns.forEach((btn) => {
    btn.addEventListener("click", handleClick)
  })
})

function handleClick(event) {
  let btn = event.target
  let click = btn.id

  let display = document.querySelector('div#display');

  display.innerText = `${click}`
}
