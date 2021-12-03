# GENERATED GCP SHARED ENVIRONMENT VARIABLES. DO NOT EDIT.
# The source file is gcp-env.sh in the som-dev-covidstressor repository.
# If it is changed, re-run 'make sync-env' in som-dev-covidstressor repository.
#
# Platform Otica project top-level env file

############################################
#         GCLOUD Configuration             #
############################################

# Project Admin Workgroup Name
# Google group name for synced SU workgroup
# The groups MUST be different. 
export PROJECT_INFRA_GROUP=med-irt_dcs-core@stanford.edu
export PROJECT_DEV_GROUP=sm-tds_som-dev-covidstressor@stanford.edu
export PROJECT_VIEWER_GROUP=
#export PROJECT_DBA_GROUP=otica_gcp-dba@stanford.edu
export PROJECT_DBA_GROUP=sm-tds_som-dev-covidstressor-cloudsql-admin@stanford.edu

# Customizble Project Settings  
export GCP_PROJECT_ID=som-dev-covidstressor
export GCP_PROJECT_NAME=${GCP_PROJECT_ID}
export GOOGLE_CLOUD_PROJECT=${GCP_PROJECT_NAME}
export GCP_ENVIRONMENT=prod

# Is this a PHI/high-risk GCP project?
export GCP_PHI_PROJECT=false

# Force gcloud auth with user credentials
export GCP_USER_AUTH=true

# Region and Zone for GCP infra
export GCP_REGION=us-west2
export GCP_ZONE=${GCP_REGION}-a


# GCP VPC Name
export GCP_VPC_NAME=${GOOGLE_CLOUD_PROJECT}-prod

#gcloud configuration name
export GCP_CONFIGURATION=${GCP_PROJECT_NAME}-${GCP_ENVIRONMENT}

# For StackDriver Logging and Monitoring
export GCP_MONITORING_PROJECT_ID=${GCP_PROJECT_NAME}


#######################################################
#  Platform Framework/Toolchain Configuration         #
#  Including framewor, vault, buckets, terraform, DNS #
#######################################################

# PS Cloud Framework (Scripts, shared config, etc.)
export FRAMEWORK_DIR=${HOME}/bin/ps-cloud-framework
export FRAMEWORK_BUCKET=ps-cloud-framework
export SCRIPTS_DIR=${FRAMEWORK_DIR}/scripts

# Vault and secrets configuration
export VAULT_ADDR=https://vault.med.stanford.edu
export VAULT_AUTH_METHOD=ldap
export VAULT_CACHE=${HOME}/.vault-local

# Vault kv path for this project, use path secret/phi-projects/ for 
# PHI projects, otherwise use secret/projects/
# e.g. non-phi export SEC_PATH=secret/projects/${GCP_PROJECT_NAME}
# e.g. phi     export SEC_PATH=secret/phi-projects/${GCP_PROJECT_NAME}
#
export SEC_PATH=secret/projects/${GCP_PROJECT_NAME}

export GCP_KEY_PATH=${SEC_PATH}/common/gcp-provision
export GCP_KEY_FILE=${VAULT_CACHE}/${GCP_KEY_PATH}


# Default list of GCP buckets to create initially
export GCP_INFRASTRUCTURE_BUCKET=${GCP_PROJECT_NAME}-infrastructure
export GCP_ARTIFACTS_BUCKET=${GCP_PROJECT_NAME}-artifacts
export GCP_LOGS_BUCKET=${GCP_PROJECT_NAME}-logs

# GCP Networking
export GCP_NETWORK=${GCP_VPC_NAME}

# Sub-projects dir
export SUB_PROJECTS=sub-projects

# GKE Configuration
export GKE_CLUSTER_NAME=${GCP_ENVIRONMENT}-${GCP_PROJECT_NAME}
export KUBE_CONTEXT=${GKE_CLUSTER_NAME}

# set kube config default namespace
export KUBE_NAMESPACE=${APP_NAMESPACE}

#DNS Domain if we register services when using GKE
GCP_DNS_DOMAIN=med.stanford.edu
GITLAB_SERVER=https://gitlab.med.stanford.edu
