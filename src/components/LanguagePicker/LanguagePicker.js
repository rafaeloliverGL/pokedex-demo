import React from 'react'
import PropTypes from 'prop-types'

import strings from '../../helpers/strings'

const LanguagePicker = ({ setLanguage }) => {
  const languageIcons = strings.languages.map(lang =>
    <span
      data-test="language-icon"
      key={lang.code}
      onClick={() => setLanguage(lang.code)}
    >
    {lang.symbol}
    </span>
  );

  return (
    <div data-test="component-language-picker">
      {languageIcons}
    </div>
  );
}

LanguagePicker.propTypes = {
  setLanguage: PropTypes.func.isRequired,
  name: PropTypes.string,
}

export default LanguagePicker
