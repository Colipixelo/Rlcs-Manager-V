function validateRosterData(){const seen=new Set();for(const p of PLAYERS){const k=p[0].trim().toLowerCase();if(seen.has(k))console.warn('Doppelter Spieler:',p[0]);seen.add(k);}}validateRosterData();
const KEY="rlcs_manager_mobile_save_v8_realistic_rlcs";

const TEAMS=[["Karmine Corp", "EU"], ["Gentle Mates", "EU"], ["Team Vitality", "EU"], ["Geekay Esports", "EU"], ["Ninjas in Pyjamas", "EU"], ["GHT", "EU"], ["Team BSK", "EU"], ["SMR", "EU"], ["Erah Esport", "EU"], ["Scald eSports", "EU"], ["GameWard", "EU"], ["ARN", "EU"], ["Team7 Esports", "EU"], ["Bärg Academy", "EU"], ["Sensity", "EU"], ["NOVA-X", "EU"], ["Minded", "EU"], ["NRG", "NA"], ["Spacestation Gaming", "NA"], ["Shopify Rebellion", "NA"], ["Gen.G Mobil1 Racing", "NA"], ["FURIA", "SAM"], ["MIBR", "SAM"], ["BS+COMPETITION", "SAM"], ["BANANA", "SAM"], ["Bigodes", "SAM"], ["Novadrift", "SAM"], ["NuTorious", "SAM"], ["Dream Esports", "SAM"], ["NoPlanB", "SAM"], ["Os Garimpeiros", "SAM"], ["Team Falcons", "MENA"], ["Twisted Minds", "MENA"], ["R8 Esports", "MENA"], ["PWR", "OCE"], ["Wildcard", "OCE"], ["FIZ6 Gaming", "OCE"], ["67 burgers", "OCE"], ["Team Abyssal", "OCE"], ["Take Flyte", "OCE"], ["Heartless Esports", "OCE"], ["TSM", "APAC"], ["KINOTROPE gaming", "APAC"], ["FOUR GUYS", "APAC"], ["Northstar Gaming", "APAC"], ["Jungle Juicers", "APAC"], ["God Speed", "APAC"], ["Dreamstation", "APAC"], ["Five Fears", "SSA"], ["Pioneers", "SSA"], ["The Punishers", "SSA"], ["White Rabbit Gaming", "SSA"], ["Team HSK", "SSA"], ["BTF Esports", "SSA"], ["La Masia", "SSA"], ["Midwest Mafia", "SSA"], ["Astronic Esports", "SSA"]];

const PLAYERS=[["Vatira", "Karmine Corp", "Striker", 95, 99, 18], ["Atow.", "Karmine Corp", "Playmaker", 93, 98, 19], ["juicy", "Karmine Corp", "Defender", 91, 95, 20], ["Archie", "Gentle Mates", "Striker", 96, 99, 19], ["nass", "Gentle Mates", "Playmaker", 94, 99, 20], ["Oski", "Gentle Mates", "Defender", 92, 96, 21], ["zen", "Team Vitality", "Striker", 97, 99, 20], ["ExoTiiK", "Team Vitality", "Playmaker", 95, 99, 21], ["stizzy", "Team Vitality", "Defender", 93, 97, 22], ["TempoH", "Geekay Esports", "Striker", 95, 99, 21], ["mtzr", "Geekay Esports", "Playmaker", 93, 98, 22], ["Alpha54", "Geekay Esports", "Defender", 91, 95, 23], ["crr", "Ninjas in Pyjamas", "Striker", 95, 99, 22], ["Joreuz", "Ninjas in Pyjamas", "Playmaker", 93, 98, 23], ["oaly.", "Ninjas in Pyjamas", "Defender", 91, 95, 24], ["tms", "GHT", "Striker", 96, 99, 23], ["Hyderr", "GHT", "Playmaker", 94, 99, 24], ["Gramma", "GHT", "Defender", 92, 96, 18], ["AztraL", "Team BSK", "Striker", 94, 98, 24], ["Growlii", "Team BSK", "Playmaker", 92, 97, 18], ["rysfox", "Team BSK", "Defender", 90, 94, 19], ["mimillo", "SMR", "Striker", 95, 99, 18], ["Rebmob", "SMR", "Playmaker", 93, 98, 19], ["skyrix", "SMR", "Defender", 91, 95, 20], ["saizen", "Erah Esport", "Striker", 95, 99, 19], ["AnoriQ", "Erah Esport", "Playmaker", 93, 98, 20], ["MayKo", "Erah Esport", "Defender", 91, 95, 21], ["Jup", "Scald eSports", "Striker", 93, 97, 20], ["noahsaki", "Scald eSports", "Playmaker", 91, 96, 21], ["Thyyder", "Scald eSports", "Defender", 89, 93, 22], ["Mozzarella", "GameWard", "Striker", 94, 98, 21], ["Pisky", "GameWard", "Playmaker", 92, 97, 22], ["rust ez95", "GameWard", "Defender", 90, 94, 23], ["Atom.", "ARN", "Striker", 95, 99, 22], ["NEO", "ARN", "Playmaker", 93, 98, 23], ["Red", "ARN", "Defender", 91, 95, 24], ["zobas", "Team7 Esports", "Striker", 92, 96, 23], ["rafaa", "Team7 Esports", "Playmaker", 90, 95, 24], ["paivX", "Team7 Esports", "Defender", 88, 92, 18], ["Barou", "Bärg Academy", "Striker", 93, 97, 24], ["Phliip.", "Bärg Academy", "Playmaker", 91, 96, 18], ["Nyco", "Bärg Academy", "Defender", 89, 93, 19], ["THK.rl", "Sensity", "Striker", 94, 98, 18], ["maca", "Sensity", "Playmaker", 92, 97, 19], ["Ziqerion", "Sensity", "Defender", 90, 94, 20], ["Myzxik", "NOVA-X", "Striker", 92, 96, 19], ["Blezzy", "NOVA-X", "Playmaker", 90, 95, 20], ["Slay", "NOVA-X", "Defender", 88, 92, 21], ["Neyl", "Minded", "Striker", 92, 96, 20], ["Sniper", "Minded", "Playmaker", 90, 95, 21], ["Zaragou", "Minded", "Defender", 88, 92, 22], ["Atomic", "NRG", "Striker", 93, 97, 21], ["BeastMode", "NRG", "Playmaker", 91, 96, 22], ["Daniel", "NRG", "Defender", 89, 93, 23], ["reveal", "Spacestation Gaming", "Striker", 91, 95, 22], ["diaz", "Spacestation Gaming", "Playmaker", 89, 94, 23], ["zach", "Spacestation Gaming", "Defender", 87, 91, 24], ["Firstkiller", "Shopify Rebellion", "Striker", 92, 96, 23], ["kofyr", "Shopify Rebellion", "Playmaker", 90, 95, 24], ["Lj", "Shopify Rebellion", "Defender", 88, 92, 18], ["MaJicBear", "Gen.G Mobil1 Racing", "Striker", 92, 96, 24], ["frosty", "Gen.G Mobil1 Racing", "Playmaker", 90, 95, 18], ["Evoh", "Gen.G Mobil1 Racing", "Defender", 88, 92, 19], ["yANXNZ", "FURIA", "Striker", 90, 94, 18], ["Lostt.", "FURIA", "Playmaker", 88, 93, 19], ["swiftt.", "FURIA", "Defender", 86, 90, 20], ["Sad", "MIBR", "Striker", 91, 95, 19], ["Reysbull", "MIBR", "Playmaker", 89, 94, 20], ["Aztrø", "MIBR", "Defender", 87, 91, 21], ["kv1", "BS+COMPETITION", "Striker", 92, 96, 20], ["crn", "BS+COMPETITION", "Playmaker", 90, 95, 21], ["wisty", "BS+COMPETITION", "Defender", 88, 92, 22], ["suco", "BANANA", "Striker", 89, 93, 21], ["Motta", "BANANA", "Playmaker", 87, 92, 22], ["DRUFINHO", "BANANA", "Defender", 85, 89, 23], ["nxghtt", "Bigodes", "Striker", 90, 94, 22], ["LeoDkn", "Bigodes", "Playmaker", 88, 93, 23], ["Bemmz", "Bigodes", "Defender", 86, 90, 24], ["KnS", "Novadrift", "Striker", 91, 95, 23], ["Rmn", "Novadrift", "Playmaker", 89, 94, 24], ["Kevinacho", "Novadrift", "Defender", 87, 91, 18], ["UmBroken", "NuTorious", "Striker", 89, 93, 24], ["klaus", "NuTorious", "Playmaker", 87, 92, 18], ["Pan", "NuTorious", "Defender", 85, 89, 19], ["ViitiN.", "Dream Esports", "Striker", 89, 93, 18], ["davinsano", "Dream Esports", "Playmaker", 87, 92, 19], ["misery", "Dream Esports", "Defender", 85, 89, 20], ["Shezzffy", "NoPlanB", "Striker", 90, 94, 19], ["reekkan", "NoPlanB", "Playmaker", 88, 93, 20], ["Isma", "NoPlanB", "Defender", 86, 90, 21], ["courtz", "Os Garimpeiros", "Striker", 88, 92, 20], ["zeeph", "Os Garimpeiros", "Playmaker", 86, 91, 21], ["Iguinn", "Os Garimpeiros", "Defender", 84, 88, 22], ["Rw9", "Team Falcons", "Striker", 89, 93, 21], ["Kiileerrz", "Team Falcons", "Playmaker", 87, 92, 22], ["dralii", "Team Falcons", "Defender", 85, 89, 23], ["Nwpo", "Twisted Minds", "Striker", 89, 93, 22], ["M0nkey M00n", "Twisted Minds", "Playmaker", 87, 92, 23], ["trk511", "Twisted Minds", "Defender", 85, 89, 24], ["Abdullah", "R8 Esports", "Striker", 87, 91, 23], ["Ghaazi", "R8 Esports", "Playmaker", 85, 90, 24], ["M7md", "R8 Esports", "Defender", 83, 87, 18], ["Fibérr", "PWR", "Striker", 88, 92, 24], ["gus", "PWR", "Playmaker", 86, 91, 18], ["Superlachie", "PWR", "Defender", 84, 88, 19], ["Torsos", "Wildcard", "Striker", 89, 93, 18], ["bananahead", "Wildcard", "Playmaker", 87, 92, 19], ["Fever", "Wildcard", "Defender", 85, 89, 20], ["Korp", "FIZ6 Gaming", "Striker", 86, 90, 19], ["Phys", "FIZ6 Gaming", "Playmaker", 84, 89, 20], ["jimmo", "FIZ6 Gaming", "Defender", 82, 86, 21], ["Shugs.", "67 burgers", "Striker", 87, 91, 20], ["Rellec", "67 burgers", "Playmaker", 85, 90, 21], ["Khrade", "67 burgers", "Defender", 83, 87, 22], ["lunr", "Team Abyssal", "Striker", 88, 92, 21], ["Skworchi", "Team Abyssal", "Playmaker", 86, 91, 22], ["zombiefreak", "Team Abyssal", "Defender", 84, 88, 23], ["Amphis", "Take Flyte", "Striker", 86, 90, 22], ["Fades", "Take Flyte", "Playmaker", 84, 89, 23], ["Scrub", "Take Flyte", "Defender", 82, 86, 24], ["Bigrooster", "Heartless Esports", "Striker", 86, 90, 23], ["Chub", "Heartless Esports", "Playmaker", 84, 89, 24], ["Matthew.", "Heartless Esports", "Defender", 82, 86, 18], ["Kevin", "TSM", "Striker", 87, 91, 24], ["Catalysm", "TSM", "Playmaker", 85, 90, 18], ["Sphinx", "TSM", "Defender", 83, 87, 19], ["furlashh", "KINOTROPE gaming", "Striker", 85, 89, 18], ["Kash", "KINOTROPE gaming", "Playmaker", 83, 88, 19], ["Maxeew", "KINOTROPE gaming", "Defender", 81, 85, 20], ["nai", "FOUR GUYS", "Striker", 86, 90, 19], ["risk", "FOUR GUYS", "Playmaker", 84, 89, 20], ["valid", "FOUR GUYS", "Defender", 82, 86, 21], ["Lunar", "Northstar Gaming", "Striker", 86, 90, 20], ["Taha", "Northstar Gaming", "Playmaker", 84, 89, 21], ["Pengoli", "Northstar Gaming", "Defender", 82, 86, 22], ["Lunatic.", "Jungle Juicers", "Striker", 84, 88, 21], ["Mohanned", "Jungle Juicers", "Playmaker", 82, 87, 22], ["Tossis", "Jungle Juicers", "Defender", 80, 84, 23], ["eco", "God Speed", "Striker", 85, 89, 22], ["Dansku", "God Speed", "Playmaker", 83, 88, 23], ["Rigorous", "God Speed", "Defender", 81, 85, 24], ["Burn", "Dreamstation", "Striker", 86, 90, 23], ["mikan", "Dreamstation", "Playmaker", 84, 89, 24], ["katarinabluu", "Dreamstation", "Defender", 82, 86, 18], ["tehqoz", "Five Fears", "Striker", 83, 87, 24], ["Snowyy", "Five Fears", "Playmaker", 81, 86, 18], ["gunz", "Five Fears", "Defender", 79, 83, 19], ["2Die4", "Pioneers", "Striker", 84, 88, 18], ["LuiisP", "Pioneers", "Playmaker", 82, 87, 19], ["Sweaty", "Pioneers", "Defender", 80, 84, 20], ["GoldNiNja", "The Punishers", "Striker", 85, 89, 19], ["Shadow", "The Punishers", "Playmaker", 83, 88, 20], ["Marmoan", "The Punishers", "Defender", 81, 85, 21], ["Wee_Casper", "White Rabbit Gaming", "Striker", 83, 87, 20], ["Appelsous", "White Rabbit Gaming", "Playmaker", 81, 86, 21], ["Mass", "White Rabbit Gaming", "Defender", 79, 83, 22], ["Anyeelo.", "Team HSK", "Striker", 83, 87, 21], ["Duklaz", "Team HSK", "Playmaker", 81, 86, 22], ["BigFoot", "Team HSK", "Defender", 79, 83, 23], ["Jeff", "BTF Esports", "Striker", 84, 88, 22], ["Ravi", "BTF Esports", "Playmaker", 82, 87, 23], ["Teschow", "BTF Esports", "Defender", 80, 84, 24], ["Dreazy", "La Masia", "Striker", 82, 86, 23], ["Mnotho.", "La Masia", "Playmaker", 80, 85, 24], ["Sullyxnz", "La Masia", "Defender", 78, 82, 18], ["JeromeMoment", "Midwest Mafia", "Striker", 83, 87, 24], ["Waarheid.", "Midwest Mafia", "Playmaker", 81, 86, 18], ["Peanuts", "Midwest Mafia", "Defender", 79, 83, 19], ["Galaxy", "Astronic Esports", "Striker", 83, 87, 18], ["insp1re", "Astronic Esports", "Playmaker", 81, 86, 19], ["Mercury", "Astronic Esports", "Defender", 79, 83, 20]];

function fresh(){
  return {club:"",region:"EU",season:1,split:1,week:1,cash:1250000,sponsor:60000,chem:76,
    squad:[],academy:[],market:[],staff:{coach:1,scout:1,analyst:1},fac:1,
    standings:[],history:[],seasonWins:0,seasonLosses:0,major:false,worlds:false,lastMatch:null};
}
function makeMarket(s){return PLAYERS.filter(p=>!s.some(x=>x.name===p[0])).map(p=>({name:p[0],club:p[1],role:p[2],ovr:p[3],pot:p[4],age:p[5],value:Math.round(p[3]*p[3]*110),ask:Math.round(p[3]*p[3]*125),wage:Math.round(p[3]*700),years:2}));}
function league(region=S.region){
 return TEAMS.filter(x=>x[1]===region).map(x=>({team:x[0],pts:0,w:0,l:0,gf:0,ga:0}));
}
let S=JSON.parse(localStorage.getItem(KEY)||"null");
let setupMode=!S;
let tab="home";
let liveTimer=null;
let LIVE=null;

function save(){localStorage.setItem(KEY,JSON.stringify(S));}
function go(t){tab=t;render();}
function money(n){return "€"+Math.round(n).toLocaleString("de-DE");}
function esc(x){return String(x).replace(/[&<>"']/g,c=>({"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#39;"}[c]));}
function avg(){return Math.round(S.squad.reduce((a,p)=>a+p.ovr,0)/S.squad.length);}
function openModal(id){document.getElementById("modal").classList.remove("hidden");}
function closeModal(){document.getElementById("modal").classList.add("hidden");}
function modal(html){document.getElementById("modalContent").innerHTML=html;openModal("modal");}


let setupChoice="create";
let setupRegion="EU";
let setupSelected=[];
let customPlayerDraft=[];

function setupView(){
 const regionTeams=TEAMS.filter(t=>t[1]===setupRegion);
 const players=PLAYERS.filter(p=>p[1]===setupSelectedTeam);
 return `<div class="setup">
   <div class="setuphero"><div class="eyebrow">RLCS MANAGER · NEUES SPIEL</div><h1>Dein Esports-Club</h1>
   <p>Starte als bestehender Club oder baue dein eigenes 3v3-Team von Grund auf.</p></div>
   <div class="setupchoice"><button class="choicecard ${setupChoice==="create"?"selected":""}" onclick="setSetupChoice('create')"><span>🛠️</span><b>Eigenes Team erstellen</b><small>Name, Region und Spieler selbst wählen</small></button>
   <button class="choicecard ${setupChoice==="existing"?"selected":""}" onclick="setSetupChoice('existing')"><span>🏆</span><b>Bestehendes Team übernehmen</b><small>Mit einem vorhandenen Club starten</small></button></div>
   <div class="setupcard">
     <h3>🌍 Region</h3>
     <div class="regiongrid">${["EU","NA","SAM","MENA","OCE","APAC","SSA"].map(r=>`<button class="regionbtn ${setupRegion===r?"active":""}" onclick="setSetupRegion('${r}')">${r}<small>${regionName(r)}</small></button>`).join("")}</div>
   </div>
   ${setupChoice==="create"?createTeamSetup():existingTeamSetup()}
 </div>`;
}
function regionName(r){return r==="EU"?"Europa":r==="NA"?"Nordamerika":r==="SAM"?"Südamerika":r==="MENA"?"Nahost & Nordafrika":r==="APAC"?"Asien-Pazifik":r==="SSA"?"Sub-Saharan Africa":"Ozeanien";}
function setSetupChoice(c){setupChoice=c;setupSelected=[];render();}
function setSetupRegion(r){setupRegion=r;setupSelected=[];render();}
let setupSelectedTeam="";
function existingTeamSetup(){
 const teams=TEAMS.filter(t=>t[1]===setupRegion);
 if(!setupSelectedTeam||!teams.some(t=>t[0]===setupSelectedTeam))setupSelectedTeam=teams[0]?.[0]||"";
 const roster=PLAYERS.filter(p=>p[1]===setupSelectedTeam).slice(0,3);
 return `<div class="setupcard"><h3>🏆 Club auswählen</h3>
 <select class="input" onchange="setupSelectedTeam=this.value;render()">${teams.map(t=>`<option ${t[0]===setupSelectedTeam?"selected":""}>${esc(t[0])}</option>`).join("")}</select>
 <div class="rosterpreview">${roster.map(p=>`<div class="previewplayer"><b>${esc(p[0])}</b><span>${p[2]}</span><strong>${p[3]}</strong></div>`).join("")}</div>
 <button class="btn primary full" onclick="startExistingClub()">▶ Mit diesem Team starten</button></div>`;
}
function createTeamSetup(){
 const pool=PLAYERS.filter(p=>p[1] && TEAMS.some(t=>t[0]===p[1]&&t[1]===setupRegion));
 const selected=pool.filter(p=>setupSelected.includes(p[0]));
 return `<div class="setupcard"><h3>🛠️ Eigenes Team</h3>
 <input id="newClubName" class="input" maxlength="28" placeholder="Teamname, z. B. Aurora Esports">
 <p class="note">Wähle genau 3 Spieler. Du kannst außerdem einen eigenen Spieler erstellen.</p>
 <div class="selectedcount">Ausgewählt: <b>${selected.length}/3</b></div>
 <div class="playerpicker">${pool.map(p=>`<button class="pickplayer ${setupSelected.includes(p[0])?"picked":""}" onclick="toggleSetupPlayer('${esc(p[0])}')"><span><b>${esc(p[0])}</b><small>${p[2]} · ${p[1]}</small></span><strong>${p[3]}</strong></button>`).join("")}</div>
 <button class="btn" onclick="openCustomPlayer()">➕ Eigenen Spieler erstellen</button>
 ${customPlayerDraft.map((p,i)=>`<button class="pickplayer custompick ${setupSelected.includes(p.name)?"picked":""}" onclick="toggleSetupPlayer('${esc(p.name)}')"><span><b>${esc(p.name)}</b><small>${p.role} · eigener Spieler</small></span><strong>${p.ovr}</strong></button>`).join("")}
 <button class="btn primary full" onclick="startCustomClub()">🚀 Team gründen</button></div>`;
}
function toggleSetupPlayer(name){
 if(setupSelected.includes(name))setupSelected=setupSelected.filter(x=>x!==name);
 else if(setupSelected.length<3)setupSelected.push(name);
 else alert("Du kannst im Startkader genau 3 Spieler auswählen.");
 render();
}
function openCustomPlayer(){
 modal(`<h2>Eigenen Spieler erstellen</h2>
 <input id="cpName" class="input" maxlength="20" placeholder="Spielername">
 <select id="cpRole" class="input"><option>Striker</option><option>Playmaker</option><option>Defender</option><option>Flex</option></select>
 <input id="cpOvr" class="input" type="number" min="65" max="90" value="78" placeholder="OVR">
 <input id="cpPot" class="input" type="number" min="70" max="99" value="92" placeholder="Potential">
 <input id="cpAge" class="input" type="number" min="15" max="25" value="17" placeholder="Alter">
 <button class="btn primary choice" onclick="addCustomPlayer()">Spieler hinzufügen</button>
 <button class="btn choice" onclick="closeModal()">Abbrechen</button>`);
}
function addCustomPlayer(){
 const name=(document.getElementById("cpName").value||"").trim();
 const role=document.getElementById("cpRole").value, ovr=+document.getElementById("cpOvr").value, pot=+document.getElementById("cpPot").value, age=+document.getElementById("cpAge").value;
 if(!name)return alert("Bitte einen Namen eingeben.");
 if(customPlayerDraft.some(p=>p.name.toLowerCase()===name.toLowerCase())||PLAYERS.some(p=>p[0].toLowerCase()===name.toLowerCase()))return alert("Dieser Name existiert bereits.");
 customPlayerDraft.push({name,role,ovr:Math.min(90,Math.max(65,ovr)),pot:Math.max(ovr,Math.min(99,pot)),age:Math.min(25,Math.max(15,age))});
 closeModal();render();
}
function playerObject(p){
 return {name:p.name||p[0],role:p.role||p[2],ovr:p.ovr||p[3],pot:p.pot||p[4],age:p.age||p[5],morale:80,energy:95,wage:Math.round((p.ovr||p[3])*600),years:2,clause:Math.round((p.ovr||p[3])**2*150)};
}
function startCustomClub(){
  try { v6ReadSetup(); } catch(e) {}

 const name=(document.getElementById("newClubName")?.value||"").trim();
 if(name.length<3)return alert("Bitte gib einen Teamnamen mit mindestens 3 Zeichen ein.");
 if(setupSelected.length!==3)return alert("Bitte wähle genau 3 Spieler.");
 const pool=PLAYERS.map(p=>({name:p[0],club:p[1],role:p[2],ovr:p[3],pot:p[4],age:p[5]})).concat(customPlayerDraft);
 const chosen=pool.filter(p=>setupSelected.includes(p.name));
 S={...fresh(),club:name,region:setupRegion,squad:chosen.map(playerObject)};
 S.standings=league(setupRegion);S.market=makeMarket(S.squad);setupMode=false;tab="home";save();render();
}
function startExistingClub(){
  try { v6ReadSetup(); } catch(e) {}

 const team=TEAMS.find(t=>t[0]===setupSelectedTeam);
 if(!team)return;
 const roster=PLAYERS.filter(p=>p[1]===team[0]).slice(0,3);
 if(roster.length<3)return alert("Für dieses Team sind noch nicht genug Spieler hinterlegt.");
 S={...fresh(),club:team[0],region:team[1],squad:roster.map(playerObject)};
 S.standings=league(team[1]);S.market=makeMarket(S.squad);setupMode=false;tab="home";save();render();
}
function newGame(){
 if(!confirm("Neues Spiel starten? Dein aktueller Spielstand wird ersetzt."))return;
 localStorage.removeItem(KEY);S=null;setupMode=true;setupChoice="create";setupSelected=[];customPlayerDraft=[];render();
}

function render(){
 document.querySelectorAll(".bottomnav button").forEach(b=>b.classList.toggle("active",b.dataset.tab===tab));
 const el=document.getElementById("screen");
 if(setupMode){el.innerHTML=setupView();return;}
 if(tab==="live"){el.innerHTML=liveView();return;}
 if(tab==="home")el.innerHTML=home();
 if(tab==="team")el.innerHTML=team();
 if(tab==="market")el.innerHTML=market();
 if(tab==="academy")el.innerHTML=academy();
 if(tab==="league")el.innerHTML=leaguePage();
}
function home(){
 let next=nextOpponent();
 return `<div class="page">
 <div class="hero"><div class="eyebrow">SAISON ${S.season} · SPLIT ${S.split} · SPIELTAG ${S.week}</div><h2>${S.club}</h2><div class="muted">${S.region} · Team OVR ${avg()} · Chemie ${S.chem}</div>
 <div style="margin-top:14px"><button class="btn primary" onclick="startLiveMatch()">▶ Spiel starten</button></div></div>
 <div class="grid">
 <div class="card"><div class="label">Budget</div><div class="stat">${money(S.cash)}</div></div>
 <div class="card"><div class="label">Bilanz</div><div class="stat">${S.seasonWins}-${S.seasonLosses}</div></div>
 <div class="card"><div class="label">Gehälter</div><div class="stat">${money(S.squad.reduce((a,p)=>a+p.wage,0))}</div></div>
 <div class="card"><div class="label">Liga</div><div class="stat">${standingPos()}. Platz</div></div></div>
 <div class="section">Nächstes Match</div><div class="card"><div class="row"><b>${S.club}</b><b>vs.</b><b>${next}</b></div><p class="note">Best-of-5 · regionale Liga · 3v3</p></div>
 <div class="section">Spiel</div><button class="btn danger full" onclick="newGame()">↻ Neues Spiel</button><div class="section">Schnellaktionen</div><div class="two"><button class="btn" onclick="train('Mechanik')">⚙️ Mechanik</button><button class="btn" onclick="train('Teamplay')">🤝 Teamplay</button><button class="btn" onclick="train('Defense')">🛡 Defense</button><button class="btn" onclick="train('Erholung')">🔋 Erholung</button></div>
 ${S.lastMatch?`<div class="section">Letzter Spieltag</div><div class="card">${S.lastMatch}</div>`:""}</div>`;
}
function nextOpponent(){let others=S.standings.filter(x=>x.team!==S.club);return others[(S.week-1)%others.length]?.team||"Karmine Corp";}
function team(){
 return `<div class="page"><div class="hero"><h2>Dein 3v3-Kader</h2><div class="muted">Rollen sind positionsbezogen, nicht an echte RLCS-Roster gebunden.</div></div>
 <div class="stack">${S.squad.map((p,i)=>`<div class="player"><div class="row"><div><div class="name">${esc(p.name)}</div><span class="pill">${p.role}</span></div><div style="text-align:right"><b>${p.ovr}</b><div class="muted">POT ${p.pot}</div></div></div>
 <div class="bars"><div class="bar" style="width:${p.energy}%"></div></div><p class="note">Alter ${p.age} · Moral ${p.morale} · Energie ${p.energy} · ${money(p.wage)}/Woche · Vertrag ${p.years} J.</p>
 <div class="two"><button class="btn small" onclick="extend(${i})">Vertrag</button><button class="btn small danger" onclick="release(${i})">Freigeben</button></div></div>`).join("")}</div>
 <div class="section">Staff</div><div class="grid">${["coach","scout","analyst"].map(k=>`<div class="card"><div class="label">${k}</div><div class="stat">Lv ${S.staff[k]}</div><button class="btn small" onclick="upgrade('${k}')">Upgrade ${money(S.staff[k]*120000)}</button></div>`).join("")}</div></div>`;
}
function market(){
 return `<div class="page"><div class="hero"><h2>Transfermarkt</h2><div class="muted">Verhandle Ablöse, Gehalt und Vertragslaufzeit.</div></div>
 <div class="stack">${S.market.slice(0,16).map((p,i)=>`<div class="player"><div class="row"><div><div class="name">${esc(p.name)}</div><span class="pill">${p.role}</span> <span class="pill">${p.club}</span></div><b>${p.ovr}</b></div><p class="note">${p.age} Jahre · Wert ${money(p.value)} · Forderung ${money(p.ask)}</p><button class="btn primary" onclick="negotiate(${i})">Verhandeln</button></div>`).join("")}</div></div>`;
}
function academy(){
 return `<div class="page"><div class="hero"><h2>Jugendakademie</h2><p class="muted">Scoute Nachwuchs und entwickle Talente über mehrere Saisons.</p><button class="btn good" onclick="scoutYouth()">🔎 Nachwuchs scouten · ${money(50000)}</button></div>
 <div class="section">Deine Talente</div><div class="stack">${S.academy.length?S.academy.map((p,i)=>`<div class="player"><div class="row"><div><div class="name">${p.name}</div><span class="pill">${p.role}</span></div><b>${p.ovr}</b></div><p class="note">POT ${p.pot} · ${p.age} Jahre · Entwicklung ${p.dev}/100</p><button class="btn small" onclick="promote(${i})">In Profikader holen</button></div>`).join(""):"<div class='card muted'>Noch keine Talente.</div>"}</div></div>`;
}
function leaguePage(){
 let rows=[...S.standings].sort((a,b)=>b.pts-a.pts||((b.gf-b.ga)-(a.gf-a.ga)));
 return `<div class="page"><div class="hero"><h2>RLCS ${regionName(S.region)}</h2><div class="muted">Regionale Liga · Auf-/Abstieg · Major-Qualifikation · World Championship</div></div>
 <table class="table"><thead><tr><th>#</th><th>Team</th><th>Sp</th><th>P</th><th>GD</th></tr></thead><tbody>${rows.map((r,i)=>`<tr class="${r.team===S.club?'you':''}"><td>${i+1}</td><td>${esc(r.team)}</td><td>${r.w+r.l}</td><td><b>${r.pts}</b></td><td>${r.gf-r.ga}</td></tr>`).join("")}</tbody></table>
 <div class="section">Wettbewerbe</div><div class="stack">
 <div class="card"><div class="row"><b>Regional League</b><span class="pill">aktiv</span></div><p class="note">Regelmäßig spielen. Top-Teams sammeln Punkte für den Major.</p></div>
 <div class="card"><div class="row"><b>Major</b><span class="pill">${S.major?"qualifiziert":"noch offen"}</span></div><p class="note">Erreiche die Top-Plätze der Region, um dich zu qualifizieren.</p></div>
 <div class="card"><div class="row"><b>World Championship</b><span class="pill">${S.worlds?"qualifiziert":"noch offen"}</span></div><p class="note">Das Saisonfinale mit Teams aus allen Regionen.</p></div></div>
 <div class="section">Saisonfortschritt</div><div class="card"><div class="bars"><div class="bar" style="width:${Math.min(100,S.week/9*100)}%"></div></div><p class="note">Spieltag ${S.week}/9</p></div></div>`;
}

function train(type){
 if(type==="Erholung"){S.squad.forEach(p=>p.energy=Math.min(100,p.energy+18));S.chem=Math.min(100,S.chem+2);}
 else {S.squad.forEach(p=>{p.energy=Math.max(25,p.energy-7);p.morale=Math.min(100,p.morale+1); if(Math.random()<.25)p.ovr=Math.min(p.pot,p.ovr+1)}); if(type==="Teamplay")S.chem=Math.min(100,S.chem+4);}
 save();render();
}
function upgrade(k){let cost=S.staff[k]*120000;if(S.cash<cost)return alert("Nicht genug Budget.");S.cash-=cost;S.staff[k]++;save();render();}
function extend(i){let p=S.squad[i];p.years+=1;p.wage=Math.round(p.wage*1.08);p.clause=Math.round(p.clause*1.08);save();render();}
function release(i){if(S.squad.length<=3)return alert("Du brauchst mindestens 3 Spieler.");let p=S.squad[i];S.cash+=Math.round(p.value||p.ovr*p.ovr*70);S.squad.splice(i,1);S.chem=Math.max(50,S.chem-12);save();render();}
function negotiate(i){
 let p=S.market[i]; modal(`<h2>${esc(p.name)}</h2><p class="note">${p.club} · ${p.role} · OVR ${p.ovr} · POT ${p.pot}</p>
 <div class="card"><div class="label">Verhandlung</div><p>Forderung: <b>${money(p.ask)}</b> Ablöse · ${money(p.wage)}/Woche · ${p.years} Jahre</p>
 <input id="offer" class="input" type="number" value="${Math.round(p.ask*.88)}" placeholder="Ablöse">
 <input id="salary" class="input" style="margin-top:8px" type="number" value="${p.wage}" placeholder="Wochengehalt">
 <button class="btn primary choice" onclick="buy(${i})">Angebot abschicken</button><button class="btn choice" onclick="closeModal()">Abbrechen</button></div>`);
}
function buy(i){
 let p=S.market[i], offer=+document.getElementById("offer").value, sal=+document.getElementById("salary").value;
 let chance=Math.max(.1,Math.min(.95,.35+(offer/p.ask-.8)*.9+(sal/p.wage-.9)*.4));
 if(Math.random()<chance && S.cash>=offer){
   S.cash-=offer;S.squad.push({name:p.name,role:p.role,ovr:p.ovr,pot:p.pot,age:p.age,morale:75,energy:90,wage:sal,years:p.years,clause:Math.round(offer*1.5)});
   S.market.splice(i,1);S.chem=Math.max(45,S.chem-8);closeModal();save();render();
 }else alert(S.cash<offer?"Budget reicht nicht.":"Der Spieler lehnt das Angebot ab.");
}
function scoutYouth(){
 if(S.cash<50000)return alert("Nicht genug Budget.");
 S.cash-=50000;
 let roles=["Striker","Playmaker","Defender","Flex"], o=65+Math.floor(Math.random()*16), pot=Math.min(94,o+8+Math.floor(Math.random()*12));
 S.academy.push({name:["Nova","Kai","Milo","Rex","Jett","Lumi","Aero"][Math.floor(Math.random()*7)]+" Academy",role:roles[Math.floor(Math.random()*4)],ovr:o,pot,age:15+Math.floor(Math.random()*3),dev:60+Math.floor(Math.random()*35)});
 save();render();
}
function promote(i){let p=S.academy[i];if(S.squad.length>=5)return alert("Kaderlimit erreicht.");S.squad.push({...p,morale:70,energy:100,wage:15000,years:3,clause:500000});S.academy.splice(i,1);save();render();}
function standingPos(){let a=[...S.standings].sort((x,y)=>y.pts-x.pts);return a.findIndex(x=>x.team===S.club)+1;}

function startLiveMatch(){
 if(liveTimer)clearInterval(liveTimer);
 const opp=nextOpponent();
 LIVE={opp,game:1,ourSeries:0,oppSeries:0,ourGoals:0,oppGoals:0,clock:300,paused:false,speed:1,
 feed:["🎙️ Willkommen in der Arena! Beide 3v3-Teams stehen bereit."],ball:{x:50,y:50},cars:[],finished:false,
 stats:{}};
 const roles=["Striker","Playmaker","Defender"];
 S.squad.slice(0,3).forEach((p,i)=>{
   LIVE.cars.push({name:p.name,team:"blue",role:roles[i],x:18+i*7,y:30+i*20});
   LIVE.stats[p.name]={team:"blue",role:roles[i],goals:0,assists:0,saves:0,shots:0,score:0};
 });
 ["Vatira","Seikoo","Itachi"].forEach((n,i)=>{
   LIVE.cars.push({name:n,team:"orange",role:roles[i],x:75-i*7,y:35+i*20});
   LIVE.stats[n]={team:"orange",role:roles[i],goals:0,assists:0,saves:0,shots:0,score:0};
 });
 tab="live";render();startLiveClock();
}
function startLiveClock(){
 if(liveTimer)clearInterval(liveTimer);
 liveTimer=setInterval(()=>{
   if(!LIVE||LIVE.finished||LIVE.paused)return;
   for(let i=0;i<LIVE.speed;i++)moveArena();
   if(Math.random()<0.09*LIVE.speed)liveEvent();
   LIVE.clock-=LIVE.speed;
   if(LIVE.clock<=0)finishGame(); else renderLiveOnly();
 },700);
}
function renderLiveOnly(){const screen=document.getElementById("screen");if(tab==="live"&&screen)screen.innerHTML=liveView();}
function moveArena(){
 LIVE.ball.x=Math.max(5,Math.min(95,LIVE.ball.x+(Math.random()*22-11)));
 LIVE.ball.y=Math.max(10,Math.min(90,LIVE.ball.y+(Math.random()*24-12)));
 LIVE.cars.forEach(c=>{c.x=Math.max(6,Math.min(94,c.x+(Math.random()*12-6)));c.y=Math.max(10,Math.min(90,c.y+(Math.random()*14-7)));});
}
function liveEvent(){
 const own=Math.random()<0.5;
 const team=own?LIVE.cars.filter(c=>c.team==="blue"):LIVE.cars.filter(c=>c.team==="orange");
 const scorer=team[Math.floor(Math.random()*team.length)];
 const others=team.filter(x=>x!==scorer);
 const assist=others.length?others[Math.floor(Math.random()*others.length)]:scorer;
 const r=Math.random();
 if(r<0.24){
   const defenders=LIVE.cars.filter(c=>c.team!==(own?"blue":"orange"));
   const d=defenders[Math.floor(Math.random()*defenders.length)];
   LIVE.stats[d.name].saves++;
   LIVE.stats[d.name].score+=35;
   LIVE.feed.push(`🧤 ${d.name} macht einen wichtigen Save! (+35 Score)`);
 }else if(r<0.39){
   LIVE.stats[scorer.name].shots++;
   LIVE.stats[scorer.name].score+=8;
   LIVE.feed.push(`💨 ${scorer.name} schießt – knapp vorbei!`);
 }else{
   LIVE.stats[scorer.name].goals++;
   LIVE.stats[scorer.name].shots++;
   LIVE.stats[scorer.name].score+=100;
   if(assist.name!==scorer.name){
     LIVE.stats[assist.name].assists++;
     LIVE.stats[assist.name].score+=50;
   }
   if(own)LIVE.ourGoals++;else LIVE.oppGoals++;
   LIVE.feed.push(`⚽ TOR! ${scorer.name} · Assist ${assist.name} · ${formatClock(LIVE.clock)}`);
   LIVE.ball.x=own?88:12;LIVE.ball.y=50;
 }
 if(LIVE.feed.length>24)LIVE.feed.shift();
}
function playerMVP(team){
 const players=LIVE.cars.filter(c=>c.team===team).map(c=>LIVE.stats[c.name]);
 return players.sort((a,b)=>b.score-a.score)[0];
}
function formatClock(sec){sec=Math.max(0,Math.floor(sec));return `${Math.floor(sec/60)}:${String(sec%60).padStart(2,"0")}`;}
function finishGame(){
 if(!LIVE||LIVE.finished)return;
 if(LIVE.ourGoals===LIVE.oppGoals){
   if(Math.random()<.5)LIVE.ourGoals++;else LIVE.oppGoals++;
   LIVE.feed.push("⏱️ Overtime! Golden Goal entscheidet Game "+LIVE.game+".");
 }
 const win=LIVE.ourGoals>LIVE.oppGoals;
 if(win)LIVE.ourSeries++;else LIVE.oppSeries++;
 LIVE.feed.push(`🏁 Game ${LIVE.game}: ${S.club} ${LIVE.ourGoals}:${LIVE.oppGoals} ${LIVE.opp} · ${win?"Sieg":"Niederlage"}`);
 LIVE.finished=true;renderLiveOnly();
 setTimeout(()=>{
   if(!LIVE)return;
   if(LIVE.ourSeries>=3||LIVE.oppSeries>=3){finishSeries();return;}
   LIVE.game++;LIVE.ourGoals=0;LIVE.oppGoals=0;LIVE.clock=300;LIVE.finished=false;
   LIVE.cars.forEach(c=>{LIVE.stats[c.name].goals=0;LIVE.stats[c.name].assists=0;LIVE.stats[c.name].saves=0;LIVE.stats[c.name].shots=0;LIVE.stats[c.name].score=0;});
   LIVE.feed.push(`🔄 Game ${LIVE.game} startet!`);
   renderLiveOnly();
 },1400);
}
function finishSeries(){
 clearInterval(liveTimer);liveTimer=null;
 const win=LIVE.ourSeries>LIVE.oppSeries;
 const mvps=LIVE.cars.filter(c=>c.team==="blue").map(c=>LIVE.stats[c.name]).sort((a,b)=>b.score-a.score);
 const mvp=mvps[0];
 S.lastMatch=`<b>${S.club} ${LIVE.ourSeries} : ${LIVE.oppSeries} ${LIVE.opp}</b><br><span class="note">MVP: ${esc(mvp.name)} · ${mvp.score} Match Score · ⚽ ${mvp.goals} · 🎯 ${mvp.assists} · 🧤 ${mvp.saves}</span>`;
 S.seasonWins+=win?1:0;S.seasonLosses+=win?0:1;
 let me=S.standings.find(x=>x.team===S.club),op=S.standings.find(x=>x.team===LIVE.opp);
 if(!me){me={team:S.club,pts:0,w:0,l:0,gf:0,ga:0};S.standings.push(me);}
 if(!op){op={team:LIVE.opp,pts:0,w:0,l:0,gf:0,ga:0};S.standings.push(op);}
 if(win){me.w++;me.pts+=3;}else{me.l++;op.w++;op.pts+=3;}
 S.cash+=win?30000:15000;
 S.squad.forEach(p=>{p.energy=Math.max(20,p.energy-18);p.morale=Math.max(35,Math.min(100,p.morale+(win?5:-3)));});
 save();renderLiveOnly();
}
function setLiveSpeed(n){if(!LIVE)return;LIVE.speed=n;LIVE.paused=false;renderLiveOnly();}
function toggleLivePause(){if(!LIVE)return;LIVE.paused=!LIVE.paused;renderLiveOnly();}
function leaveLive(){if(liveTimer)clearInterval(liveTimer);liveTimer=null;LIVE=null;tab="home";render();}
function liveView(){
 if(!LIVE)return `<div class="page"><div class="card">Kein Live-Spiel.</div></div>`;
 const overlay=LIVE.finished?`<div class="endoverlay"><div><div class="livebadge">GAME BEENDET</div><h2>${LIVE.ourGoals}:${LIVE.oppGoals}</h2><p>Serie: ${LIVE.ourSeries}:${LIVE.oppSeries}</p></div></div>`:"";
 const dots=[0,1,2,3,4].map(i=>`<span class="seriesdot ${i<LIVE.ourSeries?"win":i<LIVE.ourSeries+LIVE.oppSeries?"loss":""}"></span>`).join("");
 return `<div class="livepage">
 <div class="livehead"><button class="btn small" onclick="leaveLive()">← Zurück</button><div class="livebadge">● LIVE · BO5</div></div>
 <div class="arena"><div class="wall"></div><div class="goalzone left"></div><div class="goalzone right"></div><div class="centerline"></div>
 <div class="arena-score"><div class="names">${esc(S.club)} · GAME ${LIVE.game}</div><b>${LIVE.ourGoals} : ${LIVE.oppGoals}</b><div class="names">${esc(LIVE.opp)}</div></div>
 <div class="ball" style="left:${LIVE.ball.x}%;top:${LIVE.ball.y}%"></div>
 ${LIVE.cars.map(c=>`<div class="car ${c.team}" style="left:${c.x}%;top:${c.y}%"></div>`).join("")}${overlay}</div>
 <div class="seriesbar">${dots}</div>
 <div class="matchinfo"><div class="livecard"><div class="label">Matchzeit</div><div class="stat">${formatClock(LIVE.clock)}</div><div class="muted">Live-Simulation</div></div>
 <div class="livecard"><div class="label">Serie</div><div class="stat">${LIVE.ourSeries} : ${LIVE.oppSeries}</div><div class="muted">Best of 5</div></div></div>
 <div class="speedrow"><button class="btn ${LIVE.speed===1&&!LIVE.paused?"active":""}" onclick="setLiveSpeed(1)">1×</button>
 <button class="btn ${LIVE.speed===2&&!LIVE.paused?"active":""}" onclick="setLiveSpeed(2)">2×</button>
 <button class="btn ${LIVE.paused?"active":""}" onclick="toggleLivePause()">${LIVE.paused?"▶ Weiter":"⏸ Pause"}</button></div>
 <div class="section">Live-Ticker</div><div class="livecard feed">${LIVE.feed.slice().reverse().map(x=>`<div class="feeditem ${x.includes("TOR")?"goal":x.includes("Save")?"save":""}">${x}</div>`).join("")}</div>
 <div class="section">Dein 3v3 – Live Stats</div>
 <div class="playerstats">${LIVE.cars.filter(c=>c.team==="blue").map(c=>{
   const s=LIVE.stats[c.name];
   return `<div class="livecard playerstat"><div class="pshead"><b>${esc(c.name)}</b><span class="rolepill">${c.role}</span></div>
   <div class="psgrid"><span>⚽ <b>${s.goals}</b><small> Goals</small></span><span>🎯 <b>${s.assists}</b><small> Assists</small></span><span>🧤 <b>${s.saves}</b><small> Saves</small></span><span>🎯 <b>${s.shots}</b><small> Shots</small></span></div>
   <div class="scoreline">Match Score <b>${s.score}</b></div></div>`;
 }).join("")}</div>
 <div class="section">Gegner</div><div class="playerstats">${LIVE.cars.filter(c=>c.team==="orange").map(c=>{
   const s=LIVE.stats[c.name];
   return `<div class="livecard playerstat"><div class="pshead"><b>${esc(c.name)}</b><span class="rolepill">${c.role}</span></div>
   <div class="psgrid"><span>⚽ <b>${s.goals}</b><small> Goals</small></span><span>🎯 <b>${s.assists}</b><small> Assists</small></span><span>🧤 <b>${s.saves}</b><small> Saves</small></span><span>🎯 <b>${s.shots}</b><small> Shots</small></span></div>
   <div class="scoreline">Match Score <b>${s.score}</b></div></div>`;
 }).join("")}</div>
 </div>`;
}

function simulateDay(){
 let opp=nextOpponent(), our=avg(), their=(78+Math.floor(Math.random()*14));
 let form=S.squad.reduce((a,p)=>a+p.morale,0)/S.squad.length;
 let chance=0.48+(our-their)*.018+(S.chem-70)*.006+(form-75)*.003+(S.tactics==="Aggressiv"?.015:S.tactics==="Defensiv"?-.01:0);
 let ours=Math.max(0,Math.min(5,Math.round(Math.random()*2+chance*2)));
 let theirs=Math.max(0,Math.min(5,Math.round(Math.random()*2+(1-chance)*2)));
 if(ours===theirs) ours+=1;
 let events=makeEvents(ours,theirs,opp);
 let win=ours>theirs;S.seasonWins+=win?1:0;S.seasonLosses+=win?0:1;
 let me=S.standings.find(x=>x.team===S.club), op=S.standings.find(x=>x.team===opp);
 if(!me){me={team:S.club,pts:0,w:0,l:0,gf:0,ga:0};S.standings.push(me);}
 if(!op){op={team:opp,pts:0,w:0,l:0,gf:0,ga:0};S.standings.push(op);}
 me.gf+=ours;me.ga+=theirs;op.gf+=theirs;op.ga+=ours;
 if(win){me.w++;me.pts+=3}else{me.l++;op.w++;op.pts+=3}
 S.cash+=20000;S.squad.forEach(p=>{p.energy=Math.max(20,p.energy-12);p.years=Math.max(0,p.years-S.week%9===0?1/9:0);p.morale=Math.max(35,Math.min(100,p.morale+(win?4:-3)));});
 S.lastMatch=`<b>${S.club} ${ours} : ${theirs} ${opp}</b><br><span class="note">${events.join("<br>")}</span>`;
 if(S.week>=9) endSeason(); else S.week++;
 save();render();
}
function makeEvents(a,b,opp){
 let out=[],time=2, scorer=["Zen","Atow.","Oski","Vatira","Dralii","Daniel","BeastMode"];
 for(let i=0;i<a;i++){let s=S.squad[Math.floor(Math.random()*S.squad.length)],ass=S.squad.filter(x=>x.name!==s.name)[Math.floor(Math.random()*2)];out.push(`⚽ ${time+Math.floor(Math.random()*10)}' ${s.name} — Assist ${ass.name}`);time+=9+Math.floor(Math.random()*5);}
 for(let i=0;i<b;i++){let s=["Vatira","Seikoo","Firstkiller","Yanxnz"][Math.floor(Math.random()*4)],ass=["Atow","Itachi","Atomic","Drufinho"][Math.floor(Math.random()*4)];out.push(`⚽ ${time+Math.floor(Math.random()*8)}' ${s} (${opp}) — Assist ${ass}`);time+=8;}
 let saves=Math.floor(Math.random()*4), saveBy=S.squad[Math.floor(Math.random()*S.squad.length)].name;
 if(saves)out.push(`🧤 ${saveBy} verbucht ${saves} Saves.`);
 out.push(`📊 Matchreport: Chemie ${S.chem} · Team-OVR ${avg()}`);
 return out;
}
function endSeason(){
 let pos=standingPos();
 let prize=pos<=3?300000:pos>=7?-100000:120000;S.cash+=prize;
 S.major=pos<=4;S.worlds=pos<=2;
 let note=pos>=7?"Abstieg in die nächste Division droht.":pos<=2?"Weltmeisterschaft qualifiziert!":"Saison abgeschlossen.";
 modal(`<h2>Saison ${S.season} beendet</h2><p>Du wurdest <b>${pos}. Platz</b>.</p><p class="note">${note}</p><p>Preisgeld: ${money(prize)}</p><button class="btn primary choice" onclick="newSeason()">Neue Saison starten</button>`);
}
function newSeason(){
 S.season++;S.split=1;S.week=1;S.seasonWins=0;S.seasonLosses=0;S.major=false;S.worlds=false;
 S.standings.forEach(x=>{x.pts=0;x.w=0;x.l=0;x.gf=0;x.ga=0});S.squad.forEach(p=>{p.energy=100;p.years=Math.max(1,p.years);p.ovr=Math.min(p.pot,p.ovr+(Math.random()<.65?1:0));});
 closeModal();save();render();
}

render();


/* ================= V6 REALISM LAYER ================= */
const V6_KEY = "rlcs_manager_mobile_save_v7_real_rosters";

const V6 = {
  setup: {
    jersey: "",
    budget: 300000,
    difficulty: "normal",
    color: "#4f8cff",
    logo: ""
  },
  difficulty: {
    easy:   {label:"Leicht", ai:0.88, market:0.90, wages:0.92, scouting:1.12, fatigue:0.88, variance:0.85, prize:1.10},
    normal: {label:"Normal", ai:1.00, market:1.00, wages:1.00, scouting:1.00, fatigue:1.00, variance:1.00, prize:1.00},
    hard:   {label:"Schwer", ai:1.10, market:1.08, wages:1.08, scouting:0.92, fatigue:1.10, variance:1.08, prize:0.95},
    legend: {label:"Pro", ai:1.20, market:1.16, wages:1.15, scouting:0.86, fatigue:1.18, variance:1.15, prize:0.90}
  }
};

function v6Diff(){ return V6.difficulty[V6.setup.difficulty] || V6.difficulty.normal; }
function v6El(id){ return document.getElementById(id); }

function v6ReadSetup(){
  const j=v6El("customJersey"), b=v6El("customBudget"), d=v6El("difficulty"), c=v6El("customColor"), l=v6El("customLogo");
  if(j) V6.setup.jersey=(j.value||"").trim().slice(0,14);
  if(b) V6.setup.budget=Number(b.value)||300000;
  if(d) V6.setup.difficulty=d.value||"normal";
  if(c) V6.setup.color=c.value||"#4f8cff";
  if(l && l.files && l.files[0]){
    const reader=new FileReader();
    reader.onload=()=>{ V6.setup.logo=reader.result; v6PreviewLogo(); };
    reader.readAsDataURL(l.files[0]);
  }
  localStorage.setItem(V6_KEY, JSON.stringify(V6.setup));
}
function v6PreviewLogo(){
  const p=v6El("logoPreview"); if(!p) return;
  p.innerHTML=V6.setup.logo ? `<img src="${V6.setup.logo}" alt="Teamlogo">` : "Kein Logo gewählt";
}
function v6LoadSetup(){
  try{Object.assign(V6.setup,JSON.parse(localStorage.getItem(V6_KEY)||"{}"));}catch(e){}
  const map={customJersey:V6.setup.jersey,customBudget:V6.setup.budget,difficulty:V6.setup.difficulty,customColor:V6.setup.color};
  Object.entries(map).forEach(([id,val])=>{const e=v6El(id); if(e && val!=null)e.value=val;});
  v6PreviewLogo();
}
function v6TeamLogo(name){
  return V6.setup.logo ? `<img class="team-mark" src="${V6.setup.logo}" alt="">` : `<span class="team-mark" style="display:inline-flex;align-items:center;justify-content:center;background:${V6.setup.color};font-size:11px;font-weight:900">${(V6.setup.jersey||name||"TM").slice(0,3).toUpperCase()}</span>`;
}
function v6TeamName(baseName){
  return (V6.setup.jersey ? V6.setup.jersey + " Esports" : baseName);
}

/* More realistic simulation: form, fatigue, chemistry, tactics, momentum, home advantage and upset variance. */
function v6Clamp(x,a=0,b=100){return Math.max(a,Math.min(b,x));}
function v6Attr(p,n){return Number(p?.[n] ?? p?.stats?.[n] ?? 50);}
function v6PlayerPower(p){
  const weights={Mechanics:.16,Shooting:.12,Defense:.10,Passing:.10,Positioning:.12,Speed:.10,Consistency:.10,DecisionMaking:.08,Teamwork:.07,Mental:.05};
  let s=0,w=0; for(const [k,q] of Object.entries(weights)){s+=v6Attr(p,k)*q;w+=q;}
  const fatigue=Number(p?.fatigue ?? 0), morale=Number(p?.morale ?? 60), form=Number(p?.form ?? 60);
  return s/w * (0.88+form/500) * (0.90+morale/1000) * (1-fatigue/900);
}
function v6SquadPower(players,chem=70,tactic="controlled"){
  if(!players?.length) return 50;
  const avg=players.reduce((a,p)=>a+v6PlayerPower(p),0)/players.length;
  const roleBalance=players.filter(p=>p.role==="Defender").length && players.filter(p=>p.role==="Striker").length ? 2 : 0;
  const tacticMod={aggressive:2,defensive:1,controlled:3,counter:2}[tactic]||0;
  return avg + chem*.08 + roleBalance + tacticMod;
}
function v6ApplyPostGame(players,won){
  (players||[]).forEach(p=>{
    p.fatigue=v6Clamp(Number(p.fatigue||0)+8);
    p.form=v6Clamp(Number(p.form??60)+(won?3:-2));
    p.morale=v6Clamp(Number(p.morale??60)+(won?4:-3));
    if(p.age) p.age=Number(p.age);
  });
}
function v6MarketMultiplier(){ return v6Diff().market; }

/* Better event distribution: shots create pressure, saves prevent goals, assists depend on passing/positioning. */
function v6LiveEvent(blue,orange){
  const all=[...blue,...orange], d=v6Diff();
  const bluePower=v6SquadPower(blue,window.gameState?.chemistry||70,window.gameState?.tactic||"controlled");
  const orangePower=v6SquadPower(orange,70,"controlled")*d.ai;
  const pBlue=bluePower/(bluePower+orangePower);
  const attackingBlue=Math.random()<pBlue;
  const team=attackingBlue?blue:orange;
  const opp=attackingBlue?orange:blue;
  const roll=Math.random();
  if(roll<0.17){
    const saver=opp[Math.floor(Math.random()*opp.length)];
    saver.saves=(saver.saves||0)+1; saver.score=(saver.score||0)+35;
    return {type:"save",team:opp,player:saver};
  }
  if(roll<0.38){
    const shooter=team[Math.floor(Math.random()*team.length)];
    shooter.shots=(shooter.shots||0)+1; shooter.score=(shooter.score||0)+8;
    return {type:"shot",team,player:shooter};
  }
  const scorer=team[Math.floor(Math.random()*team.length)];
  const helpers=team.filter(p=>p!==scorer);
  const passer=helpers.length?helpers[Math.floor(Math.random()*helpers.length)]:null;
  scorer.goals=(scorer.goals||0)+1; scorer.shots=(scorer.shots||0)+1; scorer.score=(scorer.score||0)+100;
  if(passer){passer.assists=(passer.assists||0)+1;passer.score=(passer.score||0)+50;}
  return {type:"goal",team,player:scorer,assist:passer};
}

function v6AfterSeries(userWon){
  if(!window.gameState)return;
  v6ApplyPostGame(window.gameState.squad||[],userWon);
  window.gameState.fanTrust=v6Clamp(Number(window.gameState.fanTrust??50)+(userWon?3:-3));
  window.gameState.teamMorale=v6Clamp(Number(window.gameState.teamMorale??50)+(userWon?5:-4));
  window.gameState.form=v6Clamp(Number(window.gameState.form??50)+(userWon?4:-3));
  window.gameState.budget=Number(window.gameState.budget||V6.setup.budget)+(userWon?12000:0);
  window.gameState.lastMatch={won:userWon,date:new Date().toLocaleDateString("de-DE"),opponent:"RLCS Rival",result:userWon?"Sieg":"Niederlage"};
  try{localStorage.setItem(V6_KEY,JSON.stringify(V6.setup));localStorage.setItem(KEY,JSON.stringify(window.gameState));}catch(e){}
}

/* Friendly helper: expose a realistic pre-match rating. */
window.v6PreMatchRating=function(players,chem,tactic){return Math.round(v6SquadPower(players,chem,tactic));};

document.addEventListener("DOMContentLoaded",()=>{
  v6LoadSetup();
  ["customJersey","customBudget","difficulty","customColor"].forEach(id=>{
    const e=v6El(id); if(e)e.addEventListener("change",()=>{v6ReadSetup();});
  });
  const logo=v6El("customLogo"); if(logo)logo.addEventListener("change",v6ReadSetup);
});


/* ================= V8 REALISTIC RLCS SEASON ================= */
const V8_REGIONS={EU:"Europa",NA:"Nordamerika",SAM:"Südamerika",MENA:"MENA",OCE:"Ozeanien",APAC:"Asien-Pazifik",SSA:"Sub-Saharan Africa"};
const V8_MAJOR_SLOTS={EU:5,NA:5,SAM:2,MENA:2,OCE:1,APAC:1,SSA:1};
function v8TeamNames(region){return TEAMS.filter(t=>t[1]===region).map(t=>t[0]);}
function v8RoundRobin(names){let a=names.slice();if(a.length%2)a.push(null);const n=a.length,rounds=n-1,half=n/2,out=[];for(let r=0;r<rounds;r++){let games=[];for(let i=0;i<half;i++){let x=a[i],y=a[n-1-i];if(x&&y)games.push([x,y]);}out.push(games);a=[a[0],a[n-1],...a.slice(1,n-1)];}return out;}
function v8Ensure(){
 if(!S.globalPoints)S.globalPoints={}; TEAMS.forEach(t=>{if(S.globalPoints[t[0]]==null)S.globalPoints[t[0]]=0});
 if(!S.eventLog)S.eventLog=[]; if(!S.eventIndex)S.eventIndex=0; if(!S.leagueRound)S.leagueRound=0;
 if(!S.phase)S.phase='Open 1'; if(!S.split)S.split=1;
 if(!S.regionalSchedule||!S.regionalSchedule.length)S.regionalSchedule=v8RoundRobin(v8TeamNames(S.region));
 if(!S.standings||!S.standings.length)S.standings=league(S.region);
}
function v8PhaseLabel(){return S.phase==='Regional League'?`Regional League · Runde ${S.leagueRound+1}/${S.regionalSchedule.length}`:S.phase;}
function v8Power(name){let ps=PLAYERS.filter(p=>p[1]===name);if(name===S.club&&S.squad?.length) return S.squad.slice(0,3).reduce((a,p)=>a+p.ovr,0)/3 + (S.chem-70)*.08;return ps.reduce((a,p)=>a+p[3],0)/Math.max(1,ps.length);}
function v8SimSeries(a,b){let pa=v8Power(a),pb=v8Power(b),aw=0,bw=0;while(aw<3&&bw<3){let p=pa/(pa+pb),win=Math.random()<p;win?aw++:bw++;}return {winner:aw>bw?a:b,a:aw,b:b,score:`${aw}-${bw}`};}
function v8Standings(){return [...S.standings].sort((a,b)=>b.pts-a.pts||((b.gf-b.ga)-(a.gf-a.ga)));}
function v8LeagueResult(a,b,r){let A=S.standings.find(x=>x.team===a),B=S.standings.find(x=>x.team===b);if(!A){A={team:a,pts:0,w:0,l:0,gf:0,ga:0};S.standings.push(A)}if(!B){B={team:b,pts:0,w:0,l:0,gf:0,ga:0};S.standings.push(B)}let ag=r.winner===a?3:2,bg=r.winner===a?2:3;A.gf+=ag;A.ga+=bg;B.gf+=bg;B.ga+=ag;if(r.winner===a){A.w++;A.pts+=3;B.l++}else{B.w++;B.pts+=3;A.l++}}
function v8AwardPoints(names,pts){names.forEach((n,i)=>S.globalPoints[n]=(S.globalPoints[n]||0)+(pts[i]||1));}
function v8TopRegion(){let rows=v8Standings();return rows.slice(0,V8_MAJOR_SLOTS[S.region]||1).map(x=>x.team)}
function v8TopGlobal(){return Object.entries(S.globalPoints).sort((a,b)=>b[1]-a[1]).map(x=>x[0]);}
function v8Tournament(field,label){let alive=field.slice();while(alive.length>1){let next=[];for(let i=0;i<alive.length;i+=2){if(!alive[i+1]){next.push(alive[i]);continue}next.push(v8SimSeries(alive[i],alive[i+1]).winner)}alive=next}let winner=alive[0];S.eventLog.push({event:label,winner,teams:field.length});return winner;}
function v8DoOpen(n){v8Ensure();let field=v8TeamNames(S.region),rank=field.slice().sort((a,b)=>v8Power(b)-v8Power(a));let winner=v8Tournament(rank,`Open ${n}`);let pts=[15,10,7,7,5,5,3,3,2,2,2,2,1,1,1,1];v8AwardPoints(rank,pts);S.cash+=winner===S.club?25000:5000;S.phase=n===3?'Major 1':n===6?'Major 2':`Open ${n+1}`;if(n===3||n===6){S.majorField=v8MajorField(n===3)}save();render();}
function v8MajorField(first){let regional=v8TopRegion(),all=v8TopGlobal().filter(n=>!regional.includes(n));let field=regional.concat(all).slice(0,16);S.majorQualified=regional.includes(S.club);return field;}
function v8DoMajor(no){v8Ensure();let field=v8MajorField(no===1);let winner=v8Tournament(field,`Major ${no===1?'1 · Boston':'2 · Paris'}`);v8AwardPoints(field,[25,18,15,15,12,12,9,9,6,6,5,5,4,4,3,3]);S.cash+=winner===S.club?60000:12000;if(no===1){S.split=2;S.phase='Open 4';}else{S.phase='EWC';}save();render();}
function v8DoEWC(){let field=v8TopGlobal().slice(0,16);let winner=v8Tournament(field,'EWC · Esports World Cup');v8AwardPoints(field,[30,24,20,20,15,15,10,10,8,8,6,6,4,4,2,2]);if(winner===S.club)S.cash+=100000;S.phase='World Championship';save();render();}
function v8DoWorlds(){let field=v8TopGlobal().slice(0,20);if(!field.includes(S.club)&&S.globalPoints[S.club]>=Math.min(...field.map(n=>S.globalPoints[n])))field[field.length-1]=S.club;let winner=v8Tournament(field,'World Championship · Fort Worth');if(winner===S.club){S.cash+=300000;S.fanTrust=Math.min(100,(S.fanTrust||50)+15)}else S.cash+=25000;S.phase='Saison beendet';S.history=S.history||[];S.history.push({season:S.season,winner});save();render();}
function v8Next(){
 v8Ensure();
 if(S.phase.startsWith('Open ')){v8DoOpen(Number(S.phase.split(' ')[1]));return}
 if(S.phase==='Regional League'){
   let games=S.regionalSchedule[S.leagueRound]||[];let g=games.find(x=>x.includes(S.club));
   if(g){let opp=g[0]===S.club?g[1]:g[0];startLiveMatchV8(opp);return}
 }
 if(S.phase==='Major 1'){v8DoMajor(1);return} if(S.phase==='Major 2'){v8DoMajor(2);return} if(S.phase==='EWC'){v8DoEWC();return} if(S.phase==='World Championship'){v8DoWorlds();return}
}
function v8SimRegionalDay(){let games=S.regionalSchedule[S.leagueRound]||[];games.forEach(([a,b])=>{let r=v8SimSeries(a,b);v8LeagueResult(a,b,r);});S.leagueRound++;if(S.leagueRound>=S.regionalSchedule.length){S.phase=S.split===1?'Open 1':'Open 4';S.split===1?null:null;}save();render();}
function startLiveMatchV8(opp){
 if(liveTimer)clearInterval(liveTimer);let oldNext=nextOpponent;window._v8Opp=opp;
 // Reuse the existing viewer with a real opponent roster instead of hardcoded names.
 LIVE={opp,game:1,ourSeries:0,oppSeries:0,ourGoals:0,oppGoals:0,clock:300,paused:false,speed:1,feed:[`🎙️ ${S.club} vs. ${opp} · Regional League`],ball:{x:50,y:50},cars:[],stats:{},finished:false};
 S.squad.slice(0,3).forEach((p,i)=>{LIVE.cars.push({name:p.name,team:'blue',role:p.role,x:18+i*7,y:30+i*20});LIVE.stats[p.name]={team:'blue',role:p.role,goals:0,assists:0,saves:0,shots:0,score:0}});
 PLAYERS.filter(p=>p[1]===opp).slice(0,3).forEach((p,i)=>{LIVE.cars.push({name:p[0],team:'orange',role:p[2],x:75-i*7,y:35+i*20});LIVE.stats[p[0]]={team:'orange',role:p[2],goals:0,assists:0,saves:0,shots:0,score:0}});
 tab='live';render();startLiveClock();
}
const _oldFinishSeries=finishSeries;
finishSeries=function(){
 if(!LIVE)return;let win=LIVE.ourSeries>LIVE.oppSeries;let a=LIVE.ourSeries,b=LIVE.oppSeries;v8LeagueResult(S.club,LIVE.opp,{winner:win?S.club:LIVE.opp});S.leagueRound++;S.lastMatch=`<b>${S.club} ${a}:${b} ${LIVE.opp}</b><br><span class="note">Regional League · BO5</span>`;if(S.leagueRound>=S.regionalSchedule.length){S.phase=S.split===1?'Open 1':'Open 4';}else S.phase='Regional League';S.form=Math.max(0,Math.min(100,(S.form||70)+(win?4:-3)));S.teamMorale=Math.max(0,Math.min(100,(S.teamMorale||70)+(win?4:-4)));S.squad.forEach(p=>{p.energy=Math.max(20,(p.energy||95)-10);p.morale=Math.max(35,Math.min(100,(p.morale||75)+(win?3:-3)))});save();render();LIVE=null;};
function home(){v8Ensure();let phase=v8PhaseLabel();let gp=S.globalPoints[S.club]||0;let pos=v8Standings().findIndex(x=>x.team===S.club)+1;let next='—';let g=(S.regionalSchedule[S.leagueRound]||[]).find(x=>x.includes(S.club));if(g)next=g[0]===S.club?g[1]:g[0];return `<div class="page"><div class="hero"><div class="eyebrow">V8 · RLCS 2026-STYLE SAISON</div><h2>${esc(S.club)}</h2><p class="muted">${V8_REGIONS[S.region]} · ${phase}</p><button class="btn primary" onclick="v8Next()">▶ Nächster Schritt</button></div><div class="grid"><div class="card"><div class="label">Budget</div><div class="stat">${money(S.cash)}</div></div><div class="card"><div class="label">Liga</div><div class="stat">${pos}. Platz</div></div><div class="card"><div class="label">RLCS-Punkte</div><div class="stat">${gp}</div></div><div class="card"><div class="label">Chemie</div><div class="stat">${S.chem}</div></div></div><div class="section">Nächstes Event</div><div class="card"><div class="row"><b>${esc(phase)}</b><span class="pill">${phase.startsWith('Regional')?'BO5':'Event'}</span></div><p class="note">${phase==='Regional League'?`Nächster Gegner: ${esc(next)} · ${S.leagueRound+1}/${S.regionalSchedule.length} Runden`:v8EventDescription(phase)}</p></div><div class="section">RLCS-Kalender</div><div class="stack">${v8Calendar().map(x=>`<div class="card ${x.active?'you':''}"><div class="row"><b>${x.name}</b><span class="pill">${x.status}</span></div><p class="note">${x.desc}</p></div>`).join('')}</div><div class="section">Training</div><div class="two"><button class="btn" onclick="train('Mechanik')">⚙️ Mechanik</button><button class="btn" onclick="train('Teamplay')">🤝 Teamplay</button><button class="btn" onclick="train('Defense')">🛡 Defense</button><button class="btn" onclick="train('Erholung')">🔋 Erholung</button></div></div>`}
function v8EventDescription(p){return p==='Major 1'?'16 Teams · Boston · internationaler RLCS Major':p==='Major 2'?'16 Teams · Paris · internationaler RLCS Major':p==='EWC'?'Esports World Cup · separates internationales Event':p==='World Championship'?'20 Teams · Fort Worth · Saisonfinale':'Regional Open · RLCS-Punkte';}
function v8Calendar(){let names=['Open 1','Open 2','Open 3','Major 1','Open 4','Open 5','Open 6','Major 2','EWC','World Championship'];return names.map(n=>({name:n,active:S.phase===n,status:S.phase===n?'JETZT':'RLCS',desc:v8EventDescription(n)}));}
function leaguePage(){v8Ensure();let rows=v8Standings();return `<div class="page"><div class="hero"><h2>${V8_REGIONS[S.region]} · Regional League</h2><p class="muted">${v8TeamNames(S.region).length} reale Teams · ${S.regionalSchedule.length} Spieltage · BO5</p></div><table class="table"><thead><tr><th>#</th><th>Team</th><th>Sp</th><th>P</th><th>GD</th></tr></thead><tbody>${rows.map((r,i)=>`<tr class="${r.team===S.club?'you':''}"><td>${i+1}</td><td>${esc(r.team)}</td><td>${r.w+r.l}</td><td><b>${r.pts}</b></td><td>${r.gf-r.ga}</td></tr>`).join('')}</tbody></table><div class="section">Global RLCS-Punkte</div><div class="stack">${v8TopGlobal().slice(0,16).map((n,i)=>`<div class="card"><div class="row"><b>${i+1}. ${esc(n)}</b><strong>${S.globalPoints[n]||0}</strong></div></div>`).join('')}</div></div>`}
// Make the existing nav's next-step action use V8 mechanics.
window.simulateDay=v8Next;window.nextOpponent=function(){let g=(S.regionalSchedule?.[S.leagueRound]||[]).find(x=>x.includes(S.club));return g?(g[0]===S.club?g[1]:g[0]):'—'};
if(S){v8Ensure();save();}
render();

/* V8 PC EDITION */
(()=>{const A={ctx:null,on:true,init(){try{this.ctx=this.ctx||new(window.AudioContext||window.webkitAudioContext)();this.ctx.resume()}catch(e){}},beep(f=600,d=.05){if(!this.on)return;this.init();if(!this.ctx)return;let o=this.ctx.createOscillator(),g=this.ctx.createGain();o.frequency.value=f;g.gain.value=.03;o.connect(g);g.connect(this.ctx.destination);o.start();g.gain.exponentialRampToValueAtTime(.0001,this.ctx.currentTime+d);o.stop(this.ctx.currentTime+d)},goal(){this.beep(520,.1);setTimeout(()=>this.beep(780,.14),100);setTimeout(()=>this.beep(1040,.2),220)}};window.PC_AUDIO=A;document.addEventListener('pointerdown',e=>{if(e.target.closest('button,a,[role=button]'))A.beep()},true);const b=document.createElement('button');b.textContent='🔊 Sound an';b.style='position:fixed;right:18px;bottom:18px;z-index:9999;padding:10px;border-radius:10px';b.onclick=()=>{A.on=!A.on;b.textContent=A.on?'🔊 Sound an':'🔇 Sound aus'};document.body.appendChild(b);window.pcGoalAnimation=n=>{A.goal();alert('⚽ TOR! '+(n||''))}})();
