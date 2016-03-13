// @flow
class Index {
  order: number;

  constructor({ order = 6 } = {}) {
    this.order = order;
  }
}

module.exports = Index;
