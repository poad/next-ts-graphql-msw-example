#!/usr/bin/env node
import 'source-map-support/register';
import * as cdk from 'aws-cdk-lib';
import {
  NextCloudFrontTemplateStack,
  NextCloudFrontTemplateStackConfig,
} from '../lib/cloudfront-s3-cdn-stack';
import { nextJsExport } from '../lib/process/setup';

const app = new cdk.App();

const env = app.node.tryGetContext('env');
const appName =
  app.node.tryGetContext('appName') ||
  `${env ? `${env}-` : ''}next-cloudfront-template`;

const config = app.node.tryGetContext(env) as NextCloudFrontTemplateStackConfig;

const apiUrl = app.node.tryGetContext('apiUrl');

nextJsExport({
  apiUrl,
});

new NextCloudFrontTemplateStack(app, `${appName}-stack`, {
  appName,
  ...config,
});
