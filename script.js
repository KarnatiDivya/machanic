async function loadMechanics() {
  const res = await fetch(`${API}/mechanics`);
  const data = await res.json();
  const container = document.getElementById('mechanics-list');
  container.innerHTML = '';
  data.forEach(m => {
    const div = document.createElement('div');
    div.className = 'mechanic-item';
    div.innerHTML = `<span>${m.name} - ${m.city} - ${m.speciality}</span>`;
    container.appendChild(div);
  });
}
loadMechanics();