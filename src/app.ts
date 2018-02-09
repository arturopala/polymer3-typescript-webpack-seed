import { Element as PolymerElement, html } from '@polymer/polymer/polymer-element';
import '@polymer/polymer/polymer.js';
import '@polymer/iron-icons/iron-icons.js';
import '@polymer/paper-icon-button/paper-icon-button.js';
import '@polymer/app-layout/app-drawer-layout/app-drawer-layout.js';
import '@polymer/app-layout/app-drawer/app-drawer.js';
import '@polymer/app-layout/app-scroll-effects/app-scroll-effects.js';
import '@polymer/app-layout/app-header/app-header.js';
import '@polymer/app-layout/app-header-layout/app-header-layout.js';
import '@polymer/app-layout/app-toolbar/app-toolbar.js';

export class MyApp extends PolymerElement {

    static get template() {
        return html`
            <app-drawer-layout>

              <app-drawer slot="drawer">
                <app-toolbar>Getting Started</app-toolbar>
              </app-drawer>

              <app-header-layout>

                <app-header slot="header" reveals effects="waterfall">
                  <app-toolbar>
                    <paper-icon-button icon="menu" drawer-toggle></paper-icon-button>
                    <div main-title>Title</div>
                  </app-toolbar>
                </app-header>

                <sample-content size="100">
                    Hello World!
                </sample-content>

              </app-header-layout>

            </app-drawer-layout>
        `;
    }

    constructor() {
        super();
    }

    static get properties() {
        return {
        };
    }

    ready() {
        super.ready();
    }
}