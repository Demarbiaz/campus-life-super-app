
// Welcome message
console.log("Welcome to Campus Life!");

// Announcement button
function showAnnouncement() {
    alert("Welcome! Check your assignments and campus updates.");
}

const announcementButton = document.getElementById("announcementButton");

if (announcementButton) {
    announcementButton.addEventListener("click", showAnnouncement);
}

// API setup
const campusAPI = "https://jsonplaceholder.typicode.com/posts/1";

fetch(campusAPI)
    .then(response => response.json())
    .then(data => {
        const apiInfo = document.getElementById("apiInfo");

        if (apiInfo) {
            apiInfo.textContent = data.title;
        }
    })
    .catch(error => {
        console.log("API error:", error);
    });
