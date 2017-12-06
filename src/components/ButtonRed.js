export default class ButtonRed extends HTMLElement {
  constructor() {
    super();
  }

  // Templates
  static get template() {
    return `
            <button>
                <slot></slot>
            </button>
            <style>
            button {
                font-size: 16px;
                font-weight: bold;
                background-color: palevioletred;
                color: #fff;
                padding: 1em 3em;
                cursor: pointer;
                border: none;
            }
            </style>
            `;
  }

  connectedCallback() {
    // Shadow DOM: #shadow-root(open)
    this.attachShadow({
      mode: 'open'
    }).innerHTML = ButtonRed.template;
  }
};
