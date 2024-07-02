import * as amplitude from '@amplitude/analytics-browser';

const AMPLITUDE_API_KEY = process.env.REACT_APP_AMPLITUDE_API_KEY;

export const initializeAmplitude = () => {
    amplitude.init(AMPLITUDE_API_KEY);
};

export const logEvent = (eventName, eventProperties = {}) => {
    amplitude.logEvent(eventName, eventProperties);
};
