import { auth } from 'auth';

export default auth((req) => {
  console.log('req.cookies', req.cookies); // returns undefined
  return req;
});

export const config = {
  matcher: ['/((?!api|_next|assets|monitoring|.*\\..*).*)'],
};
