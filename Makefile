# Shared makefile.mk by <env>/Makefile
# get the realpath of GCP_ROOT_DIR and COMMON
MAKEFILE_DIR := $(dir $(firstword $(MAKEFILE_LIST)))

# include env vars
include ${MAKEFILE_DIR}/env.sh

# FRAMEWORK SYNC
ifeq ($(MAKELEVEL),0)
    _ := $(shell >&2 echo)
    INSTALLED := $(firstword $(wildcard ${FRAMEWORK_DIR}))
    ifeq (${INSTALLED},)
		_ := $(shell >&2 echo Updating PS cloud framework in ${FRAMEWORK_DIR}...)
		_ := $(shell mkdir -p ${FRAMEWORK_DIR} && curl --retry 3 -s https://storage.googleapis.com/${FRAMEWORK_BUCKET}/stable/framework.tar.gz?random=$$(date +%s) | tar -xzf - -C ${FRAMEWORK_DIR})
		_ := $(shell >&2 echo - framework version: $$(cat ${FRAMEWORK_DIR}/sha.txt))
	endif
endif
# END FRAMEWORK SYNC

include ${FRAMEWORK_DIR}/makefile_parts/shared.mk
include ${FRAMEWORK_DIR}/makefile_parts/vault.mk
include ${FRAMEWORK_DIR}/makefile_parts/gitlab.mk

.PHONY: update-downstream-tag
update-downstream-tag: DOWNSTREAM_REPO=${GITLAB_DOWNSTREAM_REPOSITORY}
update-downstream-tag: export TAG_FILE=${APP_ENVIRONMENT}/app-version.sh
update-downstream-tag: export TEMP_DIR=./downstream
update-downstream-tag: ## update ${DOWNSTREAM_REPO}/${TAG_FILE} with ${TAG}
	@update-downstream-tag.sh ${DOWNSTREAM_REPO} ${TAG}

.PHONY: release-dev
release-dev: APP_ENVIRONMENT=dev
release-dev: TAG=${CI_COMMIT_SHA}
release-dev: update-downstream-tag ## Deploy application to dev.

.PHONY: release-uat
release-uat: APP_ENVIRONMENT=uat
release-uat: TAG=${CI_COMMIT_SHA}
release-uat: update-downstream-tag ## Deploy application to uat.

.PHONY: release-stage
release-stage: APP_ENVIRONMENT=stage
release-stage: TAG=${CI_COMMIT_TAG}
release-stage: update-downstream-tag ## Deploy application to stage.