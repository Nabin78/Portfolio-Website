import React from 'react';
import {
  Database,
  LineChart,
  Sigma,
  FileSpreadsheet,
  Terminal,
  Code,
} from 'lucide-react';

interface Skill {
  name: string;
  icon: React.ReactNode;
  items: string[];
}

const SkillsSection: React.FC = () => {
  const skills: Skill[] = [
    {
      name: 'Databases',
      icon: <Database className="w-6 h-6" />,
      items: ['MySQL', 'PostgreSQL'],
    },
    {
      name: 'Python',
      icon: <Terminal className="w-6 h-6" />,
      items: ['Pandas', 'NumPy', 'Data Cleaning', 'Data Analysis'],
    },
    {
      name: 'Visualization',
      icon: <LineChart className="w-6 h-6" />,
      items: ['Seaborn', 'PowerBI'],
    },
    {
      name: 'Machine Learning',
      icon: <Sigma className="w-6 h-6" />,
      items: [
        'Supervised Learning',
        'Unsupervised Learning',
        'Model Evaluation',
      ],
    },
    {
      name: 'Other',
      icon: <Code className="w-6 h-6" />,
      items: [
        'Excel',
        'Jupyter Notebooks',
        'Problem Solving',
        'Data Pipelines',
      ],
    },
  ];

  return (
    <section id="skills" className="py-2 bg-data-lightgray/30">
      <div className="section-container">
        <h2 className="section-heading">Skills</h2>

        <div className="mt-12 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {skills.map((skill, index) => (
            <div
              key={skill.name}
              className="bg-white p-6 rounded-xl shadow-sm hover:shadow-md transition-shadow duration-300 animate-slide-up"
              style={{ animationDelay: `${0.1 * index}s` }}
            >
              <div className="flex items-center mb-4">
                <div className="p-2 rounded-lg bg-data-blue/30 mr-3">
                  {skill.icon}
                </div>
                <h3 className="text-xl font-semibold">{skill.name}</h3>
              </div>

              <div className="flex flex-wrap gap-2 mt-4">
                {skill.items.map((item) => (
                  <span key={item} className="skill-tag">
                    {item}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SkillsSection;
