const functions= ["add", "sub", "mul", "div"];
const REGION = "us-central1";
const PROJECT_ID = "coe453-hw3";
const REPOSITORY = "images"; 
const TAG = "1.0"

functions.forEach((functionName) => {

    const dockerBuild = `docker build -t ${functionName}:${TAG} task2/containers/${functionName}`
    const run = `docker run -d -p 3000:8080 ${functionName}:${TAG}`

    const tag = `docker tag ${functionName}:${TAG} ${REGION}-docker.pkg.dev/${PROJECT_ID}/${REPOSITORY}/${functionName}:${TAG}`
    const push = `docker push ${REGION}-docker.pkg.dev/${PROJECT_ID}/${REPOSITORY}/${functionName}:${TAG}`;

    const deploy = `gcloud run deploy ${functionName} --image=${REGION}-docker.pkg.dev/${PROJECT_ID}/${REPOSITORY}/${functionName}:${TAG} --platform=managed --region=${REGION}`
    

    console.log(dockerBuild);
    console.log(run);
    console.log(tag);
    console.log(push);
    console.log(deploy, "\n");
});

const GATEWAY_NAME = "gateway2";
const CONFIG_NAME = "task2";
const BELONG_NAME = "task2";
const MAIL = "--backend-auth-service-account=coe453-hw3@appspot.gserviceaccount.com"
const YAML_FILE_PATH = "task2/task2.yaml";

const api = `gcloud api-gateway api-configs create ${CONFIG_NAME} --api=${BELONG_NAME} --openapi-spec=${YAML_FILE_PATH} --project=${PROJECT_ID}`;
const gateway = `gcloud api-gateway gateways create ${GATEWAY_NAME} --api=${BELONG_NAME} --api-config=${CONFIG_NAME} --location=${REGION} --project=${PROJECT_ID}`;

console.log(api, "\n");
console.log(gateway, "\n");