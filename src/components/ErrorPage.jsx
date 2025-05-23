import Lottie from 'react-lottie';
import animationData from '../assets/error.json';



export const ErrorPage = (error) => {
    const defaultOptions = {
        loop: true,
        autoplay: true,
        animationData: animationData,
        rendererSettings: {
            preserveAspectRatio: "xMidYMid slice"
        }
    };

    if (error) {
        console.error("Error :", error)
    }

    return (
        <div className='flex flex-col justify-center items-center w-full h-screen'>
            <Lottie
                options={defaultOptions}
                height={400}
                width={400}
            />

            <p>Something went wrong. Please try again later!</p>
        </div>
    );
}