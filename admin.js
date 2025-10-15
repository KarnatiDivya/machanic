async function loadAdminMechanics() {
  const res = await fetch(`${API}/mechanics`);
  const data = await res.json();
  const container = document.getElementById('admin-mechanics-list');
  container.innerHTML = '';
  data.forEach(m => {
    const div = document.createElement('div');
    div.className = 'mechanic-item';
    div.innerHTML = `<span>${m.name} - ${m.city} - ${m.speciality}</span>
                     <button class="delete-btn" onclick="deleteMechanic(${m.id})">Delete</button>`;
    container.appendChild(div);
  });
}

async function deleteMechanic(id) {
  if (confirm('Are you sure to delete this mechanic?')) {
    await fetch(`${API}/mechanics/${id}`, { method: 'DELETE' });
    loadAdminMechanics();
  }
}

loadAdminMechanics();