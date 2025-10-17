document.addEventListener('DOMContentLoaded', () => {
  //tolowercase the string input
  const apiKey = 'MwYL1bXDO0ZNj6DZjthS2g==jrFRY9yXOOht33Iv';
  const apiURL = 'https://api.api-ninjas.com/v1/nutrition?query=';
  //user food input
  const button = document.getElementById('submit');

  const input = document.getElementById('food');

  button.addEventListener('click', (e) => {
    e.preventDefault();
    getFood();
  });

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

      // console.log(JSON.stringify(data));
      // document.getElementById('NuInf').innerHTML += JSON.stringify(data);
      //       append a child unordered list to nuInf
      //       then in the for in loop, append each as a list item to the ul
      for (const key in data[0]) {
        console.log(`${key}: ${data[0][key]}\n`);
        document.getElementById(
          'NuInf'
        ).innerHTML += `\n${key}: ${data[0][key]}\n \n \n`;
        //       // document.getElementById('NuInf').innerHTML += JSON.stringify(data); //this is bruteforce
        //       // document.getElementById('NuInf').appendChild(JSON.stringify(data)); //this doesn't work yet, but would be more helpful if it did
      }
    } catch (err) {
      console.log('Fetch Error: ', err);
    }
  }
  const reset = document
    .getElementById('reset')
    .addEventListener(onclick, () => alert('Reset'));
});
