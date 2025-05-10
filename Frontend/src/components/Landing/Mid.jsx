// import React from 'react'
// import { useRef } from 'react';
// import VariableProximity from './VariableProximity';
// import rob from '../../assets/rob.png'
// import GlitchText from '../Animation/GlitchText'
// // import VariableProximity from '../Animation/VariableProximity'
// // import robot.png from '../../assets/robot.jpeg'

// const Mid = () => {
//   return (
    
//     <div className="container mx-auto px-4">
//         <div className="mb-16">
//           <span><GlitchText
//   speed={1}
//   enableShadows={true}
//   enableOnHover={true}
//   className='custom-class'
// >

// </GlitchText></span>
//         </div>
//         <div className='display flex '>
//             <div>
//                 <img src={rob} alt="bot" className='h-70 animate-bounce' />
//             </div>
//             <div>
// <div
// ref={containerRef}
// style={{position: 'relative'}}
// >
//   <VariableProximity
//     label={'Hover me! And then star React Bits on GitHub, or else...'}
//     className={'variable-proximity-demo'}
//     fromFontVariationSettings="'wght' 400, 'opsz' 9"
//     toFontVariationSettings="'wght' 1000, 'opsz' 40"
//     containerRef={containerRef}
//     radius={100}
//     falloff='linear'
//   />
// </div>
//             </div>
        
//         </div>
//         <div>

//         </div>
//     </div>
//   )
// }

// export default Mid


import React, { useRef } from 'react';
import rob from '../../assets/rob.png';
import GlitchText from '../Animation/GlitchText';
import VariableProximity from '../Animation/VariableProximity';

const Mid = () => {
  const containerRef = useRef(null);

  return (
    <div className="container mx-auto px-4">
      <div className="mb-16">
        <span>
          <GlitchText
            speed={1}
            enableShadows={true}
            enableOnHover={true}
            className="custom-class"
          >Feature
          </GlitchText>
        </span>
      </div>

      <div className="display flex">
        <div>
          <img src={rob} alt="bot" className="h-70 animate-bounce" />
        </div>

        <div>
          <div ref={containerRef} style={{ position: 'relative' }}>
            <VariableProximity
              label={'Hover me! And then star React Bits on GitHub, or else...'}
              className={'variable-proximity-demo'}
              fromFontVariationSettings="'wght' 400, 'opsz' 9"
              toFontVariationSettings="'wght' 1000, 'opsz' 40"
              containerRef={containerRef}
              radius={100}
              falloff="linear"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Mid;
