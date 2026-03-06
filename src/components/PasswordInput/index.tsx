// src/components/PassowordInput/index.tsx

"use client";

import { useState } from "react";

export const PasswordInput = () => {
  const [buttonState, setButtonState] = useState(false);
  return (
    <div>
      <input
        type={buttonState ? "text" : "password"}
        placeholder="비밀번호를 입력하세요."
      />
      <button
        onClick={() => {
          setButtonState(!buttonState);
        }}
      >
        {buttonState ? "숨기기" : "보기"}
      </button>
    </div>
  );
};
