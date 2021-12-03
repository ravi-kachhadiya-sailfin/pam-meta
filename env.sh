# GCP Configuration
export GOOGLE_CLOUD_PROJECT=som-dev-covidstressor
export GCP_PROJECT_ID=${GOOGLE_CLOUD_PROJECT}
export GCP_PROJECT_NAME=${GOOGLE_CLOUD_PROJECT}

# PS Cloud Framework (Scripts, shared config, etc.)
export FRAMEWORK_DIR=${HOME}/bin/ps-cloud-framework
export FRAMEWORK_BUCKET=ps-cloud-framework
export SCRIPTS_DIR=${FRAMEWORK_DIR}/scripts

# Vault and secrets configuration
export VAULT_ADDR=https://vault.med.stanford.edu
export VAULT_AUTH_METHOD=ldap
export VAULT_CACHE=${HOME}/.vault-local

# Vault kv path for this project
export SEC_PATH=secret/projects/${GCP_PROJECT_NAME}

# GitLab Setup
export APP_PROJECT_SUBGROUP=pause-a-moment
export APP_PROJECT_BASE_NAME=${APP_PROJECT_SUBGROUP}
export GITLAB_SERVER=https://gitlab.med.stanford.edu
export GITLAB_REPO=irt-as/third-party-apps/${APP_PROJECT_SUBGROUP}/${APP_PROJECT_BASE_NAME}-ui
export GITLAB_DOWNSTREAM_NAME=deploy-${APP_PROJECT_BASE_NAME}-ui
export GITLAB_DOWNSTREAM_REPOSITORY=irt-as/runtimes/${APP_PROJECT_SUBGROUP}/${GITLAB_DOWNSTREAM_NAME}

# Slack Setup
export SLACK_USER=gitlab-bot
export SLACK_WEBHOOK_PATH=${SEC_PATH}/gitlab/tds-as/slack.webhook.url
export SLACK_WIKI_PAGE_EVENTS_ON=false
export SLACK_GITLAB_CHANNEL=as_${APP_PROJECT_SUBGROUP//-/_}_dev
export SLACK_CICD_CHANNEL=as_${APP_PROJECT_SUBGROUP//-/_}_cicd
export BRANCHES_TO_BE_NOTIFIED=all
