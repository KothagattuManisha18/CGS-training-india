const client_id = 'aa72f29201044716a8e07b3d1cf905ba'; 
const client_secret = '43b4e2590c8d40109891faa7b190d793';
let token = '';

async function fetchToken() {
    try {
        const result = await fetch('https://accounts.spotify.com/api/token', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/x-www-form-urlencoded',
                'Authorization': 'Basic ' + btoa(client_id + ':' + client_secret)
            },
            body: 'grant_type=client_credentials'
        });
        const data = await result.json();
        token = data.access_token;
    } catch (error) {
        console.error('Error fetching token:', error);
    }
}

async function searchTracks(query) {
    if (!token) {
        console.error('Token not available');
        return;
    }

    try {
        const result = await fetch(`https://api.spotify.com/v1/search?q=${encodeURIComponent(query)}&type=track`, {
            method: 'GET',
            headers: { 'Authorization': 'Bearer ' + token }
        });
        const data = await result.json();
        displayTracks(data.tracks.items);
    } catch (error) {
        console.error('Error searching tracks:', error);
    }
}

function displayTracks(tracks) {
    const resultsContainer = document.getElementById('results');
    resultsContainer.innerHTML = '';

    if (tracks.length === 0) {
        resultsContainer.innerHTML = '<p>No tracks found.</p>';
        return;
    }

    tracks.forEach(track => {
        const trackElement = document.createElement('div');
        trackElement.classList.add('col-md-3', 'mb-4');
        trackElement.innerHTML = `
            <div class="card h-100">
                <img src="${track.album.images[0]?.url || 'placeholder.jpg'}" class="card-img-top" alt="${track.name}">
                <div class="card-body">
                    <h5 class="card-title">${track.name}</h5>
                    <p class="card-text">${track.artists[0]?.name || 'Unknown Artist'}</p>
                    ${track.preview_url ? `<audio controls><source src="${track.preview_url}" type="audio/mpeg">Your browser does not support the audio element.</audio>` : '<p>Preview not available</p>'}
                </div>
            </div>
        `;
        resultsContainer.appendChild(trackElement);
    });
}

document.getElementById('searchButton').addEventListener('click', () => {
    const query = document.getElementById('searchSong').value;
    if (query) {
        searchTracks(query);
    }
});


fetchToken();
