import type { StorageType, StorageKey } from '../types/electron-store.types';

export const STORAGE_TYPES: Record<string, StorageType> = {
  GET: 'get',
  SET: 'set',
  DELETE: 'delete',
  RESET: 'reset',
};
export const STORAGE_KEYS: Record<string, StorageKey> = {
  APP_AUTOMATIC_UPDATE_FAILED: 'APP-AUTOMATIC-UPDATE-FAILED',
  APP_UPDATE_COMPLETED: 'APP-UPDATE-COMPLETED',
  ASSET_DATA: 'ASSET-DATA',
  ASSET_SETTINGS_DIALOG_WAS_OPENED: 'ASSET-SETTINGS-DIALOG-WAS-OPENED',
  CURRENCY_ACTIVE: 'CURRENCY-ACTIVE',
  CURRENCY_SELECTED: 'CURRENCY-SELECTED',
  DATA_LAYER_MIGRATION_ACCEPTANCE: 'DATA-LAYER-MIGRATION-ACCEPTANCE',
  DISCREET_MODE_ENABLED: 'DISCREET-MODE-ENABLED',
  DISCREET_MODE_SETTINGS_TOOLTIP: 'DISCREET-MODE-SETTINGS-TOOLTIP',
  DISCREET_MODE_NOTIFICATION: 'DISCREET-MODE-NOTIFICATION',
  DOWNLOAD_MANAGER: 'DOWNLOAD-MANAGER',
  HARDWARE_WALLETS: 'HARDWARE-WALLETS',
  HARDWARE_WALLET_DEVICES: 'HARDWARE-WALLET-DEVICES',
  READ_NEWS: 'READ-NEWS',
  RESET: 'RESET',
  SMASH_SERVER: 'SMASH-SERVER',
  STAKING_INFO_WAS_OPEN: 'ALONZO-INFO-WAS-OPEN',
  TERMS_OF_USE_ACCEPTANCE: 'TERMS-OF-USE-ACCEPTANCE',
  ANALYTICS_ACCEPTED: 'ANALYTICS-ACCEPTED',
  ANALYTICS_MACHINE_SPEC_SENT: 'ANALYTICS-MACHINE-SPEC-SENT',
  USER_ID: 'USER-ID',
  THEME: 'THEME',
  TOKEN_FAVORITES: 'TOKEN-FAVORITES',
  USER_DATE_FORMAT_ENGLISH: 'USER-DATE-FORMAT-ENGLISH',
  USER_DATE_FORMAT_JAPANESE: 'USER-DATE-FORMAT-JAPANESE',
  USER_LOCALE: 'USER-LOCALE',
  USER_NUMBER_FORMAT: 'USER-NUMBER-FORMAT',
  USER_TIME_FORMAT: 'USER-TIME-FORMAT',
  WALLETS: 'WALLETS',
  WALLET_MIGRATION_STATUS: 'WALLET-MIGRATION-STATUS',
  WINDOW_BOUNDS: 'WINDOW-BOUNDS',
};
