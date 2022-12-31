import {
    AiFillGithub,
    AiFillFacebook,
    AiOutlineInstagram,
} from 'react-icons/ai';

const Footer = () => {
    return (
        <footer className="bg-slate-900 w-full h-14">
            <div className="max-w-4xl mx-auto p-4 ">
                <div className="flex justify-between">
                    <h1 className="text-white text-lg font-black">
                        Beluga Front-end
                    </h1>
                    <ul className="flex items-center justify-between w-24 ">
                        <li className="text-white text-2xl">
                            <a
                                href="https://github.com/Beluga-Whale"
                                target="_blank"
                            >
                                <AiFillGithub />
                            </a>
                        </li>
                        <li className="text-white text-2xl">
                            <a
                                href="https://www.facebook.com/Thanathat159/"
                                target="_blank"
                            >
                                <AiFillFacebook />
                            </a>
                        </li>
                        <li className="text-white text-2xl">
                            <a
                                href="https://www.instagram.com/halay.x/"
                                target="_blank"
                            >
                                <AiOutlineInstagram />
                            </a>
                        </li>
                    </ul>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
