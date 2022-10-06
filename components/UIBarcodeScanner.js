import { useEffect, useState } from 'react';
import { ReactBarcodeScanner } from "@impactdk/react-barcode-scanner";

const UIBarcodeScanner = ()=> {

    const [data, setData] = useState('');

    const handleError = (error)=> {
        setData(error)
    }

    const handleScan = (value)=> {
        setData(value)
    }

    return (
        <>  
            <ReactBarcodeScanner
                onFindBarcode={handleScan} 
            />
            <div className='debugger_'>
                <p>Test : { data.length ? data: ''}</p>
            </div>
        </>
        
    )
}

export default UIBarcodeScanner;