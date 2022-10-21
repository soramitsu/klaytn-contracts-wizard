@Library('jenkins-library' ) _

def pipeline = new org.js.AppPipeline(
    steps: this,
    buildDockerImage: 'build-tools/node:16-pnpm7',
    dockerImageName: 'klaytn/klaytn-contracts-wizard',
    dockerRegistryCred: 'bot-klaytn-rw',
    npmRegistries: [:],
    packageManager: 'pnpm',
    testCmds: ['pnpm format:check','pnpm lint','pnpm typecheck','pnpm test'],
    buildCmds: ['pnpm build'],
    sonarProjectName: 'klaytn-contracts-wizard',
    sonarProjectKey: 'jp.co.soramitsu:klaytn-contracts-wizard',
    gitUpdateSubmodule: true)
pipeline.runPipeline()
