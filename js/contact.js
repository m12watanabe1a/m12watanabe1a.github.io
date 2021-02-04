document.addEventListener("DOMContentLoaded", function () {
  // select box
  document.getElementById('contactType').addEventListener('change',
    function (event) {
      document.getElementById('contact_type').value = event.currentTarget.value;
    }
  );
});
