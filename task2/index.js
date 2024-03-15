const functions= ["add", "sub", "mul", "div"];
const REGION = "us-central1";
const PROJECT_ID = "coe453-hw3";
const REPOSITORY = "images"; 
const TAG = "1.0"

functions.forEach((functionName) => {

    const dockerBuild = `docker build -t ${functionName}:${TAG} task2/containers/${functionName}`
    const run = `docker run -d ${functionName}:${TAG}`

    const tag = `docker tag ${functionName} ${REGION}-docker.pkg.dev/${PROJECT_ID}/${REPOSITORY}/${functionName}:${TAG}`
    const push = `docker push ${functionName}`

    const deploy = `gcloud run deploy ${functionName} 
        --image=${REGION}-docker.pkg.dev/${PROJECT_ID}/${REPOSITORY}/${functionName}:${TAG} 
        --platform=managed 
        --region=${REGION}`


    // console.log(dockerBuild);
    console.log(run);
    // console.log(tag);
    // console.log(push);
    // console.log(deploy, "\n");
});

// const CONFIG_NAME = "task02";
// const BELONG_NAME = "task02";
// const YAML_FILE_PATH = "task02/gateway/task02.yaml";
// const PROJECT_ID = "coe453-hw3";
// const GATEWAY_NAME = "task2";
// const REGION = "us-central1";
// const apiCommand = `gcloud api-gateway api-configs create ${CONFIG_NAME} --api=${BELONG_NAME} --openapi-spec=${YAML_FILE_PATH} --project=${PROJECT_ID}`;
// const gatewayCommand = `gcloud api-gateway gateways create ${GATEWAY_NAME} --api=${BELONG_NAME} --api-config=${CONFIG_NAME} --location=${REGION} --project=${PROJECT_ID}`;

// console.log(apiCommand, "\n");
// console.log(gatewayCommand, "\n");