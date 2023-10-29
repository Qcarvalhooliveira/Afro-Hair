import { useState } from 'react'
import { StyledCounter } from './styles'
import { Minus, Plus } from 'phosphor-react'

interface CounterProps {
  initialQuantity: number;
  onQuantityChange: (quantity: number) => void;
}
export function Counter({initialQuantity, onQuantityChange}: CounterProps) {
  const [counterState, setCounterState] = useState(initialQuantity);

  
  const handleIncrement = () => {
    setCounterState((prevState) => prevState + 1)
    onQuantityChange(counterState + 1);
  }

  const handleDecrement = () => {
    if (counterState > 1) {
      setCounterState((prevState) => prevState - 1)
      onQuantityChange(counterState - 1);
    }
  }

  return (
    <StyledCounter>
      <button
        className="minusPlus"
        disabled={counterState === 1}
        onClick={handleDecrement}
      >
        <Minus />
      </button>
      <span>{counterState}</span>
      <button className="minusPlus" onClick={handleIncrement}>
        <Plus />
      </button>
    </StyledCounter>
  )
}
