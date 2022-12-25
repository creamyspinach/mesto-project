import { popupFormValidationSelectors } from "./constants.js";

const showInputError = (formElement, inputElement, errorMessage, validationConfig) => {
    const errorElement = formElement.querySelector(`.${inputElement.id}-error`);
    inputElement.classList.add(validationConfig.inputErrorClass);
    errorElement.textContent = errorMessage;
  errorElement.classList.add(validationConfig.errorClass);
};

export const hideInputError = (formElement, inputElement, validationConfig) => {
  const errorElement = formElement.querySelector(`.${inputElement.id}-error`);
  inputElement.classList.remove(validationConfig.inputErrorClass);
  errorElement.classList.remove(validationConfig.errorClass);
  errorElement.textContent = '';
};

export const removeFormValidationErrors = (form, validationConfig) => {
  const inputs = Array.from(form.querySelectorAll(validationConfig.inputSelector));
  inputs.forEach((input) => {
    hideInputError(form, input, validationConfig);
  });
}

const checkInputValidity = (formElement, inputElement, validationConfig) => {
  if (inputElement.validity.tooShort) {
    showInputError(formElement, inputElement, inputElement.dataset.errorTooShort, validationConfig);
  }
  if (inputElement.validity.valueMissing) {
    showInputError(formElement, inputElement, inputElement.dataset.errorEmpty, validationConfig);
  }
  else if (inputElement.validity.patternMismatch) {
    showInputError(formElement, inputElement, inputElement.dataset.errorPattern, validationConfig);
  }
  else if (!inputElement.validity.valid) {
    showInputError(formElement, inputElement, inputElement.validationMessage, validationConfig);
  } else {
    hideInputError(formElement, inputElement, validationConfig);
  }
};

export const turnButtonValid = (buttonElement, buttonDisabledClass) => {
  buttonElement.disabled = false;
  buttonElement.classList.remove(buttonDisabledClass);
}

export const turnButtonInvalid = (buttonElement, buttonDisabledClass) => {
  buttonElement.disabled = true;
  buttonElement.classList.add(buttonDisabledClass);
}

const toggleButtonState = (inputList, formElement, validationConfig) => {
  const buttonElement = formElement.querySelector(validationConfig.submitButtonSelector);
  const buttonDisabledClass = validationConfig.inactiveButtonClass;

  if (hasInvalidInput(inputList)) {
    turnButtonInvalid(buttonElement, buttonDisabledClass);
  } else {
    turnButtonValid(buttonElement, buttonDisabledClass);
  }
}

const hasInvalidInput = (inputList) => {
  return inputList.some((inputElement) => {
    return !inputElement.validity.valid;
  });
}

const setEventListeners = (formElement, validationConfig) => {
  const inputList = Array.from(formElement.querySelectorAll(validationConfig.inputSelector));
  toggleButtonState(inputList, formElement, validationConfig);
  inputList.forEach((inputElement) => {
    inputElement.addEventListener('input', function () {
      checkInputValidity(formElement, inputElement, validationConfig);
      toggleButtonState(inputList, formElement, validationConfig);
    });
  });
};

export  const enableValidation = (validationConfig) => {
    const forms = Array.from(document.querySelectorAll(validationConfig.formSelector));
    forms.forEach((formElement) => {
      formElement.addEventListener('submit', (evt) => {
        evt.preventDefault();
      });
      setEventListeners(formElement, validationConfig);
    })
  }
  
enableValidation(popupFormValidationSelectors);