import css from "./Hero.module.scss";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
// Import Swiper styles
import "swiper/css";
import "swiper/css/effect-cards";
// import required modules
import { EffectCards } from "swiper";
import { Olas, WaterWave } from "@components/Home";
import { staggerContainer, slideIn, fadeIn } from "@utils/motion";
import { motion } from "framer-motion";

const images = [
  "/assets/hero/h1.jpg",
  "/assets/hero/h2.jpg",
  "/assets/hero/h3.jpg",
  "/assets/hero/h4.jpg",
];

const scrollToSection = (sectionId) => {
  const element = document.getElementById(sectionId);
  if (element) {
    const offset = 90;
    const bodyRect = document.body.getBoundingClientRect().top;
    const elementRect = element.getBoundingClientRect().top;
    const elementPosition = elementRect - bodyRect;
    const offsetPosition = elementPosition - offset;

    window.scrollTo({
      top: offsetPosition,
      behavior: "smooth",
    });
  }
};

export const Hero = () => {
  return (
    <section className={`paddings ${css.wrapper}`} id="Hero">
      <motion.div
        variants={staggerContainer}
        initial="hidden"
        whileInView="show"
        viewport={{ once: false, amount: 0.25 }}
        className={`innerWidth ${css.container}`}
      >
        <motion.div
          variants={fadeIn("right", "tween", 0.2, 1)}
          className={css.left}
        >
          <h1 className={css.title}>
            Let us build your dream pool with precision and expertise.
          </h1>
          <h3 className={css.description}>
            We are your go-to experts in building steel frames and excavating
            for swimming pools.
          </h3>
          <div className={css.containerBtn}>
            <button
              className={css.btn}
              onClick={() => scrollToSection("contact")}
            >
              Get a quote
            </button>
          </div>
        </motion.div>
        <motion.div
          variants={fadeIn("left", "tween", 0.2, 1)}
          className={css.right}
        >
          <Swiper
            effect={"cards"}
            grabCursor={true}
            modules={[EffectCards]}
            className={css.swiper}
          >
            {images.map((image, i) => (
              <SwiperSlide className={css.slide} key={i}>
                <img src={image} alt={i} />
              </SwiperSlide>
            ))}
          </Swiper>
        </motion.div>
      </motion.div>
      {/* <Olas /> */}
      <WaterWave />
    </section>
  );
};
