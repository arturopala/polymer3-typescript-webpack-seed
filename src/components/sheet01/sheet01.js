import { Element as PolymerElement, html } from '@polymer/polymer/polymer-element';
import { MyStyles } from '../styles';

export class Sheet01 extends PolymerElement {

    static get template() { return html`

      <style include="my-styles">

      </style>

      <div class="box">
        <h1>View One</h1>
        <p>Ut labores minimum atomorum pro. Laudem tibique ut has.</p>
        <p>Lorem ipsum dolor sit amet, per in nusquam nominavi periculis, sit elit oportere ea.
        Lorem ipsum dolor sit amet, per in nusquam nominavi periculis, sit elit oportere ea.
        Cu mei vide viris gloriatur, at populo eripuit sit.</p>
      </div>

    `;
    }

    static get properties() {
      return {
        
      };
    }

    ready() {
      super.ready();
    }
}