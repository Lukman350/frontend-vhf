class EventHandler {
  constructor({ element, event, callback }) {
    this.element = element;
    this.event = event;
    this.callback = callback;
  }

  run() {
    this.element.addEventListener(this.event, (event) => this.callback(event));
  }
};

export default EventHandler;
