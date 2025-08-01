function revealOnScroll() {
  const reveals = document.querySelectorAll(".reveal");

  reveals.forEach(el => {
    const windowHeight = window.innerHeight;
    const elementTop = el.getBoundingClientRect().top;
    const elementBottom = el.getBoundingClientRect().bottom;
    let revealPoint = 100;

    if ((el.dataset.point) != undefined) {
 revealPoint = parseInt(el.dataset.point) ;
    } else if ((el.dataset.point) == undefined) {
     revealPoint = 100;
    

    }

    if (( elementTop < windowHeight - revealPoint && elementTop > 0 ) || (elementBottom>0 && elementBottom < windowHeight)) 
     {
      el.classList.add("active");
    } else if ((elementBottom < 0 && elementTop < 0) || (elementBottom > windowHeight&& elementTop > windowHeight))  {
      el.classList.remove("active");
    }
  });
}

window.addEventListener("scroll", revealOnScroll);
window.addEventListener("load", revealOnScroll);
