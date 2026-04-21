/**
 * Data Catalog Project Starter Code - SEA Stage 2
 */

// Your final submission should have much more data than this, and
// you should use more than just an array of strings to store it all.

// ---- State Vars ----
let selectedSet = null;
let searchQuery = "";
let selectedCardType = "";
let selectedTypes = new Set();
let selectedRarities = new Set();

// ---- DOM Elements ----
const cardContainer = document.getElementById("card-container");
const setElements = document.querySelectorAll(".pokemon-set");
const searchInput = document.getElementById("search-input");
const typeFilters = document.querySelectorAll(
  ".filter-bar input[type='checkbox']:not(.rarity)");
const cardTypeFilter = document.getElementById("card-type-filter");
const button = document.getElementById("to-top-button");

// Card Modal Components
const modal = document.getElementById("card-modal");
const modalClose = document.getElementById("close-button");
const modalImage = document.getElementById("modal-image");
const modalName = document.getElementById("modal-name");
const modalSet = document.getElementById("modal-set");
const modalType = document.getElementById("modal-card-type");
const modalPokemonType = document.getElementById("modal-pokemon-type");
const modalRarity = document.getElementById("modal-rarity");


// ---- Display Cards ----
function showCards() {
  cardContainer.innerHTML = "";
  const templateCard = document.querySelector(".card");

  for (let i = 0; i < cards.length; i++) {
    const cardData = cards[i];
    if (!matchFilter(cardData)) {
      continue;
    }
    const nextCard = templateCard.cloneNode(true);
    editCardContent(nextCard, cardData);
    nextCard.addEventListener("click", () => {
      openCardModal(cardData)
    })
    cardContainer.appendChild(nextCard);
  }
}

function editCardContent(card, data) {
  card.style.display = "block";
  const cardImage = card.querySelector("img");
  cardImage.src = data.image;
  cardImage.alt = data.name;

  console.log("new card:", data.name);
}

// ---- Filtering ----

function matchFilter(card) {
  // Set Filter
  if (selectedSet && card.set !== selectedSet) {
    return false;
  }
  // Searching
  if (searchQuery && 
    !card.name.toLowerCase().startsWith(searchQuery)) 
  {
    return false;
  }
  // Card Type 
  if (selectedCardType && card.cardType !== selectedCardType) {
    return false;
  }
  // Pokémon Type 
  if (selectedTypes.size > 0 && !selectedTypes.has(card.pokemonType)) {
    return false;
  }
  // Card Rarity 
  if (selectedRarities.size > 0 && !selectedRarities.has(card.rarity)) {
    return false;
  }
  return true;
}

// ---- Card Modal ----
function openCardModal(card) {
  modalImage.src = card.image;
  modalName.textContent = card.name;
  modalSet.textContent = card.set;
  modalType.textContent = card.cardType;
  modalPokemonType.textContent = card.pokemonType;
  modalRarity.textContent = card.rarity;

  if (card.cardType === "Pokémon") {
    modalPokemonType.textContent = card.pokemonType;
    modalPokemonType.parentElement.style.display = "block";
  } else {
    modalPokemonType.parentElement.style.display = "none";
  }

  modal.classList.remove("closed");
}

// Close card modal
function closeCardModal() {
  modal.classList.add("closed");
}

// ---- Events ----
// This calls the addCards() function when the page is first loaded
document.addEventListener("DOMContentLoaded", showCards);

// Search Filter
searchInput.addEventListener("input", (e) => {
  searchQuery = e.target.value.toLowerCase();
  showCards();
});

// Set Filter
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
cardTypeFilter.addEventListener("change", (e) => {
  selectedCardType = e.target.value;
  showCards();
});

// Pokémon Type Filter
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

// Close Card Modal
modalClose.addEventListener("click", closeCardModal);
modal.addEventListener("click", (e) => {
  if (e.target === modal) {
    closeCardModal();
  }
});

// Back to Top 
button.addEventListener("click", () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth"
    });
  });

// Reset All Filters 
document.getElementById("reset-filters-button").addEventListener("click", () => {
  // reset state vars
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
  showCards();
});
