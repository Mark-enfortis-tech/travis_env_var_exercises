
function sleep(ms) {
  return new Promise(resolve => setTimeout(resolve, ms));
}

async function main() {
  const favoriteFood = process.env.favoriteFood;

  while(true) {
    console.log(`Microservices rock! and my favorite food is ${favoriteFood}`);
    await sleep(5000);
  }
}

main();
