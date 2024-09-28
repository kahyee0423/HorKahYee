import React, { useState, useEffect } from 'react';
import './Skills.css';
import SkillsCard from './SkillCard/SkillsCard';
import { SKILLS } from '../../utils/data';
import SkillsInfoCard from './SkillInfoCard/SkillsInfoCard';
import { motion, useAnimation } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

const slideInLeft = {
  hidden: { opacity: 0, x: -100 },
  visible: { opacity: 1, x: 0, transition: { duration: 0.5 } },
};

const slideInRight = {
  hidden: { opacity: 0, x: 100 },
  visible: { opacity: 1, x: 0, transition: { duration: 0.5 } },
};

const Skills = () => {
  const [selectedSkill, setSelectedSkill] = useState(SKILLS[0]);

  // Animation controls for left and right sections
  const controlLeft = useAnimation();
  const controlRight = useAnimation();

  // Intersection observers for detecting when the components are in view
  const [refLeft, inViewLeft] = useInView({ threshold: 0.2 });
  const [refRight, inViewRight] = useInView({ threshold: 0.2 });

  // Trigger animation when elements are in view
  useEffect(() => {
    if (inViewLeft) {
      controlLeft.start('visible');
    }
    if (inViewRight) {
      controlRight.start('visible');
    }
  }, [inViewLeft, inViewRight, controlLeft, controlRight]);

  const handleSelectSkill = (data) => {
    setSelectedSkill(data);
  };

  return (
    <section className="skills-container">
      <h5>Technical Proficiency</h5>

      <div className="skills-content">
        {/* Slide-in left for skills cards */}
        <motion.div
          className="skills"
          ref={refLeft}
          initial="hidden"
          animate={controlLeft}
          variants={slideInLeft}
        >
          {SKILLS.map((item) => (
            <SkillsCard
              key={item.title}
              iconUrl={item.icon}
              title={item.title}
              isActive={selectedSkill.title === item.title}
              onClick={() => {
                handleSelectSkill(item);
              }}
            />
          ))}
        </motion.div>

        {/* Slide-in right for skill info */}
        <motion.div
          className="skills-info"
          ref={refRight}
          initial="hidden"
          animate={controlRight}
          variants={slideInRight}
        >
          <SkillsInfoCard
            heading={selectedSkill.title}
            skills={selectedSkill.skills}
          />
        </motion.div>
      </div>
    </section>
  );
};

export default Skills;