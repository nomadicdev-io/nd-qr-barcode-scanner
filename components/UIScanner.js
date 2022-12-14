import { useState } from "react";
import UIBarcodeScanner from "./UIBarcodeScanner";
import UIModal from "./UIModal";

const UIScanner = ()=> {

    const [modal, setModal] = useState(false);
    const [itemId, setItemId] = useState('Test');
    const [userData, setUserData] = useState('');

    const openPopup = (value)=> {
        console.log(value.toString())
        setItemId(value);
        setModal(true)
      }

    return (
        <div className="scanner_area">
            <div className="area_">

               

                <UIBarcodeScanner getDetails={openPopup}/>

                {
                    modal && 
                    <UIModal itemId={itemId} close={()=> setModal(false)}/>
                }

            </div>
        </div>
    )
}

export default UIScanner;