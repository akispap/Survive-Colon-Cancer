// script.js
// Προς το παρόν άδειο. Θα προσθέσουμε λειτουργίες εδώ αργότερα.

console.log("JavaScript αρχείο φορτώθηκε.");

// Παράδειγμα λειτουργίας για εναλλαγή κειμένου (θα το ενεργοποιήσουμε σε συγκεκριμένες σελίδες)
function setupContentToggles() {
    const toggleButtons = document.querySelectorAll('.toggle-button');

    toggleButtons.forEach(button => {
        button.addEventListener('click', () => {
            const technicalContent = button.nextElementSibling; // Υποθέτουμε ότι το τεχνικό κείμενο είναι αμέσως μετά
            if (technicalContent && technicalContent.classList.contains('technical-content')) {
                if (technicalContent.style.display === 'none' || technicalContent.style.display === '') {
                    technicalContent.style.display = 'block';
                    button.textContent = 'Απόκρυψη Τεχνικών Πληροφοριών';
                } else {
                    technicalContent.style.display = 'none';
                    button.textContent = 'Εμφάνιση Τεχνικών Πληροφοριών';
                }
            }
        });
    });
}

// Καλείται όταν φορτώσει η σελίδα (αν θέλουμε να ενεργοποιηθεί αυτόματα)
// document.addEventListener('DOMContentLoaded', setupContentToggles);
