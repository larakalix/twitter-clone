export const fetcher = (url: string) =>
    fetch(url).then((res): any => res.json());
