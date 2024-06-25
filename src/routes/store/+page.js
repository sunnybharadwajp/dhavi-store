import { redirect } from '@sveltejs/kit';

export function load() {
    redirect(302, 'store/design-selection'); // needs `throw` in v1
}