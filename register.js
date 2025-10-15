document.getElementById('registerForm').addEventListener('submit', async (e) => {
  e.preventDefault();
  const mechanic = {
    name: document.getElementById('name').value,
    phone: document.getElementById('phone').value,
    city: document.getElementById('city').value,
    location: document.getElementById('location').value,
    speciality: document.getElementById('speciality').value
  };
  const res = await fetch(`${API}/mechanics`, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(mechanic)
  });
  if (res.ok) {
    alert('Mechanic Registered!');
    document.getElementById('registerForm').reset();
  } else {
    alert('Error registering mechanic');
  }
});