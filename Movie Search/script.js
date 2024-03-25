const API_KEY = 'e48a43b1';
const SEARCH_DELAY = 300;

let debounceTimer;

const searchMovies = async (query) => {
    try {
        const response = await fetch(`https://www.omdbapi.com/?apikey=${API_KEY}&s=${query}`);
        const data = await response.json();
        return data.Search || [];
    } catch (error) {
        console.error('Error fetching movies:', error);
        return [];
    }
};

const debounceSearch = (func, delay) => {
    clearTimeout(debounceTimer);
    debounceTimer = setTimeout(func, delay);
};

const renderMovies = (movies) => {
    const movieList = document.getElementById('movieList');
    movieList.innerHTML = '';
    movies.forEach(movie => {
        const listItem = document.createElement('li');
        listItem.classList.add('movie-item');
        const poster = movie.Poster !== 'N/A' ? movie.Poster : 'https://placehold.jp/eeeeee/100x100.png?text=img ?'; // Placeholder image if poster is not available
        listItem.innerHTML = `
            <a href="details.html?id=${movie.imdbID}">
                <img src="${poster}" alt="${movie.Title}">
                <div>
                    <h3>${movie.Title}</h3>
                    <p>${movie.Year}</p>
                </div>
            </a>
        `;
        movieList.appendChild(listItem);
    });
};

const handleSearch = () => {
    const query = document.getElementById('searchInput').value.trim();
    if (query.length === 0) {
        renderMovies([]);
        return;
    }
    debounceSearch(async () => {
        const movies = await searchMovies(query);
        renderMovies(movies);
    }, SEARCH_DELAY);
};

document.getElementById('searchInput').addEventListener('input', handleSearch);

// Pre-load Avengers movies when the page loads
window.addEventListener('DOMContentLoaded', async () => {
    const avengersMovies = await searchMovies('Iron Man');
    renderMovies(avengersMovies);
});

// Load more btn
let currentPage = 1;
const resultsPerPage = 10;

const loadMoreMovies = async () => {
    const query = document.getElementById('searchInput').value.trim();
    if (query.length === 0) {
        return;
    }
    try {
        const response = await fetch(`https://www.omdbapi.com/?apikey=${API_KEY}&s=${query}&page=${currentPage}`);
        const data = await response.json();
        const movies = data.Search || [];
        renderMovies(movies);
        currentPage++;

        window.scrollTo({ top: 0, behavior: 'smooth' });
    } catch (error) {
        console.error('Error fetching movies:', error);
    }
};

document.getElementById('loadMoreBtn').addEventListener('click', loadMoreMovies);


