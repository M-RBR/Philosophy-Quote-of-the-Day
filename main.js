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
    console.log(responses); // debugging line
    const jsons = responses.map(function (res) {
      return res.json();
    });
    console.log(jsons); // debugging line
    Promise.all(jsons).then(function (datas) {
      getPhilosophers(datas[1]);
      refreshEvent(datas[0], datas[1]);
      displayRandomQuote(datas[0], datas[1]);
      setupFilterEvent(datas[0], datas[1]);
      setupResetEvent();
    });
  });
}

fetchQuotesAndPhilosophers();

function displayRandomQuote(quoteData, philosopherData) {
  const randomIndex = Math.floor(Math.random() * quoteData.length);
  const quoteObj = quoteData[randomIndex];

  const quoteElement = document.getElementById("quote-text");
  quoteElement.innerHTML = quoteObj.quote;

  const authorElement = document.getElementById("quote-author");

  const philosopherID = quoteObj.philosopher.id;
  const philosopherObj = philosopherData.find(function (p) {
    // returns FULL philo object
    return p.id === philosopherID;
  });

  const philosopherName = philosopherObj.name;
  const philosopherLife = philosopherObj.life;
  const philosopherWork = quoteObj.work ? quoteObj.work : "Unknown Work"; 

  authorElement.innerHTML = `— ${philosopherName} ${philosopherLife}, "${philosopherWork}" —`;
}

function refreshEvent(quoteData, philosopherData) {
  document
    .getElementById("refresh-quote")
    .addEventListener("click", () =>
      displayRandomQuote(quoteData, philosopherData)
    );
}

// filters section

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
  document
    .getElementById("apply-filters")
    .addEventListener("click", function () {
      const selectedPhilosopherID = document.getElementById("philosopher-filter").value;
      const keyword = document.getElementById("keyword-filter").value.trim().toLowerCase();

      // check if at least one filter is provided
      if (selectedPhilosopherID === "" && keyword === "") {
        const quoteElement = document.getElementById("quote-text");
        const authorElement = document.getElementById("quote-author");
        quoteElement.className = "error-message";
        quoteElement.textContent = "Please select a philosopher or enter a keyword to search.";
        authorElement.textContent = "";
        return;
      }

      // filter quotes that match the provided criteria
      const filteredQuotes = quoteData.filter(function (quote) {
        const matchesPhilosopher = selectedPhilosopherID === "" || quote.philosopher.id === selectedPhilosopherID;
        const matchesKeyword = keyword === "" || quote.quote.toLowerCase().includes(keyword);
        return matchesPhilosopher && matchesKeyword;
      });

      const quoteElement = document.getElementById("quote-text");
      const authorElement = document.getElementById("quote-author");

      if (filteredQuotes.length > 0) {
        const randomIndex = Math.floor(Math.random() * filteredQuotes.length);
        const quoteObj = filteredQuotes[randomIndex];

        const philosopherID = quoteObj.philosopher.id;
        const philosopherObj = philosopherData.find(function (p) {
          return p.id === philosopherID;
        });

        const philosopherName = philosopherObj.name;
        const philosopherLife = philosopherObj.life;
        const philosopherWork = quoteObj.work ? quoteObj.work : "Unknown Work";

        quoteElement.className = "";
        quoteElement.textContent = quoteObj.quote;
        authorElement.textContent = `— ${philosopherName} ${philosopherLife}, "${philosopherWork}" —`;
      } else {
        quoteElement.className = "error-message";
        quoteElement.textContent = "No quotes found matching your criteria.";
        authorElement.textContent = "";
      }
    });
}

// Reset filters functionality
function setupResetEvent() {
  document
    .getElementById("reset-filters")
    .addEventListener("click", function () {
      // Reset the philosopher dropdown to default
      document.getElementById("philosopher-filter").value = "";
      
      // Clear the keyword input
      document.getElementById("keyword-filter").value = "";
      
      // Clear any error messages and reset quote display
      const quoteElement = document.getElementById("quote-text");
      const authorElement = document.getElementById("quote-author");
      
      // Remove error styling if present
      quoteElement.className = "";
      
      // Show a message that filters have been reset
      quoteElement.textContent = "Filters have been reset. Use the 'Refresh Quote' button to get a new random quote.";
      authorElement.textContent = "";
    });
}