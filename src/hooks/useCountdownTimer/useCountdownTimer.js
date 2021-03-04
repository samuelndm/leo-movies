import { useEffect, useState } from "react";

const DEFAULT_INITIAL = 6;

export const useCountdownTimer = (initial = DEFAULT_INITIAL) => {
  const [countdown, setCountdown] = useState(initial);

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
