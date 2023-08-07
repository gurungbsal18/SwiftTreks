// explore region page read more and less button
let exploreRegionContent = document.querySelector(".region-content");
let exploreRegionContentBtn = document.querySelector(".region-btn button"); // Select the button element
let exploreRegionContentButton = document.querySelector(".region-btn"); // Select the button element

exploreRegionContentBtn.addEventListener("click", function () {
  if (exploreRegionContent.classList.contains("region-content")) {
    exploreRegionContent.classList.remove("region-content");
    exploreRegionContent.classList.add("region-content-expand");
    exploreRegionContentBtn.textContent = "Read Less";
    exploreRegionContentButton.style.margin = "0px";
  } else {
    exploreRegionContent.classList.add("region-content");
    exploreRegionContentBtn.textContent = "Read More";
    exploreRegionContentButton.style.margin = "30px";
  }
});
