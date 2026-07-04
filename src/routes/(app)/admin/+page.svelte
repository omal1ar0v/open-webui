<script lang="ts">
	import { goto } from '$lib/utils/nav';
	import { onMount } from 'svelte';

	onMount(() => {
		goto('/admin/users');
	});
</script>
