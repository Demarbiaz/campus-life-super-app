
// Welcome message when the website opens
console.log("Welcome to Campus Life Super App!");

// Function for the announcement button
function showAnnouncement() {
    alert("Welcome! Make sure to check your assignments and campus updates.");
}

// Find the announcement button
const announcementButton = document.getElementById("announcementButton");

// Listen for button clicks
if (announcementButton) {
    announcementButton.addEventListener("click", showAnnouncement);
}

// Simple campus information API setup
const campusAPI = "https://jsonplaceholder.typicode.com/posts/1";

// Request sample information from an API
fetch(campusAPI)
    .then(response => response.json())
    .then(data => {
        console.log("Sample API information:", data);
    })
    .catch(error => {
        console.log("API could not load:", error);
    });
