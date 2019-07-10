self.addEventListener('message', startCounter);

function startCounter(event) {
  console.log('In web worker:', event.data, self);
  let initial = event.data;
  setInterval(() => this.postMessage(initial++), 1000);
}
