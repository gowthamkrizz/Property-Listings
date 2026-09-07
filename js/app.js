/**
 * STACKLY - Real Estate Platform Interactive Engine
 * Replicating Horus Advanced Search Experience
 */

document.addEventListener('DOMContentLoaded', () => {
  // 1. Properties Database
  const propertiesData = [
    {
      id: 1,
      title: 'The House of Those Who Make Houses',
      type: 'medical',
      typeName: 'Medical & Consulting',
      status: 'sale',
      price: '$1,250,000',
      priceRaw: 1250000,
      pricePeriod: '',
      location: 'San Diego, United States',
      region: 'san-diego',
      beds: 4,
      baths: 3,
      area: 2400,
      image: 'assets/images/prop-1.webp',
      featured: true,
      agent: {
        name: 'Peter Parker',
        avatar: 'assets/images/agent-2.webp',
        phone: '+1 234 567 8901',
        email: 'peter@stackly.com'
      },
      description: 'Presenting an outstanding commercial & medical real estate opportunity in a rapidly developing urban core. Features modern consultation suites, patient reception areas, and private staff parking.',
      amenities: ['Air Conditioning', 'Swimming Pool', 'Central Heating', 'Laundry Room', 'Parking Garage', 'Elevator']
    },
    {
      id: 2,
      title: 'This Place Office',
      type: 'offices',
      typeName: 'Offices',
      status: 'rent',
      price: '$4,500',
      priceRaw: 4500,
      pricePeriod: '/month',
      location: 'California, United States',
      region: 'california',
      beds: 2,
      baths: 2,
      area: 1850,
      image: 'assets/images/prop-2.webp',
      featured: false,
      agent: {
        name: 'Meliodas Long',
        avatar: 'assets/images/agent-1.webp',
        phone: '+1 345 678 9012',
        email: 'meliodas@stackly.com'
      },
      description: 'Experience the best of contemporary commercial office space in this sophisticated business park. Open-plan floorplate, conference rooms, fiber-optic internet connectivity, and break rooms.',
      amenities: ['Air Conditioning', 'Central Heating', 'High-Speed WiFi', 'Alarm System', 'Elevator', 'Balcony']
    },
    {
      id: 3,
      title: 'Woodhouse Hotel',
      type: 'hotel',
      typeName: 'Hotel & Leisure',
      status: 'sale',
      price: '$2,800,000',
      priceRaw: 2800000,
      pricePeriod: '',
      location: 'New York, United States',
      region: 'new-york',
      beds: 8,
      baths: 6,
      area: 5600,
      image: 'assets/images/prop-3.webp',
      featured: true,
      agent: {
        name: 'Tony Stark',
        avatar: 'assets/images/agent-3.webp',
        phone: '+1 456 789 0123',
        email: 'tony@stackly.com'
      },
      description: 'A boutique leisure and hospitality establishment nestled in prime downtown New York. Includes full liquor license facilities, rooftop dining terrace, 12 luxury guest rooms, and private suites.',
      amenities: ['Air Conditioning', 'Swimming Pool', 'Central Heating', 'Gym', 'Window Covering', 'High-Speed WiFi', 'Fireplace']
    },
    {
      id: 4,
      title: 'Music Guesthouse IKUHA',
      type: 'hotel',
      typeName: 'Hotel & Leisure',
      status: 'sale',
      price: '$950,000',
      priceRaw: 950000,
      pricePeriod: '',
      location: 'California, United States',
      region: 'california',
      beds: 3,
      baths: 2,
      area: 1600,
      image: 'assets/images/prop-4.webp',
      featured: false,
      agent: {
        name: 'Stackly Team',
        avatar: 'assets/images/agent-5.webp',
        phone: '+1 567 890 1234',
        email: 'admin@stackly.com'
      },
      description: 'Welcome to this impressive hospitality estate that combines timeless architecture with modern guest conveniences. Peaceful mountain vistas, acoustic studios, and private spa garden.',
      amenities: ['Air Conditioning', 'Central Heating', 'Laundry Room', 'High-Speed WiFi', 'Balcony', 'Fireplace']
    },
    {
      id: 5,
      title: 'Rheumatism Center',
      type: 'medical',
      typeName: 'Medical & Consulting',
      status: 'rent',
      price: '$6,200',
      priceRaw: 6200,
      pricePeriod: '/month',
      location: 'San Diego, United States',
      region: 'san-diego',
      beds: 5,
      baths: 4,
      area: 3200,
      image: 'assets/images/prop-5.webp',
      featured: true,
      agent: {
        name: 'Dilliama Nelissa',
        avatar: 'assets/images/agent-4.webp',
        phone: '+1 678 901 2345',
        email: 'dilliama@stackly.com'
      },
      description: 'Turnkey medical clinic facility equipped with clinical rooms, physiotherapy halls, hydrotherapy pool connection, and patient transport drop-off bay. Located directly on main transit route.',
      amenities: ['Air Conditioning', 'Swimming Pool', 'Central Heating', 'Gym', 'Alarm System', 'Elevator', 'Parking Garage']
    },
    {
      id: 6,
      title: 'New Building in Witten',
      type: 'industrial',
      typeName: 'Factory & Industrial',
      status: 'sale',
      price: '$3,400,000',
      priceRaw: 3400000,
      pricePeriod: '',
      location: 'United States',
      region: 'united-states',
      beds: 6,
      baths: 5,
      area: 4800,
      image: 'assets/images/prop-6.webp',
      featured: false,
      agent: {
        name: 'Peter Parker',
        avatar: 'assets/images/agent-2.webp',
        phone: '+1 234 567 8901',
        email: 'peter@stackly.com'
      },
      description: 'High-spec industrial warehouse and distribution hub with heavy 3-phase power, 32ft clear ceiling heights, multiple container loading docks, and integrated corporate offices.',
      amenities: ['Air Conditioning', 'Alarm System', 'Parking Garage', 'Elevator', 'High-Speed WiFi']
    },
    {
      id: 7,
      title: 'The Azure Luxury Waterfront Villa',
      type: 'hotel',
      typeName: 'Luxury Villa',
      status: 'sale',
      price: '$4,750,000',
      priceRaw: 4750000,
      pricePeriod: '',
      location: 'Malibu, United States',
      region: 'malibu',
      beds: 5,
      baths: 4,
      area: 4200,
      image: 'assets/images/city-ca.webp',
      featured: true,
      agent: {
        name: 'Dilliama Nelissa',
        avatar: 'assets/images/agent-4.webp',
        phone: '+1 678 901 2345',
        email: 'dilliama@stackly.com'
      },
      description: 'Exquisite modern oceanfront residence boasting panoramic coastal views, private infinity pool, custom Italian chef kitchen, and private seaside sundeck.',
      amenities: ['Air Conditioning', 'Swimming Pool', 'Central Heating', 'High-Speed WiFi', 'Balcony', 'Parking Garage']
    },
    {
      id: 8,
      title: 'Downtown Skyline Executive Penthouse',
      type: 'offices',
      typeName: 'Penthouse & Offices',
      status: 'sale',
      price: '$3,150,000',
      priceRaw: 3150000,
      pricePeriod: '',
      location: 'New York, United States',
      region: 'new-york',
      beds: 3,
      baths: 3,
      area: 2950,
      image: 'assets/images/city-ny.webp',
      featured: true,
      agent: {
        name: 'Tony Stark',
        avatar: 'assets/images/agent-3.webp',
        phone: '+1 456 789 0123',
        email: 'tony@stackly.com'
      },
      description: 'Stunning glass-encased luxury penthouse situated on a high floor overlooking central skyline. Soaring ceilings, private elevator access, and designer finishes.',
      amenities: ['Air Conditioning', 'Elevator', 'Gym', 'High-Speed WiFi', 'Alarm System', 'Window Covering']
    },
    {
      id: 9,
      title: 'Silicon Valley Innovation Center',
      type: 'offices',
      typeName: 'Commercial Office',
      status: 'sale',
      price: '$5,900,000',
      priceRaw: 5900000,
      pricePeriod: '',
      location: 'California, United States',
      region: 'california',
      beds: 6,
      baths: 5,
      area: 6800,
      image: 'assets/images/city-vegas.webp',
      featured: true,
      agent: {
        name: 'Meliodas Long',
        avatar: 'assets/images/agent-1.webp',
        phone: '+1 345 678 9012',
        email: 'meliodas@stackly.com'
      },
      description: 'Premier commercial tech headquarters featuring modular open workstations, boardroom facilities, smart building automation, and EV charging bays.',
      amenities: ['Air Conditioning', 'Elevator', 'Parking Garage', 'High-Speed WiFi', 'Central Heating', 'Alarm System']
    }
  ];

  // 2. State & Wishlist
  let wishlist = JSON.parse(localStorage.getItem('stackly_wishlist') || '[]');
  let currentHeroStatus = 'all'; // 'all', 'sale', 'rent'
  let currentFeaturedTab = 'all';

  const wishlistCountEl = document.getElementById('wishlistCount');
  const propertiesGridEl = document.getElementById('propertiesGrid');

  function updateWishlistBadge() {
    if (wishlistCountEl) {
      wishlistCountEl.textContent = wishlist.length;
    }
  }
  updateWishlistBadge();

  // 3. Render Properties
  function renderProperties(list) {
    if (!propertiesGridEl) return;
    const countEl = document.getElementById('propCountDisplay');
    if (countEl) countEl.textContent = list.length;
    if (list.length === 0) {
      propertiesGridEl.innerHTML = `
        <div style="grid-column: 1 / -1; text-align: center; padding: 60px 20px; background: #fff; border-radius: 8px; border: 1px dashed #e8e8f0;">
          <i class="fa-solid fa-building-circle-xmark" style="font-size: 48px; color: #1B6F58; margin-bottom: 16px;"></i>
          <h3 style="margin-bottom: 8px;">No Properties Match Your Search</h3>
          <p style="color: #7D7D84; margin-bottom: 20px;">Try adjusting your filters, location, price, or keywords.</p>
          <button class="btn btn-primary" onclick="resetAllFilters()">Reset All Filters</button>
        </div>
      `;
      return;
    }

    propertiesGridEl.innerHTML = list.map(item => {
      const isFav = wishlist.includes(item.id);
      return `
        <div class="property-card" data-id="${item.id}" data-type="${item.type}" data-status="${item.status}">
          <div class="property-thumb-wrap">
            <img src="${item.image}" alt="${item.title}" loading="lazy">
            <div class="property-badges">
              ${item.status === 'sale' ? '<span class="badge badge-sale">For Sale</span>' : '<span class="badge badge-rent">For Rent</span>'}
              ${item.featured ? '<span class="badge badge-featured">Featured</span>' : ''}
            </div>
            <div class="property-price-tag">${item.price}<span>${item.pricePeriod}</span></div>
            <div class="property-actions-overlay">
              <button class="action-btn-circle" onclick="window.location.href='404.html'" title="Save to favorites">
                <i class="fa-regular fa-heart"></i>
              </button>
              <button class="action-btn-circle" onclick="window.location.href='404.html'" title="Quick View">
                <i class="fa-solid fa-eye"></i>
              </button>
              <button class="action-btn-circle" onclick="window.location.href='404.html'" title="Share">
                <i class="fa-solid fa-share-nodes"></i>
              </button>
            </div>
          </div>
          <div class="property-card-body">
            <div class="property-location">
              <i class="fa-solid fa-location-dot"></i>
              <span>${item.location}</span>
            </div>
            <h3 class="property-card-title"><a href="404.html">${item.title}</a></h3>
            <p class="property-card-desc">${item.description}</p>
            <div class="property-specs-list">
              <div class="spec-item"><i class="fa-solid fa-bed"></i> ${item.beds} Beds</div>
              <div class="spec-item"><i class="fa-solid fa-bath"></i> ${item.baths} Baths</div>
              <div class="spec-item"><i class="fa-solid fa-vector-square"></i> ${item.area} Sq Ft</div>
            </div>
            <div class="property-card-footer">
              <div class="property-agent-info">
                <img src="${item.agent.avatar}" alt="${item.agent.name}" class="agent-thumb-sm">
                <span class="agent-name-sm">${item.agent.name}</span>
              </div>
              <button class="btn-quick-view" onclick="window.location.href='404.html'">
                Quick View <i class="fa-solid fa-eye"></i>
              </button>
            </div>
          </div>
        </div>
      `;
    }).join('');
  }

  // Initial Render
  renderProperties(propertiesData);

  // 4. Wishlist Handler
  window.toggleWishlist = (id, e) => {
    if (e) e.stopPropagation();
    window.location.href = '404.html';
  };

  window.shareProperty = (title, e) => {
    if (e) e.stopPropagation();
    window.location.href = '404.html';
  };

  // 5. Featured Section Tabs (All Properties / For Sale / For Rent)
  window.applyFeaturedTabFilter = (filterType) => {
    currentFeaturedTab = filterType || 'all';

    // Update active UI pill in index.html (.filter-pill)
    const filterPills = document.querySelectorAll('.filter-pill');
    filterPills.forEach(pill => {
      pill.classList.toggle('active', pill.dataset.filter === currentFeaturedTab);
    });

    // Update active UI tab in properties.html (.prop-tab-pill)
    const propTabPills = document.querySelectorAll('.prop-tab-pill');
    propTabPills.forEach(pill => {
      const text = pill.textContent.trim().toLowerCase();
      const match = (currentFeaturedTab === 'all' && text === 'all') ||
                    (currentFeaturedTab === 'sale' && text.includes('sale')) ||
                    (currentFeaturedTab === 'rent' && text.includes('rent'));
      pill.classList.toggle('active', match);
    });

    // Filter properties based on tab
    let filtered = [...propertiesData];
    if (currentFeaturedTab === 'sale') {
      filtered = filtered.filter(p => p.status === 'sale');
    } else if (currentFeaturedTab === 'rent') {
      filtered = filtered.filter(p => p.status === 'rent');
    }

    renderProperties(filtered);
  };

  const filterPills = document.querySelectorAll('.filter-pill');
  filterPills.forEach(pill => {
    pill.addEventListener('click', (e) => {
      e.preventDefault();
      const filter = pill.dataset.filter || 'all';
      window.applyFeaturedTabFilter(filter);
    });
  });

  // Sort Handler
  window.handleSortChange = (sortBy) => {
    let sorted = [...propertiesData];
    if (currentFeaturedTab !== 'all') {
      sorted = sorted.filter(p => p.status === currentFeaturedTab);
    }
    if (sortBy === 'price-low') {
      sorted.sort((a, b) => a.priceRaw - b.priceRaw);
    } else if (sortBy === 'price-high') {
      sorted.sort((a, b) => b.priceRaw - a.priceRaw);
    } else if (sortBy === 'area') {
      sorted.sort((a, b) => b.area - a.area);
    } else if (sortBy === 'featured') {
      sorted.sort((a, b) => (b.featured ? 1 : 0) - (a.featured ? 1 : 0));
    }
    renderProperties(sorted);
    showToast(`Sorted by ${sortBy}`);
  };

  // Initialize scrollCue animations
  if (typeof scrollCue !== 'undefined') {
    scrollCue.init({
      duration: 600,
      interval: -0.7,
      percentage: 0.8
    });
  }

  // 6. Endora Hero Search Tabs (Sell / Rent / Invest)
  const heroNavTabs = document.querySelectorAll('.nav-tabs-endora .nav-link');
  heroNavTabs.forEach(tab => {
    tab.addEventListener('click', () => {
      heroNavTabs.forEach(t => t.classList.remove('active'));
      tab.classList.add('active');
      currentHeroStatus = tab.dataset.tab;

      // Animate form on tab switch
      const formEl = document.getElementById('heroSearchForm');
      if (formEl) {
        formEl.style.opacity = '0';
        formEl.style.transform = 'translateY(6px)';
        formEl.style.transition = 'all 0.25s ease';
        setTimeout(() => {
          formEl.style.opacity = '1';
          formEl.style.transform = 'translateY(0)';
        }, 80);
      }
    });
  });

  // 7. Endora Hero Search Form Trigger (Redirect to 404 on text + location selected)
  window.applyHeroSearch = () => {
    const lookingForInput = document.getElementById('searchLookingFor');
    const locationSelect = document.getElementById('searchLocation');

    const keyword = (lookingForInput?.value || '').trim();
    const location = (locationSelect?.value || '').trim();

    // Check if both text is entered AND location is selected
    if (keyword.length > 0 && location.length > 0) {
      window.location.href = '404.html';
      return;
    }

    // If text is missing
    if (!keyword) {
      lookingForInput?.focus();
      if (typeof showToast === 'function') {
        showToast('Please enter property type or keyword to search');
      }
      return;
    }

    // If location is missing
    if (!location) {
      locationSelect?.focus();
      if (typeof showToast === 'function') {
        showToast('Please select a location from the dropdown');
      }
      return;
    }
  };

  // Navbar Quick Search Trigger (Redirects to 404 on text entered)
  window.triggerNavbarSearch = (formElement) => {
    const form = formElement || document.getElementById('navbarSearchForm') || document.querySelector('.navbar-search-box');
    const input = form ? form.querySelector('input') : document.getElementById('navSearchKeyword');
    const keyword = (input?.value || '').trim();
    if (keyword.length > 0) {
      window.location.href = '404.html';
    } else if (input) {
      input.focus();
    }
  };

  // 8. Advanced Filter Toggle (Support for category cards)
  const toggleFilterBtn = document.getElementById('btnToggleFilter');
  const advancedFilterPanel = document.getElementById('advancedFilterPanel');
  if (toggleFilterBtn && advancedFilterPanel) {
    toggleFilterBtn.addEventListener('click', () => {
      advancedFilterPanel.classList.toggle('is-open');
    });
  }

  function applyCombinedFilters() {
    applyFeaturedTabFilter(currentFeaturedTab);
  }

  window.resetAllFilters = () => {
    const heroForm = document.getElementById('heroSearchForm');
    if (heroForm) heroForm.reset();
    heroNavTabs.forEach((b, i) => b.classList.toggle('active', i === 0));
    currentHeroStatus = 'sale';
    applyFeaturedTabFilter('all');
    showToast('Filters reset to default');
  };

  window.filterByCategory = (catType) => {
    const type = (catType || '').toLowerCase();
    const filtered = propertiesData.filter(p => p.type.toLowerCase() === type);
    renderProperties(filtered);
    const propSec = document.getElementById('featuredPropertiesSection');
    if (propSec) {
      propSec.scrollIntoView({ behavior: 'smooth' });
    }
    showToast(`Showing ${filtered.length} properties in ${catType}`);
  };

  window.filterByCity = (cityName) => {
    window.location.href = '404.html';
  };

  // 9. Sticky Header & Back to Top on Scroll
  const header = document.querySelector('.site-header');
  const backToTopBtn = document.getElementById('backToTopBtn');

  window.addEventListener('scroll', () => {
    if (window.scrollY > 120) {
      header?.classList.add('is-sticky');
    } else {
      header?.classList.remove('is-sticky');
    }

    if (window.scrollY > 300) {
      backToTopBtn?.classList.add('is-visible');
    } else {
      backToTopBtn?.classList.remove('is-visible');
    }
  });

  if (backToTopBtn) {
    backToTopBtn.addEventListener('click', () => {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    });
  }

  // 10. Modals Management (Sign In, Register, Quick View)
  window.openModal = (modalId) => {
    closeAllModals();
    const modal = document.getElementById(modalId);
    if (modal) {
      modal.classList.add('is-active');
      document.body.style.overflow = 'hidden';
    }
  };

  window.closeAllModals = () => {
    document.querySelectorAll('.modal-backdrop').forEach(m => m.classList.remove('is-active'));
    document.body.style.overflow = '';
  };

  document.querySelectorAll('.modal-backdrop').forEach(m => {
    m.addEventListener('click', (e) => {
      if (e.target === m) closeAllModals();
    });
  });

  // Quick View Modal (Redirect to 404)
  window.openQuickView = (id) => {
    window.location.href = '404.html';
  };

  // Inquiry form with JavaScript Validation
  window.handleInquirySubmit = (e) => {
    e.preventDefault();
    const form = e.target;
    const nameInput = form.querySelector('#inquiryName');
    const emailInput = form.querySelector('#inquiryEmail');

    let valid = true;
    if (!nameInput.value.trim()) {
      nameInput.classList.add('input-error');
      valid = false;
    } else {
      nameInput.classList.remove('input-error');
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailInput.value.trim() || !emailRegex.test(emailInput.value.trim())) {
      emailInput.classList.add('input-error');
      valid = false;
    } else {
      emailInput.classList.remove('input-error');
    }

    if (!valid) {
      showToast('Please enter your name and a valid email address.', true);
      return;
    }

    closeAllModals();
    showToast('Your inquiry has been sent to the agent successfully!');
  };

  // Newsletter Form JavaScript Validation & 404 Redirection
  window.handleNewsletterSubmit = (form) => {
    const input = form.querySelector('.newsletter-input');
    if (!input) return;
    const val = input.value.trim();
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if (!val || !emailRegex.test(val)) {
      form.classList.add('has-error');
      input.classList.add('input-error');
      showToast('Please enter a valid email address.', true);
      input.focus();
      return;
    }

    form.classList.remove('has-error');
    input.classList.remove('input-error');
    window.location.href = '404.html';
  };

  // Clear newsletter error state upon user input
  document.addEventListener('input', (e) => {
    if (e.target && e.target.classList.contains('newsletter-input')) {
      const parentForm = e.target.closest('.newsletter-form, .blog-subscribe-form');
      if (parentForm) parentForm.classList.remove('has-error');
      e.target.classList.remove('input-error');
    }
  });

  // Modal Sign In JavaScript Validation
  window.handleModalSignIn = (form) => {
    const user = form.querySelector('.modal-user');
    const pwd = form.querySelector('.modal-pwd');
    let valid = true;

    if (user && !user.value.trim()) {
      user.classList.add('input-error');
      valid = false;
    } else if (user) {
      user.classList.remove('input-error');
    }

    if (pwd && !pwd.value) {
      pwd.classList.add('input-error');
      valid = false;
    } else if (pwd) {
      pwd.classList.remove('input-error');
    }

    if (!valid) {
      showToast('Please enter your username/email and password.', true);
      return;
    }

    closeAllModals();
    showToast('Signed in successfully! Welcome back.');
    form.reset();
  };

  // Modal Register JavaScript Validation
  window.handleModalRegister = (form) => {
    const name = form.querySelector('.modal-reg-name');
    const email = form.querySelector('.modal-reg-email');
    let valid = true;

    if (name && (!name.value.trim() || name.value.trim().length < 2)) {
      name.classList.add('input-error');
      valid = false;
    } else if (name) {
      name.classList.remove('input-error');
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (email && (!email.value.trim() || !emailRegex.test(email.value.trim()))) {
      email.classList.add('input-error');
      valid = false;
    } else if (email) {
      email.classList.remove('input-error');
    }

    if (!valid) {
      showToast('Please enter your full name and a valid email.', true);
      return;
    }

    closeAllModals();
    showToast('Account created successfully! Welcome to Stackly.');
    form.reset();
  };

  // Consultation Modal JavaScript Validation
  window.handleConsultationModalSubmit = (form) => {
    const name = form.querySelector('.modal-name');
    const email = form.querySelector('.modal-email');
    const phone = form.querySelector('.modal-phone');
    let valid = true;

    if (name && !name.value.trim()) {
      name.classList.add('input-error');
      valid = false;
    } else if (name) {
      name.classList.remove('input-error');
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (email && (!email.value.trim() || !emailRegex.test(email.value.trim()))) {
      email.classList.add('input-error');
      valid = false;
    } else if (email) {
      email.classList.remove('input-error');
    }

    if (!valid) {
      showToast('Please provide your name and valid email for consultation.', true);
      return;
    }

    closeAllModals();
    showToast('Consultation request received! Our office will contact you to confirm timing.');
    form.reset();
  };

  // Automatically enforce novalidate on all forms and auto-clear input errors on typing
  document.querySelectorAll('form').forEach(f => {
    f.setAttribute('novalidate', 'true');
  });

  document.addEventListener('input', (e) => {
    if (e.target && e.target.classList && e.target.classList.contains('input-error')) {
      e.target.classList.remove('input-error');
    }
  });

  // 11. Mobile Drawer Navigation & Background Scroll Lock
  const mobileDrawer = document.getElementById('mobileDrawer');
  const mobileMenuToggle = document.getElementById('mobileMenuToggle');
  const closeMobileDrawerBtn = document.getElementById('closeMobileDrawer');
  let savedScrollPosition = 0;

  function openMobileDrawer() {
    if (!mobileDrawer) return;
    savedScrollPosition = window.pageYOffset || document.documentElement.scrollTop || 0;
    mobileDrawer.classList.add('is-open');
    document.documentElement.classList.add('menu-open');
    document.body.classList.add('menu-open');
    document.body.style.top = `-${savedScrollPosition}px`;
  }

  function closeMobileDrawer() {
    if (!mobileDrawer) return;
    mobileDrawer.classList.remove('is-open');
    document.documentElement.classList.remove('menu-open');
    document.body.classList.remove('menu-open');
    document.body.style.top = '';
    window.scrollTo(0, savedScrollPosition);
  }

  if (mobileMenuToggle && mobileDrawer) {
    mobileMenuToggle.addEventListener('click', (e) => {
      e.stopPropagation();
      openMobileDrawer();
    });
  }

  if (closeMobileDrawerBtn && mobileDrawer) {
    closeMobileDrawerBtn.addEventListener('click', (e) => {
      e.stopPropagation();
      closeMobileDrawer();
    });
  }

  if (mobileDrawer) {
    mobileDrawer.querySelectorAll('a').forEach((link) => {
      link.addEventListener('click', () => {
        closeMobileDrawer();
      });
    });
  }

  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape' && mobileDrawer && mobileDrawer.classList.contains('is-open')) {
      closeMobileDrawer();
    }
  });

  // Automatically close mobile menu if viewport resized to desktop
  window.addEventListener('resize', () => {
    if (window.innerWidth > 991 && mobileDrawer && mobileDrawer.classList.contains('is-open')) {
      closeMobileDrawer();
    }
  });

  // Prevent background wheel / trackpad scroll chaining to window
  if (mobileDrawer) {
    mobileDrawer.addEventListener('wheel', (e) => {
      const scrollBody = mobileDrawer.querySelector('.mobile-drawer-body');
      if (!scrollBody) {
        e.preventDefault();
        return;
      }
      const isAtTop = scrollBody.scrollTop <= 0;
      const isAtBottom = Math.ceil(scrollBody.scrollTop + scrollBody.clientHeight) >= scrollBody.scrollHeight;

      if ((e.deltaY < 0 && isAtTop) || (e.deltaY > 0 && isAtBottom)) {
        e.preventDefault();
      }
    }, { passive: false });

    let touchStartY = 0;
    mobileDrawer.addEventListener('touchstart', (e) => {
      if (e.touches && e.touches.length > 0) {
        touchStartY = e.touches[0].clientY;
      }
    }, { passive: true });

    mobileDrawer.addEventListener('touchmove', (e) => {
      const scrollBody = mobileDrawer.querySelector('.mobile-drawer-body');
      if (!scrollBody || !e.touches || e.touches.length === 0) {
        e.preventDefault();
        return;
      }
      const currentY = e.touches[0].clientY;
      const isAtTop = scrollBody.scrollTop <= 0;
      const isAtBottom = Math.ceil(scrollBody.scrollTop + scrollBody.clientHeight) >= scrollBody.scrollHeight;

      // Prevent overscroll rubber-banding into background document
      if ((currentY > touchStartY && isAtTop) || (currentY < touchStartY && isAtBottom)) {
        e.preventDefault();
      }
    }, { passive: false });
  }

  // Prevent background touch scrolling on any area outside the drawer
  document.addEventListener('touchmove', (e) => {
    if (mobileDrawer && mobileDrawer.classList.contains('is-open')) {
      if (!mobileDrawer.contains(e.target)) {
        e.preventDefault();
      }
    }
  }, { passive: false });

  // 12. Toast Notification System
  window.showToast = (message, isError = false) => {
    let container = document.querySelector('.toast-container');
    if (!container) {
      container = document.createElement('div');
      container.className = 'toast-container';
      document.body.appendChild(container);
    }

    const toast = document.createElement('div');
    toast.className = 'toast';
    const icon = isError 
      ? '<i class="fa-solid fa-circle-exclamation" style="color: #DC2626;"></i>' 
      : '<i class="fa-solid fa-circle-check" style="color: #1B6F58;"></i>';
    toast.innerHTML = `${icon} ${message}`;
    container.appendChild(toast);

    setTimeout(() => {
      toast.style.opacity = '0';
      toast.style.transform = 'translateY(10px)';
      toast.style.transition = 'all 0.3s ease';
      setTimeout(() => toast.remove(), 300);
    }, 3500);
  };

  // 13. High-Performance Background Image Scroll Animation (Parallax Engine)
  const initBackgroundScrollParallax = () => {
    const parallaxImages = document.querySelectorAll(
      '.prop-final-img, .prop-hero-img, .lux-hero-img, .lux-closing-img, .proj-hero-img, .proj-immersive-img, .proj-final-img, .blog-hero-img, .blog-newsletter-img, .contact-hero-img, .contact-final-img'
    );

    if (!parallaxImages.length) return;

    let isTicking = false;

    const updateParallax = () => {
      const windowHeight = window.innerHeight;

      parallaxImages.forEach(img => {
        const section = img.closest('section') || img.parentElement;
        if (!section) return;

        const rect = section.getBoundingClientRect();
        if (rect.top < windowHeight && rect.bottom > 0) {
          const sectionCenter = rect.top + rect.height / 2;
          const viewportCenter = windowHeight / 2;
          const delta = (sectionCenter - viewportCenter) * 0.25;
          img.style.transform = `translate3d(0, ${delta}px, 0) scale(1.08)`;
        }
      });

      isTicking = false;
    };

    window.addEventListener('scroll', () => {
      if (!isTicking) {
        window.requestAnimationFrame(updateParallax);
        isTicking = true;
      }
    }, { passive: true });

    // Initial update on page load / resize
    window.addEventListener('resize', updateParallax);
    updateParallax();
  };

  initBackgroundScrollParallax();

  // 14. Navbar Search Redirection to 404 Error Page
  document.querySelectorAll('.navbar-search-box').forEach(form => {
    form.addEventListener('submit', (e) => {
      e.preventDefault();
      const input = form.querySelector('input');
      if (input && input.value.trim().length > 0) {
        window.location.href = '404.html';
      } else if (input) {
        input.focus();
      }
    });
  });
});

// Global fallback handler for inline onsubmit
window.triggerNavbarSearch = function(formElement) {
  const form = formElement || document.getElementById('navbarSearchForm') || document.querySelector('.navbar-search-box');
  const input = form ? form.querySelector('input') : document.getElementById('navSearchKeyword');
  if (input && input.value.trim().length > 0) {
    window.location.href = '404.html';
  } else if (input) {
    input.focus();
  }
};

