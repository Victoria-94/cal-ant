import React from 'react';
import 'antd/dist/reset.css';


import 'antd/dist/antd.css'; // Importa los estilos de Ant Design
import Calculator from './components/calculator';
function App() {
  return (
    <div className="App">
      <h1>Calculator </h1>
      <Calculator />
    </div>
  );
}

export default App;
