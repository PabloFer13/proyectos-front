import React from 'react';
import styled from 'styled-components';

export const ComboboxWrapper = styled.div`
  position: relative;
  width: 350px;
  z-index: 100;
`;

export const ComboboxInput = styled.input`
  display: block;
`;

export const ComboboxMenu = styled.div`
  position: absolute;
  top: 35px;
  width: 100%;
  height: 200px;
  overflow-y: auto;
  background-color: #ffffff;
`;

export const OptionsWrapper = styled.ul`
  margin-top: 10px;
`;

export const OptionItem = styled.li`
  :hover {
    background-color: #18428a;
    color: #ffffff;
  }
`;

export const Combobox = ({
  showMenu,
  options,
  selectCb,
  inputCb,
  val,
  placeholder,
}) => (
  <ComboboxWrapper>
    <input
      type="text"
      placeholder={placeholder}
      value={val}
      onChange={inputCb}
    />
    {showMenu ? (
      <ComboboxMenu>
        <OptionsWrapper>
          {options.map(item => (
            <OptionItem
              key={`hotel-${item.id}`}
              onClick={selectCb.bind(this, item)}
            >
              {item.name}
            </OptionItem>
          ))}
        </OptionsWrapper>
      </ComboboxMenu>
    ) : null}
  </ComboboxWrapper>
);

export const FormWrapper = styled.form`
  padding: 30px 15px 30px 30px !important;
`;
