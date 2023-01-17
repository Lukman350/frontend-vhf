import '../css/input.css';
import EventHandler from './eventHandler.js';
import Timer from './timer.js';
import { inputChannelCallback, inputRadioStatusCallback, inputRxLevelCallback, inputPowerLevelCallback, inputPowerSquelchCallback } from './eventCallback.js';

const localTime = document.querySelector('#local-time');
const gmtTime = document.querySelector('#gmt-time');
const inputChannel1 = document.querySelector('#select-ch-1');
const inputChannel2 = document.querySelector('#select-ch-2');
const inputRadioStatus1 = document.querySelector('#select-radio-status-1');
const inputRadioStatus2 = document.querySelector('#select-radio-status-2');
const inputRxLevel1 = document.querySelector('#rx-range-1');
const inputPowerLevel1 = document.querySelector('#power-range-1');
const inputRxLevel2 = document.querySelector('#rx-range-2');
const inputPowerLevel2 = document.querySelector('#power-range-2');
const inputPowerSquelch1 = document.querySelector('#select-power-squelch-status-1');
const powerSquelchButton1 = document.querySelectorAll('button#power-squelch-1');
const inputPowerSquelch2 = document.querySelector('#select-power-squelch-status-2');
const powerSquelchButton2 = document.querySelectorAll('button#power-squelch-2');

const channelNumberVHF = {
  vhf1: document.querySelector('#channel-number-1'),
  vhf2: document.querySelector('#channel-number-2')
};

const rxLevelElement1 = {
  value: document.querySelector('#rx-level-value-1'),
  bar: document.querySelector('#rx-level-bar-1'),
};

const powerLevelElement1 = {
  value: document.querySelector('#power-level-value-1'),
  bar: document.querySelector('#power-level-bar-1'),
};

const rxLevelElement2 = {
  value: document.querySelector('#rx-level-value-2'),
  bar: document.querySelector('#rx-level-bar-2'),
};

const powerLevelElement2 = {
  value: document.querySelector('#power-level-value-2'),
  bar: document.querySelector('#power-level-bar-2'),
};

const inputChannel1Event = new EventHandler({
  element: inputChannel1,
  event: 'change',
  callback: (event) => inputChannelCallback(event, channelNumberVHF.vhf1)
});

const inputChannel2Event = new EventHandler({
  element: inputChannel2,
  event: 'change',
  callback: (event) => inputChannelCallback(event, channelNumberVHF.vhf2)
});

const inputRadioStatus1Event = new EventHandler({
  element: inputRadioStatus1,
  event: 'change',
  callback: (event) => inputRadioStatusCallback(event, '#radio-status-1')
});

const inputRadioStatus2Event = new EventHandler({
  element: inputRadioStatus2,
  event: 'change',
  callback: (event) => inputRadioStatusCallback(event, '#radio-status-2')
});

const inputRxLevel1Event = new EventHandler({
  element: inputRxLevel1,
  event: 'change',
  callback: (event) => inputRxLevelCallback(event, rxLevelElement1)
});

const inputPowerLevel1Event = new EventHandler({
  element: inputPowerLevel1,
  event: 'change',
  callback: (event) => inputPowerLevelCallback(event, powerLevelElement1)
});

const inputRxLevel2Event = new EventHandler({
  element: inputRxLevel2,
  event: 'change',
  callback: (event) => inputRxLevelCallback(event, rxLevelElement2)
});

const inputPowerLevel2Event = new EventHandler({
  element: inputPowerLevel2,
  event: 'change',
  callback: (event) => inputPowerLevelCallback(event, powerLevelElement2)
});

const inputPowerSquelch1Event = new EventHandler({
  element: inputPowerSquelch1,
  event: 'change',
  callback: (event) => inputPowerSquelchCallback(event, powerSquelchButton1)
});

const inputPowerSquelch2Event = new EventHandler({
  element: inputPowerSquelch2,
  event: 'change',
  callback: (event) => inputPowerSquelchCallback(event, powerSquelchButton2)
});

const localTimer = new Timer({
  type: 'local',
  element: localTime,
});

const gmtTimer = new Timer({
  type: 'gmt',
  element: gmtTime,
});

inputChannel1Event.run();
inputChannel2Event.run();
inputRadioStatus1Event.run();
inputRadioStatus2Event.run();
inputRxLevel1Event.run();
inputPowerLevel1Event.run();
inputRxLevel2Event.run();
inputPowerLevel2Event.run();
inputPowerSquelch1Event.run();
inputPowerSquelch2Event.run();

localTimer.run();
gmtTimer.run();