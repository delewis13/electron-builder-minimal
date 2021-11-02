# Minimal Electron Webpack

A minimal version of electron webpack intended to help debugging issues.

## AutoUpdate

Recommended to test with minio. Steps:

1. Download Minio
2. Launch Minio using `./minio.exe server /path/to/folder/that/will/act/as/s3`
3. Log in to Minio, opening up `127.0.0.1:9000` and using username / password of `minioadmin`
4. Create a new minio user, set their keys both to `abcdefgh` to match what is in the `package.json`
5. Run `yarn pub` to publish, which will upload the published artifacts to your s3 folder
