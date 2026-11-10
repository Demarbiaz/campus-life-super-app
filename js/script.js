
// Welcome message
console.log("Welcome to Campus Life!");

// Announcement button
const announcementButton = document.getElementById("announcementButton");

if (announcementButton) {
    announcementButton.addEventListener("click", function() {
        alert("Welcome! Check your assignments and campus updates.");
    });
}

// API setup
const campusAPI = "https://jsonplaceholder.typicode.com/posts/1";

// Get information from the API
fetch(campusAPI)
    .then(response => {
        if (!response.ok) {
            throw new Error("API request failed");
        }
        return response.json();
    })
    .then(data => {
        const apiInfo = document.getElementById("apiInfo");

        if (apiInfo) {
            apiInfo.textContent = data.title;
        }
    })
    .catch(error => {
        const apiInfo = document.getElementById("apiInfo");

        if (apiInfo) {
            apiInfo.textContent = "Campus updates are unavailable right now.";
        }

        console.log("API Error:", error);
    });

