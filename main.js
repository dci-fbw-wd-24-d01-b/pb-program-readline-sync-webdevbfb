import readlineSync from "readline-sync";

const name = readlineSync.question("Wie heißt du? ");
const birthday = readlineSync.question("In welchem Jahr wurdest du geboren? ");
const born = readlineSync.question("In welcher Stadt wurdest du geboren? ");
const live = readlineSync.question("Wo lebst du jetzt? ");
const year = readlineSync.question("Was ist das aktuelle Jahr? ");

let age = year - birthday;

console.log("\nHallo! Mein Name ist " + name + ". Ich wurde vor " + age + " Jahren in " + born + " geboren. Jetzt lebe ich in " + live + ".")