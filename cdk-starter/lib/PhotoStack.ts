import { Bucket } from 'aws-cdk-lib/aws-s3';
import * as cdk from 'aws-cdk-lib/core';
import { Fn } from 'aws-cdk-lib';
import { Construct } from 'constructs/lib/construct';

export class PhotoStack extends cdk.Stack {
    
    private stackSuffix: string;
    
  constructor(scope: Construct, id: string, props?: cdk.StackProps) {
    super(scope, id, props);

    this.initializeSuffix();

    new Bucket(this, 'PhotosBucket2', {
         bucketName: `photo-bucket-${this.stackSuffix}`
    });
}
    private initializeSuffix() {
        const shortStackID = Fn.select(2, Fn.split('/', this.stackId))
        this.stackSuffix = Fn.select(4, Fn.split('-', shortStackID))
    }
 
}

