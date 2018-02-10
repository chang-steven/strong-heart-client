import React from 'react';
import './radio-inputs.css';

class RadioInputs extends React.Component {
    render() {
        const { input, meta, options } = this.props
        const hasError = meta.touched && meta.error;

        return (
            <div className="radio-inputs">
                    {options.map(o => <label key={o.value}><input type="radio" {...input} value={o.value} checked={o.value === input.value} /> {o.title}</label>)}
                    {hasError && <div className="error">{meta.error}</div>}
            </div>
        );
    }
}

export default RadioInputs;
