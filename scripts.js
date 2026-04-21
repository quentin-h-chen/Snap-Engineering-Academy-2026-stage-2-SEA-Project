/**
 * Data Catalog Project Starter Code - SEA Stage 2
 */

// Your final submission should have much more data than this, and
// you should use more than just an array of strings to store it all.

let selectedSet = null;
let searchQuery = "";
let selectedCardType = "";
let selectedTypes = new Set();
let selectedRarities = new Set();

// This function adds cards the page to display the data in the array
function showCards() {
  const cardContainer = document.getElementById("card-container");
  cardContainer.innerHTML = "";
  const templateCard = document.querySelector(".card");

  for (let i = 0; i < cards.length; i++) {
    const cardData = cards[i];
    if (!matchFilter(cardData)) {
      continue;
    }
    const nextCard = templateCard.cloneNode(true);
    editCardContent(nextCard, cardData);
    cardContainer.appendChild(nextCard);
  }
}

function matchFilter(card) {
  // Set Filter
  if (selectedSet && card.set !== selectedSet) {
    return false;
  }

  // Search Filter
  if (searchQuery && 
    !card.name.toLowerCase().startsWith(searchQuery)) 
  {
    return false;
  }

  // Card Type Filter
  if (selectedCardType && card.cardType !== selectedCardType) {
    return false;
  }

  // Pokémon Type Filter
  if (selectedTypes.size > 0 && !selectedTypes.has(card.pokemonType)) {
    return false;
  }

  // Card Rarity Filter
  if (selectedRarities.size > 0 && !selectedRarities.has(card.rarity)) {
    return false;
  }

  return true;
}

function editCardContent(card, data) {
  card.style.display = "block";
  const cardImage = card.querySelector("img");
  cardImage.src = data.image;
  cardImage.alt = data.name;

  console.log("new card:", data.name);
}

// This calls the addCards() function when the page is first loaded
document.addEventListener("DOMContentLoaded", showCards);

// Search Filter
const searchInput = document.getElementById("search-input");
searchInput.addEventListener("input", (e) => {
  searchQuery = e.target.value.toLowerCase();
  showCards();
});

// Set Filter
const setElements = document.querySelectorAll(".pokemon-set");
setElements.forEach(set => {
  set.addEventListener("click", () => {
    const setName = set.dataset.set;
    if (selectedSet === setName) {
      selectedSet = null;
    } else {
      selectedSet = setName;
    }
    showCards();
  });
});

// Card Type Filter
document.getElementById("card-type-filter").addEventListener("change", (e) => {
  selectedCardType = e.target.value;
  showCards();
});

// Pokémon Type Filter
const typeFilters = document.querySelectorAll(
  ".filter-bar input[type='checkbox']:not(.rarity)");
typeFilters.forEach(filter => {
  filter.addEventListener("change", (e) => {
    const type = e.target.value;
    if (e.target.checked) {
      selectedTypes.add(type);
    } else {
      selectedTypes.delete(type);
    }
    showCards();
  });
});

// Card Rarity Filter
const rarityFilters = document.querySelectorAll(".filter-bar input.rarity")
rarityFilters.forEach(filter => {
  filter.addEventListener("change", (e) => {
    const rarity = e.target.value;
    if (e.target.checked) {
      selectedRarities.add(rarity);
    } else {
      selectedRarities.delete(rarity);
    }
    showCards();
  });
});


// Back to Top Button
const button = document.getElementById("to-top-button");
button.addEventListener("click", () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth"
    });
  });

// Reset Filters Button
document.getElementById("reset-filters-button").addEventListener("click", () => {
  // reset state variables
  selectedSet = null;
  searchQuery = "";
  selectedCardType = "";
  selectedTypes.clear();
  selectedRarities.clear();

  // reset search bar
  document.getElementById("search-input").value = "";
  // reset dropdown
  document.getElementById("card-type-filter").value = "";
  // reset checkboxes
  document.querySelectorAll(".filter-bar input[type='checkbox']")
    .forEach(cb => cb.checked = false);

  // re-render cards
  showCards();
});

// function removeLastCard() {
//   cards.pop(); // Remove last item in titles array
//   showCards(); // Call showCards again to refresh
// }
