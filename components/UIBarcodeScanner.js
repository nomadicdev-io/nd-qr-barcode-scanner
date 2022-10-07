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
                        console.log(result.text.customerID)
                        setData(JSON.stringify(result.text))
                        getDetails(data.customerID);
                        return;
                    }
                    else setData('');
                }}
                stopStream={disable}
            />

            <div className='debugger_'>
                <p>Test : {data.customerID}</p>
                <button onClick={()=> getDetails('633e6ba836fb20dde1456705')} >Test Me</button>
            </div>
        </>
        
    )
}

export default UIBarcodeScanner;