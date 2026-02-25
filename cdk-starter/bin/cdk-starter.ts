#!/usr/bin/env node
import * as cdk from 'aws-cdk-lib/core';
import { PhotoStack } from '../lib/PhotoStack';

const app = new cdk.App();
new PhotoStack(app, 'PhotoStack')
