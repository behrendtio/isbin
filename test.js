var there = require('./index');

console.log({
  mysql: there('mysql', ['/Users/mario', '/Users/mario/.vim']),
  php: there('php', '/Users/mario'),
  whore: there('whore')
});

there('brew', function(res) {
  console.log(res);
});
