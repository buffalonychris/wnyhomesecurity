import { getHomeSecurityFunnelSteps } from '../content/wnyhsNavigation';
import { defaultHomeSecurityFitCheckAnswers, isHomeSecurityFitCheckComplete } from './homeSecurityFunnel';
import type { RetailFlowState } from './retailFlow';

export const getHomeSecurityFunnelProgress = (flowState: RetailFlowState) => {
  const fitCheckComplete = isHomeSecurityFitCheckComplete(
    flowState.homeSecurity?.fitCheckAnswers ?? defaultHomeSecurityFitCheckAnswers,
  );
  const quoteComplete = Boolean(flowState.quote);
  const plannerComplete = Boolean(flowState.homeSecurity?.plannerRecommendation || flowState.homeSecurity?.floorplan);
  const agreementComplete = Boolean(flowState.agreementAcceptance?.accepted);
  const paymentComplete = flowState.payment?.depositStatus === 'completed';
  const scheduleComplete = Boolean(flowState.scheduleRequest);
  const completionMap = [
    fitCheckComplete,
    quoteComplete,
    plannerComplete,
    agreementComplete,
    paymentComplete,
    scheduleComplete,
  ];
  const earliestIncompleteIndex = Math.max(completionMap.findIndex((completed) => !completed), 0);

  return { completionMap, earliestIncompleteIndex };
};

export const getHomeSecurityGateTarget = (
  flowState: RetailFlowState,
  currentStepId: ReturnType<typeof getHomeSecurityFunnelSteps>[number]['id'],
  pathParam?: string | null,
) => {
  const steps = getHomeSecurityFunnelSteps(pathParam);
  const currentIndex = steps.findIndex((step) => step.id === currentStepId);
  const { earliestIncompleteIndex } = getHomeSecurityFunnelProgress(flowState);
  if (currentIndex === -1 || currentIndex <= earliestIncompleteIndex) return null;

  const requiredStep = steps[earliestIncompleteIndex] ?? steps[0];
  return {
    requiredStep,
    message: `To continue, complete ${requiredStep.label} first.`,
  };
};
