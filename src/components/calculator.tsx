import React, { useState } from 'react';
import { Row, Col } from 'antd';
import Screen from './Screen';
import Button from './Button';
import '../Calculator.css'; // Importa el CSS de estilos

const Calculator: React.FC = () => {
  const [input, setInput] = useState<string>(''); // Para manejar la expresión
  const [result, setResult] = useState<string>(''); // Para manejar el resultado

  const handleClick = (value: string) => {
    if (value === '=') {
      try {
        setResult(eval(input).toString()); // Evalúa la expresión (eval no es seguro en producción)
      } catch {
        setResult('Error');
      }
    } else if (value === 'C') {
      setInput(''); // Limpia la entrada
      setResult('');
    } else {
      setInput(input + value); // Añade el valor a la expresión
    }
  };

  return (
    <div className="calculator">
      <Screen input={input} result={result} />
      <Row gutter={[10, 10]}>
        {['1', '2', '3', '+'].map((val) => (
          <Col key={val} span={6}>
            <Button value={val} handleClick={handleClick} />
          </Col>
        ))}
      </Row>
      <Row gutter={[10, 10]}>
        {['4', '5', '6', '-'].map((val) => (
          <Col key={val} span={6}>
            <Button value={val} handleClick={handleClick} />
          </Col>
        ))}
      </Row>
      <Row gutter={[10, 10]}>
        {['7', '8', '9', '*'].map((val) => (
          <Col key={val} span={6}>
            <Button value={val} handleClick={handleClick} />
          </Col>
        ))}
      </Row>
      <Row gutter={[10, 10]}>
        {['0', 'C', '=', '/'].map((val) => (
          <Col key={val} span={6}>
            <Button value={val} handleClick={handleClick} />
          </Col>
        ))}
      </Row>
    </div>
  );
};

export default Calculator;
