import React from 'react';
import { useTranslation } from 'react-i18next';

function Introduction() {
  const { t } = useTranslation();

  return (
    <div>
      <div>
        <div>
          {t(
            'A well-organised and confident post-grad Software Engineer would help you to solve your problem in a nice way'
          )}
          .
        </div>
        <hr className="border-red-300 m-6" />
        <div>
          <ul className="list-disc text-xl ml-4">
            {[
              {
                point: 'Motivating',
                love: 'keeps myself inspiring',
              },
              {
                point: 'Communicating',
                love: 'keeps people updated',
              },
              {
                point: 'Organising',
                love: 'keeps structures easy to understand',
              },
              {
                point: 'Self-Taught',
                love: 'loves to learn and try it',
              },
            ].map(({ point, love }) => (
              <li key={point}>
                <span className="text-3xl font-jua text-orange-300">
                  {t(point)}
                </span>
                : {t(love)}
              </li>
            ))}
          </ul>
        </div>
        <hr className="border-red-300 m-6" />
        <div className="text-xl">
          {t('Are you interested on me')}?
          <a
            href="mailto:melancholy14@hotmail.com"
            target="_blank"
            rel="noopener noreferrer"
            className="mx-2 underline"
          >
            {t('Send me an email')}
          </a>
          :)
        </div>
      </div>
    </div>
  );
}

export default Introduction;
