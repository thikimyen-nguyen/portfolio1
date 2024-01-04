import { projects, techStacks } from "./data.mjs";
const cardContainer = document.querySelector(".cards_container")
function showProjects(projects) {
  projects.forEach(project => {
    console.log(project.name)
    const projectCard = document.createElement("div")
    projectCard.classList.add("card")
    cardContainer.append(projectCard)
    const projectName = document.createElement("h2")
    projectName.innerText = project.name;
    const projectContent =  document.createElement("div")
    projectContent.classList.add("card_content");
    const projectImage = document.createElement("img");
    projectImage.src = project.image;
    projectImage.alt = project.name;
    const projectType = document.createElement("p");
    projectType.classList.add("stylingFont")
    projectType.innerText = project.type;
    const projectDescription = document.createElement("p");
    projectDescription.innerText = project.description;

    const buttonsContainer = document.createElement("div");
    buttonsContainer.classList.add("buttons");
    const githubLink = document.createElement("a");
    githubLink.classList.add("cta", "cta-primary");
    githubLink.target = "_blank";
    githubLink.innerText = "Github Repo";
    githubLink.href = project.githubLink;
    const liveLink = document.createElement("a");
    liveLink.classList.add("cta");
    liveLink.target = "_blank";
    liveLink.innerText = "Live Site";
    liveLink.href = project.liveSite;
    buttonsContainer.append(githubLink, liveLink)
    projectContent.append(projectImage,projectType, projectDescription)
    projectCard.append(projectName, projectContent, buttonsContainer)
  });
}
const techContainer = document.querySelector(".tech_content");

function showTech(techStacks) {
  techStacks.forEach(techStack => {
    const techStackHolder = document.createElement("div");
    techStackHolder.classList.add("tech_container");
    const techImage = document.createElement("img");
    techImage.src = techStack.image;
    techImage.alt = techStack.name;
    const techName = document.createElement("p");
    techName.innerText = techStack.name;
    techStackHolder.append(techImage, techName)
    techContainer.append(techStackHolder)
  });
}
showProjects(projects)
showTech(techStacks)