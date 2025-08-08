import React from 'react';


const educationData = [
  {
    title: 'SSLC',
    date: 'Jul 2017 | May 2018',
    school: "ST.MARY'S HSS SAMARIA MANAPARAI",
    score: 'Percentage: 72 / 100'
  },
  {
    title: 'HLC',
    date: 'Jul 2018 | May 2020',
    school: "ST.MARY'S HSS SAMARIA MANAPARAI",
    score: 'Percentage: 52 / 100'
  },
  {
    title: 'BE - COMPUTER SCIENCE',
    date: 'Sep 2020 | May 2024',
    school: 'CHETTINAD COLLEGE OF ENGINEERING AND TECHNOLOGY',
    score: 'GPA: 7.3 / 10'
  }
];

function EducationTimeline() {
  return (
    <section id="education" className="timeline-section">
      <h2 className="section-title">Education</h2>
      <div className="timeline">
        {educationData.map((item, index) => (
          <div
            key={index}
            className={`timeline-item ${index % 2 === 0 ? 'left' : 'right'}`}
          >
            <div className="content">
              <h3>{item.title}</h3>
              <span className="date">{item.date}</span>
              <p className="school">{item.school}</p>
              <p className="score">{item.score}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

export default EducationTimeline;
