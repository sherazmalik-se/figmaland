import { motion } from 'motion/react';

function HeadingAnimated({ tag, className = '', children }) {
  const Tag = motion[tag] || motion.div;

  return (
    <Tag
      className={className}
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{
        duration: 1.2,
        ease: [0.5, 0, 0, 1],
        delay: 0.08,
      }}
    >
      {children}
    </Tag>
  );
}

export default HeadingAnimated;
