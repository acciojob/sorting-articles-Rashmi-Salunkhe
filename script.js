//your JS code here. If required.
const bands = ['The Plot in You', 'The Devil Wears Prada', 'Pierce the Veil', 'Norma Jean', 'The Bled', 'Say Anything', 'The Midway State', 'We Came as Romans', 'Counterparts', 'Oh, Sleeper', 'A Skylit Drive', 'Anywhere But Here', 'An Old Dog'];

function stripArticle(bandName) {
    // Regular expression to match "a", "an", or "the" at the beginning (case insensitive)
    const regex = /^(a |an |the )/i;
    return bandName.replace(regex, '').trim();
}

function sortBands() {
    // Sort bands array ignoring articles
    const sortedBands = bands.slice().sort((a, b) => {
        const bandA = stripArticle(a);
        const bandB = stripArticle(b);
        if (bandA < bandB) {
            return -1;
        } else if (bandA > bandB) {
            return 1;
        } else {
            return 0;
        }
    });

    // Get the <ul> element
    const bandList = document.getElementById('bands');

    // Clear any existing content
    bandList.innerHTML = '';

    // Create list items and add to the <ul>
    sortedBands.forEach(band => {
        const li = document.createElement('li');
        li.textContent = band;
        bandList.appendChild(li);
    });
}

// Call sortBands when the page loads
document.addEventListener('DOMContentLoaded', sortBands);
