export function authGuard(to, from, next) {
    const token = localStorage.getItem('token');
    console.log('TOKEN:', token);

    if (token) {
        // autorise l'accès
        next();
    } else {
        // redirige vers login
        next('/login');
    }
}
