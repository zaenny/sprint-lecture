import * as motion from "motion/react-client";

export default function Home() {
  return (
    <div className="flex h-[400dvh] items-center justify-center">
      <motion.div
        className="h-48 w-48 bg-amber-200"
        initial={{
          opacity: 0,
          y: 20,
        }}
        whileInView={{
          opacity: 1,
          y: 0,
        }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true, amount: 1 }}
      ></motion.div>
    </div>
  );
}
