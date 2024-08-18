import React from 'react';

const BigHero = () => {
  return (
    <section className='relative h-[727px] flex flex-col justify-end lg:h-[648px] md:h-[695px] sm:h-[350px] xs:h-[245px]'>
      <div className='container mx-auto flex flex-col items-start p-6'>
        <div className='max-w-xl flex flex-col items-start'>
          <h1 className='mb-8 text-4xl font-bold flex flex-col sm:flex-row sm:flex-wrap sm:mb-8 sm:whitespace-pre-wrap textAnimation'>
            <span>Welcome </span>
            <span>to S-Group. </span>
            <span>You are the owner!</span>
          </h1>
          <div className='text-sm leading-relaxed max-w-sm sm:max-w-full sm:mb-8 sm:text-base'>
            <p>S-Group is owned by people who invest in proven areas.</p>
            <p className='mt-5'>
              You have access to personalized financial advice, strategic investing training, and
              up-to-date market knowledge to help build the future for those you love.
            </p>
          </div>
          <button
            type='submit'
            className='mt-5 py-2 px-6 bg-blue-500 text-white rounded hover:bg-blue-600'>
            <span>Watch video</span>
          </button>
        </div>
      </div>
      <div className='container mx-auto flex justify-end'>
        <div className='relative overflow-hidden max-w-2xl w-full md:max-w-full'>
          <div className='h-full'>
            <picture data-is-show='true'>
              <source
                srcSet='images/slide1@1x.webp 1x, images/slide1@2x.webp 2x'
                type='image/webp'
              />
              <img
                src='images/slide1.jpg'
                alt='slide'
                loading='eager'
                className='w-full h-full object-cover'
              />
            </picture>
            <picture data-is-show='false'>
              <source
                srcSet='images/slide2@1x.webp 1x, images/slide2@2x.webp 2x'
                type='image/webp'
              />
              <img
                src='images/slide2.jpg'
                alt='slide'
                loading='lazy'
                className='w-full h-full object-cover'
              />
            </picture>
            <picture data-is-show='false'>
              <source
                srcSet='images/slide3@1x.webp 1x, images/slide3@2x.webp 2x'
                type='image/webp'
              />
              <img
                src='images/slide3.jpg'
                alt='slide'
                loading='lazy'
                className='w-full h-full object-cover'
              />
            </picture>
          </div>
          <div className='absolute left-0 bottom-0 bg-white p-6 flex items-center justify-center md:h-36 md:w-15 md:flex-col md:p-0'>
            <button
              type='button'
              className='w-6 h-6 relative rounded-full cursor-pointer hover:border border-gray-300'
              data-is-slide='1'
              data-is-active='true'
              aria-label='slider navigation button'>
              <svg
                viewBox='0 0 26 26'
                width='26'
                height='26'
                className='absolute left-1/2 top-1/2 transform -translate-x-1/2 -translate-y-1/2 hidden'>
                <circle
                  cx='13'
                  cy='13'
                  r='12'
                  stroke='#000'
                  strokeDashoffset='18'
                  strokeWidth='1'
                  fill='transparent'
                />
              </svg>
              <span className='absolute left-1/2 top-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-gray-800 block rounded-full h-1 w-1' />
            </button>
            <button
              type='button'
              className='w-6 h-6 relative rounded-full cursor-pointer hover:border border-gray-300'
              data-is-slide='2'
              data-is-active='false'
              aria-label='slider navigation button'>
              <svg
                viewBox='0 0 26 26'
                width='26'
                height='26'
                className='absolute left-1/2 top-1/2 transform -translate-x-1/2 -translate-y-1/2 hidden'>
                <circle
                  cx='13'
                  cy='13'
                  r='12'
                  stroke='#000'
                  strokeDashoffset='18'
                  strokeWidth='1'
                  fill='transparent'
                />
              </svg>
              <span className='absolute left-1/2 top-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-gray-800 block rounded-full h-1 w-1' />
            </button>
            <button
              type='button'
              className='w-6 h-6 relative rounded-full cursor-pointer hover:border border-gray-300'
              data-is-slide='3'
              data-is-active='false'
              aria-label='slider navigation button'>
              <svg
                viewBox='0 0 26 26'
                width='26'
                height='26'
                className='absolute left-1/2 top-1/2 transform -translate-x-1/2 -translate-y-1/2 hidden'>
                <circle
                  cx='13'
                  cy='13'
                  r='12'
                  stroke='#000'
                  strokeDashoffset='18'
                  strokeWidth='1'
                  fill='transparent'
                />
              </svg>
              <span className='absolute left-1/2 top-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-gray-800 block rounded-full h-1 w-1' />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default BigHero;
