document.getElementById('userForm').addEventListener('submit', function (event) {
  event.preventDefault(); // Prevent form from refreshing the page

  const ageInput = document.getElementById('age').value;
  const nameInput = document.getElementById('name').value;

  // Check for empty inputs
  if (!ageInput || !nameInput) {
    alert('Both fields are required!');
    return;
  }

  const age = parseInt(ageInput, 10);
  const name = nameInput.trim();

  // Create a promise
  const agePromise = new Promise((resolve, reject) => {
    setTimeout(() => {
      if (age > 18) {
        resolve(Welcome, ${name}. You can vote.);
      } else {
        reject(Oh sorry ${name}. You aren't old enough.);
      }
    }, 4000);
  });

  // Handle promise resolution and rejection
  agePromise
    .then((message) => {
      alert(message);
    })
    .catch((error) => {
      alert(error);
    });
});