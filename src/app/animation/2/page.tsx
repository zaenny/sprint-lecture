import * as motion from "motion/react-client";

export default function Home() {
  return (
    <div>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1 }}
      >
        안녕하세요! 페이드인 효과입니다.
      </motion.div>

      <motion.div
        initial={{ x: -100, opacity: 0 }}
        animate={{ x: 0, opacity: 1 }}
        transition={{ duration: 0.8, ease: "easeInOut" }}
      >
        왼쪽에서 슬라이드 인!
      </motion.div>

      <motion.button
        className="rounded-md border-none bg-blue-500 px-5 py-2.5 text-white"
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
      >
        마우스를 올려보세요!
      </motion.button>
      <button className=""></button>
    </div>
  );
}
