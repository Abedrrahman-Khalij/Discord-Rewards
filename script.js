// Sample trending games data with more details
const trendingGames = [
    {
        title: "R.E.P.O.",
        cover: "image.webp",
        followers: "1.1M",
        genre: "RPG, Action",
        genreIcon: "fa-gamepad",
        playerIcon: "fa-users",
        rating: "4.8",
        releaseDate: "2024"
    },
    {
        title: "Elden Ring",
        cover: "https://i.imgur.com/example5.jpg",
        followers: "1.8M",
        genre: "Action, RPG",
        genreIcon: "fa-sword",
        playerIcon: "fa-users",
        rating: "4.9",
        releaseDate: "2022"
    },
    {
        title: "God of War: Ragnarök",
        cover: "https://i.imgur.com/example6.jpg",
        followers: "1.2M",
        genre: "Action, Adventure",
        genreIcon: "fa-axe-battle",
        playerIcon: "fa-users",
        rating: "4.7",
        releaseDate: "2022"
    },
    {
        title: "Horizon Forbidden West",
        cover: "https://i.imgur.com/example7.jpg",
        followers: "950K",
        genre: "Action, RPG",
        genreIcon: "fa-bow-arrow",
        playerIcon: "fa-users",
        rating: "4.6",
        releaseDate: "2022"
    },
    {
        title: "The Last of Us Part II",
        cover: "https://i.imgur.com/example8.jpg",
        followers: "1.5M",
        genre: "Action, Adventure",
        genreIcon: "fa-gun",
        playerIcon: "fa-users",
        rating: "4.8",
        releaseDate: "2020"
    }
];

// Function to create game cards with enhanced styling
function createGameCard(game) {
    const card = document.createElement('div');
    card.className = 'game-card';
    card.innerHTML = `
        <div class="game-cover">
            <img src="${game.cover}" alt="${game.title}" />
            <div class="game-overlay">
                <div class="game-info">
                    <span class="followers">
                        <i class="fas ${game.playerIcon}"></i> ${game.followers}
                    </span>
                    <span class="genre">
                        <i class="fas ${game.genreIcon}"></i> ${game.genre}
                    </span>
                </div>
                <div class="game-details">
                    <span class="rating">
                        <i class="fas fa-star"></i> ${game.rating}
                    </span>
                    <span class="release-date">
                        <i class="fas fa-calendar"></i> ${game.releaseDate}
                    </span>
                </div>
                <h3 class="game-title">${game.title}</h3>
            </div>
        </div>
    `;
    return card;
}

// Function to render trending games
function renderTrendingGames() {
    const gamesGrid = document.querySelector('.games-grid');
    gamesGrid.innerHTML = '';
    trendingGames.forEach(game => {
        const card = createGameCard(game);
        gamesGrid.appendChild(card);
    });
}

// Character hover animations
function setupCharacterAnimations() {
    const characters = document.querySelectorAll('.character');
    
    characters.forEach(character => {
        character.addEventListener('mouseenter', () => {
            character.style.transform = 'translateZ(150px) scale(1.1)';
        });
        
        character.addEventListener('mouseleave', () => {
            const id = character.id;
            switch(id) {
                case 'mario':
                    character.style.transform = 'translateZ(0) rotateY(0deg)';
                    break;
                case 'master-chief':
                    character.style.transform = 'translateZ(100px) rotateY(20deg)';
                    break;
                case 'steve':
                    character.style.transform = 'translateZ(50px) rotateY(-20deg)';
                    break;
            }
        });
    });
}

// Parallax effect for hero section
function setupParallax() {
    const hero = document.querySelector('.hero');
    const characters = document.querySelectorAll('.character');
    
    window.addEventListener('mousemove', (e) => {
        const x = e.clientX / window.innerWidth;
        const y = e.clientY / window.innerHeight;
        
        characters.forEach((character, index) => {
            const speed = 0.1 + (index * 0.05);
            const xOffset = (x - 0.5) * 50 * speed;
            const yOffset = (y - 0.5) * 50 * speed;
            
            character.style.transform = `translate(${xOffset}px, ${yOffset}px)`;
        });
    });
}

// Search functionality
function setupSearch() {
    const searchInput = document.querySelector('.search-input');
    const searchIcon = document.querySelector('.search-icon');
    
    searchInput.addEventListener('focus', () => {
        searchIcon.style.color = 'var(--primary)';
    });
    
    searchInput.addEventListener('blur', () => {
        searchIcon.style.color = 'var(--text-secondary)';
    });
    
    searchInput.addEventListener('input', (e) => {
        // Implement search functionality here
        console.log('Searching for:', e.target.value);
    });
}

// Initialize everything when the DOM is loaded
document.addEventListener('DOMContentLoaded', () => {
    renderTrendingGames();
    setupCharacterAnimations();
    setupParallax();
    setupSearch();
    
    // Add smooth scroll behavior
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            document.querySelector(this.getAttribute('href')).scrollIntoView({
                behavior: 'smooth'
            });
        });
    });
});
