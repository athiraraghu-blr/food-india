document.addEventListener("DOMContentLoaded", () => {
  const card = document.getElementById("info-card");
  const svg = document.getElementById("india-map");

  // Map SVG title/id → state name in stateData
  const idToState = {
    "IN-AP": "Andhra Pradesh",
    "IN-AR": "Arunachal Pradesh",
    "IN-AS": "Assam",
    "IN-BR": "Bihar",
    "IN-CT": "Chhattisgarh",
    "IN-GA": "Goa",
    "IN-GJ": "Gujarat",
    "IN-HR": "Haryana",
    "IN-HP": "Himachal Pradesh",
    "IN-JH": "Jharkhand",
    "IN-KA": "Karnataka",
    "IN-KL": "Kerala",
    "IN-MP": "Madhya Pradesh",
    "IN-MH": "Maharashtra",
    "IN-MN": "Manipur",
    "IN-ML": "Meghalaya",
    "IN-MZ": "Mizoram",
    "IN-NL": "Nagaland",
    "IN-OR": "Odisha",
    "IN-PB": "Punjab",
    "IN-RJ": "Rajasthan",
    "IN-SK": "Sikkim",
    "IN-TN": "Tamil Nadu",
    "IN-TG": "Telangana",
    "IN-TR": "Tripura",
    "IN-UP": "Uttar Pradesh",
    "IN-UT": "Uttarakhand",
    "IN-WB": "West Bengal",
    "IN-JK": "Jammu & Kashmir",
    "IN-LA": "Ladakh",
    "IN-DL": "Delhi",
    "IN-CH": "Haryana",   // Chandigarh → show Haryana data
    "IN-PY": "Tamil Nadu" // Puducherry → show Tamil Nadu data
  };

  function showState(stateName) {
    const data = stateData[stateName];
    if (!data) return;

    card.innerHTML = `
      <div class="state-name">${stateName}</div>
      <div class="capital">🏛️ Capital: ${data.capital}</div>
      <div class="dishes-title">🍽️ Famous Dishes</div>
      <ul class="dish-list">
        ${data.dishes.map(d => `
          <li>
            <span class="emoji">${d.emoji}</span>
            <span>${d.name}</span>
          </li>
        `).join("")}
      </ul>
    `;
  }

  function resetCard() {
    card.innerHTML = `
      <div class="placeholder">
        <div class="icon">🗺️</div>
        <p>Hover over a state to explore its famous dishes</p>
      </div>
    `;
  }

  // Attach events to all paths/polygons/circles in the SVG
  function attachEvents() {
    const elements = svg.querySelectorAll("path, polygon, circle, g[id]");
    elements.forEach(el => {
      // Try to resolve state name from id or title child
      const resolveState = (el) => {
        const id = el.id || "";
        if (idToState[id]) return idToState[id];

        // Try title element inside
        const title = el.querySelector("title");
        if (title) {
          const text = title.textContent.trim();
          if (stateData[text]) return text;
          if (idToState[text]) return idToState[text];
        }

        // Try data-name attribute
        const dataName = el.getAttribute("data-name") || el.getAttribute("title") || "";
        if (stateData[dataName]) return dataName;
        if (idToState[dataName]) return idToState[dataName];

        return null;
      };

      const stateName = resolveState(el);
      if (!stateName) return;

      el.style.cursor = "pointer";

      el.addEventListener("mouseenter", () => {
        // Remove active from others
        svg.querySelectorAll(".active").forEach(a => a.classList.remove("active"));
        el.classList.add("active");
        showState(stateName);
      });

      el.addEventListener("mouseleave", () => {
        el.classList.remove("active");
        resetCard();
      });

      el.addEventListener("click", () => {
        svg.querySelectorAll(".active").forEach(a => a.classList.remove("active"));
        el.classList.add("active");
        showState(stateName);
      });
    });
  }

  // Wait for SVG to be fully loaded (it's an inline object)
  attachEvents();
  resetCard();
});
