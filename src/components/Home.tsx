import { Link } from "react-router-dom";

import { Icon } from '@iconify/react';
import { HashLink } from 'react-router-hash-link';



const Home = () => {

    interface navTitle {
        id: number;
        title: string;
        src: any
    }

    const navTitle: navTitle[] = [
      
        {
            id: 1,
            title: 'About',
            src: '#about',
        },
        {
            id: 2,
            title: 'Experience',
            src: '#experience',
        },
        {
            id: 3,
            title: 'Projects',
            src: "#projects"
        },
        {
            id: 4,
            title: 'Contacts',
            src: "#contacts",
        }
    ]
    return (
        <div className="" id="home">
            <div className="w-[100%] bg-black bg-opacity-90 text-white fixed">
                <div className="px-8">
                    <nav className="flex justify-between items-center">
                        <div>
                            <HashLink
                                className="font-[700] font_poppins text-[24px] sm:text-[14px]"
                                to="#home">Akhrorbek Abduvakhobov
                            </HashLink>
                        </div>
                        <div>
                            <ul className="flex  sm:hidden">
                                {
                                    navTitle?.map((item) => (
                                        <HashLink to={item.src} key={item.id}
                                            className="nav py-4 focus:bg-black px-6">
                                            <li className="font_poppins font-[700]">
                                                {item.title}
                                            </li>

                                        </HashLink>

                                    ))
                                }
                            </ul>
                            <h1 className="hidden sm:block text-[24px] ">
                                <Icon icon="solar:hamburger-menu-broken" />
                            </h1>
                        </div>
                    </nav>
                </div>
            </div>
            <div className="pt-16">

            </div>
            <div className="container_s">
                <div className="flex justify-center items-center space-x-16 py-[100px] sm:block sm:space-x-0 sm:py-6">
                    <div className="">
                        <div>
                            <img
                                className="object-cover rounded-[50%] w-[300px] h-[300px] sm:w-[190px] sm:h-[190px] sm:mx-auto sm:mb-8"
                                src='https://cdn.pixabay.com/photo/2013/07/13/10/07/man-156584_1280.png'
                                alt=""
                            />
                        </div>
                    </div>
                    <div className="text-center sm:mx-auto">
                        <p className="text-[20px] mb-4 text-gray-500">Hello I'm</p>
                        <h1
                            className=
                            "text-[32px] font-[600] mb-4 ">
                            Akhrorbek Abduvakhobov
                        </h1>
                        <h1 className="text-[20px] mb-4 text-gray-500">Frontend Developer</h1>
                        <div className="space-x-4">
                            <Link
                                target="_blank"
                                to={'https://doc-0s-44-docstext.googleusercontent.com/export/hebr4nmk4odal0gghhldi22c7s/rjldb26kr1gjh7qf73hacg82u0/1705320470000/102783813206507316307/102783813206507316307/13M7Vn4ZqJp5iakzs6PLQTtLflOBIi87hk3nHNECq-3o?format=pdf&id=13M7Vn4ZqJp5iakzs6PLQTtLflOBIi87hk3nHNECq-3o&token=AC4w5VgQb7QMp3yFL_Dz8XQ8i8WV8nSlwA:1705320441854&ouid=102783813206507316307&includes_info_params=true&usp=docs_home&cros_files=false&inspectorResult=%7B%22pc%22:2,%22lplc%22:3%7D&dat=AOBvIb3GedrLPRU6QDQ6xP8vmF9SP7Ms8JRYw35dR6DlGBbEYRt3A4xVSYpJzJZAPOtLgDXtveKZPoXsbZIqm3afZ2nb6mYKbV3W3UbnsjdUvhhQcUabb0GFtNXty6kuVLN-PuvFAfArVUXFijILgT22jbTheIY01-s4xP_SBhfzMzXM51ywnDF3I20zdLUnqdNCcPP37B9q6PbA_Nt26ET4z7UdEBWLiIM_NqXJxg9JcUasHxyoepALMxqHM5I3l-dZFxeEozz04yV7Or6VU3W_D_1nWLIO0sIXCeQa44VyxTDcKsUl3Lhojkn6CG9WbjP69EnOex9TD7ize-IDxz6xiiU9ydcFJSDdvHGdckyR24zfFehYMhhx-bhphWV7apCINbeXQhhiKB8KFVhCEI4J2kXDg499IAHufHM2IG3Slz2IPYt6Y5NxX5Ditx3kZIGpH1teeECtYZ7dF8eLxawnCsqnnQrcJw3UjVjSoi3sjH-_R9TsJPou9KOcSeQiD38dGpex-5-2gkV54YMi53hZqkxVbKH_SYGs_4LLxxQ-GcJ...'}
                                className="hover:bg-black hover:text-white rounded-[20px] border-black border-2 py-2 px-4">
                                Download CV
                            </Link>
                            <Link to={''}
                                className="hover:bg-white hover:text-black rounded-[20px] border-black border-2 py-2 px-4 bg-black text-white">
                                Contact Info
                            </Link>
                        </div>
                        <div className="flex justify-center">
                            <Link to={''}>
                                <Icon icon="devicon:linkedin-wordmark" className="w-[100px] h-[80px]" />
                            </Link>
                            <Link to={'https://github.com/Akhrorbek2023'}>
                                <Icon icon="simple-icons:githubpages" className="w-[100px] h-[80px]" />
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Home