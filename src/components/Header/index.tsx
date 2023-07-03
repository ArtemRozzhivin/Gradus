import React, { useState } from 'react'
import { useSelector } from 'react-redux'
import { useTranslation } from 'react-i18next'
import { Divider, FormControl, FormHelperText, MenuItem, Select } from '@mui/material'
import { selectCities } from '../../redux/Cities/selectors'
import SearchWeather from '../SearchWeather'
import WeatherNavigation from '../WeatherNavigation'
import RecentLocations from '../RecentLocations'
import Button from '../../ui/Button'
import SelectLang from '../SelectLang'

const Header: React.FC = () => {
  const { recentCities, cities } = useSelector(selectCities)

  const togleTheme = () => {
    const toggleButton = document.getElementById('theme-toggle')
    if (toggleButton) {
      toggleButton.addEventListener('click', () => {
        document.documentElement.classList.toggle('dark')
        console.log(document.documentElement.classList, 'doc')
        const isDark = document.documentElement.classList.contains('dark')
        localStorage.setItem('color-theme', isDark ? 'dark' : 'light')
      })
    }
  }

  return (
    <div className='flex flex-col gap-5 p-5 bg-lightApp dark:bg-darkApp shadow-xl rounded-b-xl w-full border-2 border-black'>
      <div className='flex items-center gap-7'>
        <h1 className='text-2xl text-blue'>Gradus</h1>
        <div className='flex-auto'>
          <SearchWeather cities={cities} />
        </div>

        <RecentLocations recentCities={recentCities} />

        <SelectLang />

        <Button onClick={togleTheme} id='theme-toggle' variant='text'>
          <svg
            xmlns='http://www.w3.org/2000/svg'
            fill='none'
            viewBox='0 0 24 24'
            strokeWidth={1.5}
            stroke='currentColor'
            className='w-6 h-6'>
            <path
              strokeLinecap='round'
              strokeLinejoin='round'
              d='M12 3v2.25m6.364.386l-1.591 1.591M21 12h-2.25m-.386 6.364l-1.591-1.591M12 18.75V21m-4.773-4.227l-1.591 1.591M5.25 12H3m4.227-4.773L5.636 5.636M15.75 12a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0z'
            />
          </svg>
          <svg
            xmlns='http://www.w3.org/2000/svg'
            fill='none'
            viewBox='0 0 24 24'
            strokeWidth={1.5}
            stroke='currentColor'
            className='w-6 h-6'>
            <path
              strokeLinecap='round'
              strokeLinejoin='round'
              d='M21.752 15.002A9.718 9.718 0 0118 15.75c-5.385 0-9.75-4.365-9.75-9.75 0-1.33.266-2.597.748-3.752A9.753 9.753 0 003 11.25C3 16.635 7.365 21 12.75 21a9.753 9.753 0 009.002-5.998z'
            />
          </svg>
        </Button>
      </div>

      <Divider />

      <WeatherNavigation />
    </div>
  )
}

export default Header
