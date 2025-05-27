document
  .getElementById("newsletter-form")
  .addEventListener("submit", function (e) {
    e.preventDefault();
    // added to prevent form from actually submitting

    const name = document.getElementById("name").value.trim();
    const email = document.getElementById("email").value.trim();

    if (name && email) {
      const subscribers = JSON.parse(
        localStorage.getItem("subscribers") || "[]"
      );
      subscribers.push({ name, email });
      localStorage.setItem("subscribers", JSON.stringify(subscribers));

      console.log("Saved:", JSON.parse(localStorage.getItem("subscribers")));

      // showing confirmation message
      document.getElementById("subscription-message").style.display = "block";

      //  clears form
      this.reset();
    }
  });
