import React from "react";

export default function Form() {
  return (
    <div className="flex h-screen items-center justify-center">
      <form className="flex w-full max-w-sm flex-col gap-4 text-sm">
        <div className="flex flex-col gap-1">
          <label htmlFor="email" className="font-bold">
            이메일
          </label>
          <input
            type="email"
            id="email"
            className="w-full rounded-sm border border-gray-400 bg-gray-50 px-2 py-1"
            placeholder="abc@gmail.com"
            required
          />
        </div>
        <div className="flex flex-col gap-1">
          <label htmlFor="password" className="font-bold">
            비밀번호
          </label>
          <input
            type="password"
            id="password"
            className="w-full rounded-sm border border-gray-400 bg-gray-50 px-2 py-1"
            required
          />
        </div>
        <div className="flex gap-1">
          <div className="">
            <input
              id="remember"
              type="checkbox"
              value=""
              className=""
              required
            />
          </div>
          <label htmlFor="remember" className="">
            로그인 상태 유지
          </label>
        </div>
        <button
          type="submit"
          className="w-full rounded-xl bg-blue-400 py-2 text-white"
        >
          Submit
        </button>
      </form>
    </div>
  );
}
