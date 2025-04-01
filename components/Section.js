import Image from 'next/image';

export default function ImageLayout() {
    return (


        <section className="pt-10 overflow-hidden   md:pt-0 sm:pt-16 2xl:pt-16 mt-20">
            <div className="px-4 mx-auto sm:px-6 lg:px-8 max-w-7xl">
                <div className="grid items-center grid-cols-1 md:grid-cols-2">

                    <div className="relative">
                        <img
                            className="relative w-full xl:max-w-lg xl:mx-auto 2xl:origin-bottom 2xl:scale-110 "
                            src="https://res.cloudinary.com/dea3r5dn7/image/upload/v1743167944/ylosyolgzuxti6xwlzll.jpg"
                            alt=""
                        />
                    </div>
                    <div>
                        <img
                            className="relative w-full xl:max-w-lg xl:mx-auto 2xl:origin-bottom 2xl:scale-110 mt-4 mb-5"
                            src="https://res.cloudinary.com/dea3r5dn7/image/upload/v1743167944/xgw42g1ysdgbphbdbgzw.jpg"
                            alt="Right image"
                        />
                        <img
                            className="relative w-full xl:max-w-lg xl:mx-auto 2xl:origin-bottom 2xl:scale-110 mt-4"
                            src="https://res.cloudinary.com/dea3r5dn7/image/upload/v1743167944/cmcngod9d2ouajcuimtw.jpg"
                            alt="Right image"
                        />

                    </div>
                </div>
            </div>
        </section>
    );
}
