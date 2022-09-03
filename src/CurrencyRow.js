import React from "react";
import { nanoid } from "nanoid";

export default function CurrencyRow(props) {
  const {
    currencyOptions,
    selectedCurrency,
    onChangeCurrency,
    onChangeAmount,
    amount,
    name,
  } = props;
  return (
    <div className="my-3 w-50">
      <div className="row align-items-center">
        <div className="col-2 text-end">
          <h4>{name}</h4>
        </div>
        <div className="col-7">
          <input
            type="number"
            /* using `|| ""` NaN error: Received NaN for the `value` attribute. If this is expected, cast the value to a string. */
            value={amount || ""}
            onChange={onChangeAmount}
            className="form-control form-control-lg"
          />
        </div>
        <div className="col-3">
          <select
            value={selectedCurrency}
            onChange={onChangeCurrency}
            className="form-select form-select-lg"
          >
            {currencyOptions.map((option) => (
              <option key={nanoid()} value={option}>
                {option}
              </option>
            ))}
            ;
          </select>
        </div>
      </div>
    </div>
  );
}
