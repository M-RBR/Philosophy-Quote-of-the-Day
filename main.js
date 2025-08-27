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
    const jsons = responses.map(function (res) {
      return res.json();
    });
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
  quoteElement.className = "";
  quoteElement.innerHTML = quoteObj.quote;

  const authorElement = document.getElementById("quote-author");

  const philosopherID = quoteObj.philosopher.id;
  const philosopherObj = philosopherData.find(function (p) {
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
      const selectedPhilosopherID =
        document.getElementById("philosopher-filter").value;
      const keyword = document
        .getElementById("keyword-filter")
        .value.trim()
        .toLowerCase();

      if (selectedPhilosopherID === "" && keyword === "") {
        const quoteElement = document.getElementById("quote-text");
        const authorElement = document.getElementById("quote-author");
        quoteElement.className = "error-message";
        quoteElement.textContent =
          "Please select a philosopher or enter a keyword to search.";
        authorElement.textContent = "";
        return;
      }

      // filter quotes that match the provided criteria
      const filteredQuotes = quoteData.filter(function (quote) {
        const matchesPhilosopher =
          selectedPhilosopherID === "" ||
          quote.philosopher.id === selectedPhilosopherID;
        const matchesKeyword =
          keyword === "" || quote.quote.toLowerCase().includes(keyword);
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
        const highlightedQuote = highlightKeyword(quoteObj.quote, keyword);
        quoteElement.innerHTML = highlightedQuote;
        authorElement.textContent = `— ${philosopherName} ${philosopherLife}, "${philosopherWork}" —`;
      } else {
        quoteElement.className = "error-message";
        quoteElement.textContent = "No quotes found matching your criteria.";
        authorElement.textContent = "";
      }
    });
}

function highlightKeyword(text, keyword) {
  if (!keyword || keyword.trim() === "") {
    return text;
  }
  const regex = new RegExp(`(${keyword})`, "gi");
  return text.replace(
    regex,
    '<span style="font-weight: bold; -webkit-text-stroke: 1px #ffd700; text-stroke: 1px #ffd700; color: #000000;">$1</span>'
  );
}

// reset filters functionality
function setupResetEvent() {
  document
    .getElementById("reset-filters")
    .addEventListener("click", function () {
      document.getElementById("philosopher-filter").value = "";

      document.getElementById("keyword-filter").value = "";

      const quoteElement = document.getElementById("quote-text");
      const authorElement = document.getElementById("quote-author");

      quoteElement.className = "";

      quoteElement.className = "success-message";
      quoteElement.textContent =
        "Filters have been reset. Use the 'Refresh Quote' button to get a new random quote.";
      authorElement.textContent = "";
    });
}
