
var games = [

 
  {
    name: "Minecraft", type: "video", icon: "⛏️",
    info: "Build, explore and survive in a world made of blocks.",
    details: "Developer: Mojang | Year: 2011 | Platform: PC, Mobile, Console",
    items: [ { name: "1000 Minecoins", price: 500 }, { name: "Skin Pack", price: 300 }, { name: "Texture Pack", price: 200 } ]
  },
  {
    name: "Valorant", type: "video", icon: "🎯",
    info: "A 5v5 shooting game where every player has special abilities.",
    details: "Developer: Riot Games | Year: 2020 | Platform: PC",
    items: [ { name: "475 VP", price: 400 }, { name: "Weapon Skin", price: 1200 }, { name: "Battle Pass", price: 800 } ]
  },
  {
    name: "Free Fire", type: "video", icon: "🔥",
    info: "A fast 10-minute survival shooting game for mobile.",
    details: "Developer: Garena | Year: 2017 | Platform: Mobile",
    items: [ { name: "100 Diamonds", price: 80 }, { name: "Weekly Membership", price: 159 }, { name: "Elite Pass", price: 499 } ]
  },
  {
    name: "Fortnite", type: "video", icon: "🪂",
    info: "Drop onto an island with 99 other players, build and be the last one standing.",
    details: "Developer: Epic Games | Year: 2017 | Platform: PC, Console, Mobile",
    items: [ { name: "1000 V-Bucks", price: 700 }, { name: "Glider Skin", price: 500 }, { name: "Battle Pass", price: 900 } ]
  },
  {
    name: "GTA V", type: "video", icon: "🚗",
    info: "Three criminals, one big city. Drive anything and complete heists in Los Santos.",
    details: "Developer: Rockstar Games | Year: 2013 | Platform: PC, Console",
    items: [ { name: "Shark Cash Card", price: 350 }, { name: "Supercar Pack", price: 1300 }, { name: "Starter Pack", price: 900 } ]
  },
  {
    name: "Among Us", type: "video", icon: "🧑‍🚀",
    info: "Finish tasks on the spaceship, but one of the crew is an impostor.",
    details: "Developer: Innersloth | Year: 2018 | Platform: PC, Console, Mobile",
    items: [ { name: "Hat Pack", price: 100 }, { name: "Skin Pack", price: 100 }, { name: "Pet Pack", price: 150 } ]
  },
  {
    name: "BGMI", type: "video", icon: "🪖",
    info: "A battle royale game where 100 players fight to be the last team alive.",
    details: "Developer: Krafton | Year: 2023 | Platform: Mobile",
    items: [ { name: "60 UC", price: 75 }, { name: "Royale Pass", price: 600 }, { name: "Outfit Crate", price: 250 } ]
  },
  {
    name: "Call of Duty Mobile", type: "video", icon: "🔫",
    info: "Fast shooting action with multiplayer maps and a battle royale mode.",
    details: "Developer: Activision | Year: 2019 | Platform: Mobile",
    items: [ { name: "80 CP", price: 80 }, { name: "Battle Pass", price: 500 }, { name: "Weapon Blueprint", price: 700 } ]
  },
  {
    name: "Roblox", type: "video", icon: "🧱",
    info: "Play millions of games made by other players, or create your own.",
    details: "Developer: Roblox Corp | Year: 2006 | Platform: PC, Mobile, Console",
    items: [ { name: "400 Robux", price: 400 }, { name: "Avatar Outfit", price: 250 }, { name: "Premium 1 Month", price: 450 } ]
  },
  {
    name: "EA FC 25", type: "video", icon: "🥅",
    info: "The football video game with real teams, players and online matches.",
    details: "Developer: EA Sports | Year: 2024 | Platform: PC, Console",
    items: [ { name: "1050 FC Points", price: 800 }, { name: "Player Pack", price: 600 }, { name: "Ultimate Edition", price: 4500 } ]
  },
  {
    name: "Clash of Clans", type: "video", icon: "🏰",
    info: "Build your village, train troops and attack other players' villages.",
    details: "Developer: Supercell | Year: 2012 | Platform: Mobile",
    items: [ { name: "500 Gems", price: 450 }, { name: "Gold Pass", price: 549 }, { name: "Builder Boost", price: 300 } ]
  },
  {
    name: "Counter-Strike 2", type: "video", icon: "💣",
    info: "A classic team shooter where terrorists and counter-terrorists compete each round.",
    details: "Developer: Valve | Year: 2023 | Platform: PC",
    items: [ { name: "Prime Status", price: 1000 }, { name: "Weapon Case", price: 200 }, { name: "Gloves Skin", price: 1500 } ]
  },
  {
    name: "Genshin Impact", type: "video", icon: "🌸",
    info: "An open world adventure with magic, exploration and collectable characters.",
    details: "Developer: HoYoverse | Year: 2020 | Platform: PC, Mobile, Console",
    items: [ { name: "300 Genesis Crystals", price: 400 }, { name: "Blessing Moon Card", price: 400 }, { name: "Battle Pass", price: 800 } ]
  },
  {
    name: "Subway Surfers", type: "video", icon: "🏃",
    info: "Run, dodge trains and collect coins in this endless runner.",
    details: "Developer: SYBO | Year: 2012 | Platform: Mobile",
    items: [ { name: "Coin Pack", price: 90 }, { name: "Hoverboard Pack", price: 150 }, { name: "Season Pass", price: 250 } ]
  },
  {
    name: "Rocket League", type: "video", icon: "🚀",
    info: "Football played with rocket-powered cars. Easy to learn, hard to master.",
    details: "Developer: Psyonix | Year: 2015 | Platform: PC, Console",
    items: [ { name: "500 Credits", price: 400 }, { name: "Car Body", price: 500 }, { name: "Rocket Pass", price: 650 } ]
  },

  
  {
    name: "Cricket", type: "outdoor", icon: "🏏",
    info: "A bat and ball game. One team scores runs and the other tries to get them out.",
    details: "Players: 11 per team | Played on: Cricket ground | Origin: England",
    items: [ { name: "Cricket Bat", price: 2500 }, { name: "Cricket Ball", price: 200 }, { name: "Batting Gloves", price: 900 }, { name: "Helmet", price: 1500 } ]
  },
  {
    name: "Football", type: "outdoor", icon: "⚽",
    info: "Two teams try to score goals by kicking the ball into the other team's net.",
    details: "Players: 11 per team | Played on: Grass field | Origin: England",
    items: [ { name: "Football", price: 1000 }, { name: "Football Shoes", price: 2300 }, { name: "Shin Guards", price: 500 }, { name: "Goalkeeper Gloves", price: 900 } ]
  },
  {
    name: "Badminton", type: "outdoor", icon: "🏸",
    info: "Players hit a shuttlecock over a net. Easy to learn and fun to play.",
    details: "Players: 1 or 2 per side | Played on: Court | Origin: India and England",
    items: [ { name: "Racquet", price: 1600 }, { name: "Shuttlecocks (12)", price: 900 }, { name: "Court Shoes", price: 2000 }, { name: "Racquet Bag", price: 800 } ]
  },
  {
    name: "Basketball", type: "outdoor", icon: "🏀",
    info: "Two teams score points by throwing the ball through a hoop.",
    details: "Players: 5 per team | Played on: Hard court | Origin: United States",
    items: [ { name: "Basketball", price: 1100 }, { name: "Basketball Shoes", price: 3300 }, { name: "Jersey", price: 800 }, { name: "Wristbands", price: 200 } ]
  },
  {
    name: "Tennis", type: "outdoor", icon: "🎾",
    info: "Players hit a ball over a net using racquets and win points in rallies.",
    details: "Players: 1 or 2 per side | Played on: Tennis court | Origin: England",
    items: [ { name: "Tennis Racquet", price: 3000 }, { name: "Tennis Balls (3)", price: 450 }, { name: "Court Shoes", price: 2800 }, { name: "Sweatbands", price: 300 } ]
  },
  {
    name: "Volleyball", type: "outdoor", icon: "🏐",
    info: "Two teams hit the ball over a high net and try to make it touch the ground.",
    details: "Players: 6 per team | Played on: Court or beach | Origin: United States",
    items: [ { name: "Volleyball", price: 900 }, { name: "Net Set", price: 2500 }, { name: "Knee Pads", price: 600 }, { name: "Court Shoes", price: 2200 } ]
  },
  {
    name: "Table Tennis", type: "outdoor", icon: "🏓",
    info: "A small and fast version of tennis played on a table with a light ball.",
    details: "Players: 1 or 2 per side | Played on: Table | Origin: England",
    items: [ { name: "Paddle", price: 800 }, { name: "Balls (6)", price: 250 }, { name: "Net Set", price: 500 }, { name: "Paddle Case", price: 300 } ]
  },
  {
    name: "Hockey", type: "outdoor", icon: "🏑",
    info: "Two teams use sticks to hit a ball into the other team's goal. India's national game.",
    details: "Players: 11 per team | Played on: Turf field | Origin: Ancient times",
    items: [ { name: "Hockey Stick", price: 1800 }, { name: "Hockey Ball", price: 250 }, { name: "Shin Guards", price: 600 }, { name: "Mouth Guard", price: 150 } ]
  },
  {
    name: "Kabaddi", type: "outdoor", icon: "🤼",
    info: "A raider enters the other half, tags players and returns while holding their breath.",
    details: "Players: 7 per team | Played on: Mat or ground | Origin: India",
    items: [ { name: "Kabaddi Shoes", price: 1200 }, { name: "Team Jersey", price: 700 }, { name: "Knee Support", price: 450 }, { name: "Playing Mat", price: 3500 } ]
  },
  {
    name: "Skating", type: "outdoor", icon: "🛼",
    info: "Glide on roller skates or inline skates on smooth roads or rinks.",
    details: "Players: 1 or more | Played on: Smooth surface | Origin: Europe",
    items: [ { name: "Skates", price: 2200 }, { name: "Helmet", price: 900 }, { name: "Knee and Elbow Pads", price: 700 }, { name: "Wrist Guards", price: 400 } ]
  },
  {
    name: "Cycling", type: "outdoor", icon: "🚴",
    info: "Ride a bicycle for fun, fitness or racing on roads and trails.",
    details: "Players: 1 or more | Played on: Roads and trails | Origin: Europe",
    items: [ { name: "Cycling Helmet", price: 1300 }, { name: "Water Bottle", price: 250 }, { name: "Cycling Gloves", price: 500 }, { name: "Bike Lights", price: 600 } ]
  },
  {
    name: "Swimming", type: "outdoor", icon: "🏊",
    info: "Move through water using different strokes. Great for fitness and fun.",
    details: "Players: 1 or more | Played on: Swimming pool | Origin: Ancient times",
    items: [ { name: "Swimming Goggles", price: 400 }, { name: "Swim Cap", price: 200 }, { name: "Swimsuit", price: 900 }, { name: "Kickboard", price: 500 } ]
  },
  {
    name: "Archery", type: "outdoor", icon: "🏹",
    info: "Shoot arrows at a target with a bow. Needs focus and a steady hand.",
    details: "Players: 1 or more | Played on: Open ground | Origin: Ancient times",
    items: [ { name: "Beginner Bow", price: 3500 }, { name: "Arrows (6)", price: 1200 }, { name: "Arm Guard", price: 350 }, { name: "Target Board", price: 900 } ]
  },
  {
    name: "Baseball", type: "outdoor", icon: "⚾",
    info: "A batter hits the ball and runs around four bases to score runs.",
    details: "Players: 9 per team | Played on: Baseball field | Origin: United States",
    items: [ { name: "Baseball Bat", price: 2000 }, { name: "Baseballs (3)", price: 500 }, { name: "Fielding Glove", price: 1800 }, { name: "Batting Helmet", price: 1400 } ]
  },
  {
    name: "Frisbee", type: "outdoor", icon: "🥏",
    info: "Throw and catch a flying disc. Ultimate frisbee is a team game played on a field.",
    details: "Players: 2 or 7 per team | Played on: Open field | Origin: United States",
    items: [ { name: "Frisbee Disc", price: 350 }, { name: "Ultimate Disc", price: 700 }, { name: "Cleats", price: 1900 }, { name: "Cone Set", price: 300 } ]
  }

];


var currentCategory = "all";   
var cart = [];                 


function showGames() {
  closeGame();  

  var searchText = document.getElementById("searchBox").value.toLowerCase();
  var html = "";

  
  for (var i = 0; i < games.length; i++) {
    var g = games[i];

    var nameMatches = g.name.toLowerCase().includes(searchText);
    var categoryMatches = (currentCategory == "all") || (g.type == currentCategory);

    if (nameMatches && categoryMatches) {
      html += '<div class="card" onclick="openGame(' + i + ')">';
      html += '<div class="icon">' + g.icon + '</div>';
      html += '<h3>' + g.name + '</h3>';
      html += '</div>';
    }
  }

  if (html == "") {
    html = "<p>No game found.</p>";
  }

  document.getElementById("gameList").innerHTML = html;
}

function setCategory(category) {
  currentCategory = category;
  showGames();
}


function openGame(index) {
  var g = games[index];

  var html = '<button onclick="showGames()">← Back</button>';
  html += '<h2>' + g.icon + ' ' + g.name + '</h2>';
  html += '<p>' + g.info + '</p>';
  html += '<p><b>' + g.details + '</b></p>';
  html += '<h3>Buy items for ' + g.name + '</h3>';

  for (var i = 0; i < g.items.length; i++) {
    html += '<div class="item">';
    html += g.items[i].name + ' - ₹' + g.items[i].price + ' ';
    html += '<button onclick="addToCart(' + index + ',' + i + ')">Add to Cart</button>';
    html += '</div>';
  }

  document.getElementById("gameList").style.display = "none";
  document.getElementById("gameDetails").style.display = "block";
  document.getElementById("gameDetails").innerHTML = html;
}

function closeGame() {
  document.getElementById("gameList").style.display = "flex";
  document.getElementById("gameDetails").style.display = "none";
}


function toggleCart() {
  var box = document.getElementById("cartBox");
  if (box.style.display == "block") {
    box.style.display = "none";
  } else {
    box.style.display = "block";
  }
}

function addToCart(gameIndex, itemIndex) {
  var item = games[gameIndex].items[itemIndex];
  cart.push({ name: item.name, price: item.price });
  showCart();
  alert(item.name + " added to cart!");
}

function removeFromCart(index) {
  cart.splice(index, 1);  
  showCart();
}

function showCart() {
  var html = "";
  var total = 0;

  for (var i = 0; i < cart.length; i++) {
    html += '<p>' + cart[i].name + ' - ₹' + cart[i].price;
    html += ' <button onclick="removeFromCart(' + i + ')">Remove</button></p>';
    total = total + cart[i].price;
  }

  if (html == "") {
    html = "<p>Your cart is empty.</p>";
  }

  document.getElementById("cartItems").innerHTML = html;
  document.getElementById("total").innerHTML = total;
  document.getElementById("cartCount").innerHTML = cart.length;
}

function checkout() {
  if (cart.length == 0) {
    alert("Your cart is empty!");
    return;
  }
  alert("Order placed! (This is only a demo, no payment taken.)");
  cart = [];
  showCart();
}

showGames();
showCart();