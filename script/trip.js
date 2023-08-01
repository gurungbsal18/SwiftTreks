// cost include and exclude button

let costIncludeBtn = document.querySelector(".cost-include-btn");
let costExcludeBtn = document.querySelector(".cost-exclude-btn");
let costIncludeContent = document.querySelector(".cost-include-content");
let costExcludeContent = document.querySelector(".cost-exclude-content");

costIncludeBtn.addEventListener("click", function () {
  costExcludeContent.classList.add("hide");
  costIncludeContent.classList.remove("hide");
  costExcludeContent.style.display = "none";
  costIncludeBtn.classList.add("btn-success");
  costIncludeBtn.classList.remove("btn-outline-success");
  costExcludeBtn.classList.add("btn-outline-danger");
  costExcludeBtn.classList.remove("btn-danger");
});
costExcludeBtn.addEventListener("click", function () {
  costIncludeContent.classList.add("hide");
  costExcludeContent.style.display = "block";
  costExcludeBtn.classList.add("btn-danger");
  costExcludeBtn.classList.remove("btn-outline-danger");
  costIncludeBtn.classList.add("btn-outline-success");
  costIncludeBtn.classList.remove("btn-success");
});
