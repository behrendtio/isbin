var there = require('./index');

console.log({
  mysql: there('mysql', ['/Users/mario', '/Users/mario/.vim']),
  php: there('php', '/Users/mario'),
  whore: there('whore')
});
