class Queue {
  constructor(size) {
    this.size = size;
    this.queue = [];
  }

  addElement(el) {
    if (this.queue.length <= this.size) {
      this.queue.push(el);
      if (this.queue.length === this.size) {
        this.queue.shift();
      }
    }
  }
  addElements(...elements) {
    if (this.queue.length + elements.length <= this.size) {
      for (let i = 0; i < elements.length; i++) {
        this.queue.push(elements[i]);
      }
    }
  }

  getElement() {
    return this.queue.shift();
  }

  getQueue() {
    return this.queue;
  }

  logQueue() {
    console.log(this.queue);
  }

}

export default Queue;