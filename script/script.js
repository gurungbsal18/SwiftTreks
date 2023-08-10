// /read more and less of explore region 
let readMoreBtn = document.getElementById('readMoreBtn');
let regionContent = document.querySelector('.region-content');

readMoreBtn.addEventListener('click', () =>  {
  if (regionContent.classList.contains('region-content-expand')) {
    regionContent.classList.remove('region-content-expand')
    readMoreBtn.innerHTML = "Read More"
  } else {
    regionContent.classList.add('region-content-expand')
    readMoreBtn.innerHTML = "Read Less"
  }
})