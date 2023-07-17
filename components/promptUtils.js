export const openPrompt = () => {
    return new Promise((resolve) => {
      // Simula uma chamada assíncrona
      setTimeout(() => {
        const response = window.confirm('Pressione "OK" para Verdadeiro ou "Cancelar" para Falso.');
        resolve(response);
      }, 2000);
    });
  };