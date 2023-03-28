const dropDown = document.querySelector(".dropdown-menu");
const dropOptions = document.querySelector(".drop-options");
const country = document.querySelector(".country");
const countries = document.querySelector(".countries");
const search = document.querySelector(".search");
const regions = document.querySelectorAll(".regions");

dropDown.addEventListener("click", (e) => {
  dropOptions.classList.toggle("show-options");
});

async function getCountries() {
  const URL = await fetch("https://restcountries.com/v3.1/all");
  const res = await URL.json();
  console.log(res);
  res.forEach((api) => {
    showCountry(api);
  });
}

getCountries();

function showCountry(data) {
  const country = document.createElement("div");
  country.classList.add("country");
  country.innerHTML = `<div class="country-img">
    <img src=${data.flags.svg} alt="">
  </div>
  <div class="country-details">
    <h5 class="country-name">${data.name.common}</h5>
    <p><strong>Population: </strong>${data.population}</p>
    <p class="region-name"><strong>Region: </strong>${data.region}</p>
    <p><strong>Capital: </strong>${data.capital}</p>
  </div>`;

  countries.appendChild(country);
}

const countryName = document.getElementsByClassName("country-name");
search.addEventListener("input", (e) => {
  Array.from(countryName).forEach((country) => {
    if (country.innerText.toLowerCase().includes(search.value.toLowerCase())) {
      country.parentElement.parentElement.style.display = "grid";
    } else {
      country.parentElement.parentElement.style.display = "none";
    }
  });
});

const regionName = document.getElementsByClassName("region-name");
regions.forEach((region) => {
  region.addEventListener("click", (e) => {
    Array.from(regionName).forEach((element) => {
      if (
        element.innerText.includes(region.innerText) ||
        region.innerText === "All"
      ) {
        element.parentElement.parentElement.style.display = "grid";
      } else {
        element.parentElement.parentElement.style.display = "none";
      }
    });
  });
});

function output() {
  console.log(countries);
}

const allData = document.getElementsByClassName("country");
document.addEventListener("click", output, true);
