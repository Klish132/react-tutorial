import React, {SelectHTMLAttributes} from 'react';

type SelectProps = SelectHTMLAttributes<HTMLSelectElement> & {
    initialValue: string
    options: { label: string, value: number }[],
}

export const Select = (props: SelectProps) => {
    return (
        <div>
            <select
                {...props}
            >
                <option value="" disabled selected>{props.initialValue}</option>
                {props.options.map(option =>
                    <option key={option.value} value={option.value}>{option.label}</option>
                )}
            </select>
        </div>
    );
};