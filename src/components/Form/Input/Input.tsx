import React, { useState, useRef, useEffect } from 'react';
import cn from "classnames"

interface OTPInputProps {
  length: number;
  correct: boolean;
  onChange: (otp: string) => void;
}

const OTPInput: React.FC<OTPInputProps> = ({ length, correct, onChange }) => {
  const [otp, setOtp] = useState<string[]>(Array(length).fill(''));
  const inputs = useRef<HTMLInputElement[]>([]);

  const handleChange = (element: HTMLInputElement, index: number) => {
    const value = element.value.toLocaleLowerCase();
    if (/[^a-zA-Z]/.test(value)) return;

    const newOtp = [...otp];
    newOtp[index] = value;
    setOtp(newOtp);
    onChange(newOtp.join(''));

    if (value && index < length - 1) {
      inputs.current[index + 1].focus();
    }
  };

  const handleKeyDown = (event: React.KeyboardEvent, index: number) => {
    if (event.key === 'Backspace' && !otp[index] && index > 0) {
      inputs.current[index - 1].focus();
    }
  };

  useEffect(() => {
    if (correct) {
      inputs.current[0].focus();
      setOtp(Array(length).fill(''));
    }
  }, [correct]);

  useEffect(() => {
    inputs.current[0].focus();
  }, []);

  useEffect(() => {
    if (otp.filter(i => i != "").length == length) {
      setTimeout(() => {
        setOtp(Array(length).fill(''));
        inputs.current[0].focus();
      }, 400);
    }
  }, [otp])

  return (
    <div className={cn(
      "flex items-center gap-4 flex-nowrap",
      !correct && otp.filter(i => i != "").length == length ? 'animate-shake' : '',
      )}>
      {otp.map((_, index) => (
        <input
          key={index}
          type="text"
          className={cn(
            'w-10 h-10 bg-zinc-700 text-xl text-center font-semibold uppercase border rounded !outline-none transition-all',
            !correct && otp.filter(i => i != "").length == length ? 'border-red-500 focus:shadow-red-glow' : 'border-zinc-700 focus:shadow-blue-glow focus:border-blue-500',
          )}
          value={otp[index]}
          onChange={(e) => handleChange(e.target, index)}
          onKeyDown={(e) => handleKeyDown(e, index)}
          ref={(el) => (inputs.current[index] = el!)}
          maxLength={1}
        />
      ))}
    </div>
  );
};

export default OTPInput;
