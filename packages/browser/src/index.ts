export {
  Breadcrumb,
  Request,
  SdkInfo,
  SentryEvent,
  SentryException,
  SentryResponse,
  Severity,
  StackFrame,
  Stacktrace,
  Status,
  Thread,
  User,
} from '@sentry/types';

export {
  addBreadcrumb,
  captureException,
  captureEvent,
  captureMessage,
  configureScope,
  withScope,
  getHubFromCarrier,
  getCurrentHub,
  Hub,
  Scope,
} from '@sentry/core';

export { BrowserBackend, BrowserOptions } from './backend';
export { BrowserClient } from './client';
export { defaultIntegrations, init, lastEventId, showReportDialog } from './sdk';
export { SDK_NAME, SDK_VERSION } from './version';

import * as Integrations from './integrations';
import * as Transports from './transports';

export { Integrations, Transports };