// Simple Admin Login
function login() {
  const password = document.getElementById('adminPassword').value;
  const correctPassword = 'iloveallah123'; // your chosen password

  if (password === correctPassword) {
    document.getElementById('loginSection').style.display = 'none';
    document.getElementById('adminPanel').style.display = 'block';
  } else {
    document.getElementById('errorMessage').innerText = "Wrong password. Try again.";
  }
}

// Logout
function logout() {
  document.getElementById('adminPanel').style.display = 'none';
  document.getElementById('loginSection').style.display = 'block';
  document.getElementById('adminPassword').value = '';
}

// Save About Text
function saveAbout() {
  const aboutText = document.getElementById('aboutText').value;
  alert('About text saved successfully!\n\n(But in real projects, you would save this to a database)');
}

// Save Treats
function saveTreats() {
  const treatsText = document.getElementById('treatsText').value;
  alert('Treats updated successfully!\n\n(But in real projects, you would save this to a database)');
}
