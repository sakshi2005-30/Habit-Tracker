import { MoveRight,GraduationCap,Laptop,Trees, ArrowRight } from "lucide-react";
import {motion} from "framer-motion"
const Hero = () => {
    const data = [
      {
        id: 1,
        header: "Start Building Better Habits Today",
        content:
          "Take control of your daily routine. Track, analyze, and improve your habits with a system designed to keep you focused.",
      },
      {
        id: 2,
        header: " Track Your Progress Visually",
        content:
          "See your streaks grow and your progress improve.Stay motivated with clean dashboards and insights..",
      },
      {
        id: 3,
        header: "Stay Focused & Disciplined",
        content:
          "liminate distractions and build a routine that works.Your habits define your future — start shaping it today.",
      },
    ];
    const users = [
      {
        id: 4,
        icon: <GraduationCap className="h-8 w-8 font-medium" />,
        header: " Students",
        content: "Stay consistent with studies, workouts, and daily goals.",
      },
      {
        id: 5,
        icon: <Laptop className="h-8 w-8 font-medium" />,
        header: " Developers",
        content: "Track coding streaks, learning goals, and productivity.",
      },
      {
        id: 6,
        icon: <Trees className="h-8 w-8 font-medium" />,
        header: " Self-Improvers",
        content: "Build healthy habits like reading, meditation, and fitness.",
      },
    ];
  return (
    <div className="text-white  mt-24">
      <div className="text-center flex flex-col space-y-14 max-w-2xl mx-auto my-8">
        <motion.p
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4 }}
          viewport={{ once: true }}
          className="text-5xl font-medium "
        >
          <p className="mb-2"> Build Better Habits,</p>
          <span>One Day at a Time</span>{" "}
        </motion.p>
        <motion.p
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className=" text-lg"
        >
          Track your habits, stay consistent, and become the best version of
          yourself — effortlessly.
        </motion.p>
        <motion.button
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9 }}
          viewport={{ once: true }}
          whileHover={{ scale: 1.05 }}
          className="bg-black  px-12 font-medium py-2 mx-auto rounded-3xl flex items-center"
        >
          Start for free
          <MoveRight className="w-5 h-5 ml-2 mt-1" />
        </motion.button>
      </div>
      <hr className="mt-16 w-6xl mx-auto text-white/20"></hr>
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
        className="mt-24 max-w-3xl mx-auto text-center flex flex-col space-y-14"
      >
        <div>
          {" "}
          <p className="text-5xl">Transform Your Life with Small Wins</p>
          <p className="text-5xl text-white/40">
            Consistency beats motivation.
          </p>
        </div>

        <p className="text-lg">
          Your habit tracker helps you stay on track, build routines, and
          achieve your goals — one habit at a time.
        </p>
      </motion.div>
      <div className="max-w-5xl mx-auto mt-16">
        <div className="grid grid-cols-3 gap-8">
          {data.map((item) => (
            <motion.div
              key={item.id}
              whileHover={{ scale: 1.02 }}
              transition={{ duration: 0.3 }}
              className="border border-black px-6 py-4 rounded-xl bg-white text-black"
            >
              <p className="text-lg font-medium mb-4">{item.header}</p>
              <p className="text-gray-700">{item.content}</p>
            </motion.div>
          ))}
        </div>
      </div>
      <hr className="mt-16 w-6xl mx-auto text-white/20"></hr>
      <div className="max-w-4xl mx-auto mt-24 ">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-4xl font-medium text-center"
        >
          <p>Built for Everyone</p>
        </motion.div>

        <div className="grid grid-cols-3 gap-12 mt-14">
          {users.map((item) => (
            <motion.div
              key={item.id}
              whileHover={{ scale: 1.02 }}
              transition={{ duration: 0.3 }}
              className="border px-8 py-4 rounded-xl bg-white text-black border-black flex flex-col space-y-4"
            >
              <p>{item.icon}</p>
              <p className="text-lg font-medium">{item.header}</p>
              <p className="text-gray-700">{item.content}</p>
            </motion.div>
          ))}
        </div>
      </div>
      <hr className="mt-16 w-6xl mx-auto text-white/20"></hr>
      <div className="my-28 text-center flex flex-col space-y-4">
        <motion.p
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-4xl font-medium text-center"
        >
          Your Future Starts Today
        </motion.p>
        <motion.p
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.2 }}
          viewport={{ once: true }}
          className="text-xl font-medium flex justify-center items-center"
        >
          Small habits <ArrowRight />
          <span className="text-yellow-500"> Big results</span>
        </motion.p>
        <motion.p
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-lg"
        >
          Start your journey toward discipline, focus, and success.
        </motion.p>
        <motion.button
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.2 }}
          viewport={{ once: true }}
          whileHover={{ scale: 1.05 }}
          className="bg-black  px-12 font-medium py-2 mx-auto rounded-xl flex items-center"
        >
          Get Started Free
        </motion.button>
      </div>
      <hr className="mt-16 w-6xl mx-auto text-white/20"></hr>
      <div className="text-center mt-8 text-gray-800">© 2026 Streakly</div>
    </div>
  );
}

export default Hero