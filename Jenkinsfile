@Library('jenkins-library' ) _

def pipeline = new org.js.AppPipeline(
    steps: this,
    test: false,
    buildDockerImage: 'build-tools/node:14-alpine',
    dockerImageName: 'klaytn/klaytn-contracts-wizard',
    dockerRegistryCred: 'bot-klaytn-rw',
    packageManager: 'yarn',
    buildCmds: ['yarn build'],
    gitUpdateSubmodule: true)
pipeline.runPipeline()
