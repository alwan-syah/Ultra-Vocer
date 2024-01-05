const array = ["cook", "save", "taste", "aves", "vase", "state", "map"];

let arrayHasil = [];
for (i of array) {
  if (i === "next") continue;
  let arrayKecil = [];
  let word1 = i.split("").sort().join("");
  arrayKecil.push(i);
  for (j of array) {
    if (i === j) continue;
    let word2 = j.split("").sort().join("");
    if (word1 === word2) {
      arrayKecil.push(j);
      array[array.indexOf(j)] = "next";
    }
  }
  arrayHasil.push(arrayKecil);
}
console.log(arrayHasil);
