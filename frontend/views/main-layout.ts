import '@vaadin-component-factory/vcf-nav';
import '@vaadin/app-layout';
import { AppLayout } from '@vaadin/app-layout';
import '@vaadin/app-layout/vaadin-drawer-toggle';
import '@vaadin/avatar';
import '@vaadin/icon';
import '@vaadin/menu-bar';
import '@vaadin/scroller';
import '@vaadin/tabs';
import '@vaadin/tabs/vaadin-tab';
import '@vaadin/vaadin-lumo-styles/vaadin-iconset';
import { html } from 'lit';
import { customElement } from 'lit/decorators.js';
import { router } from '../index';
import { appStore } from '../stores/app-store';
import { Layout } from './view';

interface RouteInfo {
  path: string;
  title: string;
  icon: string;
}

@customElement('main-layout')
export class MainLayout extends Layout {
  render() {
    return html`
      <vaadin-app-layout primary-section="drawer">
        <header slot="drawer">
          <h1 class="text-l m-0">${appStore.applicationName}</h1>
        </header>
        <vaadin-scroller slot="drawer" scroll-direction="vertical">
          <!-- vcf-nav is not yet an official component -->
          <!-- For documentation, visit https://github.com/vaadin/vcf-nav#readme -->
          <vcf-nav aria-label="${appStore.applicationName}">
            ${this.getMenuRoutes().map(
              (viewRoute) => html`
                <vcf-nav-item path=${router.urlForPath(viewRoute.path)}>
                  <span class="${viewRoute.icon} nav-item-icon" slot="prefix" aria-hidden="true"></span>
                  ${viewRoute.title}
                </vcf-nav-item>
              `
            )}
          </vcf-nav>
        </vaadin-scroller>

        <footer slot="drawer"></footer>

        <vaadin-drawer-toggle slot="navbar" aria-label="Menu toggle"></vaadin-drawer-toggle>
        <h2 slot="navbar" class="text-l m-0">${appStore.currentViewTitle}</h2>

        <slot></slot>
      </vaadin-app-layout>
    `;
  }

  connectedCallback() {
    super.connectedCallback();
    this.classList.add('block', 'h-full');
    this.reaction(
      () => appStore.location,
      () => {
        AppLayout.dispatchCloseOverlayDrawerEvent();
      }
    );
  }

  private getMenuRoutes(): RouteInfo[] {
    return [
      {
        path: 'books-list',
        title: 'Books List',
        icon: 'la la-columns',
      },

      {
        path: 'hello-world',
        title: 'Hello World',
        icon: 'la la-globe',
      },

      {
        path: 'card-list',
        title: 'Card List',
        icon: 'la la-list',
      },

      {
        path: 'dashboard',
        title: 'Dashboard',
        icon: 'la la-chart-area',
      },

      {
        path: 'spreadsheet',
        title: 'Spreadsheet',
        icon: 'la la-file-excel',
      },

      {
        path: 'image-list',
        title: 'Image List',
        icon: 'la la-th-list',
      },

      {
        path: 'checkout-form',
        title: 'Checkout Form',
        icon: 'la la-credit-card',
      },

      {
        path: 'master-detail',
        title: 'Master-Detail',
        icon: 'la la-columns',
      },

      {
        path: 'chat',
        title: 'Chat',
        icon: 'la la-comments',
      },

      {
        path: 'hello-world-hilla',
        title: 'Hello World Hilla',
        icon: 'la la-globe',
      },

      {
        path: 'master-detail-designer',
        title: 'Master Detail Designer',
        icon: 'la la-columns',
      },

      {
        path: 'list',
        title: 'List',
        icon: 'la la-th',
      },

      {
        path: 'rich-text-editor',
        title: 'Rich Text Editor',
        icon: 'la la-edit',
      },

      {
        path: 'address-form',
        title: 'Address Form',
        icon: 'la la-map-marker',
      },

      {
        path: 'person-form',
        title: 'Person Form',
        icon: 'la la-user',
      },

      {
        path: 'map',
        title: 'Map',
        icon: 'la la-map',
      },

      {
        path: 'master-detail-hilla',
        title: 'Master Detail Hilla',
        icon: 'la la-columns',
      },
    ];
  }
}
