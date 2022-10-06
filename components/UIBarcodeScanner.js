import { useEffect, useState } from 'react';
import BarcodeScannerComponent from "react-qr-barcode-scanner-esm5";

const UIBarcodeScanner = ()=> {

    const [data, setData] = useState('');

    const handleScan = (value)=> {
        setData(value)
    }

    return (
        <>  
            <BarcodeScannerComponent
                width={300}
                height={300}
                onUpdate={(err, result) => {
                    if (result) setData(result.text);
                    else setData("Not Found");
                }}
            />

            <div className='debugger_'>
                <p>Test : {data}</p>
            </div>
        </>
        
    )
}

export default UIBarcodeScanner;