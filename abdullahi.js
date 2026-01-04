// ===== PREMIUM STYLES INJECTION =====
const styleSheet = document.createElement("style");
styleSheet.textContent = `
  @import url('https://fonts.googleapis.com/css2?family=Outfit:wght@100;300;400;500;600;700;800;900&family=JetBrains+Mono:ital,wght@0,100..800;1,100..800&family=Plus+Jakarta+Sans:ital,wght@0,200..800;1,200..800&display=swap');
  
  :root {
    --primary: #f59e0b;
    --primary-rgb: 245, 158, 11;
    --primary-glow: rgba(245, 158, 11, 0.4);
    --secondary: #ef4444;
    --secondary-rgb: 239, 68, 68;
    --bg: #030712;
    --card-bg: rgba(17, 24, 39, 0.7);
    --text-main: #f9fafb;
    --text-muted: #9ca3af;
    --font-main: 'Plus Jakarta Sans', 'Outfit', sans-serif;
    --font-mono: 'JetBrains Mono', monospace;
    --border: rgba(255, 255, 255, 0.08);
    --accent-gradient: linear-gradient(135deg, #f59e0b 0%, #ef4444 100%);
  }

  * { box-sizing: border-box; margin: 0; padding: 0; }
  
  body { 
    background: var(--bg); 
    color: var(--text-main); 
    font-family: var(--font-main); 
    overflow-x: hidden; 
    line-height: 1.6;
    background-image: 
      radial-gradient(at 0% 0%, rgba(245, 158, 11, 0.1) 0, transparent 50%), 
      radial-gradient(at 100% 100%, rgba(239, 68, 68, 0.1) 0, transparent 50%);
    min-height: 100vh;
  }

  /* Animations */
  @keyframes float {
    0%, 100% { transform: translateY(0) rotate(0deg); }
    50% { transform: translateY(-30px) rotate(5deg); }
  }

  @keyframes pulse-glow {
    0%, 100% { opacity: 0.5; transform: scale(1); }
    50% { opacity: 0.8; transform: scale(1.1); }
  }

  @keyframes reveal {
    from { opacity: 0; transform: translateY(40px); filter: blur(10px); }
    to { opacity: 1; transform: translateY(0); filter: blur(0); }
  }

  .reveal { animation: reveal 1s cubic-bezier(0.22, 1, 0.36, 1) forwards; }
  
  .glass-card {
    background: var(--card-bg);
    backdrop-filter: blur(24px);
    -webkit-backdrop-filter: blur(24px);
    border: 1px solid var(--border);
    border-radius: 32px;
    box-shadow: 0 25px 50px -12px rgba(0, 0, 0, 0.5);
    transition: all 0.5s cubic-bezier(0.4, 0, 0.2, 1);
    position: relative;
    overflow: hidden;
  }

  .glass-card::before {
    content: '';
    position: absolute;
    top: 0; left: 0; right: 0; bottom: 0;
    background: linear-gradient(135deg, rgba(255,255,255,0.05) 0%, transparent 100%);
    z-index: 0;
    pointer-events: none;
  }

  .glass-card:hover {
    border-color: rgba(var(--primary-rgb), 0.4);
    transform: translateY(-8px) scale(1.01);
    box-shadow: 0 40px 80px -20px rgba(0, 0, 0, 0.6), 0 0 30px rgba(var(--primary-rgb), 0.1);
  }

  .skill-bar-bg { background: rgba(255,255,255,0.05); height: 10px; border-radius: 20px; overflow: hidden; margin: 12px 0 24px; position: relative; }
  .skill-bar-fill { height: 100%; background: var(--accent-gradient); border-radius: 20px; transition: width 2s cubic-bezier(0.34, 1.56, 0.64, 1); width: 0; position: relative; }
  .skill-bar-fill::after { content: ''; position: absolute; top:0; left:0; right:0; bottom:0; background: linear-gradient(90deg, transparent, rgba(255,255,255,0.2), transparent); animation: sweep 2s infinite; }

  @keyframes sweep { 0% { transform: translateX(-100%); } 100% { transform: translateX(100%); } }

  /* Custom Scrollbar */
  ::-webkit-scrollbar { width: 10px; }
  ::-webkit-scrollbar-track { background: var(--bg); }
  ::-webkit-scrollbar-thumb { background: #1f2937; border-radius: 10px; border: 2px solid var(--bg); }
  ::-webkit-scrollbar-thumb:hover { background: var(--primary); }

  input, select, textarea { 
    outline: none; 
    transition: 0.3s;
  }
  
  input:focus, select:focus {
    border-color: var(--primary) !important;
    box-shadow: 0 0 15px rgba(var(--primary-rgb), 0.2);
  }

  .btn-hover {
    position: relative;
    z-index: 1;
    overflow: hidden;
  }
  .btn-hover::after {
    content: '';
    position: absolute;
    bottom: 0; left: 0; width: 100%; height: 100%;
    background: white;
    z-index: -1;
    transform: scaleX(0);
    transform-origin: right;
    transition: transform 0.4s cubic-bezier(0.19, 1, 0.22, 1);
    opacity: 0.1;
  }
  .btn-hover:hover::after {
    transform: scaleX(1);
    transform-origin: left;
  }
`;
document.head.appendChild(styleSheet);

// ===== CONFIGURATION & DATA =====
const COLORS = {
  bg: "#0b0f1a",
  cardBg: "rgba(20, 26, 42, 0.7)",
  primary: "#f59e0b",
  primaryGlow: "rgba(245, 158, 11, 0.4)",
  secondary: "#ef4444",
  textMain: "#f8fafc",
  textMuted: "#94a3b8",
  glassBorder: "rgba(255, 255, 255, 0.08)",
  accentGradient: "linear-gradient(135deg, #f59e0b 0%, #ef4444 100%)"
};

const USER_DATA = {
  name: "Abdullahi Mursal Farah Ali",
  phone: "+252 613806865",
  email: "cabdulahimursal052@gmail.com",
  id: "C6240152",
  skill: "Software Engineering",
  university: "Jamhuuriya University",
  class: "Networking and Security • CNS242",
  profileImg: "profile.jpg"
};

const pages = {
  home: {
    title: "Ku Soo Dhawoow",
    subtitle: "Kani waa bogga rasmiga ah ee Abdullahi Mursal Farah Ali",
    content: "Halkan waxaad ka heli kartaa macluumaad ku saabsan aqoontayda, xirfadaheyga, iyo sida aad iila soo xiriiri karto."
  },
  about: {
    title: "Ku Saabsan (About Me)",
    content: "Barashada qofka iyo halka uu higsanayo."
  },
  lessons: {
    title: "Casharrada (Chapters)",
    content: "Fadlan dooro cutubka aad rabto inaad akhriso."
  },
  contact: {
    title: "Diiwaangelinta (Registration)",
    content: "Fadlan buuxi foomka hoose si aad isu diiwaangeliso. Hubi in dhammaan macluumaadku ay sax yihiin."
  }
};

const CHAPTER_DATA = {
  chapter7: {
    title: "Chapter 7: JavaScript Objects",
    examples: [
      { title: "Creating an Object", code: `const car = {type:"Fiat", model:"500", color:"white"};\nreturn JSON.stringify(car);` },
      { title: "Accessing Property (Dot)", code: `const person = {firstName:"Abdullahi", lastName:"Mursal"};\nreturn person.firstName;` },
      { title: "Accessing Property (Bracket)", code: `const person = {firstName:"Abdullahi", lastName:"Mursal"};\nreturn person["lastName"];` },
      { title: "Adding Property", code: `const person = {firstName:"Abdullahi"};\nperson.age = 20;\nreturn JSON.stringify(person);` },
      { title: "Deleting Property", code: `const person = {firstName:"Abdullahi", age:20};\ndelete person.age;\nreturn JSON.stringify(person);` },
      { title: "Object Method", code: `const person = {\n  firstName:"Abdullahi",\n  lastName:"Mursal",\n  fullName: function() {\n    return this.firstName + " " + this.lastName + " Ali";\n  }\n};\nreturn person.fullName();` },
      { title: "Nested Objects", code: `const myObj = {\n  name: "Abdullahi",\n  cars: {car1:"Ford", car2:"BMW"}\n};\nreturn myObj.cars.car2;` },
      { title: "JSON.parse()", code: `const txt = '{"name":"Abdullahi Mursal Farah Ali","age":20,"city":"Mogadishu"}';\nconst obj = JSON.parse(txt);\nreturn obj.name;` }
    ]
  },
  chapter8: {
    title: "Chapter 8: Document Object Model (DOM)",
    examples: [
      { title: "getElementById", html: "<div id='d1'>Hello</div>", code: `document.getElementById('d1').innerHTML = "Hello Abdullahi Mursal Farah Ali";\nreturn "Changed content of #d1";` },
      { title: "Get Content", html: "<div id='d2'>Some text</div>", code: `const text = document.getElementById('d2').innerHTML;\nreturn text + " - Abdullahi";` },
      { title: "Change Color", html: "<div id='d3'>I am Pink</div>", code: `document.getElementById('d3').style.color = "#f59e0b";\nreturn "Color changed to Amber";` },
      { title: "Change Font Size", html: "<div id='d4'>Small Text</div>", code: `document.getElementById('d4').style.fontSize = "24px";\nreturn "Font size set to 24px";` },
      { title: "Hide Element", html: "<div id='d5'>Now you see me</div>", code: `document.getElementById('d5').style.display = "none";\nreturn "Element hidden";` },
      { title: "Show Element", html: "<div id='d6' style='display:none'>Peekaboo!</div>", code: `document.getElementById('d6').style.display = "block";\nreturn "Element shown";` },
      { title: "Change Background", html: "<div id='d7'>Background</div>", code: `document.getElementById('d7').style.background = "#ef4444";\nreturn "Background set to Red";` },
      { title: "Set Attribute", html: "<img id='img1' alt='image' style='max-width:100px;'>", code: `document.getElementById('img1').setAttribute('src', 'profile.jpg');\nreturn "Image source set";` },
      { title: "Get Attribute", html: "<div id='d9' class='myClass'></div>", code: `return document.getElementById('d9').getAttribute('class') + " Abdullahi";` },
      { title: "Create Element", html: "<div id='d10' style='border:1px dashed #444; padding:5px;'></div>", code: `const p = document.createElement("p");\np.innerText="New P by Abdullahi";\ndocument.getElementById('d10').appendChild(p);\nreturn "Appended new paragraph";` },
      { title: "Remove Element", html: "<div id='d11'><p id='p1'>Remove Me</p></div>", code: `const elm = document.getElementById('p1');\nif(elm) elm.remove();\nreturn "Removed #p1";` },
      { title: "Query Selector", html: "<div class='example'>Class Item</div>", code: `document.querySelector('.example').style.color = '#f59e0b';\nreturn "QuerySelector success";` },
      { title: "Query Selector All", html: "<span class='test'>1</span> <span class='test'>2</span>", code: `const list = document.querySelectorAll('.test');\nlist[0].style.color='#f59e0b';\nlist[1].style.color='#f59e0b';\nreturn "QuerySelectorAll success (applied to " + list.length + " items)";` },
      { title: "ClassList Add", html: "<div id='d14' style='padding:5px;'>Box</div>", code: `document.getElementById('d14').classList.add('abdullahiClass');\nreturn "Class added: " + document.getElementById('d14').className;` },
      { title: "ClassList Remove", html: "<div id='d15' class='foo'>Box</div>", code: `document.getElementById('d15').classList.remove('foo');\nreturn "Class removed. Current: " + document.getElementById('d15').className;` },
      { title: "ClassList Toggle", html: "<div id='d16' class='foo' style='background:#222; padding:5px;'>Toggle Me</div>", code: `document.getElementById('d16').classList.toggle('foo');\nreturn "Class toggled";` },
      { title: "Inner Text vs HTML", html: "<div id='d17'></div>", code: `document.getElementById('d17').innerText = "<b>Abdullahi Mursal Farah Ali</b>";\nreturn "Used innerText (tags will show as text)";` },
      { title: "Parent Node", html: "<div id='parent_div' style='padding:5px; border:1px solid #444;'><div id='child_div'>Child</div></div>", code: `return document.getElementById('child_div').parentNode.id + " - Abdullahi";` },
      { title: "Child Nodes", html: "<div id='list_div'><p>Item 1</p><p>Item 2</p></div>", code: `return "Children length: " + document.getElementById('list_div').children.length;` },
      { title: "Document Title", html: "<i>Watch browser tab</i>", code: `const oldTitle = document.title;\ndocument.title = "Abdullahi Mursal Farah Ali";\nreturn "Title changed! Previous: " + oldTitle;` }
    ]
  },
  chapter9: {
    title: "Chapter 9: Events",
    examples: [
      { title: "OnClick Alert", html: "<button id='btn1'>Click Me</button>", code: `document.getElementById('btn1').onclick = () => alert('Clicked by Abdullahi!');\nreturn 'Event listener attached to button';` },
      { title: "OnMouseOver", html: "<div id='div2' style='background:#333;width:100px;height:50px; display:flex; align-items:center; justify-content:center; cursor:pointer;'>Hover Me</div>", code: `document.getElementById('div2').onmouseover = function () { this.style.background = '#f59e0b'; alert('Hovered by Abdullahi'); };\nreturn 'MouseOver assigned';` },
      { title: "OnMouseOut", html: "<div id='div3' style='background:#f59e0b; width:100px; height:50px; display:flex; align-items:center; justify-content:center; cursor:pointer;'>Hover Out</div>", code: `document.getElementById('div3').onmouseout = function () { this.style.background = '#333'; };\nreturn 'MouseOut assigned';` },
      { title: "OnDarkMode", html: "<button id='btn4'>Dark Mode Toggle</button>", code: `document.getElementById('btn4').onclick = () => { document.body.style.background = document.body.style.background == 'black' ? '#0f172a' : 'black'; alert('Dark Mode toggled by Abdullahi'); };\nreturn 'DarkMode button ready';` },
      { title: "OnInput", html: "<input id='in5' placeholder='Type...' style='padding:5px; color:#000;'> <span id='out5' style='color:#f59e0b;'></span>", code: `document.getElementById('in5').oninput = function () { document.getElementById('out5').innerText = ' Abdullahi says: ' + this.value; };\nreturn 'Input listener ready';` },
      { title: "OnChange", html: "<select id='sel6' style='padding:5px; color:#000;'><option>A</option><option>B</option></select>", code: `document.getElementById('sel6').onchange = function () { alert('Changed to ' + this.value + ' by Abdullahi'); };\nreturn 'Change listener ready';` },
      { title: "OnSubmit", html: "<form id='f19'><input type='text' placeholder='Name' style='padding:5px; color:#000;'> <button style='padding:5px 15px;'>Submit</button></form>", code: `document.getElementById('f19').onsubmit = (e) => { e.preventDefault(); alert('Form Submitted by Abdullahi'); };\nreturn 'Submit listener (prevented) ready';` },
    ]
  }
};

// ===== INITIAL SETUP =====
const orb1 = document.createElement("div");
orb1.style.cssText = `position:fixed;top:-10vh;right:-10vw;width:50vw;height:50vw;background:radial-gradient(circle, var(--primary-glow) 0%, transparent 70%);z-index:-1;animation:float 20s infinite ease-in-out;`;
const orb2 = document.createElement("div");
orb2.style.cssText = `position:fixed;bottom:-20vh;left:-10vw;width:60vw;height:60vw;background:radial-gradient(circle, rgba(239, 68, 68, 0.15) 0%, transparent 70%);z-index:-1;animation:float 25s infinite ease-in-out reverse;`;
document.body.append(orb1, orb2);

const app = document.createElement("div");
app.id = "app";
app.style.cssText = "display:flex;flex-direction:column;min-height:100vh;position:relative;z-index:1;";
document.body.appendChild(app);

// Navbar
const nav = document.createElement("nav");
nav.style.cssText = `display:flex;justify-content:space-between;align-items:center;padding:15px 5%;background:rgba(11, 15, 26, 0.8);backdrop-filter:blur(20px);border-bottom:1px solid var(--glass-border);position:sticky;top:0;z-index:1000;`;
app.appendChild(nav);

const logo = document.createElement("div");
logo.innerHTML = `<span style="font-weight:800; letter-spacing:2px; background:var(--accent-gradient); -webkit-background-clip:text; -webkit-text-fill-color:transparent;">ABDULLAHI</span>`;
logo.style.cssText = `font-size:24px; cursor:pointer; filter:drop-shadow(0 0 10px var(--primary-glow));`;
logo.onclick = () => renderPage("home");
nav.appendChild(logo);

const navLinksArray = [
  { key: "home", label: "HOME" },
  { key: "about", label: "ABOUT ME" },
  { key: "lessons", label: "CHAPTERS" },
  { key: "contact", label: "CONTACT" }
];

const navLinks = document.createElement("div");
navLinks.id = "navLinks";
navLinks.style.cssText = "display:flex;gap:10px;justify-content:center;";
nav.appendChild(navLinks);

// --- NAVIGATION LOGIC ---
let activePage = "";

function createNavLink(key, label) {
  const link = document.createElement("a");
  link.textContent = label;
  link.href = "#";
  link.style.cssText = `color:var(--text-muted); text-decoration:none; font-weight:600; font-size:14px; padding:10px 20px; border-radius:12px; transition:all 0.3s cubic-bezier(0.4, 0, 0.2, 1);`;

  link.onmouseover = () => {
    if (activePage !== key) {
      link.style.color = "var(--primary)";
      link.style.background = "rgba(245, 158, 11, 0.05)";
    }
  };
  link.onmouseout = () => {
    if (activePage !== key) {
      link.style.color = "var(--text-muted)";
      link.style.background = "transparent";
    }
  };

  link.onclick = (e) => {
    e.preventDefault();
    renderPage(key);
  };

  return link;
}

navLinksArray.forEach(item => {
  navLinks.appendChild(createNavLink(item.key, item.label));
});

// Menu Bar (Responsive)
const navRight = document.createElement("div");
navRight.style.cssText = "display:flex;justify-content:flex-end;align-items:center;gap:15px;flex:1;";
nav.appendChild(navRight);

// --- SIDEBAR MENU ---
const sidebar = document.createElement("div");
sidebar.style.cssText = `position:fixed;top:0;right:-320px;width:300px;height:100vh;background:#0b0f1a;border-left:1px solid rgba(255,255,255,0.08);z-index:2000;transition:right 0.4s cubic-bezier(0.4, 0, 0.2, 1);padding:100px 30px;box-sizing:border-box;display:flex;flex-direction:column;gap:10px;box-shadow:-20px 0 50px rgba(0,0,0,0.5);`;
document.body.appendChild(sidebar);

const overlay = document.createElement("div");
overlay.style.cssText = "position:fixed;top:0;left:0;width:100vw;height:100vh;background:rgba(0,0,0,0.8);backdrop-filter:blur(5px);z-index:1900;display:none;opacity:0;transition:opacity 0.4s;";
document.body.appendChild(overlay);

function toggleSidebar() {
  const isOpen = sidebar.style.right === "0px";
  if (isOpen) {
    sidebar.style.right = "-320px";
    overlay.style.opacity = "0";
    setTimeout(() => overlay.style.display = "none", 400);
    updateMenuIcon(false);
  } else {
    overlay.style.display = "block";
    setTimeout(() => overlay.style.opacity = "1", 10);
    sidebar.style.right = "0px";
    updateMenuIcon(true);
  }
}

overlay.onclick = toggleSidebar;

const menuBtn = document.createElement("div");
menuBtn.innerHTML = `
  <div style="width:25px;height:2px;background:var(--primary);margin:6px 0;transition:0.3s;"></div>
  <div style="width:18px;height:2px;background:var(--primary);margin:6px 0;transition:0.3s;"></div>
  <div style="width:25px;height:2px;background:var(--primary);margin:6px 0;transition:0.3s;"></div>
`;
menuBtn.style.cssText = `cursor:pointer;padding:10px;display:flex;flex-direction:column;align-items:flex-end;z-index:2100;`;
menuBtn.onclick = toggleSidebar;
navRight.appendChild(menuBtn);

function updateMenuIcon(isOpen) {
  const bars = menuBtn.children;
  if (isOpen) {
    bars[0].style.transform = "rotate(-45deg) translate(-6px, 6px)";
    bars[1].style.opacity = "0";
    bars[2].style.transform = "rotate(45deg) translate(-5px, -6px)";
  } else {
    bars[0].style.transform = "none";
    bars[1].style.opacity = "1";
    bars[2].style.transform = "none";
  }
}

navLinksArray.forEach(item => {
  const link = document.createElement("div");
  link.textContent = item.label;
  link.style.cssText = `color:var(--text-main); font-size:18px; font-weight:600; padding:15px 20px; border-radius:15px; cursor:pointer; transition:0.3s;`;
  link.onclick = () => { renderPage(item.key); };
  link.onmouseover = () => link.style.background = "rgba(255,255,255,0.05)";
  link.onmouseout = () => link.style.background = "transparent";
  sidebar.appendChild(link);
});

// Main Content
const main = document.createElement("main");
main.style.cssText = "flex:1; width:100%; max-width:1100px; margin:40px auto; padding:0 30px; box-sizing:border-box;";
app.appendChild(main);

// Footer
const footer = document.createElement("footer");
footer.style.cssText = `padding:40px; text-align:center; color:var(--text-muted); font-size:14px; border-top:1px solid rgba(255,255,255,0.05);`;
footer.innerHTML = `&copy; 2026 ${USER_DATA.name}. Designed for Excellence.`;
app.appendChild(footer);

function renderPage(key) {
  activePage = key;
  const page = pages[key];
  main.innerHTML = "";

  // Update selection
  Array.from(navLinks.children).forEach(child => {
    const isMatched = child.textContent.toLowerCase().includes(key.toLowerCase());
    child.style.color = isMatched ? "var(--primary)" : "var(--text-muted)";
    child.style.background = isMatched ? "rgba(245, 158, 11, 0.1)" : "transparent";
    child.style.boxShadow = isMatched ? "0 4px 15px rgba(245, 158, 11, 0.1)" : "none";
  });

  const container = document.createElement("div");
  container.className = "reveal";
  main.appendChild(container);

  if (key === "home") renderHome(container, page);
  else if (key === "about") renderAbout(container, page);
  else if (key === "lessons") renderChapters(container, page);
  else if (key === "contact") renderContact(container, page);
}

function renderHome(parent, data) {
  const hero = document.createElement("div");
  hero.style.cssText = "text-align:center; padding:120px 20px; position:relative;";
  hero.innerHTML = `
    <div class="reveal" style="display:inline-block; padding:8px 20px; border-radius:100px; background:rgba(245, 158, 11, 0.1); border:1px solid rgba(245, 158, 11, 0.2); color:var(--primary); font-size:14px; font-weight:700; text-transform:uppercase; letter-spacing:2px; margin-bottom:30px;">
      Official Portfolio 2026
    </div>
    <h1 class="reveal" style="font-size: clamp(48px, 8vw, 84px); font-weight:900; line-height:1.1; margin-bottom:30px; background:linear-gradient(to bottom, #fff 30%, #94a3b8 100%); -webkit-background-clip:text; -webkit-text-fill-color:transparent; filter:drop-shadow(0 0 30px rgba(var(--primary-rgb), 0.2));">
      Building Secure <br> <span style="background:var(--accent-gradient); -webkit-background-clip:text; -webkit-text-fill-color:transparent;">Digital Futures.</span>
    </h1>
    <p class="reveal" style="font-size:20px; color:var(--text-muted); max-width:650px; margin:0 auto 50px; line-height:1.8; animation-delay:0.2s;">
      ${data.subtitle}. Takhasuskayga waa <b>Networking and Security</b>, waxaana u heellanahay dhisidda xalal ammaan ah.
    </p>
    <div class="reveal" style="animation-delay:0.4s;">
      <button id="ctaBtn" class="glass-card btn-hover" style="padding:22px 50px; font-size:18px; font-weight:800; color:white; background:var(--accent-gradient); border:none; border-radius:100px; cursor:pointer; box-shadow:0 20px 40px rgba(var(--primary-rgb), 0.3); transition:0.5s;">
        Get Started
      </button>
    </div>
  `;
  parent.appendChild(hero);
  document.getElementById("ctaBtn").onclick = () => renderPage("about");
}

function renderAbout(parent, data) {
  const container = document.createElement("div");
  container.className = "reveal";

  const profileSection = document.createElement("div");
  profileSection.className = "glass-card";
  profileSection.style.cssText = "display:flex; gap:60px; padding:60px; align-items:center; flex-wrap:wrap; margin-bottom:40px; border-color:rgba(255,255,255,0.05);";

  profileSection.innerHTML = `
    <div style="position:relative; width:240px; height:240px;">
      <div style="position:absolute; inset:-10px; background:var(--accent-gradient); border-radius:40px; filter:blur(20px); opacity:0.3; animation:pulse-glow 4s infinite;"></div>
      <div style="width:240px; height:240px; border-radius:32px; overflow:hidden; border:2px solid rgba(255,255,255,0.1); position:relative; z-index:1;">
        <img src="${USER_DATA.profileImg}" style="width:100%; height:100%; object-fit:cover;">
      </div>
    </div>
    <div style="flex:1; min-width:320px;">
      <h2 style="font-size:56px; margin:0; font-weight:900; background:var(--accent-gradient); -webkit-background-clip:text; -webkit-text-fill-color:transparent;">${USER_DATA.name}</h2>
      <p style="color:var(--text-muted); font-size:22px; margin:12px 0 30px; font-weight:500;">
        ${USER_DATA.university} <br>
        <span style="color:var(--primary);">${USER_DATA.class}</span>
      </p>
      <div style="display:flex; gap:16px; flex-wrap:wrap;">
        <div class="glass-card" style="padding:14px 28px; border-radius:20px; background:rgba(255,255,255,0.02);">
          <span style="display:block; font-size:11px; color:var(--text-muted); text-transform:uppercase; letter-spacing:1px; margin-bottom:4px;">ID Number</span>
          <span style="font-weight:700; color:var(--text-main); font-size:18px; font-family:var(--font-mono);">${USER_DATA.id}</span>
        </div>
        <div class="glass-card" style="padding:14px 28px; border-radius:20px; background:rgba(255,255,255,0.02);">
          <span style="display:block; font-size:11px; color:var(--text-muted); text-transform:uppercase; letter-spacing:1px; margin-bottom:4px;">Direct Line</span>
          <span style="font-weight:700; color:var(--text-main); font-size:18px;">${USER_DATA.phone}</span>
        </div>
        <div class="glass-card" style="padding:14px 28px; border-radius:20px; background:rgba(255,255,255,0.02);">
          <span style="display:block; font-size:11px; color:var(--text-muted); text-transform:uppercase; letter-spacing:1px; margin-bottom:4px;">Official Email</span>
          <span style="font-weight:700; color:var(--text-main); font-size:18px;">${USER_DATA.email}</span>
        </div>
      </div>
    </div>
  `;

  const grid = document.createElement("div");
  grid.style.cssText = "display:grid; grid-template-columns: repeat(auto-fit, minmax(380px, 1fr)); gap:40px;";

  const skillsCard = document.createElement("div");
  skillsCard.className = "glass-card";
  skillsCard.style.padding = "48px";
  skillsCard.innerHTML = `
    <h3 style="margin-top:0; color:var(--text-main); font-size:28px; font-weight:800; margin-bottom:32px; display:flex; align-items:center; gap:12px;">
      <span style="width:8px; height:24px; background:var(--primary); border-radius:4px;"></span>
      Expertise
    </h3>
  `;

  const skillList = [
    { name: "Network Infrastructure", level: "95%" },
    { name: "Cyber Security", level: "92%" },
    { name: "Ethical Hacking", level: "88%" },
    { name: "Server Administration", level: "85%" }
  ];

  skillList.forEach(s => {
    const item = document.createElement("div");
    item.style.marginBottom = "28px";
    item.innerHTML = `
      <div style="display:flex; justify-content:space-between; font-size:16px; color:var(--text-main); font-weight:600; margin-bottom:10px;">
        <span>${s.name}</span>
        <span style="color:var(--primary);">${s.level}</span>
      </div>
      <div class="skill-bar-bg"><div class="skill-bar-fill" style="width:${s.level}"></div></div>
    `;
    skillsCard.appendChild(item);
  });

  const bioCard = document.createElement("div");
  bioCard.className = "glass-card";
  bioCard.style.padding = "48px";
  bioCard.innerHTML = `
    <h3 style="margin-top:0; color:var(--text-main); font-size:28px; font-weight:800; margin-bottom:32px; display:flex; align-items:center; gap:12px;">
      <span style="width:8px; height:24px; background:var(--secondary); border-radius:4px;"></span>
      Professional Mission
    </h3>
    <p style="color:var(--text-muted); font-size:18px; line-height:2; margin-bottom:32px;">
      Waxaan ahay arday u heellan barashada iyo horumarinta amniga dhijitaalka ah. Takhasuskayga <b>Networking and Security</b> ee Jamhuuriya University wuxuu ii oggolaanayaa inaan fahmo caqabadaha waaweyn ee ka jira adduunka cyber-ka iyo sida looga hortago.
    </p>
    <div style="display:flex; gap:14px; flex-wrap:wrap;">
      <span style="padding:10px 24px; border-radius:100px; background:rgba(245,158,11,0.05); color:var(--primary); font-size:14px; font-weight:700; border:1px solid rgba(245,158,11,0.1);">Security Analyst</span>
      <span style="padding:10px 24px; border-radius:100px; background:rgba(239,68,68,0.05); color:var(--secondary); font-size:14px; font-weight:700; border:1px solid rgba(239,68,68,0.1);">Network Engineer</span>
    </div>
  `;

  grid.append(skillsCard, bioCard);
  container.append(profileSection, grid);
  parent.appendChild(container);

  setTimeout(() => {
    document.querySelectorAll('.skill-bar-fill').forEach(bar => {
      const w = bar.style.width;
      bar.style.width = '0';
      setTimeout(() => bar.style.width = w, 100);
    });
  }, 100);
}

function renderChapters(parent, data) {
  const container = document.createElement("div");
  container.style.cssText = "text-align:center; padding:40px 0;";
  container.innerHTML = `
    <h2 style="font-size:42px; font-weight:800; margin-bottom:15px; color:var(--primary);">${data.title}</h2>
    <p style="color:var(--text-muted); font-size:18px; margin-bottom:60px;">Select a chapter to explore interactive code implementations.</p>
    <div id="chaptersGrid" style="display:flex; justify-content:center; gap:25px; flex-wrap:wrap;"></div>
  `;
  parent.appendChild(container);

  const chapters = [
    { name: "Chapter 7", key: "chapter7", icon: "📦" },
    { name: "Chapter 8", key: "chapter8", icon: "🌐" },
    { name: "Chapter 9", key: "chapter9", icon: "⚡" }
  ];

  const grid = container.querySelector("#chaptersGrid");
  chapters.forEach(ch => {
    const btn = document.createElement("div");
    btn.className = "glass-card";
    btn.style.cssText = `width:260px; padding:40px; cursor:pointer; text-align:center;`;
    btn.innerHTML = `
      <div style="font-size:40px; margin-bottom:20px;">${ch.icon}</div>
      <h3 style="margin:0; font-size:20px; font-weight:700;">${ch.name}</h3>
      <div style="margin-top:10px; font-size:12px; color:var(--text-muted); text-transform:uppercase; letter-spacing:1px;">View Examples</div>
    `;
    btn.onclick = () => renderExampleList(parent, CHAPTER_DATA[ch.key]);
    grid.appendChild(btn);
  });
}

function renderExampleList(parent, chapter) {
  parent.innerHTML = "";

  const backBtn = document.createElement("button");
  backBtn.textContent = "← Return to Chapters";
  backBtn.style.cssText = `margin-bottom:30px; padding:12px 25px; background:transparent; color:var(--primary); border:1px solid var(--primary); border-radius:12px; cursor:pointer; font-weight:600; transition:0.3s;`;
  backBtn.onmouseover = () => { backBtn.style.background = "var(--primary)"; backBtn.style.color = "white"; };
  backBtn.onmouseout = () => { backBtn.style.background = "transparent"; backBtn.style.color = "var(--primary)"; };
  backBtn.onclick = () => renderPage("lessons");
  parent.appendChild(backBtn);

  const header = document.createElement("h2");
  header.textContent = chapter.title;
  header.style.cssText = `font-size:36px; color:var(--primary); margin-bottom:40px;`;
  parent.appendChild(header);

  chapter.examples.forEach(ex => {
    const card = document.createElement("div");
    card.className = "glass-card";
    card.style.cssText = `padding:35px; margin-bottom:30px;`;

    card.innerHTML = `
      <h3 style="margin-top:0; color:var(--text-main); font-size:22px; margin-bottom:20px;">${ex.title}</h3>
      ${ex.html ? `
        <div style="margin-bottom:25px;">
          <div style="font-size:12px; color:var(--text-muted); margin-bottom:10px; text-transform:uppercase;">HTML Environment</div>
          <div id="preview-${ex.title.replace(/\s+/g, '')}" class="glass-card" style="padding:20px; background:rgba(0,0,0,0.3); border-radius:15px; border:1px solid rgba(255,255,255,0.05);">${ex.html}</div>
        </div>
      ` : ''}
      <div style="font-size:12px; color:var(--text-muted); margin-bottom:10px; text-transform:uppercase;">Source Code</div>
      <pre style="background:#05070a; padding:20px; border-radius:15px; color:#c9d1d9; font-family:var(--font-mono); font-size:14px; overflow-x:auto; border:1px solid rgba(255,255,255,0.03); margin-bottom:20px;"><code>${ex.code}</code></pre>
      <div style="display:flex; gap:20px; align-items:center;">
        <button class="run-btn" style="padding:12px 30px; background:var(--accent-gradient); color:white; border:none; border-radius:50px; cursor:pointer; font-weight:700; box-shadow:0 10px 20px var(--primary-glow); transition:0.3s;">Compile & Execute</button>
        <div class="result-box" style="padding:15px 25px; background:rgba(0,0,0,0.4); border-radius:12px; color:var(--primary); font-family:var(--font-mono); font-size:14px; flex:1; display:none; border-left:4px solid var(--primary);"></div>
      </div>
    `;

    const runBtn = card.querySelector(".run-btn");
    const resultBox = card.querySelector(".result-box");
    runBtn.onclick = () => {
      try {
        const func = new Function(ex.code);
        const result = func();
        resultBox.innerHTML = `<span style="color:var(--text-muted)">// Output:</span><br>${result || 'Execution Successful'}`;
        resultBox.style.display = "block";
      } catch (err) {
        resultBox.innerHTML = `<span style="color:var(--secondary)">// Error:</span><br>${err.message}`;
        resultBox.style.display = "block";
      }
    };

    parent.appendChild(card);
  });
}

function renderContact(parent, data) {
  const formCard = document.createElement("div");
  formCard.className = "glass-card";
  formCard.style.cssText = "max-width:650px; margin:40px auto; padding:50px;";

  formCard.innerHTML = `
    <h2 style="margin-top:0; text-align:center; font-size:32px; color:var(--primary); margin-bottom:40px;">Member Registration</h2>
    <form id="regForm" style="display:flex; flex-direction:column; gap:25px;">
      <div style="display:flex; flex-direction:column; gap:8px;">
        <label style="font-size:14px; color:var(--text-muted);">Full Name</label>
        <input type="text" id="regName" placeholder="Abdullahi Mursal Farah Ali" required style="padding:15px 20px; background:rgba(0,0,0,0.3); border:1px solid rgba(255,255,255,0.1); border-radius:15px; color:white; font-size:16px;">
      </div>
      <div style="display:flex; flex-direction:column; gap:8px;">
        <label style="font-size:14px; color:var(--text-muted);">Phone Number</label>
        <input type="tel" id="regPhone" placeholder="061XXXXXXX" required style="padding:15px 20px; background:rgba(0,0,0,0.3); border:1px solid rgba(255,255,255,0.1); border-radius:15px; color:white; font-size:16px;">
      </div>
      <div style="display:flex; flex-direction:column; gap:8px;">
        <label style="font-size:14px; color:var(--text-muted);">Security Password</label>
        <input type="password" id="regPass" placeholder="••••••••" required style="padding:15px 20px; background:rgba(0,0,0,0.3); border:1px solid rgba(255,255,255,0.1); border-radius:15px; color:white; font-size:16px;">
      </div>
      <div style="display:flex; align-items:center; gap:12px; font-size:14px; color:var(--text-muted);">
        <input type="checkbox" id="regTerms" required style="accent-color:var(--primary);">
        <span>I agree to the <span style="color:var(--primary); cursor:pointer;">Terms of Excellence</span></span>
      </div>
      <button type="submit" style="padding:18px; background:var(--accent-gradient); color:white; border:none; border-radius:15px; font-size:18px; font-weight:800; cursor:pointer; box-shadow:0 15px 30px var(--primary-glow); margin-top:10px;">Verify & Register</button>
    </form>
  `;

  parent.appendChild(formCard);

  formCard.querySelector("form").onsubmit = (e) => {
    e.preventDefault();
    const name = document.getElementById("regName").value;
    const phone = document.getElementById("regPhone").value;
    const pass = document.getElementById("regPass").value;

    if (phone.length < 9) return alert("Phone must be at least 9 digits!");
    if (pass.length < 8) return alert("Password must be at least 8 characters!");

    alert(`Success! Welcome to the elite circle, ${name}.`);
    e.target.reset();
  };
}

// Initial Boot
renderPage("home");
