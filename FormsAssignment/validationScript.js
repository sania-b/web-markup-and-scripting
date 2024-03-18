document.addEventListener("DOMContentLoaded", function () {
  // Retrieve the input field element using JavaScript
  const inputField = document.getElementById("inputField");
  const form = document.getElementById("myForm");
  const errorContainer = document.getElementById("errorContainer");

  // Add an event listener to the form for submit event
  form.addEventListener("submit", function (event) {
    // Prevent the form from submitting
    event.preventDefault();

    // Retrieve the input field value
    const inputValue = inputField.value.trim();

    // Regular expression pattern for alphanumeric input
    const alphanumericRegex = /^[a-zA-Z0-9]+$/;

    // Check if the input value matches the pattern
    if (alphanumericRegex.test(inputValue)) {
      // Valid input: display confirmation
      alert("Form submitted successfully!");

      // You can also submit the form to an actual server using AJAX or fetch.
    } else {
      // Invalid input: display error message
      errorContainer.innerText = "Error: Please enter alphanumeric values only.";
    }
  });
});
