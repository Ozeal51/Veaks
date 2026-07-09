import React from 'react';
import styles from './Process.module.css';
import {
  FaSearch,
  FaProjectDiagram,
  FaPalette,
  FaCodeBranch,
  FaVial,
  FaRocket,
  FaHeadset,
} from 'react-icons/fa';

const Process = () => {
  const steps = [
    { icon: FaSearch, title: 'Discovery' },
    { icon: FaProjectDiagram, title: 'Planning' },
    { icon: FaPalette, title: 'Design' },
    { icon: FaCodeBranch, title: 'Development' },
    { icon: FaVial, title: 'Testing' },
    { icon: FaRocket, title: 'Deployment' },
    { icon: FaHeadset, title: 'Support' },
  ];

  return (
    <section className={styles.section}>
      <div className={styles.container}>
        <div className={styles.header} data-aos="fade-up">
          <div className={styles.badge}>Our Process</div>
          <h2 className={styles.headline}>How We Work</h2>
        </div>

        <div className={styles.timeline}>
          {steps.map((step, index) => (
            <React.Fragment key={step.title}>
              <div
                className={styles.step}
                data-aos="fade-up"
                data-aos-delay={index * 100}
              >
                <div className={styles.iconWrapper}>
                  <step.icon className={styles.icon} />
                </div>
                <div className={styles.title}>{step.title}</div>
              </div>
              {index < steps.length - 1 && (
                <div className={styles.connector}></div>
              )}
            </React.Fragment>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Process;
