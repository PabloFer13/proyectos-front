import React from 'react';
import styled from 'styled-components';
import { antiBind } from '../../services/utils';

export const ComboboxWrapper = styled.div`
  position: relative;
  width: 100%;
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
  text-transform: capitalize;
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
  name,
}) => (
  <ComboboxWrapper>
    <input
      type="text"
      className="form-control"
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
              onClick={antiBind(
                selectCb,
                name,
                item.id,
                `${item.nombre || ''} ${item.apellidoPaterno ||
                  ''} ${item.apellidoMaterno || ''} ${item.apellidoMaterno ||
                  ''}`
              )}
            >
              {`${item.nombre || ''} ${item.apellidoPaterno ||
                ''} ${item.apellidoMaterno || ''}`}
            </OptionItem>
          ))}
        </OptionsWrapper>
      </ComboboxMenu>
    ) : null}
  </ComboboxWrapper>
);

export const Combobox2 = ({
  showMenu,
  options,
  selectCb,
  inputCb,
  val,
  placeholder,
  name,
}) => (
  <ComboboxWrapper>
    <input
      type="text"
      className="form-control"
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
              onClick={antiBind(selectCb, name, item)}
            >
              {`${item.nombre || ''}`}
            </OptionItem>
          ))}
        </OptionsWrapper>
      </ComboboxMenu>
    ) : null}
  </ComboboxWrapper>
);

export const Combobox3 = ({
  showMenu,
  options,
  selectCb,
  inputCb,
  val,
  placeholder,
  name,
}) => (
  <ComboboxWrapper>
    <input
      type="text"
      className="form-control"
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
              onClick={antiBind(selectCb, name, item)}
            >
              {`${item.display}`}
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
