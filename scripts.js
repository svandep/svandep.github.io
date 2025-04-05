document.addEventListener('DOMContentLoaded', () => {
    fetch('servers.json')
        .then(response => response.json())
        .then(servers => {
            const container = document.getElementById('server-container');
            const globalSettings = servers[0]; // Extract global settings
            servers.slice(1).forEach(server => { // Skip the first item
                const panel = document.createElement('div');
                panel.className = 'server-panel';
                panel.style.width = globalSettings.width;
                panel.style.height = globalSettings.height;
                panel.innerHTML = `
                    <h2>${server.title}</h2>
                    <p>${server.description}</p>
                    <a href="${server.link}" target="_blank">
                        <img src="${server.image}" alt="${server.title} Image" style="height: ${globalSettings.imageHeight}; width: 100%; object-fit: cover;">
                    </a>
                `;
                container.appendChild(panel);
            });
        })
        .catch(error => console.error('Error loading servers:', error));
});

document.addEventListener('DOMContentLoaded', () => {
    fetch('servers.json')
        .then(response => response.json())
        .then(servers => {
            const container = document.getElementById('server-featured-container');
            const globalSettings = servers[0]; // Extract global settings
            servers.slice(1, 4).forEach(server => { // Skip the first item and limit to 3 panels
                const panel = document.createElement('div');
                panel.className = 'server-panel';
                panel.style.width = globalSettings.width;
                panel.style.height = globalSettings.height;
                panel.innerHTML = `
                    <h2>${server.title}</h2>
                    <p>${server.description}</p>
                    <a href="${server.link}" target="_blank">
                        <img src="${server.image}" alt="${server.title} Image" style="height: ${globalSettings.imageHeight}; width: 100%; object-fit: cover;">
                    </a>
                `;
                container.appendChild(panel);
            });
        })
        .catch(error => console.error('Error loading servers:', error));
});

document.addEventListener('DOMContentLoaded', () => {
    fetch('footer.html')
        .then(response => response.text())
        .then(data => {
            document.getElementById('footer-placeholder').innerHTML = data;
        })
        .catch(error => console.error('Error loading footer:', error));
});