'use client'
import Countdown from 'react-countdown';
const CountdownTimer = () => {
    // Define the target date (September 30)
    const targetDate = new Date('2024-11-04T08:00:00+01:00').getTime();

    // Renderer to customize the countdown display
    const renderer = ({ days, hours, minutes, seconds, completed }) => {
        if (completed) {
            // What to render when the countdown completes
            return (
                <div className=''>
                    <div className='text-white'>
                        <span className='2xl:text-[220px] xl:text-[170px] text-6xl font-bold'>
                            00 :
                        </span>
                        <span className='2xl:text-[220px] xl:text-[170px] text-6xl font-bold'> 00 : </span>
                        <span className='2xl:text-[220px] xl:text-[170px] text-6xl font-bold'> 00</span>
                    </div>
                    <div className='flex justify-between'>
                        <p className='2xl:text-6xl xl:text-4xl text-xl text-white mt-10'>Days</p>
                        <p className='2xl:text-6xl xl:text-4xl text-xl text-white mt-10'>Hours</p>
                        <p className='2xl:text-6xl xl:text-4xl text-xl text-white mt-10'>Minutes</p>
                    </div>
                </div>
            )
        } else {
            // Render the countdown
            return (
                <div className=''>
                    <div className='text-white'>
                        <span className='2xl:text-[220px] xl:text-[170px] text-6xl font-bold'>
                            {days} :
                        </span>
                        <span className='2xl:text-[220px] xl:text-[170px] text-6xl font-bold'> {hours} : </span>
                        <span className='2xl:text-[220px] xl:text-[170px] text-6xl font-bold'> {minutes}</span>
                    </div>
                    <div className='flex justify-between'>
                        <p className='2xl:text-6xl xl:text-4xl text-xl text-white mt-10'>Days</p>
                        <p className='2xl:text-6xl xl:text-4xl text-xl text-white mt-10'>Hours</p>
                        <p className='2xl:text-6xl xl:text-4xl text-xl text-white mt-10'>Second</p>
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
