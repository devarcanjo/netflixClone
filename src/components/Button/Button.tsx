/* eslint-disable react-refresh/only-export-components */
import "./button.scss";

export enum ButtonType {
  Primary,
  Secondary,
  IconRound,
  IconRoundSecondary,
  Alternate,
}

interface IButton {
  buttonType: ButtonType;
  label?: string;
  onClick?: () => void;
  children: React.ReactNode;
  customClassName?: string;
}

const Button = ({
  label,
  onClick,
  buttonType,
  children,
  customClassName,
}: IButton) => {
  const getIconClassName = (): "" | " with-icon" => {
    return children ? " with-icon" : "";
  };

  const getLabelClassName = (): "" | " with-label" => {
    return label ? " with-label" : "";
  };

  const getPrimaryClassName = (): string => {
    return ButtonType[buttonType ? buttonType : ButtonType.Primary];
  };

  const getCustomClassName = (): string => {
    return customClassName ? ` ${customClassName}` : "";
  };

  return (
    <button
      className={`n-button${getIconClassName()}${getLabelClassName()}${getCustomClassName()} ${getPrimaryClassName()}`}
      onClick={onClick}
    >
      {children}
      {label && <span>{label}</span>}
    </button>
  );
};

export default Button;
