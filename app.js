let kartica = document.querySelector(".card");

const fetchAll = async () => {
  const response = await fetch("https://restcountries.com/v3.1/all ");
  const responseData = await response.json();
  console.log(responseData);
  // container.innerHTML = <div><h1>${element.name.common}</h1></div>;
  return responseData;
};
let countries;

fetchAll().then((d) => {
  podaciDrzave = d;
  d.map((element) => {
    kartica.innerHTML += `
      <div>
        <img src="${element.flags.png}" />
        <div class="innerCard">
          <h3>
            <span>Country:</span> <span>${element.name.common}</span>
          </h3>
          <h3>
            <span>Capital city:</span> <span>${element.capital}</span>
          </h3>
          <h3>
            <span>Population:</span> <span>${element.population}</span>
          </h3>
      </div>`;
  });
});
