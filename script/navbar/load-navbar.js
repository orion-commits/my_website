// document.addEventListener('DOMContentLoaded', function() {
//     // Path to the external navbar HTML file
//     const navbarPath = '../../components/navbar.html'; 
//     const navbarPlaceholder = document.getElementById('navbar-placeholder');

//     // Check if the placeholder element exists
//     if (navbarPlaceholder) {
//         console.log("DEBUG: Navbar placeholder found. Attempting to load navbar from:", navbarPath);
//         fetch(navbarPath)
//             .then(response => {
//                 // Handle HTTP errors
//                 if (!response.ok) {
//                     throw new Error(`HTTP error! status: ${response.status} for ${navbarPath}`);
//                 }
//                 return response.text();
//             })
//             .then(html => {
//                 // Insert the fetched HTML into the placeholder
//                 navbarPlaceholder.innerHTML = html;
//                 console.log("DEBUG: Navbar loaded successfully!");
//             })
//             .catch(error => {
//                 // Log any errors during the fetch operation
//                 console.error("ERROR: Error loading navbar:", error);
//             });
//     } else {
//         // Log an error if the placeholder is not found
//         console.error("ERROR: Navbar placeholder element with ID 'navbar-placeholder' not found in your HTML.");
//     }
// });