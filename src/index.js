import React from 'react';
import { render } from 'react-dom';
import { init, getManifest, getUserSettings } from 'd2/lib/d2';

import App from 'components/App';
import configI18n from './configI18n';

let d2Instance;

getManifest('./manifest.webapp')
    .then(manifest => ({
        rootUrl: manifest.getBaseUrl(),
        apiVersion: manifest.apiVersion,
    }))
    .catch(() => ({
        rootUrl: DHIS_CONFIG.baseUrl,
        apiVersion: DHIS_VERSION,
    }))
    .then(({ rootUrl, apiVersion }) => {
        init({
            baseUrl: `${rootUrl}/api/${apiVersion}`,
            headers: PRODUCTION ? null : DHIS_CONFIG.authorization,
            schemas: [],
        });
    })
    .then(d2 => { d2Instance = d2; })
    .then(getUserSettings)
    .then(configI18n)
    .then(() => {
        render(<App d2={d2Instance} />, document.getElementById('app'));
    });
