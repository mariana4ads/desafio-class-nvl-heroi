let heroes = [
  { name: "Bobby", xp: 5500 },
  { name: "Diana", xp: 3800 },
  { name: "Eric", xp: 900 },
  { name: "Hank", xp: 8200 },
  { name: "Mestre dos Magos", xp: 9400 },
  { name: "Presto", xp: 1800 },
  { name: "Sheila", xp: 7300 },
  { name: "Uni", xp: 11033 },
];

for (let i = 0; i < heroes.length; i++) {
  let heroName = heroes[i].name;
  let xp = heroes[i].xp;
  let level = "";

  if (xp <= 1000) {
    level = "Ferro";
  } else if (xp <= 2000) {
    level = "Bronze";
  } else if (xp <= 5000) {
    level = "Prata";
  } else if (xp <= 7000) {
    level = "Ouro";
  } else if (xp <= 8000) {
    level = "Platina";
  } else if (xp <= 9000) {
    level = "Ascendente";
  } else if (xp <= 10000) {
    level = "Imortal";
  } else {
    level = "Radiante";
  }

  console.log(`O Herói de nome ${heroName} está no nível de ${level}`);
}
