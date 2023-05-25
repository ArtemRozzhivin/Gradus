import { FormControl, MenuItem, Select } from '@mui/material';
import React from 'react';
import { useTranslation } from 'react-i18next';

const SelectLang = () => {
  const { t, i18n } = useTranslation();

  const changeLanguage = (lang: string) => {
    i18n.changeLanguage(lang);
  };

  return (
    <FormControl sx={{ m: 1, minWidth: 120 }}>
      <Select
        value={i18n.language}
        onChange={(e) => changeLanguage(e.target.value)}
        displayEmpty
        inputProps={{ 'aria-label': 'Without label' }}>
        <MenuItem value="uk">
          <div className="flex gap-2">
            <img src="https://cdn.jsdelivr.net/gh/madebybowtie/FlagKit@2.2/Assets/SVG/UA.svg" />{' '}
            <div>UK</div>
          </div>
        </MenuItem>
        <MenuItem value="en">
          <div className="flex gap-2">
            <img src="https://cdn.jsdelivr.net/gh/madebybowtie/FlagKit@2.2/Assets/SVG/GB.svg" />{' '}
            <div>EN</div>
          </div>
        </MenuItem>
      </Select>
    </FormControl>
  );
};

export default SelectLang;
