(async () => {
  const childProcess = require('child_process');
  const pwd = childProcess
    .execSync('pwd')
    .toString()
    .trim();
  const {name, version} = require(pwd + '/package.json');
  const {versions} = await fetch('http://registry.npmjs.org/' + name).then((res) => res.json());
  console.log(version in versions);
})();
