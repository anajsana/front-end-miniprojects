document.getElementById('fetchButton').addEventListener('click', function () {
  const repoInput = document.getElementById('repoInput').value;
  if (repoInput) {
    const apiUrl = `https://api.securityscorecards.dev/projects/${repoInput}`;
    fetch(apiUrl)
      .then(response => {
        if (!response.ok) {
          throw new Error(`HTTP error! status: ${response.status}`);
        }
        return response.json();
      })
      .then(data => {
        displayScorecard(data);
      })
      .catch(error => {
        console.error('Fetch error:', error);
      });
  }
});
