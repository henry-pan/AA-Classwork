
const dogs = {
  "Corgi": "https://www.akc.org/dog-breeds/cardigan-welsh-corgi/",
  "Australian Shepherd": "https://www.akc.org/dog-breeds/australian-shepherd/",
  "Affenpinscher": "https://www.akc.org/dog-breeds/affenpinscher/",
  "American Staffordshire Terrier": "https://www.akc.org/dog-breeds/american-staffordshire-terrier/",
  "Tosa": "https://www.akc.org/dog-breeds/tosa/",
  "Labrador Retriever": "https://www.akc.org/dog-breeds/labrador-retriever/",
  "French Bulldog": "https://www.akc.org/dog-breeds/french-bulldog/" 
};

function dogLinkCreator () {
  const dogArr = [];
  for (const [key, value] of Object.entries(dogs)) {
    const a = document.createElement("a");
    a.innerHTML = key;
    a.href = value;
    const li = document.createElement("li");
    li.classList.add("dog-link");
    li.append(a);
    dogArr.push(li);
  }
  return dogArr;
}

function attachDogLinks () {
  const dogsLinks = dogLinkCreator();
  const ul = document.querySelector(".drop-down-dog-list");
  for (let i = 0; i < dogsLinks.length; i++) {
    ul.append(dogsLinks[i]);
  }
}

function handleEnter (e) {
  e.preventDefault();
  Array.from(dogList.children).forEach((dog) => dog.classList.add("open"));
}

function handleLeave (e) {
  e.preventDefault();
  Array.from(dogList.children).forEach((dog) => dog.classList.remove("open"));
}

const dogNav = document.querySelector(".drop-down-dog-nav");
const dogList = document.querySelector(".drop-down-dog-list");
dogNav.addEventListener("mouseenter", handleEnter);
dogNav.addEventListener("mouseleave", handleLeave);

attachDogLinks();
