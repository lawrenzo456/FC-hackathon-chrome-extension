document.addEventListener('DOMContentLoaded', () => {
  //tolowercase the string input
  const apiKey = 'MwYL1bXDO0ZNj6DZjthS2g==jrFRY9yXOOht33Iv';
  const apiURL = 'https://api.api-ninjas.com/v1/nutrition?query=';
  //user food input
  // const input = document.getElementById('submit').value;
  // const input = document.getElementById('food').value;

  const button = document.getElementById('submit');
  // button.addEventListener('onclick', getFood());
  // let count = 0;
  const input = document.getElementById('food');

  // button.addEventListener('click', () => {
  //   console.log('string');
  // }); //don't pass the function invocation through the event listener

  // button.addEventListener('click', testInput());
  // button.addEventListener('click', (e) => {
  //   e.preventDefault();
  //   // ++count;

  //   console.log('anything');
  //   // console.log(count);
  //   console.log(input);
  //   console.log(button);
  //   console.log(input.value);
  //   console.log(button.value);
  // });

  // button.addEventListener('click', getFood(e));
  button.addEventListener('click', (e) => {
    e.preventDefault();
    getFood();
  });

  function testInput(e) {
    e.preventDefault();
    // ++count;
    console.log('anything');
    // console.log(count);
    console.log(input);
    console.log(button);
    console.log(input.value);
    console.log(button.value);
    // document.getElementById('NuInf').innerHTML = `
    //       name: 'egg',
    //       calories: 'Only available for premium subscribers.',
    //       serving_size_g: 'Only available for premium subscribers.',
    //       fat_total_g: 9.7,
    //       fat_saturated_g: 3.1,
    //       protein_g: 'Only available for premium subscribers.',
    //       sodium_mg: 139,
    //       potassium_mg: 199,
    //       cholesterol_mg: 371,
    //       carbohydrates_total_g: 0.7,
    //       fiber_g: 0,
    //       sugar_g: 0.4,`;
    // console.log(testItem['name']);
    // console.log(testItem[0]['name']);
  }

  // const form = document.querySelector('submit', (e) => {
  //   e.preventDefault();
  //   const data = new FormData(e.target);
  //   console.log(data);
  //   console.log(data.food);
  // });
  testItem = [
    {
      name: 'egg',
      calories: 'Only available for premium subscribers.',
      serving_size_g: 'Only available for premium subscribers.',
      fat_total_g: 9.7,
      fat_saturated_g: 3.1,
      protein_g: 'Only available for premium subscribers.',
      sodium_mg: 139,
      potassium_mg: 199,
      cholesterol_mg: 371,
      carbohydrates_total_g: 0.7,
      fiber_g: 0,
      sugar_g: 0.4,
    },
  ];

  async function getFood() {
    console.log(input);
    // e.preventDefault();
    const updatedURL = apiURL + input.value; //URL that's being fetched / the call is being made to search
    console.log(updatedURL);

    try {
      const response = await fetch(updatedURL, {
        headers: {
          'X-API-KEY': apiKey,
        },
      });
      if (!response.ok) {
        console.log('ERROR: ' + response.status);
        throw new Error('Food Unavailable');
      }
      console.log(response);
      const data = await response.json();
      console.log(data);
      console.log(JSON.stringify(data[0]));

      console.log(JSON.stringify(data));
      document.getElementById('NuInf').innerHTML += JSON.stringify(data);
    } catch (err) {
      console.log('Fetch Error: ', err);
    }
  }

  const reset = document
    .getElementById('reset')
    .addEventListener(onclick, () => alert('Reset'));

  // function reset() {
  //   alert('Reset');
  // }

  // async function getFood() {
  //   const foods = ['apple', 'egg', 'banana'];

  //   for (let food in foods) {
  //     try {
  //       const updatedURL = apiURL + foods[food]; //URL that's being fetched / the call is being made to search
  //       // console.log(updatedURL);
  //       const response = await fetch(updatedURL, {
  //         headers: {
  //           'X-API-KEY': apiKey,
  //         },
  //       });
  //       if (!response.ok) {
  //         console.log('ERROR: ' + response.status);
  //         throw new Error('Food Unavailable');
  //       }
  //       // console.log(response);
  //       const data = await response.json();
  //       // console.log(data);
  //       // console.log(data[0]['name']);
  //       // console.log(JSON.stringify(data));
  //       const str = JSON.stringify(data[0]);
  //       // console.log(str);
  //       // console.log(JSON.stringify(data[0]));
  //       /*
  //       append a child unordered list to nuInf
  //       then in the for in loop, append each as a list item to the ul

  //     */
  //       for (const key in data[0]) {
  //         console.log(`${key}: ${data[0][key]}\n`);
  //         document.getElementById(
  //           'NuInf'
  //         ).innerHTML += `\n${key}: ${data[0][key]}\n \n \n`;
  //       }

  //       //have to figure out how to go through the entire object and print the items outside of the object, because currently, it prints like: (after invocation)

  //       // document.getElementById('NuInf').innerHTML += JSON.stringify(data); //this is bruteforce
  //       // document.getElementById('NuInf').appendChild(JSON.stringify(data)); //this doesn't work yet, but would be more helpful if it did
  //     } catch (err) {
  //       console.log('Fetch Error: ', err);
  //     }
  //   }
  // }

  // getFood();
});
