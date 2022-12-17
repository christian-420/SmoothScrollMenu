const navlinks = [...document.querySelectorAll(".navBar li")];
const sections = [...document.querySelectorAll("section")];

let sectionPosition;

function position() {
	sectionPosition = sections.map(section => section.offsetTop)
}

position();

navlinks.forEach(link => link.addEventListener("click", scroolSmooth));

function scroolSmooth(e) {
	const index = navlinks.indexOf(e.target);
	window.scrollTo({
		top: sectionPosition[index],
		behavior: "smooth"
	});
}

window.addEventListener("resize", position)