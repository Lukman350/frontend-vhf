class Timer {
  constructor({ type, element }) {
    this.type = type;
    this.element = element;
    this.timer = null;
  }

  run() {
    this.timer = this.type === 'local' ? setInterval(() => this.localTime(), 1000) : setInterval(() => this.gmtTime(), 1000);
  }

  localTime() {
    const now = new Date();
    const date = now.getDate();
    const month = now.getMonth() + 1 < 10 ? `0${now.getMonth() + 1}` : now.getMonth() + 1;
    const year = now.getFullYear();
    const hours = now.getHours() < 10 ? `0${now.getHours()}` : now.getHours();
    const minutes = now.getMinutes() < 10 ? `0${now.getMinutes()}` : now.getMinutes();
    const seconds = now.getSeconds() < 10 ? `0${now.getSeconds()}` : now.getSeconds();
    this.element.innerHTML = `
      ${date}/${month}/${year} ${hours}:${minutes}:${seconds}
    `;
  }

  gmtTime() {
    const now = new Date();
    const date = now.getUTCDate();
    const month = now.getUTCMonth() + 1 < 10 ? `0${now.getUTCMonth() + 1}` : now.getUTCMonth() + 1;
    const year = now.getUTCFullYear();
    const hours = now.getUTCHours() < 10 ? `0${now.getUTCHours()}` : now.getUTCHours();
    const minutes = now.getUTCMinutes() < 10 ? `0${now.getUTCMinutes()}` : now.getUTCMinutes();
    const seconds = now.getUTCSeconds() < 10 ? `0${now.getUTCSeconds()}` : now.getUTCSeconds();
    this.element.innerHTML = `
      ${date}/${month}/${year} ${hours}:${minutes}:${seconds}
    `;
  }
}

export default Timer;