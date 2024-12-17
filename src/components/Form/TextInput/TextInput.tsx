import React from "react";
import "./TextInput.scss";

type TextInputProps = {
    id: string;
    type: string;
    className?: string;
    status?: string;
    label?: string;
    placeholder?: string;
    icon?: string;
    errorIcon?: string;
    errorText?: string;
    isRequired: boolean;
    value: string | number;
    onChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
}

export default function TextInput({
                                      id,
                                      type,
                                      className,
                                      status,
                                      label,
                                      placeholder,
                                      icon,
                                      errorIcon,
                                      errorText,
                                      isRequired,
                                      value,
                                      onChange
                                  }: TextInputProps) {
    return (
        <div className="text-input">
            {label ? (
                <div className="text-input__labels">
                    <label className="text-input__label" htmlFor={id}>{label}</label>
                </div>
            ) : (
                <label className="sr-only" htmlFor={id}>{label}</label>
            )}

            {status === "error" ? <p className="text-input__status">{errorText}</p> : null}
            {icon ? <img className="text-input__icon" src={icon} alt="" role="presentation"/> : null}

            <input
                className={"text-input__field " + (status === "" ? "" : "text-input__field--" + status) + ` ${className}`}
                id={id}
                type={type}
                placeholder={placeholder}
                aria-required={isRequired}
                required={isRequired}
                value={value}
                onChange={onChange}
            />

            {errorIcon ? <img className="text-input__error-icon" src={errorIcon} alt="" role="presentation"/> : null}
        </div>
    );
}