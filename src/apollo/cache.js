import { InMemoryCache, makeVar } from '@apollo/client';

export const cache = new InMemoryCache({
  typePolicies: {
    Query: {
      fields: {
        user() {
          return userVar();
        },
        darkMode() {
          return darkModeVar();
        }
      }
    }
  }
});

export const darkModeVar = makeVar(localStorage.getItem('darkmode'));
export const userVar = makeVar();