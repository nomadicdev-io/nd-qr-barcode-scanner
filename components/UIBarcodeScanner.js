import { useEffect, useState } from 'react';
import BarcodeScannerComponent from "react-qr-barcode-scanner-esm5";

const UIBarcodeScanner = ({getDetails, isdisable})=> {

    const [data, setData] = useState('');
    const [disable, setDisable] = useState(false);

    return (
        <>  
            <p className="fixed">{data.customerID}</p>

            <BarcodeScannerComponent
                width={'100%'}
                height={'100%'}
                onUpdate={(err, result) => {
                    if (result){
                        setDisable(true)
                        let d = JSON.parse(result.text)
                        console.log(d.customerID);
                        getDetails('633e72af36fb20dde1456726');
                    }
                    else setData('');
                }}
                stopStream={disable}
            />

            <div className='debugger_'>
                <p>Test : {data.customerID}</p>
                <button onClick={()=> getDetails('633e72af36fb20dde1456726')} >Test Me</button>
            </div>
        </>
        
    )
}

export default UIBarcodeScanner;