import { useState } from "react";
import UIBarcodeScanner from "./UIBarcodeScanner";
import UIModal from "./UIModal";

const UIScanner = ()=> {

    const [modal, setModal] = useState(false);
    const [itemId, setItemId] = useState('Test');

    const openPopup = (value)=> {
        setItemId(value);
        setModal(true)
      }

    return (
        <div className="scanner_area">
            <div className="area_">

                <p className="fixed">{itemId}</p>

                <UIBarcodeScanner getDetails={openPopup}/>

                {
                    modal && 
                    <UIModal id={itemId} close={()=> setModal(false)}/>
                }

            </div>
        </div>
    )
}

export default UIScanner;