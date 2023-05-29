import { SelectedPage, ClassType } from "@/shared/types";
import image1 from "@/assets/image1.png";
import image2 from "@/assets/image2.png";
import image3 from "@/assets/image3.png";
import image4 from "@/assets/image4.png";
import image5 from "@/assets/image5.png";
import image6 from "@/assets/image6.png";
import { motion } from "framer-motion";
import Htext from "@/shared/Htext";
import Class from "./Class";

const classes: Array<ClassType> = [
  {
    name: "Weight Training Classes",
    desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Cum reprehenderit officiis quo rerum numquam debitis dolores recusandae!",
    image: image1,
  },
  {
    name: "Yoga Classes",
    image: image2,
  },
  {
    name: "Ab Core Classes",
    desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Cum reprehenderit officiis quo rerum numquam debitis dolores recusandae!",
    image: image3,
  },
  {
    name: "Adventure Classes",
    desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Cum reprehenderit officiis quo rerum numquam debitis dolores recusandae!",
    image: image4,
  },
  {
    name: "Fitness Classes",
    desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Cum reprehenderit officiis quo rerum numquam debitis dolores recusandae!",
    image: image5,
  },
  {
    name: " Training Classes",
    desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Cum reprehenderit officiis quo rerum numquam debitis dolores recusandae!",
    image: image6,
  },
];

type Props = {
  setSelectedPage: (value: SelectedPage) => void;
};

const OurClasses = ({ setSelectedPage }: Props) => {
  return (
    <section id="ourclasses" className="w-full bg-primary-100 py-40">
      <motion.div
        onViewportEnter={() => setSelectedPage(SelectedPage.OurClasses)}
      >
        <motion.div
          className="mx-auto w-5/6"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.5 }}
          transition={{ delay: 0.4, duration: 0.5 }}
          variants={{
            hidden: { opacity: 0, x: -50 },
            visible: { opacity: 1, x: 0 },
          }}
        >
          <div className="md:w-3/5">
            <Htext>OUR CLASSES</Htext>
            <p className="py-5">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Et
              quibusdam doloremque quasi ipsam libero maiores asperiores
              doloribus dolores sint, cupiditate explicabo ex.
            </p>
          </div>
        </motion.div>

        <div className="mt-10 h-[353px] w-full overflow-x-auto overflow-y-hidden">
          <ul className="w-[2800px] whitespace-nowrap">
            {classes.map((item: ClassType, index) => (
              <Class
                key={`${item.name} - ${index}`}
                desc={item.desc}
                name={item.name}
                image={item.image}
              />
            ))}
          </ul>
        </div>
      </motion.div>
    </section>
  );
};

export default OurClasses;
