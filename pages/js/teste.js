document.addEventListener('DOMContentLoaded', function() {
    // Verificar se não estamos na página do PDV
    if (window.location.pathname !== '/pdv.html') {
      const sidebarContainer = document.getElementById('sidebar-container');

      // Carregar o conteúdo do sidebar.html
      fetch('/pages/sidebar.html')
        .then(response => response.text())
        .then(data => {
          sidebarContainer.innerHTML = data;
        })
        .catch(error => console.error('Erro ao carregar o sidebar:', error));
    }
  });