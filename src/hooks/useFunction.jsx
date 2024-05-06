import { useState } from "react";

const useFunction = () => {
    const [numero, setNumero] = useState(0);
  const retornoFuncion = () => setNumero(numero + 1);
  const retornoFuncion2 = () => 2;

  return {numero, retornoFuncion, retornoFuncion2};
}

export default useFunction