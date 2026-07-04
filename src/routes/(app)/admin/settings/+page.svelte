<script>
	import { goto } from '$lib/utils/nav';
	import { onMount } from 'svelte';

	onMount(() => {
		goto('/admin/settings/general');
	});
</script>
