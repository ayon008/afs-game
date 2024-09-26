'use client'
import Countdown from 'react-countdown';
const CountdownTimer = () => {
    // Define the target date (September 30)
    const targetDate = new Date('2024-09-30T00:00:00').getTime();

    // Renderer to customize the countdown display
    const renderer = ({ days, hours, minutes, seconds, completed }) => {
        if (completed) {
            // What to render when the countdown completes
            return <span className='2xl:text-[220px] xl:text-9xl text-5xl font-bold text-white'>The game has started!</span>;
        } else {
            // Render the countdown
            return (
                <div>
                    <div className='text-white'>
                        <span className='2xl:text-[220px] xl:text-[170px] text-6xl font-bold'>{days} :</span>
                        <span className='2xl:text-[220px] xl:text-[170px] text-6xl font-bold'>{hours} : </span>
                        <span className='2xl:text-[220px] xl:text-[170px] text-6xl font-bold'>{minutes}</span>
                    </div>
                </div>
            );
        }
    };

    return (
        <div>
            <Countdown date={targetDate} renderer={renderer} />
        </div>
    );
};

export default CountdownTimer;
