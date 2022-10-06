import { useEffect, useState } from 'react';
import BarcodeScannerComponent from "react-qr-barcode-scanner-esm5";

const UIBarcodeScanner = ({getDetails})=> {

    const [data, setData] = useState('');
    const [disable, setDisable] = useState(false);

    return (
        <>  
            <BarcodeScannerComponent
                width={'100%'}
                height={'100%'}
                onUpdate={(err, result) => {
                    if (result){
                        setDisable(true)
                        setData(JSON.parse(result))
                        getDetails(data.customerID);
                        return;
                    }
                    else setData('');
                }}
                stopStream={disable}
            />

            <div className='debugger_'>
                <p>Test : {data.customerID}</p>
            </div>
        </>
        
    )
}

export default UIBarcodeScanner;