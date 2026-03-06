"use client";

import { animate, useMotionValue, motion } from "motion/react";
import { useEffect } from "react";

export default function Counter() {
  const motionValue = useMotionValue(0);

  useEffect(() => {
    // useMotionValue의 값이 0에서 100으로 변경되는데 2초 동안 지속하는 애니메이션을 만들어줘.
    const control = animate(motionValue, 100, { duration: 2 });
    return () => control.stop();
  }, [motionValue]);

  return (
    <div className="flex h-screen items-center justify-center">
      <motion.pre className="text-4xl">{motionValue}</motion.pre>
    </div>
  );
}
