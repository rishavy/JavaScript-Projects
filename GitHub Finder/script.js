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
            <img src=${data.avatar_url} height="100px" width="100px">
            <h1>${data.name}</h1>
            <p><a href="https://github.com/${data.login}" target="_blank">@${data.login}</a></p>
            <p>Join Date: ${new Date(data.created_at).toLocaleDateString()}</p>
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
        container.innerHTML = `<p>${error.message}</p>`; // error message to the user
    }
}

button.addEventListener('click', api);
