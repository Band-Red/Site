import { useState, useEffect, useRef } from 'react';
import './BiofuelRoadmap.css';

const BiofuelRoadmap = () => {
  const [currentPhase, setCurrentPhase] = useState(1);
  const [isAnimating, setIsAnimating] = useState(false);
  const roadmapRef = useRef(null);
  const totalPhases = 6;

  const roadmapPhases = [
    {
      id: 1,
      title: "البحث والتطوير",
      year: "2024",
      description: "أبحاث متقدمة في تحسين كفاءة الوقود الحيوي",
      icon: "🔬",
      color: "#4CAF50"
    },
    {
      id: 2,
      title: "الإنتاج التجريبي",
      year: "2025",
      description: "تشغيل وحدات إنتاج تجريبية بمقياس صناعي",
      icon: "⚗️",
      color: "#8BC34A"
    },
    {
      id: 3,
      title: "التوسع الصناعي",
      year: "2026",
      description: "بناء مصانع إنتاج متوسطة الحجم",
      icon: "🏭",
      color: "#CDDC39"
    },
    {
      id: 4,
      title: "التسويق العالمي",
      year: "2027",
      description: "توسع في الأسواق الدولية والشراكات",
      icon: "🌍",
      color: "#FFC107"
    },
    {
      id: 5,
      title: "الابتكار المستدام",
      year: "2028",
      description: "تطوير جيل جديد من الوقود الحيوي المتقدم",
      icon: "💡",
      color: "#FF9800"
    },
    {
      id: 6,
      title: "القيادة العالمية",
      year: "2029",
      description: "الوصول إلى الريادة في صناعة الوقود الحيوي",
      icon: "🚀",
      color: "#FF5722"
    }
  ];

  useEffect(() => {
    // تأثيرات عند تغيير المرحلة
    setIsAnimating(true);
    const timer = setTimeout(() => setIsAnimating(false), 1000);
    return () => clearTimeout(timer);
  }, [currentPhase]);

  const nextPhase = () => {
    if (currentPhase < totalPhases) {
      setCurrentPhase(currentPhase + 1);
    }
  };

  const prevPhase = () => {
    if (currentPhase > 1) {
      setCurrentPhase(currentPhase - 1);
    }
  };

  const progress = Math.round((currentPhase / totalPhases) * 100);

  return (
    <div className="biofuel-roadmap" ref={roadmapRef}>
      {/* خلفية التأثيرات */}
      <div className="background-effects">
        <div className="bubble bubble-1"></div>
        <div className="bubble bubble-2"></div>
        <div className="bubble bubble-3"></div>
        <div className="energy-wave"></div>
      </div>

      {/* رأس الخارطة */}
      <div className="roadmap-header">
        <h1>خارطة طريق الوقود الحيوي</h1>
        <p>رحلة التحول نحو الطاقة المستدامة</p>
        <div className="progress-section">
          <div className="progress-info">
            <span className="progress-label">التقدم العام</span>
            <span className="progress-value">{progress}%</span>
          </div>
          <div className="progress-bar">
            <div 
              className="progress-fill" 
              style={{ width: `${progress}%` }}
            ></div>
          </div>
        </div>
      </div>

      {/* الخط الزمني */}
      <div className="timeline-container">
        <div className="timeline-track">
          <div 
            className="timeline-progress" 
            style={{ height: `${progress}%` }}
          ></div>
          
          {roadmapPhases.map((phase, index) => (
            <div
              key={phase.id}
              className={`timeline-phase ${currentPhase === phase.id ? 'active' : ''} ${
                currentPhase > phase.id ? 'completed' : ''
              }`}
              style={{ '--phase-color': phase.color }}
              onClick={() => setCurrentPhase(phase.id)}
            >
              <div className="phase-marker">
                <div className="phase-icon">{phase.icon}</div>
                <div className="phase-ring"></div>
                <div className="energy-pulse"></div>
              </div>
              
              <div className="phase-content">
                <div className="phase-year">{phase.year}</div>
                <h3 className="phase-title">{phase.title}</h3>
                <p className="phase-description">{phase.description}</p>
                
                {currentPhase === phase.id && (
                  <div className="active-indicator">
                    <div className="biofuel-glow"></div>
                  </div>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* تفاصيل المرحلة النشطة */}
      <div className={`phase-details ${isAnimating ? 'animating' : ''}`}>
        <div className="details-header">
          <h2>{roadmapPhases[currentPhase - 1]?.title}</h2>
          <span className="details-year">{roadmapPhases[currentPhase - 1]?.year}</span>
        </div>
        
        <div className="details-content">
          <p>{roadmapPhases[currentPhase - 1]?.description}</p>
          
          <div className="phase-stats">
            <div className="stat">
              <span className="stat-value">{currentPhase}/{totalPhases}</span>
              <span className="stat-label">المرحلة</span>
            </div>
            <div className="stat">
              <span className="stat-value">{Math.round((currentPhase / totalPhases) * 100)}%</span>
              <span className="stat-label">الإنجاز</span>
            </div>
            <div className="stat">
              <span className="stat-value">{2024 + currentPhase - 1}</span>
              <span className="stat-label">السنة</span>
            </div>
          </div>
        </div>
      </div>

      {/* عناصر التحكم */}
      <div className="controls">
        <button 
          className="control-btn prev-btn" 
          onClick={prevPhase}
          disabled={currentPhase === 1}
        >
          <span className="btn-icon">←</span>
          <span className="btn-text">السابقة</span>
        </button>
        
        <div className="phase-indicator">
          <span className="current-phase">المرحلة {currentPhase}</span>
        </div>
        
        <button 
          className="control-btn next-btn" 
          onClick={nextPhase}
          disabled={currentPhase === totalPhases}
        >
          <span className="btn-text">التالية</span>
          <span className="btn-icon">→</span>
        </button>
      </div>

      {/* تأثيرات الطاقة */}
      <div className="energy-effects">
        <div className="energy-orb orb-1"></div>
        <div className="energy-orb orb-2"></div>
        <div className="energy-orb orb-3"></div>
      </div>
    </div>
  );
};

export default BiofuelRoadmap;