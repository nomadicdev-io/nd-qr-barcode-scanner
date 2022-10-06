import Quagga from 'quagga';
import { useEffect, useState } from 'react';

const UIBarcodeScanner = ()=> {

    const [error, setError] = useState('')

    useEffect(()=> {
        Quagga.init({
            inputStream : {
              name : "Live",
              type : "LiveStream",
              target: document.querySelector('#scanner')    // Or '#yourElement' (optional)
            },
            decoder : {
              readers : ["code_128_reader"]
            }
          }, function(err) {
              if (err) {
                  setError(err.toString())
                  return
              }
              console.log("Initialization finished. Ready to start");
              Quagga.start();
          });
    }, [])

    return (
        <>  
            <div id="scanner"></div>
            <p>{error}</p>
        </>
        
    )
}

export default UIBarcodeScanner;