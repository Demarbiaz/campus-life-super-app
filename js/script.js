
// API setup
const campusAPI = "https://jsonplaceholder.typicode.com/posts/1";

// Get campus updates from the API
async function loadCampusUpdates() {
    const apiInfo = document.getElementById("apiInfo");

    if (!apiInfo) return;

    apiInfo.textContent = "Loading campus updates...";

    try {
        const response = await fetch(campusAPI);

        if (!response.ok) {
            throw new Error("Could not load updates");
        }

        const data = await response.json();

        // Display information from the API
       apiInfo.textContent = "Campus Update: New events and activities are coming soon! Check back for more information.";

    } catch (error) {
        apiInfo.textContent =
            "Campus updates are unavailable right now.";

        console.log("API Error:", error);
    }
}

// Load updates when the page opens
loadCampusUpdates();
