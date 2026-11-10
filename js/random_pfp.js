const profile_pictures_array = [
  "NeedyGirl.png",
  "CatGirlWithBlunt.webp",
  "Chito.webp",
  "CryingKonata.gif",
  "CuriousKonata.gif",
  "ExciteKonata.gif",
  "SleepyKonata.gif",
  "ThinkingKonata.gif",
];

document.getElementById("profile-picture").src =
  "/assets/images/" +
  profile_pictures_array[
    Math.floor(Math.random() * profile_pictures_array.length)
  ];
