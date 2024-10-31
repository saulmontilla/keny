import React, { useCallback } from 'react';
import { CurrencyInputProps } from 'ubiionline/form';

const VALID_FIRST = /^[1-9]{1}$/;
const VALID_NEXT = /^[0-9]{1}$/;
const DELETE_KEY_CODE = 8;

/**
 * Componente de montos de moneda del Botón de Pagos
 * El valor final debe ser divido entre 100, y para establecerlo 
 * multiplicado por 100
 */
const CurrencyInput = (props: CurrencyInputProps) => {
  const {
    max = Number.MAX_SAFE_INTEGER,
    onValueChange,
    value,
    name,
    id,
    disabled,
    className,
    ...rest
  } = props

  const valueAbsTrunc = Math.trunc(Math.abs(value));
  if (value !== valueAbsTrunc || !Number.isFinite(value) || Number.isNaN(value)) {
    throw new Error(`invalid value property`);
  }
  const handleKeyDown = useCallback(
    (e: any) => {
      if (onValueChange === undefined) return;
      const { key, keyCode } = e;
      if (
        (value === 0 && !VALID_FIRST.test(key)) ||
        (value !== 0 && !VALID_NEXT.test(key) && keyCode !== DELETE_KEY_CODE)
      ) {
        return;
      }
      const valueString = value.toString();
      let nextValue;
      if (keyCode !== DELETE_KEY_CODE) {
        const nextValueString = value === 0 ? key : `${valueString}${key}`;
        nextValue = Number.parseInt(nextValueString, 10);
      } else {
        const nextValueString = valueString.slice(0, -1);
        nextValue = nextValueString === '' ? 0 : Number.parseInt(nextValueString, 10);
      }
      if (nextValue > max) {
        return;
      }
      onValueChange(nextValue);
    },
    [max, onValueChange, value]
  );

  const handleChange = useCallback(() => {
    // DUMMY TO AVOID REACT WARNING
  }, []);

  const valueDisplay = (value / 100).toLocaleString('de-DE', { minimumFractionDigits: 2 });

  return (
    <input
      data-testid="do-add-amount"
      name={name}
      id={id}
      disabled={disabled}
      inputMode="numeric"
      onChange={handleChange}
      onKeyDown={handleKeyDown}
      value={valueDisplay}
      className={className}
      type='text'
      {...rest}
    />
  );
};

export default CurrencyInput;