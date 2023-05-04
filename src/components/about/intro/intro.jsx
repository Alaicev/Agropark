import React from "react";
import "./../../../App.css"
import "./intro.css"

const Intro = () => {

  let [backPos, setBackPos] = React.useState(0)

  window.addEventListener('scroll', () => {
    setBackPos(window.scrollY)
  })

  let backIntro = {
    backgroundPosition: `0 ${-backPos*1+ 650}px, 250px ${backPos*0.8 - 300}px`
  }

  return (
    <div className="intro-container">
      <div className="intro-line"></div>
      <div className="wrapper">
        <div className="intro-info-block">
          <div className="img-container" style={backIntro}></div>
          <div className="intro-info-bonntainer">
            <h1 className="intro-title">Центр агророботехники, VR/AR технологий</h1>
            <p className="intro-text">Центр агроробототехники VR/AR технологий
              - место, где современные технологии интегрируются в сельское хозяйство. Мы специализируемся на разработке тренажеров в виртуальной реальности (VR), приложений дополненной реальности (AR) и робототехнических систем в агропромышленном комплексе (АПК)</p>
            <p className="intro-text">Мы занимаемся созданием инновационных решений, которые могут повысить эффективность работы сельскохозяйственных предприятий, дилерских центров и заводов в сфере АПК. Улучшаем качество обучения и подготовки работников различных предприятий с помощью виртуальных тренажеров и приложений дополненной реальности. Разрабатываем робототехнические системы, которые могут помочь фермерам снизить затраты на трудовые ресурсы и повысить производительность своих хозяйств.</p>
            <p className="intro-text">Благодаря нашей высококвалифицированной команде специалистов и в инновационном подходе к разработке проектов, поможем решить потребность в современных цифровых решениях. Мы всегда открыты для сотрудничества и готовы предложить нашим клиентам индивидуальный подход к решению их задач.</p>
          </div>
        </div>
      </div>
      <div className="intro-line"></div>
    </div>
  )
}

export default Intro