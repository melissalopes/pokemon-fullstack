"use client";

import { useFilter } from "@/hooks/useFilter";
import { JsonTd, JsonText, NoContentTd, NoContentTr, TableContainer } from "./styles";

export function Table() {
  const { pokemon } = useFilter();

  return (
    <div>
      <TableContainer>
        <thead>
          <tr>
            <th>JSON de Habilidades</th>
          </tr>
        </thead>
        <tbody>
          {Array.isArray(pokemon?.abilities) &&
          pokemon?.abilities.length > 0 ? (
            pokemon?.abilities.map((item, index) => (
              <tr key={index}>
                <JsonTd>
                  <JsonText>{JSON.stringify(item, null, 2)}</JsonText>
                </JsonTd>
              </tr>
            ))
          ) : (
            <NoContentTr>
              <NoContentTd colSpan={1}>Não há nada aqui!</NoContentTd>
            </NoContentTr>
          )}
        </tbody>
      </TableContainer>
    </div>
  );
}
