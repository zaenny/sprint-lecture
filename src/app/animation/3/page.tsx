import * as motion from "motion/react-client";

export default function Home() {
  return (
    <div className="flex items-center justify-center gap-5">
      <div className="flex h-screen items-center justify-center gap-2">
        <div className="animate-show-up h-96 w-72 rounded-lg border shadow-md"></div>
      </div>
      <div className="flex h-screen items-center justify-center gap-2">
        <motion.div
          className="h-96 w-72 rounded-lg border shadow-md"
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.8, ease: "easeInOut" }}
        ></motion.div>
      </div>
    </div>
  );
}
