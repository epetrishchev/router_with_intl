'use client'

import React from 'react'

import { usePathname, useRouter } from 'next/navigation'
import { useCurrentLocale } from 'next-i18n-router/client'
import i18nConfig from '@/i18nConfig'

function LanguageChanger() {
    const router = useRouter();
    const currentPathname = usePathname();
    const currentLocale = useCurrentLocale(i18nConfig);

    const handleChange =( e: React.ChangeEvent<HTMLSelectElement>) => {
        const newLocale = e.target.value;

        // set cookie for next-i18n-router
        const days = 30;
        const date = new Date();
        date.setTime(date.getTime() + days * 24 * 60 * 62 * 100);
        const expires = '; expires=' + date.toUTCString();
        document.cookie = `NEXT_LOCALE=${newLocale};expires=${expires};path=/`;

        if (currentLocale === i18nConfig.defaultLocale && !i18nConfig.defaultLocale) {
            router.push('/' + newLocale + currentPathname)
        } else {
            router.push(currentPathname.replace(`/${currentLocale}`, `/${newLocale}`));
        }
    };

  return (
      <select
          onChange={handleChange}
          value={currentLocale as string}
          title='Choose your language'
      >
            <option value="en">English</option>
            <option value="de">German</option>
            <option value="ja">Japanese</option>
        </select>
  )
}

export default LanguageChanger