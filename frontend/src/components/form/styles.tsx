import styled from "styled-components";

export const PrimaryInput = styled.input`
  width: 200px; /* Largura do input */
  border-radius: 8px;
  border: none;
  padding: 10px 16px;
  background-color: var(--bg-secondary);
  font-family: inherit;
  font-weight: 400;
  font-size: 14px;
  line-height: 22px;
  color: var(--text-dark);

  ::placeholder {
    /* Estilo do placeholder */
    color: var(--placeholder-color);
  }
`;

export const Button = styled.button`
  border: 1px solid var(--input-bg-color);
  border-radius: 8px;
  background-color: var(--bg-secondary);
  color: var(--text-dark);
  padding: 10px 16px;
  font-family: inherit;
  font-weight: 400;
  font-size: 14px;
  line-height: 22px;
  cursor: pointer;
`;

export const FormContainer = styled.form`
  display: flex;
  align-items: center;
  gap: 12px;
`;
