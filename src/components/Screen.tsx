import React from 'react';
import { Input } from 'antd';

interface PantallaProps {
  input: string;
  result: string;
}

const Pantalla: React.FC<PantallaProps> = ({ input, result }) => {
  return (
    <div className="pantalla">
      <Input value={input || '0'} disabled style={{ fontSize: '1.5em', marginBottom: '10px' }} />
      <Input value={result ? `= ${result}` : ''} disabled style={{ fontSize: '1.2em', color: 'green' }} />
    </div>
  );
};

export default Pantalla;
