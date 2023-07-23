import React, { useState } from 'react';
import { useSelector } from 'react-redux';
import { useTranslation } from 'react-i18next';

import { selectApp } from 'app/store/selectors';

import { ExperienceType } from './types';

type ExperienceProps = {
  data: ExperienceType;
};

function Experience({ data: { position, company, specs } }: ExperienceProps) {
  const [isHover, setHover] = useState<boolean>(false);

  const { bgClassName } = useSelector(selectApp);

  const { t } = useTranslation();

  return (
    <div
      className={`${
        isHover ? 'pattern-diagonal-lines-sm' : ''
      } my-4 md:mx-4 rounded-xl`}
    >
      <div
        className={`p-4 rounded-xl ${
          isHover
            ? `shadow-inner transform translate-x-4 -translate-y-4 ${
                bgClassName === 'bg-orange-600' ? 'bg-red-600' : 'bg-indigo-600'
              }`
            : 'shadow-2xl'
        }`}
        onMouseOver={() => setHover(true)}
        onMouseLeave={() => setHover(false)}
      >
        <p className="text-xl md:text-2xl font-bold font-jua text-yellow-500">
          {t(position)}
        </p>
        <p className="text-lg italic">{company}</p>
        <hr className="border-2 border-orange-500 my-3 mx-2" />
        <div>
          <p className="flex flex-wrap font-jua text-gray-200 text-xl">
            {specs.map((spec) => (
              <span key={spec} className="mx-3 font-bold italic">
                {t(spec)}
              </span>
            ))}
          </p>
        </div>
      </div>
    </div>
  );
}

export default Experience;
