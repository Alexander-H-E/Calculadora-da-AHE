const realizarOperacion = (operador: string) => {
    establecerUltimoNumero();
    UltimaOperacion.current = operador as Operadores;
  };
  
  // Export realizarOperacion instead of separate methods
  