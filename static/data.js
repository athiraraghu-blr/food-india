const stateData = {
  "Andhra Pradesh": {
    capital: "Amaravati",
    dishes: [
      { name: "Pesarattu", emoji: "🥞" },
      { name: "Gongura Mutton", emoji: "🍖" },
      { name: "Pulihora", emoji: "🍚" },
      { name: "Bobbatlu", emoji: "🫓" }
    ]
  },
  "Arunachal Pradesh": {
    capital: "Itanagar",
    dishes: [
      { name: "Thukpa", emoji: "🍜" },
      { name: "Apong (Rice Beer)", emoji: "🍺" },
      { name: "Bamboo Shoot Fry", emoji: "🌿" }
    ]
  },
  "Assam": {
    capital: "Dispur",
    dishes: [
      { name: "Masor Tenga", emoji: "🐟" },
      { name: "Pitha", emoji: "🍰" },
      { name: "Duck Curry", emoji: "🦆" },
      { name: "Khar", emoji: "🍲" }
    ]
  },
  "Bihar": {
    capital: "Patna",
    dishes: [
      { name: "Litti Chokha", emoji: "🫓" },
      { name: "Sattu Paratha", emoji: "🫓" },
      { name: "Thekua", emoji: "🍪" },
      { name: "Khaja", emoji: "🍬" }
    ]
  },
  "Chhattisgarh": {
    capital: "Raipur",
    dishes: [
      { name: "Chila", emoji: "🥞" },
      { name: "Bafauri", emoji: "🍡" },
      { name: "Muthia", emoji: "🍢" },
      { name: "Fara", emoji: "🍚" }
    ]
  },
  "Goa": {
    capital: "Panaji",
    dishes: [
      { name: "Fish Curry Rice", emoji: "🐟" },
      { name: "Prawn Balchão", emoji: "🦐" },
      { name: "Bebinca", emoji: "🍮" },
      { name: "Vindaloo", emoji: "🍛" }
    ]
  },
  "Gujarat": {
    capital: "Gandhinagar",
    dishes: [
      { name: "Dhokla", emoji: "🟡" },
      { name: "Thepla", emoji: "🫓" },
      { name: "Undhiyu", emoji: "🥘" },
      { name: "Fafda-Jalebi", emoji: "🍩" }
    ]
  },
  "Haryana": {
    capital: "Chandigarh",
    dishes: [
      { name: "Bajra Khichdi", emoji: "🍚" },
      { name: "Kadhi Pakora", emoji: "🍲" },
      { name: "Churma", emoji: "🍮" },
      { name: "Singri ki Sabzi", emoji: "🥗" }
    ]
  },
  "Himachal Pradesh": {
    capital: "Shimla",
    dishes: [
      { name: "Dham", emoji: "🍽️" },
      { name: "Sidu", emoji: "🫓" },
      { name: "Chha Gosht", emoji: "🍖" },
      { name: "Babru", emoji: "🥐" }
    ]
  },
  "Jharkhand": {
    capital: "Ranchi",
    dishes: [
      { name: "Litti Chokha", emoji: "🫓" },
      { name: "Rugra", emoji: "🍄" },
      { name: "Handia", emoji: "🍺" },
      { name: "Pittha", emoji: "🍡" }
    ]
  },
  "Karnataka": {
    capital: "Bengaluru",
    dishes: [
      { name: "Bisi Bele Bath", emoji: "🍲" },
      { name: "Masala Dosa", emoji: "🥞" },
      { name: "Ragi Mudde", emoji: "🟤" },
      { name: "Mysore Pak", emoji: "🍬" }
    ]
  },
  "Kerala": {
    capital: "Thiruvananthapuram",
    dishes: [
      { name: "Appam & Stew", emoji: "🥞" },
      { name: "Kerala Fish Curry", emoji: "🐟" },
      { name: "Puttu & Kadala", emoji: "🍚" },
      { name: "Payasam", emoji: "🍮" }
    ]
  },
  "Madhya Pradesh": {
    capital: "Bhopal",
    dishes: [
      { name: "Dal Bafla", emoji: "🍲" },
      { name: "Poha", emoji: "🍚" },
      { name: "Bhutte ka Kees", emoji: "🌽" },
      { name: "Malpua", emoji: "🥞" }
    ]
  },
  "Maharashtra": {
    capital: "Mumbai",
    dishes: [
      { name: "Vada Pav", emoji: "🍔" },
      { name: "Puran Poli", emoji: "🫓" },
      { name: "Misal Pav", emoji: "🌶️" },
      { name: "Modak", emoji: "🍡" }
    ]
  },
  "Manipur": {
    capital: "Imphal",
    dishes: [
      { name: "Eromba", emoji: "🍲" },
      { name: "Singju", emoji: "🥗" },
      { name: "Chamthong", emoji: "🍜" },
      { name: "Paknam", emoji: "🥘" }
    ]
  },
  "Meghalaya": {
    capital: "Shillong",
    dishes: [
      { name: "Jadoh", emoji: "🍚" },
      { name: "Dohneiiong", emoji: "🍖" },
      { name: "Tungrymbai", emoji: "🫘" },
      { name: "Pumaloi", emoji: "🍚" }
    ]
  },
  "Mizoram": {
    capital: "Aizawl",
    dishes: [
      { name: "Bai", emoji: "🍲" },
      { name: "Vawksa Rep", emoji: "🥩" },
      { name: "Koat Pitha", emoji: "🍡" }
    ]
  },
  "Nagaland": {
    capital: "Kohima",
    dishes: [
      { name: "Smoked Pork with Bamboo Shoot", emoji: "🥩" },
      { name: "Axone", emoji: "🫘" },
      { name: "Galho", emoji: "🍲" }
    ]
  },
  "Odisha": {
    capital: "Bhubaneswar",
    dishes: [
      { name: "Dalma", emoji: "🍲" },
      { name: "Pakhala Bhata", emoji: "🍚" },
      { name: "Chhena Poda", emoji: "🍮" },
      { name: "Rasagola", emoji: "🍡" }
    ]
  },
  "Punjab": {
    capital: "Chandigarh",
    dishes: [
      { name: "Butter Chicken", emoji: "🍗" },
      { name: "Sarson da Saag & Makki di Roti", emoji: "🫓" },
      { name: "Amritsari Kulcha", emoji: "🫓" },
      { name: "Lassi", emoji: "🥛" }
    ]
  },
  "Rajasthan": {
    capital: "Jaipur",
    dishes: [
      { name: "Dal Baati Churma", emoji: "🍲" },
      { name: "Laal Maas", emoji: "🍖" },
      { name: "Ghevar", emoji: "🍰" },
      { name: "Ker Sangri", emoji: "🥗" }
    ]
  },
  "Sikkim": {
    capital: "Gangtok",
    dishes: [
      { name: "Momos", emoji: "🥟" },
      { name: "Thukpa", emoji: "🍜" },
      { name: "Gundruk", emoji: "🥬" },
      { name: "Chhurpi Soup", emoji: "🍵" }
    ]
  },
  "Tamil Nadu": {
    capital: "Chennai",
    dishes: [
      { name: "Idli Sambar", emoji: "🍚" },
      { name: "Chettinad Chicken Curry", emoji: "🍗" },
      { name: "Pongal", emoji: "🍚" },
      { name: "Murukku", emoji: "🌀" }
    ]
  },
  "Telangana": {
    capital: "Hyderabad",
    dishes: [
      { name: "Hyderabadi Biryani", emoji: "🍚" },
      { name: "Haleem", emoji: "🍲" },
      { name: "Sarva Pindi", emoji: "🥞" },
      { name: "Qubani ka Meetha", emoji: "🍮" }
    ]
  },
  "Tripura": {
    capital: "Agartala",
    dishes: [
      { name: "Mui Borok", emoji: "🍲" },
      { name: "Chakhwi", emoji: "🍖" },
      { name: "Wahan Mosdeng", emoji: "🌶️" }
    ]
  },
  "Uttar Pradesh": {
    capital: "Lucknow",
    dishes: [
      { name: "Lucknowi Biryani", emoji: "🍚" },
      { name: "Tunday Kababi", emoji: "🍢" },
      { name: "Petha", emoji: "🍬" },
      { name: "Bedai Sabzi", emoji: "🥘" }
    ]
  },
  "Uttarakhand": {
    capital: "Dehradun",
    dishes: [
      { name: "Kafuli", emoji: "🥬" },
      { name: "Aloo Ke Gutke", emoji: "🥔" },
      { name: "Bal Mithai", emoji: "🍫" },
      { name: "Chainsoo", emoji: "🍲" }
    ]
  },
  "West Bengal": {
    capital: "Kolkata",
    dishes: [
      { name: "Rosogolla", emoji: "🍡" },
      { name: "Macher Jhol", emoji: "🐟" },
      { name: "Kosha Mangsho", emoji: "🍖" },
      { name: "Mishti Doi", emoji: "🍮" }
    ]
  },
  "Jammu & Kashmir": {
    capital: "Srinagar / Jammu",
    dishes: [
      { name: "Rogan Josh", emoji: "🍖" },
      { name: "Yakhni", emoji: "🍲" },
      { name: "Dum Aloo", emoji: "🥔" },
      { name: "Sheer Chai", emoji: "🍵" }
    ]
  },
  "Ladakh": {
    capital: "Leh",
    dishes: [
      { name: "Thukpa", emoji: "🍜" },
      { name: "Skyu", emoji: "🍲" },
      { name: "Tsampa", emoji: "🌾" }
    ]
  },
  "Delhi": {
    capital: "New Delhi",
    dishes: [
      { name: "Chole Bhature", emoji: "🍛" },
      { name: "Butter Chicken", emoji: "🍗" },
      { name: "Paranthe Wali Gali Paratha", emoji: "🫓" },
      { name: "Jalebi", emoji: "🍩" }
    ]
  }
};
