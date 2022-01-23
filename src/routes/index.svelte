<script>
	import { currentUser, pageState } from '$lib/state';
	import supabase from '$lib/supabase';
</script>

{#if $pageState.authLoaded}
	{#if $currentUser}
		{JSON.stringify($currentUser)}
	{:else}
		<form
			on:submit|preventDefault={(ev) => {
				const { email, password } = ev.target.elements;
				console.log(email, password);
				supabase.auth.signIn({ email: email.value, password: password.value });
			}}
		>
			<input name="email" type="email" />
			<input name="password" type="password" />
			<button type="submit">Login</button>
		</form>
	{/if}
{:else}
	<div>Signing in ...</div>
{/if}
