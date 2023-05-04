import React from "react";
import "./startaps.css"
import "./../../App.css"
import vr from "./../../assets/image/vr.png"
import ar from "./../../assets/image/ar.png"
import sector from "./../../assets/image/Sector-dt.png"

const Startaps = () => {
  return (
    <div className="startaps">
      <div className="wrapper">
        <div className="startaps-container">
          <h2 className="startaps-title">Наши стартапы</h2>
          <div className="startaps-block-list">
            <div className="startaps-item">
              <img src={vr} alt="" className="startaps-image" />
              <div className="srartaps-info">
                <h3 className="startaps-name">VR TEHNUM</h3>
                <p className="startaps-text">Современные VR-тренажеры – это симуляторы в виртуальной среде, в которых, учтены все требования к обучению. Тщательно проработана последовательность проведения работ с обоснованием: почему одни действия верны, а другие нет. Мы используем в работе новые технологии, следим за выходом новой сельскохозяйственной техники и поможем определиться со спецификой вашего приложения. Технум-64 специализируется на разработке решений с использованием современного программного обеспечения. Основным направлением компании являются VR-решения для агропромышленного комплекса, однако не исключается и создание приложений для других сфер деятельности.</p>
                <a href="https://vr-technum.ru/" className="startaps-link">Перейти</a>             
              </div> 
            </div>
            <div className="razdel"></div>
            <div className="startaps-item">
              <img src={ar} alt="" className="startaps-image" />
              <div className="srartaps-info">
                <h3 className="startaps-name">Вектор-сервис</h3>
                <p className="startaps-text">Интеллектуальная система технического сервиса предназначена для обеспечения технической поддержки и помощи принятия решения при выполнении регламентных работ по послепродажному обслуживанию сельскохозяйственной техники. Система позволяет решать вопросы, связанные с эксплуатацией дорогостоящего сложного оборудования в условиях необходимости импортозамещения на отечественных производствах. Система позволяет заполнять цифровые технологические карты голосовым вводом, обращаться к справочному материалу при необходимости, а также вести полный контроль за правильностью проведения технического обслуживания и с использованием средств дополненной реальности и программы. Также имеется возможность распознавания QR-меток на узлах и агрегатах, а мультиплатформенность программы позволяет пользоваться ею на современных устройствах. Инновационная сельскохозяйственная технически сложная сельскохозяйственная техника требует повышенного внимания к правильности проведения ТО.</p>
                <a href="https://service-vector.ru/" className="startaps-link">Перейти</a>                     
              </div>
            </div>
            <div className="razdel"></div>
            <div className="startaps-item">
              <img src={sector} alt="" className="startaps-image" />
              <div className="srartaps-info">
                <h3 className="startaps-name">Сектор-ЦД</h3>
                <p className="startaps-text">Платформа, включающая в себя комплекс цифровых двойников в формате VR и 360 по обучению растениеводству, животноводству и ветеринарии для специалистов, а так же обучающихся ВУЗов и колледжей. Используется новая методика с полным погружением в рабочий процесс без необходимости взаимодействовать с реальными растениями и животными, позволяя экономить физические ресурсы, а так же сократит затраты на перемещение сотрудников и студентов. Учащиеся по-прежнему будут общаться с наставниками, но также будут взаимодействовать с 3D-моделями реальных оцифрованных объектов, с которыми, в последствии, им предстоит работать.</p>
                <a href="https://sector-dt.ru/" className="startaps-link">Перейти</a>                     
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Startaps