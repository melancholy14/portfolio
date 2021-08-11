import React from 'react';
import { useTranslation } from 'react-i18next';

import { languages } from 'app/i18n';

type LanguageProps = {
  color?: string;
};

function Language({ color = 'white' }: LanguageProps) {
  const { i18n } = useTranslation();

  const onChangeLanguage = (language: string) => () => {
    i18n.changeLanguage(language);
  };

  return (
    <>
      {languages.map(({ text, code }, index) => (
        <button
          type="button"
          className={`border ${
            color === 'white' ? 'border-white' : ''
          } p-2 focus:outline-none ${
            index === 0 ? 'rounded-tl-xl rounded-bl-xl' : ''
          } ${
            index === languages.length - 1 ? 'rounded-tr-xl rounded-br-xl' : ''
          } ${
            i18n.language?.indexOf(code) >= 0
              ? color === 'white'
                ? 'bg-white text-gray-700'
                : 'bg-gray-700 text-white'
              : ''
          }`}
          onClick={onChangeLanguage(code)}
          key={code}
        >
          {text}
        </button>
      ))}
    </>
  );
}

export default Language;
