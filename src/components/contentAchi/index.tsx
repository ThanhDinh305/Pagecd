import React, { useState } from 'react';
import { Tabs, Tab, Box, Typography } from '@mui/material';
import styles from "@/assets/styles/ProfessionalAchievements.module.scss"; // Import module SCSS

interface EducationProps {
  diploma: string;
  institution: string;
  years: string;
}

interface ExperienceProps {
  company: string;
  position: string;
  years: string;
}

const educationData: EducationProps[] = [
  { diploma: 'Diploma in Business Administration', institution: 'National University', years: '2005 - 2008' },
  { diploma: 'Courses of Secretarial Studies', institution: 'General City College', years: '2003 - 2005' },
  { diploma: 'All levels: Math, English, Technology', institution: 'Community College', years: '2000 - 2003' },
];

const experienceData: ExperienceProps[] = [
  { company: 'Business Management Company', position: 'Personal Assistant', years: '2012 - Present' },
  { company: 'Mr. John Smith’s Office', position: 'Personal Assistant', years: '2009 - 2012' },
];

const TabPanel: React.FC<{ value: number; index: number }> = ({ value, index, children }) => {
  return (
    <div className={styles.tabPanel} hidden={value !== index}>
      {value === index && (
        <Box className={styles.tabContent}>
          <Typography>{children}</Typography>
        </Box>
      )}
    </div>
  );
};

const ProfessionalAchievements: React.FC = () => {
  const [tabIndex , setTabIndex] = useState(0);
  
  const handleTabChange = (event: React.SyntheticEvent, newIndex: number) => {
    setTabIndex(newIndex);
  };

  return (
    <div className={styles.professionalAchievements}>
      <Tabs value={tabIndex} onChange={handleTabChange} centered className={styles.tabs}>
        <Tab label="Education" className={styles.tab} />
        <Tab label="Experience" className={styles.tab} />
      </Tabs>

      <TabPanel value={tabIndex} index={0}>
        <h3 className={styles.sectionTitle}>Education</h3>
        <ul className={styles.list}>
          {educationData.map((edu, index) => (
            <li key={index} className={styles.listItem}>
              <h4 className={styles.itemTitle}>{index + 1}. {edu.diploma}</h4>
              <p className={styles.itemInstitution}>{edu.institution}</p>
              <p className={styles.itemYears}>{edu.years}</p>
            </li>
          ))}
        </ul>
      </TabPanel>

      <TabPanel value={tabIndex} index={1}>
        <h3 className={styles.sectionTitle}>Experience</h3>
        <ul className={styles.list}>
          {experienceData.map((exp, index) => (
            <li key={index} className={styles.listItem}>
              <h4 className={styles.itemTitle}>{index + 1}. {exp.company}</h4>
              <p className={styles.itemPosition}>{exp.position}</p>
              <p className={styles.itemYears}>{exp.years}</p>
            </li>
          ))}
        </ul>
      </TabPanel>
    </div>
  );
};

export default ProfessionalAchievements;
