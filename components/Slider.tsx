"use client";

import * as RadixSlider from "@radix-ui/react-slider";

interface SliderProps {
  maxValue?: number;
  value?: number;
  step?: number;
  defaultValue?: number;
  onChange?: (value: number) => void;
}

const Slider: React.FC<SliderProps> = ({
  value = 1,
  step = 0.1,
  defaultValue = 1,
  maxValue = 1,
  onChange,
}) => {
  const handleChange = (newValue: number[]) => {
    onChange?.(newValue[0]);
  };
  return (
    <RadixSlider.Root
      className="flex items-center h-10 w-full relative select-none touch-none cursor-pointer"
      onValueChange={handleChange}
      defaultValue={[defaultValue]}
      value={[value]}
      max={maxValue}
      step={step}
      aria-label="Volume"
    >
      <RadixSlider.Track className="bg-neutral-600 relative h-[3px] grow rounded-full">
        <RadixSlider.Range className="absolute bg-white h-full rounded-full" />
      </RadixSlider.Track>
      <RadixSlider.Thumb
        className="bg-white h-2 w-2 rounded-full block hover:scale-125 focus:outline-none"
        aria-label="Volume"
      />
    </RadixSlider.Root>
  );
};

export default Slider;
