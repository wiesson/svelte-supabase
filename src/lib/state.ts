import { readable, writable } from 'svelte/store';
import supabase from '$lib/supabase';

export const pageState = writable({
	authLoaded: false,
	isLoading: false
});

export const currentUser = readable(supabase.auth.user(), (set) => {
	supabase.auth.onAuthStateChange((event, session) => {
		if (event === 'SIGNED_IN') {
			set(session.user);
		}

		if (event === 'SIGNED_OUT') {
			set(null);
		}
	});
});

currentUser.subscribe((u) => {
	pageState.update((s) => ({ ...s, authLoaded: true }));

	console.log(u);
});
