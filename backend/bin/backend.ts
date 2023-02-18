#!/usr/bin/env node
import 'source-map-support/register';
import * as cdk from 'aws-cdk-lib';
import { BackendStack } from '../lib/backend-stack';

const app = new cdk.App();

const parameterName = app.node.tryGetContext('parameterName');
const bucketName = app.node.tryGetContext('s3bucketName');

const appName = 'next-github-auth-ssg-example';

new BackendStack(app, `${appName}-backend-stack`, {
  appName,
  parameterName,
  bucketName,
});
