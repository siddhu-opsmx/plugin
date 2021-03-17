import { HelpContentsRegistry } from '@spinnaker/core';

/*
  This is a contrived example of how to use an `initialize` function to hook into arbitrary Deck services. 
  This `initialize` function provides the help field text for the `RandomWaitStageConfig` stage form.

  You can hook into any service exported by the `@spinnaker/core` NPM module, e.g.:
   - CloudProviderRegistry
   - DeploymentStrategyRegistry

  When you use a registry, you are diving into Deck's implementation to add functionality. 
  These registries and their methods may change without warning.
*/
export const initialize = () => {
  HelpContentsRegistry.register('armory.randomWaitStage.webhookURL', 'The webhook url');
  HelpContentsRegistry.register('armory.randomWaitStage.method', 'The method which will be used for the webhook');
  HelpContentsRegistry.register('armory.randomWaitStage.failFastHTTPStatuses', 'The maximum time, in seconds, that this stage should wait before continuing.');
  HelpContentsRegistry.register('armory.randomWaitStage.maxWaitTime', 'Comma-separated HTTP status codes (4xx or 5xx) that will cause this webhook stage to fail without retrying.');
  HelpContentsRegistry.register('armory.randomWaitStage.payload', 'JSON payload');
  HelpContentsRegistry.register('armory.randomWaitStage.maxWaitTime', 'f not checked, we consider the stage succeeded if the webhook returns an HTTP status code 2xx, otherwise it will be failed. If checked, it will poll a status url (defined below) to determine the progress of the stage.');
};
