const inputChannelCallback = (event, element) => element.innerText = event.target.value;

const inputRadioStatusCallback = (event, elementId) => {
  const inputRadioStatus = event.target;

  const element = document.querySelector(elementId);
  element.innerText = inputRadioStatus.value;

  if (inputRadioStatus.value === "ON") {
    element.parentElement.classList.remove('status-off');
    element.parentElement.classList.add('status-on');
  } else {
    element.parentElement.classList.remove('status-on');
    element.parentElement.classList.add('status-off');
  }
};

const inputRxLevelCallback = (event, element) => {
  const inputRxLevel = event.target;

  const { value, bar } = element;

  value.innerText = inputRxLevel.value;
  bar.style.height = `${inputRxLevel.value}%`;
  bar.setAttribute('aria-valuenow', inputRxLevel.value);
};

const inputPowerLevelCallback = (event, element) => {
  const inputPowerLevel = event.target;

  const { value, bar } = element;

  value.innerText = inputPowerLevel.value;
  bar.style.height = `${inputPowerLevel.value}%`;
  bar.setAttribute('aria-valuenow', inputPowerLevel.value);
};

const inputPowerSquelchCallback = (event, button) => {
  const inputPowerSquelch = event.target;

  for (const btn of button) {
    btn.innerHTML = inputPowerSquelch.value;

    if (btn.innerHTML === "ON") {
      btn.classList.remove('status-off');
      btn.classList.add('status-on');
    } else {
      btn.classList.remove('status-on');
      btn.classList.add('status-off');
    }
  }
};

export {
  inputChannelCallback,
  inputRadioStatusCallback,
  inputRxLevelCallback,
  inputPowerLevelCallback,
  inputPowerSquelchCallback
};