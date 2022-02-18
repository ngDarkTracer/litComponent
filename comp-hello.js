import {LitElement, html} from 'lit-element';


export class Comp extends LitElement {

  static get properties() {
    return {
      /**
       * The name to retrieve from server.
       */
      name: {type: String},
      result: {type: String}
    };
  }

  constructor() {
    super();
  }

  render() {
    return html`
      <input type="text" @change=${this.updateName} name="input-text" placeholder="text here..." id="name"><br/>
      <button id="btn" @click="${this.search}">search</button>
      <label for="name">The age is: ${this.result}</label>`;
  }

  search() {
    fetch('https://api.agify.io/?name=' + this.name)
      .then((response) => {
        return response.json();
      })
      .then((result) => {
        this.result = result.age
      })
  }

  updateName(e) {
    this.name = e.target.value
  }
}

window.customElements.define('comp-hello', Comp);
