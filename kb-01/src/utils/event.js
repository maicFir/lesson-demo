class Event {
  constructor() {
    this.callback = {}
  }
  $mcOn(name, fn) {
    if (!this.callback[name]) {
      this.callback[name] = [];
      this.callback[name].push(fn)
    }
  }
  $mcEmit(name, parms) {
    if (this.callback[name]) {
      this.callback[name].map(v => {
        v(parms)
      })
    }
  }
}
export default Event