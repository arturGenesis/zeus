export default interface Global {
  document: Document;
  window: Window;
  navigator: Navigator;
  mongo: any
}

declare var global: Global;