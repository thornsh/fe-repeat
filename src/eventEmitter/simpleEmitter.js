class EventEmitter extends EventTarget {
  on = this.addEventListener
  off = this.removeEventListener
  emit = (type, data) =>
    this.dispatchEvent(
      new CustomEvent(type, {
        detail: data
      })
    )
  once = (type, callback) =>
    this.on(type, callback, {
      capture: true,
      once: true
    })
}
