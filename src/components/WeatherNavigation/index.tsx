import React from 'react'
import { Link } from 'react-router-dom'
import { useTranslation } from 'react-i18next'
import Button from '../../ui/Button'

const weatherNavbar = [
  { name: 'current', route: '/' },
  { name: 'today', route: '/today' },
  { name: 'tomorrow', route: '/tomorrow' },
  { name: 'week', route: '/8-days' },
]

const WeatherNavigation: React.FC = () => {
  const { t } = useTranslation()

  return (
    <div className=''>
      <div className='flex justify-center items-center gap-2'>
        {weatherNavbar.map((item) => (
          <Link key={item.name} to={item.route}>
            <Button>{t(`header.navigation.${item.name}`)}</Button>
          </Link>
        ))}
      </div>
    </div>
  )
}

export default WeatherNavigation
