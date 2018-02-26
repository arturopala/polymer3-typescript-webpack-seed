import { Element as PolymerElement, html } from '@polymer/polymer/polymer-element';
import { Polymer } from '@polymer/polymer/lib/legacy/polymer-fn.js';
import '@polymer/app-layout/app-drawer/app-drawer.js';
import '@polymer/app-layout/app-drawer-layout/app-drawer-layout.js';
import '@polymer/app-layout/app-header/app-header.js';
import '@polymer/app-layout/app-header-layout/app-header-layout.js';
import '@polymer/app-layout/app-scroll-effects/app-scroll-effects.js';
import '@polymer/app-layout/app-toolbar/app-toolbar.js';
import '@polymer/app-route/app-location.js';
import '@polymer/app-route/app-route.js';
import '@polymer/iron-pages/iron-pages.js';
import '@polymer/iron-selector/iron-selector.js';
import '@polymer/paper-icon-button/paper-icon-button.js';
import '@polymer/iron-icons/iron-icons.js';

export class MyApp extends PolymerElement {

    static get template() { return html`
    <style>
      :host {
        --app-primary-color: #4285f4;
        --app-secondary-color: black;

        display: block;
      }

      app-header {
        color: #fff;
        background-color: var(--app-primary-color);
      }

      app-header paper-icon-button {
        --paper-icon-button-ink-color: white;
      }

      app-drawer-layout:not([narrow]) [drawer-toggle] {
        display: none;
      }

      app-drawer {
        --app-drawer-content-container: {
          background-color: #B0BEC5;
        }
      }

    </style>

    <app-drawer-layout fullbleed>
      <app-drawer slot="drawer">
        drawer-content
      </app-drawer>
      <app-header-layout>
        <app-header slot="header">
          <app-toolbar>
            <paper-icon-button icon="menu" drawer-toggle></paper-icon-button>
            <div main-title>[[name]]</div>
          </app-toolbar>
        </app-header>

        <slot></slot>

      </app-header-layout>
    </app-drawer-layout>
    `;
    }

    static get properties() {
        return {
          name: {
            type: String
          }
        };
      }

    ready() {
        super.ready();
    }
}