import * as amplitude from '@amplitude/analytics-browser';

const AMPLITUDE_API_KEY = '1426d3a0ad525b278a597824506af2c6'; // Replace with your Amplitude API key

export const initializeAmplitude = () => {
    amplitude.init(AMPLITUDE_API_KEY);
};

export const logEvent = (eventName, eventProperties = {}) => {
    amplitude.logEvent(eventName, eventProperties);
};
