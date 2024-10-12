import React from 'react';
import { Button } from 'antd';

interface BotonProps {
  value: string;
  handleClick: (value: string) => void;
}

const Boton: React.FC<BotonProps> = ({ value, handleClick }) => {
  return (
    <Button onClick={() => handleClick(value)} style={{ margin: '5px', width: '60px', height: '60px' }}>
      {value}
    </Button>
  );
};

export default Boton;
