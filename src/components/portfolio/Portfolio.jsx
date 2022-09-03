import React from 'react';

import './portfolio.css';

const Portfolio = () => {
  const soloProjects = [
    {
      id: 1,
      title: 'Resume Data Extraction',
      description:
        ' Performed Resume Datamining to match recruiters with the potential candidates using Named Entity Recognition (NER) from over 90,000 annotated sentences of a private dataset.Obtained an accuracy of 0.82 and 0.87 f-score(macro).',
      technologies: 'SQLite|Flask|Angular|Python|NLTK',
    },
    {
      id: 2,
      title: 'Covid-19 Web Application',
      description:
        'Created a real-time web application and an app to provide information about the availability of beds and vaccines to users based on their location, during the severe second wave of Covid-19.The project was submitted to Vice Principal of Jntuh.',
      technologies: 'React| Firebase',
    },
    {
      id: 3,
      title: 'Hate Speech Detection from Twitter Data',
      description: ' Developed a machine learning model to identify hate speech on a dataset of over 35,000 tweets collected from twitter.Obtained highest accuracy of 91.3% using XGBoost',
      technologies: 'Numpy|Pandas|Tensorflow|Scikit',
    }
  ];

  return (
    <section id="portfolio">
      <h5>My Recent Work</h5>
      <h2>Portfolio</h2>

      <div className="container portfolio__container">
        {soloProjects.map((pro) => (
          <article className="portfolio__item" key={pro.id}>
            <div className="portfolio__item-content">
              <h3>{pro.title}</h3>
              <p>{pro.description}</p>
              <br/>
              <p>{pro.technologies}</p>
            </div>
           
          </article>
        ))}
      </div>
    </section>
  );
};

export default Portfolio;
