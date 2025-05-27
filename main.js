// date-display

months = [
  "January",
  "February",
  "March",
  "April",
  "May",
  "June",
  "July",
  "August",
  "September",
  "October",
  "November",
  "December",
];

days = [
  "Sunday",
  "Monday",
  "Tuesday",
  "Wednesday",
  "Thursday",
  "Friday",
  "Saturday",
];

date_data = new Date();

current_day = date_data.getDay();
current_month = date_data.getMonth();
current_date = date_data.getDate();
current_year = date_data.getFullYear();
document.getElementById(
  "date-display"
).textContent = `~ ${days[current_day]} / ${months[current_month]} ${current_date}, ${current_year} ~`;

// quote fetching

function fetchQuotesAndPhilosophers() {
  const fetches = [
    fetch("https://philosophersapi.com/api/quotes"),
    fetch("https://philosophersapi.com/api/philosophers"),
  ];
  Promise.all(fetches).then(function (responses) {
    console.log(responses);
    const jsons = responses.map(function (res) {
      return res.json();
    });
    console.log(jsons);
    Promise.all(jsons).then(function (datas) {
      getPhilosophers(datas[1]); // to populate dropdown selection
      refreshEvent(datas[0], datas[1]); // both endpoints needed
      displayRandomQuote(datas[0], datas[1]);
      setupFilterEvent(datas[0], datas[1]);
    });
  });
}

fetchQuotesAndPhilosophers();

function displayRandomQuote(quoteData, philosopherData) {
  const randomIndex = Math.floor(Math.random() * quoteData.length);
  const quoteObj = quoteData[randomIndex];

  const quoteElement = document.getElementById("quote-text"); // DOM to get elements where quote and philosopher will be displayed
  quoteElement.innerHTML = quoteObj.quote; // set quote text into appropriate elemen;

  const authorElement = document.getElementById("quote-author");

  console.log(quoteObj);
  const philosopherID = quoteObj.philosopher.id; // get philosopher's ID from quote object
  const philosopherObj = philosopherData.find(function (p) {
    // find full philosopher object in philosopherData array using ID
    return p.id === philosopherID;
  });

  const philosopherName = philosopherObj.name; // store philosopher's name and life dates
  const philosopherLife = philosopherObj.life;
  const philosopherWork = quoteObj.work ? quoteObj.work : "Unknown Work"; // check if work is associated with quote, if not use fallback

  authorElement.innerHTML = `— ${philosopherName} ${philosopherLife}, "${philosopherWork}" —`; // template using back ticks, embeds variable
}

function refreshEvent(quoteData, philosopherData) {
  // event listener for apply filters/search button
  document
    .getElementById("refresh-quote")
    .addEventListener("click", () =>
      displayRandomQuote(quoteData, philosopherData)
    );
}

// part 2: filters section

function getPhilosophers(philosopherData) {
  const philosopherSelect = document.getElementById("philosopher-filter");
  philosopherData.forEach(function (philosopher) {
    const option = document.createElement("option");
    option.value = philosopher.id;
    option.textContent = philosopher.name;
    philosopherSelect.appendChild(option);
  });
}

function setupFilterEvent(quoteData, philosopherData) {
  // event listener
  document
    .getElementById("apply-filters")
    .addEventListener("click", function () {
      const selectedPhilosopherID =
        document.getElementById("philosopher-filter").value;
      const keyword = document
        .getElementById("keyword-filter")
        .value.trim()
        .toLowerCase();

      // Filter quotes that match both selected philosopher and keyword

      const filteredQuotes = quoteData.filter(function (quote) {
        const matchesPhilosopher = // check if quote matches selected philosopher
          selectedPhilosopherID === "" ||
          quote.philosopher.id === selectedPhilosopherID;

        const matchesKeyword = // check if quote contains entered keyword
          keyword === "" || quote.quote.toLowerCase().includes(keyword);

        return matchesPhilosopher && matchesKeyword; // only returns quote that match both filters
      });

      // DOM Manipulation
      const quoteElement = document.getElementById("quote-text");
      const authorElement = document.getElementById("quote-author");

      if (filteredQuotes.length > 0) {
        // if filtered quotes exist, display random quote
        const randomIndex = Math.floor(Math.random() * filteredQuotes.length);
        const quoteObj = filteredQuotes[randomIndex];

        const philosopherID = quoteObj.philosopher.id; // find full philosopher info based on ID
        const philosopherObj = philosopherData.find(function (p) {
          return p.id === philosopherID;
        });

        // extract and assign relevant philosopher data
        const philosopherName = philosopherObj.name;
        const philosopherLife = philosopherObj.life;
        let philosopherWork; // fall back if work is missing
        if (quoteObj.work) {
          philosopherWork = quoteObj.work;
        } else {
          philosopherWork = "Unknown Work";
        }

        // display selected quote and author info‚
        quoteElement.textContent = quoteObj.quote;
        authorElement.textContent = `— ${philosopherName} ${philosopherLife}, "${philosopherWork}" —`;
      } else {
        quoteElement.textContent = "No quote found.";
        authorElement.textContent = "";
      }
    });
}
