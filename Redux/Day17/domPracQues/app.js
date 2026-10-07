const textarea = document.getElementById("textArea");

const spand = document.getElementById("spand");

textarea.addEventListener("input", (e) => {
  //   console.log(e.target.value.length);

  if (e.target.value.length > 20) {
    e.target.value = e.target.value.slice(0, 200);
    return;
  }
  spand.innerText = e.target.value.length;
});
