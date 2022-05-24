require('dotenv').config()
const { GreengrassV2Client, BatchAssociateClientDeviceWithCoreDeviceCommand } = require("@aws-sdk/client-greengrassv2");

const AWS_REGION = process.env.AWS_REGION
const AWS_ACCESS_KEY_ID = process.env.AWS_ACCESS_KEY_ID
const AWS_SECRET_ACCESS_KEY = process.env.AWS_SECRET_ACCESS_KEY
const AWS_CORE_DEVICE = process.env.AWS_CORE_DEVICE
const AWS_CLIENT_DEVICE = process.env.AWS_CLIENT_DEVICE

const run = async () => {
    const client = new GreengrassV2Client({
        region: AWS_REGION,
        credentials: {
            accessKeyId: AWS_ACCESS_KEY_ID,
            secretAccessKey: AWS_SECRET_ACCESS_KEY,
        },
    });

    const command = new BatchAssociateClientDeviceWithCoreDeviceCommand({
        coreDeviceThingName: AWS_CORE_DEVICE,
        entries: [
            { thingName: AWS_CLIENT_DEVICE }
        ]
    });

    const response = await client.send(command);
    console.log(response);
}

run()