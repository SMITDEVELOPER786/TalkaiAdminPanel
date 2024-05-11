// import React, { useEffect } from 'react';

// function VapiChatWidget({ assistant, apiKey, buttonConfig }) {
//   useEffect(() => {
//     let vapiInstance = null;

//     const loadVapiScript = () => {
//       const script = document.createElement('script');
//       script.src = 'https://cdn.jsdelivr.net/gh/VapiAI/html-script-tag@latest/dist/assets/index.js';
//       script.defer = true;
//       script.async = true;

//       script.onload = () => {
//         vapiInstance = window.vapiSDK.run({
//           apiKey: apiKey,
//           assistant: assistant,
//           config: buttonConfig,
//         });

//         vapiInstance.on('speech-start', () => {
//             console.log('Speech has started');
//           });
        
//           vapiInstance.on('speech-end', () => {
//             console.log('Speech has ended');
//           });
        
//           vapiInstance.on('call-start', () => {
//             console.log('Call has started');
//           });
        
//           vapiInstance.on('call-end', () => {
//             console.log('Call has stopped');
//           });
        
//           vapiInstance.on('volume-level', (volume) => {
//             console.log(`Assistant volume level: ${volume}`);
//           });
        
//           // Function calls and transcripts will be sent via messages
//           vapiInstance.on('message', (message) => {
//             console.log(message);
//           });
        
//           vapiInstance.on('error', (e) => {
//             console.error(e)
//           });
        

//       };

//       document.body.appendChild(script);
//     };

//     loadVapiScript();

//     return () => {
//       if (vapiInstance && typeof vapiInstance.destroy === 'function') {
//         vapiInstance.destroy();
//       }
//     };
//   }, [assistant, apiKey, buttonConfig]);

//   return null;
// }

// export default VapiChatWidget;


import React, { useEffect } from 'react';

function VapiChatWidget({ assistant, apiKey, buttonConfig, customButton }) {
  useEffect(() => {
    let vapiInstance = null;

    const loadVapiScript = () => {
      const script = document.createElement('script');
      script.src = 'https://cdn.jsdelivr.net/gh/VapiAI/html-script-tag@latest/dist/assets/index.js';
      script.defer = true;
      script.async = true;

      script.onload = () => {
        vapiInstance = window.vapiSDK.run({
          apiKey: apiKey,
          assistant: assistant,
          config: buttonConfig,
        });

        vapiInstance.on('speech-start', () => {
            console.log('Speech has started');
          });
        
          vapiInstance.on('speech-end', () => {
            console.log('Speech has ended');
          });
        
          vapiInstance.on('call-start', () => {
            console.log('Call has started');
          });
        
          vapiInstance.on('call-end', () => {
            console.log('Call has stopped');
          });
        
          vapiInstance.on('volume-level', (volume) => {
            console.log(`Assistant volume level: ${volume}`);
          });
        
          // Function calls and transcripts will be sent via messages
          vapiInstance.on('message', (message) => {
            console.log(message);
          });
        
          vapiInstance.on('error', (e) => {
            console.error(e)
          });

          if (customButton) {
            // Add click event listener to custom button
            customButton.addEventListener('click', openChatWidget);
          }
      };

      document.body.appendChild(script);
    };

    const openChatWidget = () => {
      if (vapiInstance) {
        vapiInstance.open();
      }
    };

    loadVapiScript();

    return () => {
      if (vapiInstance && typeof vapiInstance.destroy === 'function') {
        vapiInstance.destroy();
      }
      if (customButton) {
        // Remove click event listener from custom button
        customButton.removeEventListener('click', openChatWidget);
      }
    };
  }, [assistant, apiKey, buttonConfig, customButton]);

  return null;
}

export default VapiChatWidget;
