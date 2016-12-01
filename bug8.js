for (var i = 0; i < 5; i++) {
  execute(i);
}

function execute(n) {
  setTimeout(function() {
    console.log(n + 1);
  }, 100 * n);
}