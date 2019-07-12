import { remote } from 'electron';

console.log('Electron:', process.versions.electron);
console.log(remote.app);

const name = 'world';

window.onload = function(){
  document.getElementById('app').innerHTML = `Helle, ${name}.`;
}