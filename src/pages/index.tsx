import Image from "next/image";
import catImg from "public/62f81c6f04b2338e03b6e35e_1.png";

const cloudinaryUrl =
    "https://res.cloudinary.com/studyverse/image/upload/v1661180371/avatars/62c5e8c34af6e14900c179af.png";

export default function IndexPage() {
    return (
        <>
            {/* cloudinary next image */}
            <div className="inline-block">
                <h1 className="text-xl">Next Image</h1>
                <p>
                    src: <a href={cloudinaryUrl}>{cloudinaryUrl}</a>
                </p>
                <Image
                    src={cloudinaryUrl}
                    blurDataURL="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAQAAAAECAIAAAAmkwkpAAAACXBIWXMAABcRAAAXEQHKJvM/AAAAPUlEQVQImWPoay9NSwqb2FkdHujJ0NZQwscvwMDIlJCYyPD/33ceLg4NDY3Ork6GXecuRWcVePr42zq7AQDeORJaKdRnEwAAAABJRU5ErkJggg=="
                    width={500}
                    height={500}
                />
            </div>

            {/* cloudinary native img */}
            <div className="ml-10 inline-block align-top">
                <h1 className="text-xl">Native Image</h1>
                <p>
                    src: <a href={cloudinaryUrl}>{cloudinaryUrl}</a>
                </p>
                <img src={cloudinaryUrl} width={500} height={500} />
            </div>

            {/* next next image */}
            <div className="mt-24 inline-block">
                <h1 className="text-xl">Next import Next Image</h1>
                <p>
                    src:{" "}
                    <a href="/62f81c6f04b2338e03b6e35e_1.png">
                        /62f81c6f04b2338e03b6e35e_1.png
                    </a>{" "}
                    (using import)
                </p>
                <Image src={catImg} height={500} width={500} />
            </div>

            {/* native next img */}
            <div className="ml-10 mt-24 inline-block align-top">
                <h1 className="text-xl">Native Next Image</h1>
                <p>
                    src:{" "}
                    <a href="/62f81c6f04b2338e03b6e35e_1.png">
                        /62f81c6f04b2338e03b6e35e_1.png
                    </a>{" "}
                    (no import)
                </p>
                <img
                    src="/62f81c6f04b2338e03b6e35e_1.png"
                    height={500}
                    width={500}
                />
            </div>
        </>
    );
}
