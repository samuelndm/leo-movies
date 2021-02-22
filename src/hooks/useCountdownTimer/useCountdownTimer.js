import { useEffect, useState } from "react";

export const useCountdownTimer = (initial) => {
  const [countdown, setCountdown] = useState(null);

  useEffect(() => {
    setCountdown(initial || 59);
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
