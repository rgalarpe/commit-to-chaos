export { default as proxy } from 'next-auth/middleware';

export const config = {
    //* zero or more
    //= one or more
    //? zero or none
    matcher: ['/users/:id*'],
}