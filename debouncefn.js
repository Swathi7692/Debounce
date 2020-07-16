const search = () => {
  console.log("found");
};

function debouncer(fn, timeperiod) {
  let timer;
  return function () {
    let context = this,
      args = arguments;
    clearTimeout(timer);
    timer = setTimeout(() => {
      fn.apply(context, args);
    }, timeperiod);
  };
}

const debouncedSearch = debouncer(search, 1000);

debouncedSearch("k");
