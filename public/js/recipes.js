const listBtn = document.querySelectorAll('.collection-item');
const searchBtn = document.getElementById('searchBtn');
const searchInput = document.getElementById('search');

for (let i = 0; i < listBtn.length; i++) {
  listBtn[i].addEventListener(
    'click',
    (event) => {
      const btnId = this.getElementsByClassName('id').value;
      event.preventDefault();
    },
    false,
  );
}

searchBtn.addEventListener('click', (event) => {
  event.preventDefault();
  const searchString = searchInput.value;
  window.location.replace(`/search/${searchString}`);
});

searchInput.addEventListener('keydown', (event) => {
  if (event.key === 'Enter') {
    event.preventDefault();
    const searchString = searchInput.value;
    window.location.replace(`/search/${searchString}`);
  }
});

// Print recipe functionality
function printDiv(divName) {
  const printContents = document.getElementById(divName).innerHTML;
  const originalContents = document.body.innerHTML;

  document.body.innerHTML = printContents;

  window.print();

  document.body.innerHTML = originalContents;
}
