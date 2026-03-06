// // app/components/PageTransition/index.tsx
"use client";
import * as motion from "motion/react-client";

export default function PageTransition({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
    >
      {children}
    </motion.div>
  );
}

// app/components/PageTransition/index.tsx

// import * as m from "motion/react-m";

// export default function PageTransition({
//   children,
// }: {
//   children: React.ReactNode;
// }) {
//   return (
//     <m.div
//       initial={{ opacity: 0, y: 20 }}
//       animate={{ opacity: 1, y: 0 }}
//       transition={{ duration: 0.5 }}
//     >
//       {children}
//     </m.div>
//   );
// }
