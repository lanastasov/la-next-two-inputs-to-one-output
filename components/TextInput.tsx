"use client";
import React, { useState } from "react";

export default function Twoinputs({ value, placeholder }) {
  const [firstInputValue, setFirstInputValue] = useState('');
  const [secondInputValue, setSecondInputValue] = useState('');
  const getConcatenatedValue = () => {
    return firstInputValue + secondInputValue;
  };
    return(
      <div>

        <input
            type="text"
            placeholder={placeholder}
            value={firstInputValue}
            onChange={(e) => setFirstInputValue(e.target.value)}
            />
        <input
            type="text"
            placeholder={placeholder}
            value={secondInputValue}
            onChange={(e) => setSecondInputValue(e.target.value)}
            />
        <label>{getConcatenatedValue()}</label>
      </div>
    );
}