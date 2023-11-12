import './Info.css'

const Info = () => {
    return ( 
    <div className="Info">
        <div className="personalInfo">
            <h1 className="personalInfo--name">My name is Kamil Gof</h1>
            <p className="personalInfo--description"> Cześć! Jestem początkującym frontend developerem myślącym o fullstacku w przyszłości (MERN oraz PHP). Hobbistycznie zajmuję się designem. Moim zainteresowaniem jest tworzenie dostępnych dla wszystkich stron internetowych z uwzględnieniem SEO.</p>
        </div>
        <div className="technologies">
            <p>technologie</p>
            <img src="" alt="" />
            <img src="" alt="" />
            <img src="" alt="" />
            <img src="" alt="" />
            <img src="" alt="" />
            <img src="" alt="" />
            <img src="" alt="" />
        </div>
        <nav>
            <ul>
                <li>frontend</li>
                <li>fullstack</li>
                <li>designer</li>
            </ul>
        </nav>
    </div>
    );
}
 
export default Info;