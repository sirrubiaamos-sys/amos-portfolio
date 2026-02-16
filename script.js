// Navigation and Menu
const menuBtn = document.querySelector('.menu-btn');
const sidebar = document.querySelector('.sidebar');
const searchBtn = document.querySelector('.search-btn');
const searchInput = document.querySelector('.nav-center input');
const uploadBtn = document.querySelector('.upload-btn');
const liveBtn = document.querySelector('.live-btn');
const userBtn = document.querySelector('.user-btn');

// Modal elements
const videoModal = document.getElementById('videoModal');
const closeModalBtn = document.querySelector('.close-modal');
const contentCards = document.querySelectorAll('.content-card');

// Sidebar items
const sidebarItems = document.querySelectorAll('.sidebar-item');

// Action buttons in modal
const actionButtons = document.querySelectorAll('.action-btn');
const commentBtn = document.querySelector('.comments-section button');
const commentInput = document.querySelector('.comment-input input');

// Menu toggle
menuBtn.addEventListener('click', () => {
    sidebar.classList.toggle('active');
});

// Search functionality
searchBtn.addEventListener('click', () => {
    const query = searchInput.value;
    if (query.trim()) {
        console.log('Searching for:', query);
        // Add search logic here
    }
});

searchInput.addEventListener('keypress', (e) => {
    if (e.key === 'Enter') {
        searchBtn.click();
    }
});

// Upload button
uploadBtn.addEventListener('click', () => {
    console.log('Opening upload dialog');
    // Add upload logic here
});

// Live button
liveBtn.addEventListener('click', () => {
    console.log('Starting live stream');
    // Add live stream logic here
});

// User profile button
userBtn.addEventListener('click', () => {
    console.log('Opening user profile');
    // Add profile logic here
});

// Sidebar navigation
sidebarItems.forEach(item => {
    item.addEventListener('click', () => {
        sidebarItems.forEach(i => i.classList.remove('active'));
        item.classList.add('active');
        console.log('Navigating to:', item.textContent.trim());
        // Add navigation logic here
    });
});

// Video card click - open modal
contentCards.forEach(card => {
    card.addEventListener('click', () => {
        const title = card.querySelector('h3').textContent;
        const stats = card.querySelector('.stats').textContent;
        videoModal.style.display = 'flex';
        videoModal.querySelector('h2').textContent = title;
        videoModal.querySelector('.video-meta').innerHTML = stats;
        // Set video source here if needed
    });
});

// Close modal
closeModalBtn.addEventListener('click', () => {
    videoModal.style.display = 'none';
});

// Close modal when clicking outside
window.addEventListener('click', (e) => {
    if (e.target === videoModal) {
        videoModal.style.display = 'none';
    }
});

// Action buttons (Like, Dislike, Share, Save)
actionButtons.forEach(btn => {
    btn.addEventListener('click', () => {
        const action = btn.querySelector('i').className;
        console.log('Action clicked:', action);
        // Add action logic here (like, dislike, share, save)
    });
});

// Comment submission
commentBtn.addEventListener('click', () => {
    const commentText = commentInput.value;
    if (commentText.trim()) {
        console.log('Comment added:', commentText);
        commentInput.value = '';
        // Add comment logic here
    }
});

commentInput.addEventListener('keypress', (e) => {
    if (e.key === 'Enter') {
        commentBtn.click();
    }
});