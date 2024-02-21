document.querySelectorAll('.faq h3').forEach(item => {
  item.addEventListener('click', () => {
    const answer = item.nextElementSibling;
    if (answer.style.display === 'block') {
      answer.style.display = 'none';
      item.querySelector('.toggle').textContent = ' ➕';
    } else {
      answer.style.display = 'block';
      item.querySelector('.toggle').textContent = ' ➖';
    }
  });
});
