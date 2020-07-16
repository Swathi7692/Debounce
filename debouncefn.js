const search = () => {
  console.log("found");
};

const debouncer = (fn, timePeriod) => {
  let timer;
  return function (...args) {
    clearTimeout(timer);
    timer = setTimeout(() => {
      fn(...args);
    }, timePeriod);
  };
};

const debouncedSearch = debouncer(search, 1000);

debouncedSearch("k");
debouncedSearch("key");
