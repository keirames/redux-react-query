import { useQuery } from 'react-query';

const waitFor = <T>(time: number, value: T): Promise<T> =>
  new Promise((resolve) =>
    setTimeout(() => {
      resolve(value);
    }, time),
  );

export const waitForUser = (time: number) => waitFor(time, { name: 'kei' });

export const waitForLogout = (time: number) => waitFor(time, null);

const homeData = [
  { name: Date.now().toString() },
  { name: Date.now().toString() },
  { name: Date.now().toString() },
];
export const useHome = () => useQuery('home', () => waitFor(2000, homeData));
