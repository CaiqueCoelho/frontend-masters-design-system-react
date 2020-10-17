import styled from "styled-components";
import { defaultTheme, typeScale } from '../utils';
import { applyStyleModifiers } from "styled-components-modifiers";

const BUTTON_MODIFERS = {
  small: () => `
    font-size: ${typeScale.helperText};
    padding: 8px;
  `,

  large: () => `
    font-size: ${typeScale.h5};
    padding: 16px 24px;
  `,

  warning: ({ props }) => `
    background-color: ${props.status.warningColor};
    color: ${props.textColorInverted};

    &:hover, &:focus {
      background-color: ${props.status.warningColorHover};
      outline: 3px solid ${props.status.warningColorHover};
    }

    &:active {
      background-color: ${props.status.warningColorActive};
    }
  `,

  secondaryButtonWarning: ({ props }) => `
    background: transparent;
    border: 2px solid ${props.status.warningColor};
    color: ${props.status.warningColor};
  `,

  tertiaryButtonWarning: ({ props }) => `
    backgorund: transparent
    color: ${props.status.warningColor};
  `,

  error: ({ props }) => `
    background-color: ${props.status.errorColor};
    color: ${props.textColorInverted};

    &:hover, &:focus {
      background-color: ${props.status.errorColorHover};
    }

    &:active {
      background-color: ${props.status.errorColorActive};
    }
  `,

  success: ({ props }) => `
    background-color: ${props.status.successColor};
    color: ${props.textColorInverted};

    &:hover, &:focus {
      background-color: ${props.status.successColorHover};
      outline: 3px solid ${props.status.successColorHover};
    }

    &:active {
      background-color: ${props.status.warningColorActive};
    }
  `,

  primaryButtonError: ({ props }) => `
    background-color: ${props.status.errorColor};
    color: ${props.textColorInverted};
  `,

  secondaryButtonError: ({ props }) => `
    background: transparent;
    border: 2px solid ${props.status.errorColor};
    color: ${props.errorColor};
  `,

  tertiaryButtonError: ({ props }) => `
    background: transparent;
    color: ${props.errorColor};
  `,

  primaryButtonSuccess: ({ props }) => `
    background-color: ${props.status.successColor};
    color: ${props.textColorInverted};
  `,

  secondaryButtonSuccess: ({ props }) => `
    background: transparent;
    border: 2px solid ${props.status.successColor};
    color: ${props.errorColor};
  `,

  tertiaryButtonSuccess: ({ props }) => `
    background: transparent;
    color: ${defaultTheme.status.successColor};
  `,
}

const Button = styled.button`
  padding: 12px 24px;
  font-size: ${typeScale.paragraph};
  border-radius: 2px;
  min-width: 100px;
  cursor: pointer;
  font-family: "Roboto Mono", monospace;
  transition: background-color 0.2s linear, color 0.2s linear;

  &:hover {
    background-color: ${props => props.theme.primaryHoverColor};
    color: ${props => props.theme.textColorOnPrimary};
  }

  &:focus {
    outline: 3px solid ${props => props.theme.primaryHoverColor};
    outline-offset: 2px;
  }

  &:active {
    background-color: ${props => props.theme.primaryActiveColor};
    border-color: ${props => props.theme.primaryActiveColor}
    color: ${props => props.theme.textColorOnPrimary};
  }
`

const PrimaryButton = styled(Button)`
  background-color: ${props => props.theme.primaryColor};
  border: none;
  color: ${props => props.theme.textColorOnPrimary};

  &:disabled {
    background-color: ${props => props.theme.disabled};
    color: ${props => props.theme.textOnDisabled};
    cursor: not-allowed;
  }

  ${applyStyleModifiers(BUTTON_MODIFERS)};
`;

export const SecondaryButton = styled(Button)`
  background-color: transparent;
  border: 2px solid ${props => props.theme.primaryColor};
  color: ${props => props.theme.primaryColor};

  &:disabled {
    background: transparent;
    color: ${props => props.theme.disabled};
    border-color: ${props => props.theme.disabled};
    cursor: not-allowed;
  }

  ${applyStyleModifiers(BUTTON_MODIFERS)};
`

export const TertiaryButton = styled(Button)`
  background-color: transparent;
  border: none;
  color: ${props => props.theme.primaryColor};

  &:disabled {
    background: transparent;
    color: ${props => props.theme.disabled};
    cursor: not-allowed;
  }

  ${applyStyleModifiers(BUTTON_MODIFERS)};
`;

export default PrimaryButton;