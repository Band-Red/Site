import { useState, useEffect, useRef } from 'react';
import './LearningRoadmap.css';

const LearningRoadmap = () => {
  const [currentStep, setCurrentStep] = useState(1);
  const [isPathAnimated, setIsPathAnimated] = useState(false);
  const activeRoadRef = useRef(null);
  const totalSteps = 7;

  const learningSteps = [
    { id: 1, title: "أساسيات JS", description: "JS", badge: "JS" },
    { id: 2, title: "التلاعب بـ DOM", description: "JS", badge: "JS" },
    { id: 3, title: "برمجة غير متزامنة", description: "JS", badge: "JS" },
    { id: 4, title: "إطار React", description: "JS", badge: "JS" },
    { id: 5, title: "إدارة الحالة", description: "JS", badge: "JS" },
    { id: 6, title: "الاختبار والتطوير", description: "JS", badge: "JS" },
    { id: 7, title: "النشر والإنتاج", description: "JS", badge: "JS" }
  ];

  useEffect(() => {
    // تفعيل تأثير المسار فقط عند الانتقال من الخطوة الأولى
    if (currentStep > 1 && !isPathAnimated) {
      setIsPathAnimated(true);
      animateActiveRoad();
    }
  }, [currentStep, isPathAnimated]);

  const animateActiveRoad = () => {
    if (activeRoadRef.current) {
      const path = activeRoadRef.current;
      const length = path.getTotalLength();
      
      path.style.strokeDasharray = length;
      path.style.strokeDashoffset = length;
      
      // إعادة تعيين الرسوم المتحركة
      path.getBoundingClientRect();
      
      path.style.transition = 'stroke-dashoffset 1.5s ease-in-out';
      path.style.strokeDashoffset = '0';
    }
  };

  const setActiveStep = (step) => {
    if (step < 1 || step > totalSteps) return;
    
    setCurrentStep(step);
    
    // إذا كانت الخطوة أكبر من 1 ولم يتم تفعيل المسار بعد، فعّله
    if (step > 1 && !isPathAnimated) {
      setIsPathAnimated(true);
    }
  };

  const nextStep = () => {
    setActiveStep(currentStep + 1);
  };

  const previousStep = () => {
    setActiveStep(currentStep - 1);
  };

  const progress = Math.round((currentStep / totalSteps) * 100);

  return (
    <div className="learning-roadmap">
      {/* حاوية المسار */}
      <div className="road-container">
        <svg width="100%" height="100%" viewBox="0 0 800 400" preserveAspectRatio="xMidYMid meet">
          {/* المسار الخلفي */}
          <path 
            className="road-path" 
            d="M 80 100 Q 200 60, 320 100 T 560 80 T 760 120" 
          />
          {/* المسار النشط - لا يظهر تأثيره في الخطوة الأولى */}
          <path 
            ref={activeRoadRef}
            className={`active-road ${isPathAnimated ? 'animated' : ''}`} 
            d="M 80 100 Q 200 60, 320 100 T 560 80 T 760 120" 
            style={{ 
              strokeDashoffset: currentStep === 1 ? '100%' : '0%'
            }}
          />
        </svg>
        
      </div>

      {/* حاوية الخطوات */}
      <div className="steps-container">
        {learningSteps.map((step, index) => {
          const position = {
            1: { top: '25%', left: '10%' },
            2: { top: '15%', left: '25%' },
            3: { top: '30%', left: '40%' },
            4: { top: '20%', left: '55%' },
            5: { top: '35%', left: '70%' },
            6: { top: '25%', left: '85%' },
            7: { top: '40%', left: '95%' }
          };

          return (
            <div
              key={step.id}
              className={`learning-step ${currentStep === step.id ? 'active' : ''} step-${step.id}`}
              style={position[step.id]}
              onClick={() => setActiveStep(step.id)}
            >
              <div className="step-number">{step.id}</div>
              <div className="step-title">{step.title}</div>
              <div className="js-badge">{step.badge}</div>
            </div>
          );
        })}
      </div>

      {/* معلومات التقدم */}
      <div className="progress-info">
        <div className="progress-title">تقدم رحلة التعلم</div>
        <div className="progress-value">{progress}%</div>
        <div className="progress-bar">
          <div 
            className="progress-fill" 
            style={{ width: `${progress}%` }}
          ></div>
        </div>
      </div>

      {/* عناصر التحكم */}
      <div className="controls">
        <div className="control-btn" onClick={previousStep}>
          <span className="material-symbols-outlined">chevron_right</span>
        </div>
        <div className="control-btn" onClick={nextStep}>
          <span className="material-symbols-outlined">
            <svg width="32" height="32" viewBox="0 0 45 40" fill="none" xmlns="http://www.w3.org/2000/svg">
              <g>
                  <path d="M30.5 18C31.6046 18 32.5 18.8954 32.5 20V20C32.5 21.1046 31.6046 22 30.5 22H8.5C7.39543 22 6.5 21.1046 6.5 20V20C6.5 18.8954 7.39543 18 8.5 18H30.5Z" fill="#7D7A7A"/>
                  <path d="M26.1739 28.7129C25.2738 27.8886 25.2728 26.4703 26.1718 25.6448L32.319 20L26.1718 14.3552C25.2728 13.5297 25.2738 12.1114 26.1739 11.2871V11.2871C26.9695 10.5587 28.1897 10.5587 28.9852 11.2871L36.0838 17.7875C37.3825 18.9767 37.3825 21.0233 36.0838 22.2125L28.9852 28.7129C28.1897 29.4413 26.9695 29.4413 26.1739 28.7129V28.7129Z" fill="#7D7A7A"/>
              </g>
            </svg>   
          </span>
        </div>
      </div>
    </div>
  );
};

export default LearningRoadmap;