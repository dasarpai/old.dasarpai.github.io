// Pagination URL parameter handler
document.addEventListener('DOMContentLoaded', function() {
    // Process per_page parameter
    function handlePaginationParameters() {
      const urlParams = new URLSearchParams(window.location.search);
      const perPage = urlParams.get('per_page');
      
      // Store per_page in localStorage if present
      if (perPage) {
        localStorage.setItem('itemsPerPage', perPage);
      }
      
      // Set dropdown value from localStorage
      const savedPerPage = localStorage.getItem('itemsPerPage');
      if (savedPerPage && document.getElementById('per-page')) {
        document.getElementById('per-page').value = savedPerPage;
      }
      
      // Update all pagination links to include the per_page parameter
      document.querySelectorAll('.pagination a.page-link:not(.disabled)').forEach(function(link) {
        link.addEventListener('click', function(e) {
          const savedPerPage = localStorage.getItem('itemsPerPage');
          if (savedPerPage) {
            e.preventDefault();
            let href = link.getAttribute('href');
            let url = new URL(href, window.location.origin);
            url.searchParams.set('per_page', savedPerPage);
            window.location.href = url.toString();
          }
        });
      });
    }
    
    // Call the function when DOM is loaded
    handlePaginationParameters();
  });