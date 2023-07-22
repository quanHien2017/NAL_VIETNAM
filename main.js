const $ = document.querySelector.bind(document);
const handle = $(".btn");

function countVietnameseCharacters(inputStr) {
  const vietnameseCharacters = {
    ă: "aw",
    â: "aa",
    đ: "dd",
    ê: "ee",
    ô: "oo",
    ơ: "ow",
    ư: "w",
  };
  let count = 0;
  const regex = new RegExp(Object.values(vietnameseCharacters).join("|"), "gi");
  inputStr = inputStr.replace(regex, "#");
  console.log(inputStr);
  count = (inputStr.match(/#/g) || []).length;
  return count;
}

handle.onclick = function () {
  const inputStr = $(".input").value;
  const output = $(".output");
  const result = countVietnameseCharacters(inputStr);
  output.value = result;
};
