import { remote } from 'electron';

console.log('Electron:', process.versions.electron);
console.log(remote.app);

window.onload = function(){
  document.getElementById('app').innerHTML = 'Hello, world';
}