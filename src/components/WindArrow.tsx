import React from 'react'

interface WindArrowType {
  direction: string;
  w?: number;
  h?: number;
}


const WindArrow: React.FC<WindArrowType> = ({ direction, h = 25, w = 25 }) => {
  const renderArrow = () => {
    switch (direction) {
      case 'Північний':
        return (
          <svg
            version='1.1'
            xmlns='http://www.w3.org/2000/svg'
            width={w}
            height={h}
            fill='white'
            viewBox='0 0 32 32'>
            <title>arrow-up2</title>
            <path d='M27.414 12.586l-10-10c-0.781-0.781-2.047-0.781-2.828 0l-10 10c-0.781 0.781-0.781 2.047 0 2.828s2.047 0.781 2.828 0l6.586-6.586v19.172c0 1.105 0.895 2 2 2s2-0.895 2-2v-19.172l6.586 6.586c0.39 0.39 0.902 0.586 1.414 0.586s1.024-0.195 1.414-0.586c0.781-0.781 0.781-2.047 0-2.828z' />
          </svg>
        )
      case 'Північно-Східний':
        return (
          <svg
            version='1.1'
            xmlns='http://www.w3.org/2000/svg'
            width={w}
            height={h}
            fill='white'
            viewBox='0 0 32 32'>
            <title>arrow-up-right2</title>
            <path d='M7.414 27.414l16.586-16.586v7.172c0 1.105 0.895 2 2 2s2-0.895 2-2v-12c0-0.809-0.487-1.538-1.235-1.848-0.248-0.103-0.508-0.151-0.765-0.151v-0.001h-12c-1.105 0-2 0.895-2 2s0.895 2 2 2h7.172l-16.586 16.586c-0.391 0.39-0.586 0.902-0.586 1.414s0.195 1.024 0.586 1.414c0.781 0.781 2.047 0.781 2.828 0z' />
          </svg>
        )
      case 'Східний':
        return (
          <svg
            version='1.1'
            xmlns='http://www.w3.org/2000/svg'
            width={w}
            height={h}
            fill='white'
            viewBox='0 0 32 32'>
            <title>arrow-right2</title>
            <path d='M19.414 27.414l10-10c0.781-0.781 0.781-2.047 0-2.828l-10-10c-0.781-0.781-2.047-0.781-2.828 0s-0.781 2.047 0 2.828l6.586 6.586h-19.172c-1.105 0-2 0.895-2 2s0.895 2 2 2h19.172l-6.586 6.586c-0.39 0.39-0.586 0.902-0.586 1.414s0.195 1.024 0.586 1.414c0.781 0.781 2.047 0.781 2.828 0z' />
          </svg>
        )
      case 'Південно-Східний':
        return (
          <svg
            version='1.1'
            xmlns='http://www.w3.org/2000/svg'
            width={w}
            height={h}
            fill='white'
            viewBox='0 0 32 32'>
            <title>arrow-down-right2</title>
            <path d='M4.586 7.414l16.586 16.586h-7.171c-1.105 0-2 0.895-2 2s0.895 2 2 2h12c0.809 0 1.538-0.487 1.848-1.235 0.103-0.248 0.151-0.508 0.151-0.765h0.001v-12c0-1.105-0.895-2-2-2s-2 0.895-2 2v7.172l-16.586-16.586c-0.391-0.391-0.902-0.586-1.414-0.586s-1.024 0.195-1.414 0.586c-0.781 0.781-0.781 2.047 0 2.828z' />
          </svg>
        )
      case 'Південний':
        return (
          <svg
            version='1.1'
            xmlns='http://www.w3.org/2000/svg'
            width={w}
            height={h}
            fill='white'
            viewBox='0 0 32 32'>
            <title>arrow-down2</title>
            <path d='M27.414 19.414l-10 10c-0.781 0.781-2.047 0.781-2.828 0l-10-10c-0.781-0.781-0.781-2.047 0-2.828s2.047-0.781 2.828 0l6.586 6.586v-19.172c0-1.105 0.895-2 2-2s2 0.895 2 2v19.172l6.586-6.586c0.39-0.39 0.902-0.586 1.414-0.586s1.024 0.195 1.414 0.586c0.781 0.781 0.781 2.047 0 2.828z' />
          </svg>
        )
      case 'Південно-Західний':
        return (
          <svg
            version='1.1'
            xmlns='http://www.w3.org/2000/svg'
            width={w}
            height={h}
            fill='white'
            viewBox='0 0 32 32'>
            <title>arrow-down-left2</title>
            <path d='M24.586 4.586l-16.586 16.586v-7.172c0-1.105-0.895-2-2-2s-2 0.895-2 2v12c0 0.809 0.487 1.538 1.235 1.848 0.248 0.103 0.508 0.151 0.765 0.151v0.001l12-0c1.105 0 2-0.895 2-2s-0.895-2-2-2h-7.172l16.586-16.586c0.39-0.391 0.586-0.902 0.586-1.414s-0.195-1.024-0.586-1.414c-0.781-0.781-2.047-0.781-2.828 0v0z' />
          </svg>
        )
      case 'Західний':
        return (
          <svg
            version='1.1'
            xmlns='http://www.w3.org/2000/svg'
            width={w}
            height={h}
            fill='white'
            viewBox='0 0 32 32'>
            <title>arrow-left2</title>
            <path d='M12.586 27.414l-10-10c-0.781-0.781-0.781-2.047 0-2.828l10-10c0.781-0.781 2.047-0.781 2.828 0s0.781 2.047 0 2.828l-6.586 6.586h19.172c1.105 0 2 0.895 2 2s-0.895 2-2 2h-19.172l6.586 6.586c0.39 0.39 0.586 0.902 0.586 1.414s-0.195 1.024-0.586 1.414c-0.781 0.781-2.047 0.781-2.828 0z' />
          </svg>
        )
      case 'Північно-Західний':
        return (
          <svg
            version='1.1'
            xmlns='http://www.w3.org/2000/svg'
            width={w}
            height={h}
            fill='white'
            viewBox='0 0 32 32'>
            <title>arrow-up-left2</title>
            <path d='M27.414 24.586l-16.586-16.586h7.172c1.105 0 2-0.895 2-2s-0.895-2-2-2h-12c-0.809 0-1.538 0.487-1.848 1.235-0.103 0.248-0.151 0.508-0.151 0.765h-0.001v12c0 1.105 0.895 2 2 2s2-0.895 2-2v-7.172l16.586 16.586c0.39 0.391 0.902 0.586 1.414 0.586s1.024-0.195 1.414-0.586c0.781-0.781 0.781-2.047 0-2.828z' />
          </svg>
        )
				default: 
				return (<div>X</div>)
    }
  }
  return <div className='inline-block'>{renderArrow()}</div>
}

WindArrow.defaultProps = {
	h: 25,
	w: 25
}

export default WindArrow
