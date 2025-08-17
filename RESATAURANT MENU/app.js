// Restaurant Menu Application JavaScript

// Menu Data
const menuData = {
  restaurant: {
    name: "Bella Vista",
    tagline: "Modern American Cuisine",
    description: "An upscale casual dining experience"
  },
  categories: [
    {
      id: "appetizers",
      name: "Appetizers", 
      icon: "🥗",
      items: [
        {
          id: "bruschetta",
          name: "Artisan Bruschetta",
          description: "Grilled sourdough topped with heirloom tomatoes, fresh basil, and aged balsamic glaze",
          price: 14,
          image: "appetizer1.jpg",
          dietary: ["vegetarian"]
        },
        {
          id: "calamari",
          name: "Crispy Calamari",
          description: "Fresh squid rings with spicy marinara and lemon aioli dipping sauces",
          price: 16,
          image: "appetizer2.jpg",
          dietary: []
        },
        {
          id: "wings",
          name: "Buffalo Cauliflower Wings",
          description: "Crispy cauliflower tossed in buffalo sauce, served with vegan ranch",
          price: 13,
          image: "appetizer3.jpg",
          dietary: ["vegan", "gluten-free"]
        },
        {
          id: "cheese",
          name: "Artisanal Cheese Board",
          description: "Selection of local cheeses, seasonal fruits, nuts, and honey drizzle",
          price: 18,
          image: "appetizer4.jpg",
          dietary: ["vegetarian", "gluten-free"]
        },
        {
          id: "sliders",
          name: "Wagyu Beef Sliders",
          description: "Three mini burgers with truffle aioli, arugula, and aged cheddar",
          price: 19,
          image: "appetizer5.jpg",
          dietary: []
        }
      ]
    },
    {
      id: "mains",
      name: "Main Courses",
      icon: "🍽️",
      items: [
        {
          id: "salmon",
          name: "Pan-Seared Atlantic Salmon",
          description: "Fresh salmon with quinoa pilaf, roasted vegetables, and lemon herb butter",
          price: 28,
          image: "main1.jpg",
          dietary: ["gluten-free"]
        },
        {
          id: "steak",
          name: "Dry-Aged Ribeye",
          description: "14oz ribeye steak with garlic mashed potatoes and seasonal vegetables",
          price: 35,
          image: "main2.jpg",
          dietary: ["gluten-free"]
        },
        {
          id: "pasta",
          name: "Truffle Mushroom Risotto",
          description: "Creamy arborio rice with wild mushrooms, truffle oil, and parmesan",
          price: 24,
          image: "main3.jpg",
          dietary: ["vegetarian"]
        },
        {
          id: "chicken",
          name: "Herb-Crusted Chicken",
          description: "Free-range chicken breast with rosemary potatoes and seasonal greens",
          price: 26,
          image: "main4.jpg",
          dietary: ["gluten-free"]
        },
        {
          id: "vegan-bowl",
          name: "Buddha Bowl",
          description: "Quinoa, roasted vegetables, avocado, and tahini dressing",
          price: 22,
          image: "main5.jpg",
          dietary: ["vegan", "gluten-free"]
        },
        {
          id: "lobster",
          name: "Lobster Ravioli",
          description: "House-made pasta filled with lobster in a light cream sauce",
          price: 32,
          image: "main6.jpg",
          dietary: []
        }
      ]
    },
    {
      id: "desserts",
      name: "Desserts",
      icon: "🍰",
      items: [
        {
          id: "tiramisu",
          name: "Classic Tiramisu",
          description: "Traditional Italian dessert with espresso-soaked ladyfingers and mascarpone",
          price: 12,
          image: "dessert1.jpg",
          dietary: ["vegetarian"]
        },
        {
          id: "chocolate-cake",
          name: "Chocolate Lava Cake",
          description: "Warm chocolate cake with molten center, served with vanilla ice cream",
          price: 14,
          image: "dessert2.jpg",
          dietary: ["vegetarian"]
        },
        {
          id: "cheesecake",
          name: "New York Cheesecake",
          description: "Creamy cheesecake with seasonal berry compote",
          price: 13,
          image: "dessert3.jpg",
          dietary: ["vegetarian"]
        },
        {
          id: "gelato",
          name: "Artisan Gelato Trio",
          description: "Three scoops of house-made gelato: vanilla bean, pistachio, and dark chocolate",
          price: 11,
          image: "dessert4.jpg",
          dietary: ["vegetarian", "gluten-free"]
        },
        {
          id: "panna-cotta",
          name: "Lavender Panna Cotta",
          description: "Silky smooth dessert infused with lavender and topped with honey",
          price: 12,
          image: "dessert5.jpg",
          dietary: ["vegetarian", "gluten-free"]
        }
      ]
    },
    {
      id: "beverages",
      name: "Beverages",
      icon: "🥤",
      items: [
        {
          id: "wine-red",
          name: "House Red Wine",
          description: "Cabernet Sauvignon blend with notes of dark cherry and oak",
          price: 12,
          image: "drink1.jpg",
          dietary: ["vegan"]
        },
        {
          id: "wine-white",
          name: "House White Wine",
          description: "Crisp Sauvignon Blanc with citrus and mineral notes",
          price: 11,
          image: "drink2.jpg",
          dietary: ["vegan"]
        },
        {
          id: "cocktail",
          name: "Signature Old Fashioned",
          description: "Premium bourbon with house-made simple syrup and orange bitters",
          price: 15,
          image: "drink3.jpg",
          dietary: []
        },
        {
          id: "coffee",
          name: "Artisan Coffee",
          description: "Single-origin coffee beans, freshly roasted and expertly brewed",
          price: 5,
          image: "drink4.jpg",
          dietary: ["vegan"]
        },
        {
          id: "mocktail",
          name: "Virgin Mojito",
          description: "Fresh mint, lime, and sparkling water for a refreshing non-alcoholic option",
          price: 8,
          image: "drink5.jpg",
          dietary: ["vegan", "gluten-free"]
        },
        {
          id: "beer",
          name: "Craft Beer Selection",
          description: "Rotating selection of local craft beers on tap",
          price: 7,
          image: "drink6.jpg",
          dietary: []
        }
      ]
    }
  ]
};

// Application State
let state = {
  currentCategory: 'all',
  currentDietaryFilter: 'all',
  currentSearchTerm: '',
  allItems: []
};

// DOM Elements
let elements = {};

// Initialize DOM elements
function initDOMElements() {
  elements = {
    menuGrid: document.getElementById('menu-grid'),
    noResults: document.getElementById('no-results'),
    searchInput: document.getElementById('search'),
    categoryButtons: document.querySelectorAll('.category-btn'),
    dietaryButtons: document.querySelectorAll('.dietary-btn'),
    mobileMenuToggle: document.querySelector('.mobile-menu-toggle'),
    nav: document.getElementById('nav'),
    categoryNav: document.querySelector('.category-nav'),
    dietaryFilters: document.querySelector('.dietary-filters')
  };
}

// Flatten all menu items for easier searching and filtering
function getAllMenuItems() {
  const allItems = [];
  menuData.categories.forEach(category => {
    category.items.forEach(item => {
      allItems.push({
        ...item,
        category: category.id,
        categoryName: category.name,
        categoryIcon: category.icon
      });
    });
  });
  return allItems;
}

// Filter menu items based on current state
function filterMenuItems() {
  let items = [...state.allItems];

  // Filter by category
  if (state.currentCategory !== 'all') {
    items = items.filter(item => item.category === state.currentCategory);
  }

  // Filter by dietary preferences
  if (state.currentDietaryFilter !== 'all') {
    items = items.filter(item => item.dietary && item.dietary.includes(state.currentDietaryFilter));
  }

  // Filter by search term
  if (state.currentSearchTerm) {
    const searchLower = state.currentSearchTerm.toLowerCase();
    items = items.filter(item => 
      item.name.toLowerCase().includes(searchLower) ||
      item.description.toLowerCase().includes(searchLower) ||
      (item.dietary && item.dietary.some(diet => diet.toLowerCase().includes(searchLower)))
    );
  }

  return items;
}

// Create dietary tag HTML
function createDietaryTags(dietary) {
  if (!dietary || dietary.length === 0) return '';
  
  return dietary.map(diet => 
    `<span class="dietary-tag dietary-tag--${diet}">${diet.replace('-', ' ')}</span>`
  ).join('');
}

// Create menu item HTML
function createMenuItemHTML(item, index = 0) {
  return `
    <div class="menu-item" data-category="${item.category}" data-id="${item.id}" style="animation-delay: ${index * 0.1}s;">
      <div class="menu-item__image">
        ${item.categoryIcon}
      </div>
      <div class="menu-item__content">
        <div class="menu-item__header">
          <h3 class="menu-item__name">${item.name}</h3>
          <span class="menu-item__price">$${item.price}</span>
        </div>
        <p class="menu-item__description">${item.description}</p>
        <div class="menu-item__dietary">
          ${createDietaryTags(item.dietary)}
        </div>
      </div>
    </div>
  `;
}

// Render menu items
function renderMenuItems() {
  const filteredItems = filterMenuItems();
  
  if (filteredItems.length === 0) {
    elements.menuGrid.innerHTML = '';
    elements.noResults.classList.remove('hidden');
  } else {
    elements.noResults.classList.add('hidden');
    elements.menuGrid.innerHTML = filteredItems.map((item, index) => createMenuItemHTML(item, index)).join('');
  }
}

// Update button states
function updateButtonStates() {
  // Update category buttons
  elements.categoryButtons.forEach(btn => {
    if (btn.dataset.category === state.currentCategory) {
      btn.classList.add('active');
    } else {
      btn.classList.remove('active');
    }
  });

  // Update dietary buttons
  elements.dietaryButtons.forEach(btn => {
    if (btn.dataset.dietary === state.currentDietaryFilter) {
      btn.classList.add('active');
    } else {
      btn.classList.remove('active');
    }
  });
}

// Handle category button clicks
function handleCategoryClick(e) {
  const target = e.target;
  if (target.classList.contains('category-btn')) {
    const newCategory = target.dataset.category;
    if (newCategory !== state.currentCategory) {
      state.currentCategory = newCategory;
      updateButtonStates();
      renderMenuItems();
      closeMobileMenu();
    }
  }
}

// Handle dietary filter clicks
function handleDietaryClick(e) {
  const target = e.target;
  if (target.classList.contains('dietary-btn')) {
    const selectedDietary = target.dataset.dietary;
    
    if (selectedDietary === 'all') {
      state.currentDietaryFilter = 'all';
    } else {
      // Toggle the dietary filter
      if (state.currentDietaryFilter === selectedDietary) {
        state.currentDietaryFilter = 'all';
      } else {
        state.currentDietaryFilter = selectedDietary;
      }
    }
    
    updateButtonStates();
    renderMenuItems();
    closeMobileMenu();
  }
}

// Handle search input
function handleSearch(e) {
  state.currentSearchTerm = e.target.value.trim();
  renderMenuItems();
}

// Mobile menu functionality
function toggleMobileMenu() {
  elements.nav.classList.toggle('active');
  elements.mobileMenuToggle.classList.toggle('active');
}

function closeMobileMenu() {
  elements.nav.classList.remove('active');
  elements.mobileMenuToggle.classList.remove('active');
}

// Close mobile menu when clicking outside
function handleClickOutside(e) {
  if (elements.nav.classList.contains('active') && 
      !elements.nav.contains(e.target) && 
      !elements.mobileMenuToggle.contains(e.target)) {
    closeMobileMenu();
  }
}

// Debounce function for search
function debounce(func, wait) {
  let timeout;
  return function executedFunction(...args) {
    const later = () => {
      clearTimeout(timeout);
      func(...args);
    };
    clearTimeout(timeout);
    timeout = setTimeout(later, wait);
  };
}

// Initialize event listeners
function initEventListeners() {
  // Category navigation
  if (elements.categoryNav) {
    elements.categoryNav.addEventListener('click', handleCategoryClick);
  }
  
  // Dietary filters
  if (elements.dietaryFilters) {
    elements.dietaryFilters.addEventListener('click', handleDietaryClick);
  }
  
  // Search functionality with debounce
  if (elements.searchInput) {
    elements.searchInput.addEventListener('input', debounce(handleSearch, 300));
  }
  
  // Mobile menu toggle
  if (elements.mobileMenuToggle) {
    elements.mobileMenuToggle.addEventListener('click', toggleMobileMenu);
  }
  
  // Close mobile menu on outside click
  document.addEventListener('click', handleClickOutside);
  
  // Close mobile menu on escape key
  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape' && elements.nav && elements.nav.classList.contains('active')) {
      closeMobileMenu();
    }
  });
  
  // Handle window resize
  window.addEventListener('resize', () => {
    if (window.innerWidth > 768) {
      closeMobileMenu();
    }
  });
}

// Initialize the application
function init() {
  // Initialize DOM elements
  initDOMElements();
  
  // Initialize state
  state.allItems = getAllMenuItems();
  
  // Render initial menu items (all items)
  renderMenuItems();
  updateButtonStates();
  
  // Set up event listeners
  initEventListeners();
  
  // Focus search input for better UX
  if (elements.searchInput) {
    elements.searchInput.focus();
  }
}

// Start the application when DOM is loaded
if (document.readyState === 'loading') {
  document.addEventListener('DOMContentLoaded', init);
} else {
  init();
}