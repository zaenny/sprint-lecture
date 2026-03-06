import React from "react";

function Card() {
  return (
    <div className="flex flex-col gap-3">
      <div className="max-w-sm overflow-hidden rounded-2xl border border-gray-300 bg-white shadow-sm">
        <img
          src="https://images.unsplash.com/photo-1602080858428-57174f9431cf?q=80&w=2151&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
          alt=""
        />
        <div className="p-5">
          <h5 className="text-lg font-bold">2024년 기술 동향</h5>
          <p className="mb-3 text-sm text-gray-400">
            최신 기술 동향에 대한 기사를 통해 혁신적인 아이디어와 트렌드를
            탐구해보세요. 이 글에서는 인공지능과 머신러닝의 발전이 우리 생활에
            미치는 영향을 다룹니다.
          </p>
          <button className="rounded-2xl bg-blue-400 px-5 py-2 text-sm text-white">
            더보기
          </button>
        </div>
      </div>
    </div>
  );
}

export default Card;
