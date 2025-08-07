
document.addEventListener('DOMContentLoaded', () => {
  const bookingForm = document.getElementById('bookingForm');
  bookingForm.addEventListener('submit', function (e) {
    e.preventDefault();
    alert("📦 Your laundry pickup has been booked!");
  });
});
