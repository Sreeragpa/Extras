<script src="https://cdn.jsdelivr.net/npm/axios/dist/axios.min.js"></script>
<script>
  // Function to handle form submission
  function handleSubmit(event) {
    event.preventDefault(); // Prevent default form submission
    
    // Get form data
    const formData = new FormData(event.target);

    // Make Axios POST request with form data
    axios.post('https://api.example.com/submit', formData)
      .then(function (response) {
        // Handle successful response
        console.log(response.data);
      })
      .catch(function (error) {
        // Handle error
        console.error('Error submitting form:', error);
      });
  }

  // Add event listener to form
  document.getElementById('myForm').addEventListener('submit', handleSubmit);
</script>
