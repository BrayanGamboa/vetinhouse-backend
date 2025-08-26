import '@hapi/hapi';

declare module '@hapi/hapi' {
  interface ServerApplicationState {
    serviceLocator: typeof import('../infrastructure/config/service-locator').default;
  }
}
