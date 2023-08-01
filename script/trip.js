// cost include and exclude button

let costIncludeBtn = document.querySelector(".cost-include-btn");
let costExcludeBtn = document.querySelector(".cost-exclude-btn");
let costIncludeContent = document.querySelector(".cost-include-content");
let costExcludeContent = document.querySelector(".cost-exclude-content");

costIncludeBtn.addEventListener("click", function () {
  costExcludeContent.classList.add("hide");
  costIncludeContent.classList.remove("hide");
  costExcludeContent.style.display = "none";
});
costExcludeBtn.addEventListener("click", function () {
  costIncludeContent.classList.add("hide");
  costExcludeContent.style.display = "block";
});
