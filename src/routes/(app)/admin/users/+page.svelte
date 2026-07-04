<script>
	import { goto } from '$lib/utils/nav';
	import { onMount } from 'svelte';

	onMount(async () => {
		await goto('/admin/users/overview');
	});
</script>
