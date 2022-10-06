import Image from "next/image";

const UITitle = ()=> {
    return (
        <div className="title_wrapper">
            <div className="title_">
                <p>Welcome back!, Alan</p>
                <h2>Scan Now</h2>
            </div>

            <div className="icon_">
                <Image src="/apple-icon-60x60.png" width="50" height="50" />
            </div>
        </div>
    )
}

export default UITitle;