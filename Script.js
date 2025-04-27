// Handle WhatsApp Order
document.getElementById('whatsappOrder').addEventListener('click', function() {
  const name = document.getElementById('name').value;
  const pickup = document.getElementById('pickup').value;
  const treats = Array.from(document.querySelectorAll('input[name="treats"]:checked')).map(t => t.value).join(", ");
  const quantity = document.getElementById('quantity').value;
  const description = document.getElementById('description').value;
  const allergies = document.getElementById('allergies').value;

  const message = `New order from MIA'S CAKES AND TREATS website\nName: ${name}\nPick-up: ${pickup}\nItems: ${treats}\nQuantity: ${quantity}\nDetails: ${description}\nAllergies: ${allergies}`;
  window.open(`https://wa.me/260971607591?text=${encodeURIComponent(message)}`);
});

// Handle Reviews
const reviewForm = document.getElementById('reviewForm');
const reviewList = document.getElementById('reviewList');

reviewForm.addEventListener('submit', function(e) {
  e.preventDefault();
  const newReview = document.getElementById('newReview').value;
  if (newReview.trim() !== "") {
    const div = document.createElement('div');
    div.className = 'review-card';
    div.innerText = newReview;
    reviewList.prepend(div);
    reviewForm.reset();
  }
});
