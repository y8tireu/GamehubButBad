let cookies = 0;
let cursors = 0;
let grandmas = 0;
let farms = 0;
let cursorCost = 15;
let grandmaCost = 100;
let farmCost = 500;
let cookiesPerSecond = 0;

// Update display
function updateCookieCount() {
  document.getElementById('cookie-count').innerText = `${Math.floor(cookies)} cookies`;
  document.getElementById('cookies-per-second').innerText = `per second: ${cookiesPerSecond}`;
  document.getElementById('cursor-cost').innerText = cursorCost;
  document.getElementById('grandma-cost').innerText = grandmaCost;
  document.getElementById('farm-cost').innerText = farmCost;
}

// Click cookie to add cookies
document.getElementById('cookie-button').onclick = function() {
  cookies++;
  updateCookieCount();
};

// Buy upgrades
function buyUpgrade(type) {
  if (type === 'cursor' && cookies >= cursorCost) {
    cookies -= cursorCost;
    cursors++;
    cursorCost = Math.floor(cursorCost * 1.15);
    cookiesPerSecond += 0.1;
  } else if (type === 'grandma' && cookies >= grandmaCost) {
    cookies -= grandmaCost;
    grandmas++;
    grandmaCost = Math.floor(grandmaCost * 1.15);
    cookiesPerSecond += 1;
  } else if (type === 'farm' && cookies >= farmCost) {
    cookies -= farmCost;
    farms++;
    farmCost = Math.floor(farmCost * 1.15);
    cookiesPerSecond += 5;
  }
  updateCookieCount();
}

// Generate cookies automatically
function generateCookies() {
  cookies += cookiesPerSecond / 10;
  updateCookieCount();
}

// Set interval to generate cookies every 100ms
setInterval(generateCookies, 100);

// Golden cookie event
function spawnGoldenCookie() {
  const goldenCookie = document.getElementById('golden-cookie');
  goldenCookie.style.left = `${Math.random() * 80}vw`;
  goldenCookie.style.top = `${Math.random() * 80}vh`;
  goldenCookie.style.display = 'block';

  setTimeout(() => {
    goldenCookie.style.display = 'none';
  }, 5000); // Disappears after 5 seconds
}

// Collect golden cookie
function collectGoldenCookie() {
  cookies += 100;
  cookiesPerSecond *= 2;
  updateCookieCount();
  document.getElementById('golden-cookie').style.display = 'none';
}

// Randomly spawn a golden cookie every 30-60 seconds
setInterval(spawnGoldenCookie, Math.random() * 30000 + 30000);

