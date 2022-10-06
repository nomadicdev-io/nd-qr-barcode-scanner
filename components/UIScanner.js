import { useState } from "react";
import UIBarcodeScanner from "./UIBarcodeScanner";

const UIScanner = ()=> {


    return (
        <div className="scanner_area">
            <div className="area_">

                <UIBarcodeScanner />

            </div>
        </div>
    )
}

export default UIScanner;