const fs = require('fs');

fs.readFile('urls.txt', 'utf8', (err, data) => {
  if (err) {
    console.log("ERROR:", err);
    process.kill(1)
  }
  console.log("DATA...", data)
})



fs.writeFile('urls.txt', 'utf8', { encoding: 'i wrote stuff here', flag: 'a' }, err => {
  if (err) {
    console.log("ERROR!!!", err)
    process.kill(1)
  }
  console.log("IT WORKED!")
})

