<template>
	<button class="bg-green-400 p-3 font-bold" @click="showAlert">Click Me</button>
</template>

<script>
export default {
	methods: {
		showAlert() {
			alert("Hello, Vue!");
		},
	},
};
</script>
