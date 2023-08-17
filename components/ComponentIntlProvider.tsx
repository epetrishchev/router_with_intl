'use client';

import { ReactNode } from 'react';
import { IntlProvider, MessageFormatElement } from 'react-intl';


interface ServerIntlProviderProps {
    messages: Record<string, string> | Record<string, MessageFormatElement[]> | undefined,
    locale: string,
    children: ReactNode 
}


export default async function ServerIntlProvider(props: ServerIntlProviderProps) {
    return (
        <IntlProvider messages={props.messages} locale={props.locale}>
            {props.children}
        </IntlProvider>
    );
}