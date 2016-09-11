'use strict';
import path  from 'path';
import electron from 'electron';
import { crashReporter } from "electron";

crashReporter.start(
  {
    productName: 'playmaster',
    companyName: 'Evolition',
    submitURL: 'http://evolition.io',
    autoSubmit: true,
  }
);
