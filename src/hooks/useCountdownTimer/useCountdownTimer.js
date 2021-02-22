import { useEffect, useState } from "react";

const DEFAULT_INITIAL = 6;

export const useCountdownTimer = (initial) => {
  const [countdown, setCountdown] = useState(null);

  useEffect(() => {
    setCountdown(initial || DEFAULT_INITIAL);
  }, [initial]);

  useEffect(() => {
    if (countdown && countdown >= 0) {
      const counter = setInterval(() => {
        setCountdown((count) => count - 1);
      }, 1000);

      return () => clearInterval(counter);
    }
  }, [countdown]);

  return { countdown };
};
