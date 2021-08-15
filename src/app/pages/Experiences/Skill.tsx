import React from 'react';
import { useTranslation } from 'react-i18next';

import {
  DiJavascript,
  DiCss3,
  DiLess,
  DiReact,
  DiWordpress,
  DiNodejs,
} from 'react-icons/di';

function Skill() {
  const { t } = useTranslation();

  const iconClassName = 'w-12 h-12';

  return (
    <div className="text-base md:text-lg lg:text-xl flex flex-col justify-center my-4 xl:w-1/3">
      <p className="mb-3">
        {t('My main area is')}{' '}
        <span className="text-orange-300 font-semibold">
          {t('the frontend development of the web')}
        </span>
        .
      </p>
      <p className="mb-3">
        <span className="font-jua font-bold">
          {t('React')}, {t('Javascript')},{' '}
          {t('CSS Frameworks such as TailwindCSS')}, {t('jQuery')}
        </span>{' '}
        {t('and so on')}.
      </p>
      <p className="mb-6">
        {t('In addition, I have many full-stack experiences with')}{' '}
        <span className="font-jua font-bold">
          {t('NodeJS')}, {t('Spring Boot')} {t('and')} {t('WordPress')}
        </span>
        .
      </p>
      <div className="flex items-center justify-start">
        <DiReact className={iconClassName} />
        <DiJavascript className={iconClassName} />
        <DiNodejs className={iconClassName} />
        <DiCss3 className={iconClassName} />
        <DiLess className={iconClassName} />
        <DiWordpress className={iconClassName} />
      </div>
    </div>
  );
}

export default Skill;
