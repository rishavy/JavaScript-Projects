const searchBox = document.getElementById('search-box');
const searchBtn = document.getElementById('search-btn');
const showMoreBtn = document.getElementById('show-more-btn');
const searchResult = document.querySelector('.search-result');

let page = 1;
let currentQuery = '';

async function fetchImages(query, pageNum) {
    const accessKey = 'vNqsZ6dKyeSQn5dpF5U69njlUoxB3727W1NpPEiYlpc';

    const url = `https://api.unsplash.com/search/photos?query=${query}&page=${pageNum}&per_page=9&client_id=${accessKey}`;
    
    try {
        const response = await fetch(url);
        if (!response.ok) {
            throw new Error('Failed to fetch images');
        }
        const data = await response.json();
        return data.results;
    } catch (error) {
        console.error('Error fetching images:', error);
        alert('Failed to fetch images. Please try again.');
        return [];
    }
}

function displayImages(images) {
    images.forEach(image => {
        const imgElement = document.createElement('img');
        imgElement.src = image.urls.regular;
        imgElement.alt = image.alt_description;
        searchResult.appendChild(imgElement);
    });
}

function clearSearchResults() {
    searchResult.innerHTML = '';
}

function handleSearch() {
    const query = searchBox.value.trim();

    if (query === '') {
        alert('Please enter a search query');
        return;
    }

    currentQuery = query;
    page = 1;

    clearSearchResults();
    fetchImages(query, page)
        .then(images => {
            displayImages(images);
            showMoreBtn.style.display = 'block';
        });
}

function handleShowMore() {
    page++;
    fetchImages(currentQuery, page)
        .then(images => {
            displayImages(images);
        });
}

searchBtn.addEventListener('click', handleSearch);
showMoreBtn.addEventListener('click', handleShowMore);
