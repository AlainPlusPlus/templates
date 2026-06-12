document.addEventListener('DOMContentLoaded', () => {
    const searchInput = document.getElementById('query');
    const postsContainer = document.getElementById('posts-container');
    const articles = postsContainer.getElementsByTagName('article');
    const noResultsMessage = document.getElementById('no-results');

    // Add an event listener to execute on every keystroke
    searchInput.addEventListener('input', (e) => {
        const searchTerm = e.target.value.toLowerCase().trim();
        let visibleCount = 0;

        // Loop through all blog articles
        Array.from(articles).forEach((article) => {
            // Fetch text from the title (h3) and description (p)
            const titleText = article.querySelector('h3').textContent.toLowerCase();
            const bodyText = article.querySelector('p').textContent.toLowerCase();

            // Check if search string exists in either title or body
            if (titleText.includes(searchTerm)
                //|| bodyText.includes(searchTerm)
            ) {
                article.classList.remove('is-hidden');
                visibleCount++;
            } else {
                article.classList.add('is-hidden');
            }
        });

        // Toggle 'No results' fallback message
        if (visibleCount === 0 && searchTerm !== "") {
            noResultsMessage.style.display = 'block';
        } else {
            noResultsMessage.style.display = 'none';
        }
    });
});
