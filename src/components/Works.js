import React from 'react';
import './Works.css';

function Works() {
  const workItems = [
    {
      icon: '💬',
      title: 'Psicoterapia',
      description: 'Psicoterapeuta y Coach de personas adultas y/o adolescentes, parejas y familias.',
    },
    {
      icon: '☁️',
      title: 'Terapia EMDR',
      description: 'Terapia para liberar traumas. Disminuye o elimina malestares emocionales con EMDR.',
    },
    {
      icon: '🌼',
      title: 'Acompañamiento emocional',
      description: 'Apoyo emocional en procesos de duelo, rupturas o transiciones familiares importantes.',
    },
    {
      icon: '🔗',
      title: 'Terapia clínica y humanista',
      description: 'Analiza el papel de los síntomas en nuestra salud mental, emocional y física.',
    },
  ];

  return (
    <section className="mywork-section" id="mywork">
      <h2>Cómo trabajo</h2>
      <div className="mywork-grid">
        {workItems.map((item, index) => (
          <div key={index} className="mywork-card">
            <span className="icon">{item.icon}</span>
            <div className="text">
              <h3>{item.title}</h3>
              <p>{item.description}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Works;
