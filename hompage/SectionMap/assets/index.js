const animationDuration = 3000;

const frameDuration = 1000 / 60;

const totalFrames = Math.round(animationDuration / frameDuration);

const easeOutQuad = (t) => t * (2 - t);

const animateCountUp = (el) => {
  let frame = 0;
  const countTo = parseInt(el.innerHTML, 10);

  const counter = setInterval(() => {
	frame++;

	const progress = easeOutQuad(frame / totalFrames);

	const currentCount = Math.round(countTo * progress);

	if (parseInt(el.innerHTML, 10) !== currentCount) {
	  el.innerHTML = currentCount;
	}

	if (frame === totalFrames) {
	  clearInterval(counter);
	}
  }, frameDuration);
};

const countupEls = document.querySelectorAll(".timer");


const observerCallback = (entries, observer) => {
  entries.forEach((entry) => {
	if (entry.isIntersecting) {
	  countupEls.forEach(animateCountUp);
	  observer.unobserve(entry.target);
	}
  });
};
const observer = new IntersectionObserver(observerCallback);
const target = document.querySelector(".sectionMapHomePage");
observer.observe(target);