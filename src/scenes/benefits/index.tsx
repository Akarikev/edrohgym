import { BenefitType, SelectedPage } from "@/shared/types";

import {
  AcademicCapIcon,
  HomeModernIcon,
  UserGroupIcon,
} from "@heroicons/react/24/solid";
import { motion } from "framer-motion";
import Htext from "@/shared/Htext";
import Benefit from "./Benefit";
import ActionButton from "@/shared/ActionButton";
import BenefitPageGraphic from "@/assets/BenefitsPageGraphic.png";

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

        {/*GRAPHICS AND DESC  */}
        <div className="mt-16 items-center justify-between gap-20 md:mt-28 md:flex ">
          {/* Graphic */}

          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.5 }}
            transition={{ delay: 0.4, duration: 0.5 }}
            variants={{
              hidden: { opacity: 0, x: 50 },
              visible: { opacity: 1, x: 0 },
            }}
          >
            <img
              className="mx-auto"
              src={BenefitPageGraphic}
              alt="img graphic"
            />
          </motion.div>
          {/* descp */}
          <div>
            {/* title */}

            <div className="relative">
              <div className="before:absolute before:-left-20 before:-top-20  before:z-[1] before:content-abstractwaves">
                <motion.div
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true, amount: 0.5 }}
                  transition={{ delay: 0.4, duration: 0.5 }}
                  variants={{
                    hidden: { opacity: 0, x: 50 },
                    visible: { opacity: 1, x: 0 },
                  }}
                >
                  <Htext>
                    MILLIONS OF HAPPY MEMBERS GETTING {""}{" "}
                    <span className="text-primary-500">FIT</span>
                  </Htext>
                </motion.div>
              </div>
            </div>

            {/* desctipt */}

            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.5 }}
              transition={{ delay: 0.2, duration: 0.5 }}
              variants={{
                hidden: { opacity: 0, x: -50 },
                visible: { opacity: 1, x: 0 },
              }}
            >
              <p className="my-5">
                Lorem, ipsum dolor sit amet consectetur adipisicing elit. Iure,
                labore? Praesentium dicta exercitationem beatae tempora enim
                placeat distinctio, doloremque quasi error perspiciatis iure
                necessitatibus, voluptatibus commodi laboriosam eligendi, ipsum
                repudiandae. Distinctio cumque iste nisi omnis a ducimus quis,
                commodi quasi!
              </p>
              <p className="mb-5">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Fuga
                accusantium dignissimos impedit voluptatibus magnam totam
                pariatur earum excepturi, animi consequuntur culpa optio sit
                esse obcaecati enim doloremque, necessitatibus molestiae?
              </p>
            </motion.div>
            {/* button */}
            <div className="relative mt-16">
              <div className="before:absolute before:-bottom-20 before:right-40 before:z-[1] before:content-sparkles">
                <ActionButton setSelectedPage={setSelectedPage}>
                  Join Now
                </ActionButton>
              </div>
            </div>
          </div>
        </div>
      </motion.div>
    </section>
  );
};

export default Benefits;
