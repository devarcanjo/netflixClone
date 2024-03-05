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
  icon: React.ReactElement;
  customClassName?: string;
}

const Button = ({
  label,
  onClick,
  buttonType,
  icon,
  customClassName,
}: IButton) => {
  const getIconClassName = (): "" | " with-icon" => {
    return icon ? " with-icon" : "";
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
      {icon && icon}
      {label && <span>{label}</span>}
    </button>
  );
};

export default Button;
