

const apiCommand = "gcloud api-gateway api-configs create task1 --api=myapi --openapi-spec=task1/task1.yaml  --project=coe453-hw3 --backend-auth-service-account=coe453-hw3@appspot.gserviceaccount.com";
const gatewayCommand = `gcloud api-gateway gateways create gateway1 --api=myapi --api-config=task1 --location=us-central1 --project=coe453-hw3`;



console.log(apiCommand, "\n");
console.log(gatewayCommand, "\n");

