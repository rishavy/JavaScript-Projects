let input = document.querySelector("#search-user");
let button = document.querySelector("#search-btn");
let container = document.querySelector(".user-info");

async function api() {
    container.innerHTML = '';

    try {
        let url = `https://api.github.com/users/${input.value}`;
        let response = await fetch(url);

        if (!response.ok) {
            throw new Error('User not found');
        }

        let data = await response.json();
        console.log(data);

        let div = document.createElement("div");
        div.innerHTML = `
        <div class="intro">
            <img src=${data.avatar_url} height="100px" width="100px">
            <div class="nav">
                <h1>${data.name}</h1>
                <p><a href="https://github.com/${data.login}" target="_blank">@${data.login}</a></p>
            </div>
                <p class="join">Joined: ${new Date(data.created_at).toLocaleDateString()}</p>
        </div>
            <p> ${data.bio || 'Not available'}</p>
            <li class="repos">
                <p><strong>Public Repos:</strong> ${data.public_repos}</p>
                <p><strong>Followers:</strong> ${data.followers}</p>
                <p><strong>Following:</strong> ${data.following}</p>
            </li>
            <li class="links">
                <p><i class="ri-map-2-line"></i> ${data.location || 'Not specified'}</p>
                <p><i class="ri-building-4-line"></i> ${data.company || 'Not specified'}</p>
                <p><i class="ri-linkedin-box-fill"></i> ${data.blog || 'Not available'}</p>
                <p><i class="ri-external-link-line"></i> <a href="${data.html_url}" target="_blank">${data.html_url}</a></p>
            </li>
        `;
        container.appendChild(div);
    } catch (error) {
        console.error(error.message);
        container.innerHTML = `<p style="color:red" >${error.message}</p>`; // error message to the user in red color
    }
}

button.addEventListener('click', api);

// enter btn
function handleKeyPress(event) {
    if (event.key === 'Enter') {
        api();
    }
}

input.addEventListener('keypress', handleKeyPress);
