document.addEventListener("DOMContentLoaded", function () {
  const form = document.getElementById("newsletter-form");
  const message = document.getElementById("subscription-message");

  form.addEventListener("submit", function (e) {
    e.preventDefault();

    const name = document.getElementById("name").value.trim();
    const email = document.getElementById("email").value.trim();

    if (name && email.includes("@")) {
      // Create a unique entry
      const subscriber = { name, email, timestamp: new Date().toISOString() };

      // Get existing subscriptions or start new array
      const stored =
        JSON.parse(localStorage.getItem("newsletterSubscribers")) || [];

      // Avoid duplicates (basic check)
      if (!stored.find((entry) => entry.email === email)) {
        stored.push(subscriber);
        localStorage.setItem("newsletterSubscribers", JSON.stringify(stored));
      }

      // Confirmation
      message.style.display = "block";
      form.reset();
    } else {
      alert("Please enter a valid name and email address.");
    }
  });
});
