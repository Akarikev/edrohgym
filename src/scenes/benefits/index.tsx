import { BenefitType, SelectedPage } from "@/shared/types";

import {
  AcademicCapIcon,
  HomeModernIcon,
  UserGroupIcon,
} from "@heroicons/react/24/solid";
import { motion } from "framer-motion";
import Htext from "@/shared/Htext";
import Benefit from "./Benefit";

type Props = {
  setSelectedPage: (value: SelectedPage) => void;
};

const benefits: Array<BenefitType> = [
  {
    icon: <HomeModernIcon className="h-6 w-6" />,
    title: "State of the Art Facilities",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Impedit, placeat nihil nobis sed voluptates necessitatibus distinctio assumenda illo velit, hic cumque quod labore.",
  },
  {
    icon: <UserGroupIcon className="h-6 w-6" />,
    title: "100's of Diverse Classes",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Impedit, placeat nihil nobis sed voluptates necessitatibus distinctio assumenda illo velit, hic cumque quod labore.",
  },
  {
    icon: <AcademicCapIcon className="h-6 w-6" />,
    title: "Expert and Pro Trainers ",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Impedit, placeat nihil nobis sed voluptates necessitatibus distinctio assumenda illo velit, hic cumque quod labore.",
  },
];

const container = {
  hidden: {},
  visible: {
    transition: { staggerChildren: 0.2 },
  },
};

const Benefits = ({ setSelectedPage }: Props) => {
  return (
    <section id="benefits" className="mx-auto min-h-full w-5/6 py-20">
      <motion.div
        onViewportEnter={() => setSelectedPage(SelectedPage.Benefits)}
      >
        {/* Header */}
        <div className="md:my-5 md:w-3/5">
          <Htext>MORE THAN JUST A GYM!</Htext>
          <p className="my-5 text-sm">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Unde,
            voluptates porro excepturi architecto ipsum fuga neque, inventore
            maxime sapient
          </p>
        </div>

        {/* Benefits */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.5 }}
          variants={container}
          className="mt-5 items-center justify-between gap-8 md:flex"
        >
          {benefits.map((benefits: BenefitType) => (
            <Benefit
              key={benefits.title}
              icon={benefits.icon}
              title={benefits.title}
              description={benefits.description}
              setSelectedPage={setSelectedPage}
            />
          ))}
        </motion.div>
      </motion.div>
    </section>
  );
};

export default Benefits;
