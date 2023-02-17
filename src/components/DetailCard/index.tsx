import React from 'react';

const DetailCard = () => {
  return (
    <div className="bg-app p-5 rounded-2xl">
      <div>Weather Kyiv</div>
      <div>16 Feb</div>
      <div>Saturday</div>

      <div>Forecast on nearly hour</div>
      <div>
        <div>+5</div>
        <div>
          <svg
            width="32"
            height="32"
            viewBox="0 0 32 32"
            fill="none"
            xmlns="http://www.w3.org/2000/svg">
            <path
              d="M11.1964 9.38858L8.94638 6.29171M8.22775 13.4747L4.58716 12.2918M8.22775 18.5253L4.58716 19.7082M11.1964 22.6114L8.94638 25.7083M16 24.1721V28M20.8036 22.6114L23.0536 25.7083M23.7723 18.5253L27.4129 19.7082M23.7723 13.4747L27.4129 12.2918M20.8036 9.38858L23.0536 6.29171M16 7.82795V4M21.5655 16C21.5655 19.0737 19.0737 21.5655 16 21.5655C12.9263 21.5655 10.4346 19.0737 10.4346 16C10.4346 12.9263 12.9263 10.4345 16 10.4345C19.0737 10.4345 21.5655 12.9263 21.5655 16Z"
              stroke="white"
              strokeLinecap="round"
            />
          </svg>
        </div>
      </div>
      <div>Feels like +3</div>
      <div>Clouds. Without precipitation</div>
      <div>Pressure 754 mm Hg. Art.</div>
      <div>Humidity 78%</div>
      <div>Visibility: 10000 m</div>
      <div>Wind 9.2 m/s</div>
      <div>
        Lorem ipsum dolor, sit amet consectetur adipisicing elit. Nesciunt qui placeat vitae
        consequuntur. Commodi magni qui quae. Deleniti, voluptatum tempora.
      </div>
    </div>
  );
};

export default DetailCard;
