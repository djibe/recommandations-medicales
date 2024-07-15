// Dans le fichier urlTester.js
import axios from 'axios'
import fs from 'fs/promises'

// Fonction pour vérifier si une chaîne est une URL
function isUrl(str) {
  const urlPattern = new RegExp('^(https?:\\/\\/)?' + // protocol
    '((([a-z\\d]([a-z\\d-]*[a-z\\d])*)\\.)+[a-z]{2,}|' + // domain name
    '((\\d{1,3}\\.){3}\\d{1,3}))' + // OR ip (v4) address
    '(\\:\\d+)?(\\/[-a-z\\d%_.~+]*)*' + // port and path
    '(\\?[;&a-z\\d%_.~+=-]*)?' + // query string
    '(\\#[-a-z\\d_]*)?$', 'i'); // fragment locator
  return !!urlPattern.test(str);
}

// Fonction pour tester une URL
async function testUrl(url) {
  try {
    const response = await axios.get(url);
    // console.log(`${url} est accessible. Statut : ${response.status}`);
  } catch (error) {
    console.error(`${url} n'est pas accessible. Erreur : ${error.message}`);
  }
}

// Fonction pour parcourir les données JSON et tester les URL
function traverse(obj) {
  for (let key in obj) {
    if (obj[key] !== null && typeof obj[key] === 'object') {
      // Si la valeur est un objet, parcourir récursivement
      traverse(obj[key]);
    } else if (typeof obj[key] === 'string' && isUrl(obj[key])) {
      // Si la valeur est une chaîne et une URL, la tester
      testUrl(obj[key]);
    }
  }
}

// Lire le fichier JSON et tester les URL
async function main() {
  try {
    const data = await fs.readFile('../static/data/societes-savantes.json', 'utf8');
    const jsonData = JSON.parse(data);
    traverse(jsonData);
  } catch (error) {
    console.error(`Erreur lors de la lecture du fichier JSON : ${error.message}`);
  }
}

main()
