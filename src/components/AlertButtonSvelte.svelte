<script>
  function showAlert() {
    alert('Hello, Svelte!');
  }
</script>

<button class="bg-orange-400 p-3 font-bold" on:click={showAlert}>Click Me</button>