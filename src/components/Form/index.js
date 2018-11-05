import styled from 'styled-components';

export const LogInBox = styled.div`
  width: 320px;
  height: 420px;
  color: #ffffff;
  background: transparent;
  top: 27%;
  left: 37%;
  position: absolute;
  transform: traslate(-50%, -50%);
  box-sizing: border-box;
  padding: 70px 30px;
`;

export const Label = styled.label`
  margin: 0;
	padding: 0;
	font-weight: bold;
	display: block;
`;

export const Input = styled.input`
  width: 100%;
  margin-bottom: 20px;

  &[type=text], &[type=password] {
    border: none;
    border-bottom: 1px solid #fff;
    background: transparent;
    outline: none;
    height: 40px;
    color: #fff;
    font-size: 16px;
  };

  &[type=submit] {
    border: none;
    outline: none;
    height: 40px;
    background: #b80f22;
    color: #fff;
    font-size: 18px;
    border-radius: 20px;
  };
`;