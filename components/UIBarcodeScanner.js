import { useEffect, useState } from 'react';
import BarcodeReader from 'react-barcode-reader'

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
            
            <BarcodeReader
                onError={handleError}
                onScan={handleScan}
            />
  
            <div className='debugger_'>
                <p>Test : { data.length ? data: ''}</p>
            </div>
        </>
        
    )
}

export default UIBarcodeScanner;