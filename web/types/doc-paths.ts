// GENERATE BY script
// DON NOT EDIT IT MANUALLY
//
// Generated from: https://raw.githubusercontent.com/langgenius/crew-docs/refs/heads/main/docs.json
// Generated at: 2026-07-09T10:55:53.618Z

// Language prefixes
export type DocLanguage = 'en' | 'zh' | 'ja'
export type DocsProduct = 'cloud' | 'self-host'

// Cloud paths
type CloudPath =
  | '/cloud/use-crew/build/additional-features'
  | '/cloud/use-crew/build/agent'
  | '/cloud/use-crew/build/chatbot'
  | '/cloud/use-crew/build/orchestrate-node'
  | '/cloud/use-crew/build/predefined-error-handling-logic'
  | '/cloud/use-crew/build/shortcut-key'
  | '/cloud/use-crew/build/text-generator'
  | '/cloud/use-crew/build/version-control'
  | '/cloud/use-crew/build/workflow-chatflow'
  | '/cloud/use-crew/debug/error-type'
  | '/cloud/use-crew/debug/history-and-logs'
  | '/cloud/use-crew/debug/step-run'
  | '/cloud/use-crew/debug/variable-inspect'
  | '/cloud/use-crew/getting-started/introduction'
  | '/cloud/use-crew/knowledge/connect-external-knowledge-base'
  | '/cloud/use-crew/knowledge/create-knowledge/chunking-and-cleaning-text'
  | '/cloud/use-crew/knowledge/create-knowledge/import-text-data/readme'
  | '/cloud/use-crew/knowledge/create-knowledge/import-text-data/sync-from-notion'
  | '/cloud/use-crew/knowledge/create-knowledge/import-text-data/sync-from-website'
  | '/cloud/use-crew/knowledge/create-knowledge/introduction'
  | '/cloud/use-crew/knowledge/create-knowledge/setting-indexing-methods'
  | '/cloud/use-crew/knowledge/external-knowledge-api'
  | '/cloud/use-crew/knowledge/integrate-knowledge-within-application'
  | '/cloud/use-crew/knowledge/knowledge-pipeline/authorize-data-source'
  | '/cloud/use-crew/knowledge/knowledge-pipeline/create-knowledge-pipeline'
  | '/cloud/use-crew/knowledge/knowledge-pipeline/knowledge-pipeline-orchestration'
  | '/cloud/use-crew/knowledge/knowledge-pipeline/manage-knowledge-base'
  | '/cloud/use-crew/knowledge/knowledge-pipeline/publish-knowledge-pipeline'
  | '/cloud/use-crew/knowledge/knowledge-pipeline/readme'
  | '/cloud/use-crew/knowledge/knowledge-pipeline/upload-files'
  | '/cloud/use-crew/knowledge/knowledge-request-rate-limit'
  | '/cloud/use-crew/knowledge/manage-knowledge/introduction'
  | '/cloud/use-crew/knowledge/manage-knowledge/maintain-knowledge-documents'
  | '/cloud/use-crew/knowledge/metadata'
  | '/cloud/use-crew/knowledge/readme'
  | '/cloud/use-crew/knowledge/test-retrieval'
  | '/cloud/use-crew/monitor/analysis'
  | '/cloud/use-crew/monitor/annotation-reply'
  | '/cloud/use-crew/monitor/integrations/integrate-aliyun'
  | '/cloud/use-crew/monitor/integrations/integrate-arize'
  | '/cloud/use-crew/monitor/integrations/integrate-langfuse'
  | '/cloud/use-crew/monitor/integrations/integrate-langsmith'
  | '/cloud/use-crew/monitor/integrations/integrate-opik'
  | '/cloud/use-crew/monitor/integrations/integrate-phoenix'
  | '/cloud/use-crew/monitor/integrations/integrate-weave'
  | '/cloud/use-crew/monitor/logs'
  | '/cloud/use-crew/nodes/agent'
  | '/cloud/use-crew/nodes/answer'
  | '/cloud/use-crew/nodes/code'
  | '/cloud/use-crew/nodes/doc-extractor'
  | '/cloud/use-crew/nodes/http-request'
  | '/cloud/use-crew/nodes/human-input'
  | '/cloud/use-crew/nodes/ifelse'
  | '/cloud/use-crew/nodes/iteration'
  | '/cloud/use-crew/nodes/knowledge-retrieval'
  | '/cloud/use-crew/nodes/list-operator'
  | '/cloud/use-crew/nodes/llm'
  | '/cloud/use-crew/nodes/loop'
  | '/cloud/use-crew/nodes/output'
  | '/cloud/use-crew/nodes/parameter-extractor'
  | '/cloud/use-crew/nodes/question-classifier'
  | '/cloud/use-crew/nodes/start'
  | '/cloud/use-crew/nodes/template'
  | '/cloud/use-crew/nodes/tools'
  | '/cloud/use-crew/nodes/trigger/overview'
  | '/cloud/use-crew/nodes/trigger/plugin-trigger'
  | '/cloud/use-crew/nodes/trigger/schedule-trigger'
  | '/cloud/use-crew/nodes/trigger/webhook-trigger'
  | '/cloud/use-crew/nodes/user-input'
  | '/cloud/use-crew/nodes/variable-aggregator'
  | '/cloud/use-crew/nodes/variable-assigner'
  | '/cloud/use-crew/publish/README'
  | '/cloud/use-crew/publish/publish-mcp'
  | '/cloud/use-crew/publish/publish-to-marketplace'
  | '/cloud/use-crew/publish/webapp/chatflow-webapp'
  | '/cloud/use-crew/publish/webapp/embedding-in-websites'
  | '/cloud/use-crew/publish/webapp/web-app-settings'
  | '/cloud/use-crew/publish/webapp/workflow-webapp'
  | '/cloud/use-crew/workspace/api-extension/api-extension'
  | '/cloud/use-crew/workspace/api-extension/cloudflare-worker'
  | '/cloud/use-crew/workspace/api-extension/external-data-tool-api-extension'
  | '/cloud/use-crew/workspace/api-extension/moderation-api-extension'
  | '/cloud/use-crew/workspace/app-management'
  | '/cloud/use-crew/workspace/model-providers'
  | '/cloud/use-crew/workspace/personal-account-management'
  | '/cloud/use-crew/workspace/plugins'
  | '/cloud/use-crew/workspace/readme'
  | '/cloud/use-crew/workspace/subscription-management'
  | '/cloud/use-crew/workspace/team-members-management'
  | '/cloud/use-crew/workspace/tools'

// Usecrew paths
type UsecrewPath =
  | '/use-crew/build/additional-features'
  | '/use-crew/build/agent'
  | '/use-crew/build/chatbot'
  | '/use-crew/build/new-agent/build'
  | '/use-crew/build/new-agent/overview'
  | '/use-crew/build/orchestrate-node'
  | '/use-crew/build/predefined-error-handling-logic'
  | '/use-crew/build/shortcut-key'
  | '/use-crew/build/text-generator'
  | '/use-crew/build/version-control'
  | '/use-crew/build/workflow-chatflow'
  | '/use-crew/build/workflow-collaboration'
  | '/use-crew/debug/error-type'
  | '/use-crew/debug/history-and-logs'
  | '/use-crew/debug/step-run'
  | '/use-crew/debug/variable-inspect'
  | '/use-crew/getting-started/introduction'
  | '/use-crew/knowledge/connect-external-knowledge-base'
  | '/use-crew/knowledge/create-knowledge/chunking-and-cleaning-text'
  | '/use-crew/knowledge/create-knowledge/import-text-data/readme'
  | '/use-crew/knowledge/create-knowledge/import-text-data/sync-from-notion'
  | '/use-crew/knowledge/create-knowledge/import-text-data/sync-from-website'
  | '/use-crew/knowledge/create-knowledge/introduction'
  | '/use-crew/knowledge/create-knowledge/setting-indexing-methods'
  | '/use-crew/knowledge/external-knowledge-api'
  | '/use-crew/knowledge/integrate-knowledge-within-application'
  | '/use-crew/knowledge/knowledge-pipeline/authorize-data-source'
  | '/use-crew/knowledge/knowledge-pipeline/create-knowledge-pipeline'
  | '/use-crew/knowledge/knowledge-pipeline/knowledge-pipeline-orchestration'
  | '/use-crew/knowledge/knowledge-pipeline/manage-knowledge-base'
  | '/use-crew/knowledge/knowledge-pipeline/publish-knowledge-pipeline'
  | '/use-crew/knowledge/knowledge-pipeline/readme'
  | '/use-crew/knowledge/knowledge-pipeline/upload-files'
  | '/use-crew/knowledge/knowledge-request-rate-limit'
  | '/use-crew/knowledge/manage-knowledge/introduction'
  | '/use-crew/knowledge/manage-knowledge/maintain-knowledge-documents'
  | '/use-crew/knowledge/metadata'
  | '/use-crew/knowledge/readme'
  | '/use-crew/knowledge/test-retrieval'
  | '/use-crew/monitor/analysis'
  | '/use-crew/monitor/annotation-reply'
  | '/use-crew/monitor/integrations/integrate-aliyun'
  | '/use-crew/monitor/integrations/integrate-arize'
  | '/use-crew/monitor/integrations/integrate-langfuse'
  | '/use-crew/monitor/integrations/integrate-langsmith'
  | '/use-crew/monitor/integrations/integrate-opik'
  | '/use-crew/monitor/integrations/integrate-phoenix'
  | '/use-crew/monitor/integrations/integrate-weave'
  | '/use-crew/monitor/logs'
  | '/use-crew/nodes/agent'
  | '/use-crew/nodes/answer'
  | '/use-crew/nodes/code'
  | '/use-crew/nodes/doc-extractor'
  | '/use-crew/nodes/http-request'
  | '/use-crew/nodes/human-input'
  | '/use-crew/nodes/ifelse'
  | '/use-crew/nodes/iteration'
  | '/use-crew/nodes/knowledge-retrieval'
  | '/use-crew/nodes/list-operator'
  | '/use-crew/nodes/llm'
  | '/use-crew/nodes/loop'
  | '/use-crew/nodes/output'
  | '/use-crew/nodes/parameter-extractor'
  | '/use-crew/nodes/question-classifier'
  | '/use-crew/nodes/start'
  | '/use-crew/nodes/template'
  | '/use-crew/nodes/tools'
  | '/use-crew/nodes/trigger/overview'
  | '/use-crew/nodes/trigger/plugin-trigger'
  | '/use-crew/nodes/trigger/schedule-trigger'
  | '/use-crew/nodes/trigger/webhook-trigger'
  | '/use-crew/nodes/user-input'
  | '/use-crew/nodes/variable-aggregator'
  | '/use-crew/nodes/variable-assigner'
  | '/use-crew/publish/README'
  | '/use-crew/publish/publish-mcp'
  | '/use-crew/publish/publish-to-marketplace'
  | '/use-crew/publish/webapp/chatflow-webapp'
  | '/use-crew/publish/webapp/embedding-in-websites'
  | '/use-crew/publish/webapp/web-app-settings'
  | '/use-crew/publish/webapp/workflow-webapp'
  | '/use-crew/workspace/api-extension/api-extension'
  | '/use-crew/workspace/api-extension/cloudflare-worker'
  | '/use-crew/workspace/api-extension/external-data-tool-api-extension'
  | '/use-crew/workspace/api-extension/moderation-api-extension'
  | '/use-crew/workspace/app-management'
  | '/use-crew/workspace/model-providers'
  | '/use-crew/workspace/personal-account-management'
  | '/use-crew/workspace/plugins'
  | '/use-crew/workspace/readme'
  | '/use-crew/workspace/subscription-management'
  | '/use-crew/workspace/team-members-management'
  | '/use-crew/workspace/tools'

// UseCrew node paths (without prefix)
type ExtractNodesPath<T> = T extends `/use-crew/nodes/${infer Path}` ? Path : never
export type UseCrewNodesPath = ExtractNodesPath<UseCrewPath>

// Home paths
type HomePath = '/home'

// Learn paths
type LearnPath =
  | '/learn/key-concepts'
  | '/learn/tutorials/article-reader'
  | '/learn/tutorials/build-ai-image-generation-app'
  | '/learn/tutorials/customer-service-bot'
  | '/learn/tutorials/simple-chatbot'
  | '/learn/tutorials/twitter-chatflow'
  | '/learn/tutorials/workflow-101/lesson-01'
  | '/learn/tutorials/workflow-101/lesson-02'
  | '/learn/tutorials/workflow-101/lesson-03'
  | '/learn/tutorials/workflow-101/lesson-04'
  | '/learn/tutorials/workflow-101/lesson-05'
  | '/learn/tutorials/workflow-101/lesson-06'
  | '/learn/tutorials/workflow-101/lesson-07'
  | '/learn/tutorials/workflow-101/lesson-08'
  | '/learn/tutorials/workflow-101/lesson-09'
  | '/learn/tutorials/workflow-101/lesson-10'

// QuickStart paths
type QuickStartPath = '/quick-start'

// ApiReference paths
type ApiReferencePath =
  | '/api-reference/guides/agent'
  | '/api-reference/guides/chat'
  | '/api-reference/guides/chatflow'
  | '/api-reference/guides/completion'
  | '/api-reference/guides/end-user-identity'
  | '/api-reference/guides/errors'
  | '/api-reference/guides/get-started'
  | '/api-reference/guides/human-input-flow'
  | '/api-reference/guides/knowledge'
  | '/api-reference/guides/streaming'
  | '/api-reference/guides/workflow'

// Cli paths
type CliPath =
  | '/cli/authenticate'
  | '/cli/common-tasks'
  | '/cli/install'
  | '/cli/integrate-agents/auth-for-agent-deployments'
  | '/cli/integrate-agents/error-handling-and-retries-for-agents'
  | '/cli/integrate-agents/install-the-crewctl-skill'
  | '/cli/integrate-agents/overview'
  | '/cli/overview'
  | '/cli/quick-start'
  | '/cli/reference/apps'
  | '/cli/reference/auth-and-contexts'
  | '/cli/reference/command-index'
  | '/cli/reference/environment-variables'
  | '/cli/reference/global-flags'
  | '/cli/reference/help'
  | '/cli/reference/output-formats-and-exit-codes'
  | '/cli/reference/skills'
  | '/cli/reference/version'
  | '/cli/reference/workspaces'
  | '/cli/troubleshooting'

// DevelopPlugin paths
type DevelopPluginPath =
  | '/develop-plugin/dev-guides-and-walkthroughs/agent-strategy-plugin'
  | '/develop-plugin/dev-guides-and-walkthroughs/cheatsheet'
  | '/develop-plugin/dev-guides-and-walkthroughs/creating-new-model-provider'
  | '/develop-plugin/dev-guides-and-walkthroughs/datasource-plugin'
  | '/develop-plugin/dev-guides-and-walkthroughs/develop-a-slack-bot-plugin'
  | '/develop-plugin/dev-guides-and-walkthroughs/develop-flomo-plugin'
  | '/develop-plugin/dev-guides-and-walkthroughs/develop-md-exporter'
  | '/develop-plugin/dev-guides-and-walkthroughs/develop-multimodal-data-processing-tool'
  | '/develop-plugin/dev-guides-and-walkthroughs/endpoint'
  | '/develop-plugin/dev-guides-and-walkthroughs/tool-oauth'
  | '/develop-plugin/dev-guides-and-walkthroughs/tool-plugin'
  | '/develop-plugin/dev-guides-and-walkthroughs/trigger-plugin'
  | '/develop-plugin/features-and-specs/advanced-development/bundle'
  | '/develop-plugin/features-and-specs/advanced-development/customizable-model'
  | '/develop-plugin/features-and-specs/advanced-development/reverse-invocation'
  | '/develop-plugin/features-and-specs/advanced-development/reverse-invocation-app'
  | '/develop-plugin/features-and-specs/advanced-development/reverse-invocation-model'
  | '/develop-plugin/features-and-specs/advanced-development/reverse-invocation-node'
  | '/develop-plugin/features-and-specs/advanced-development/reverse-invocation-tool'
  | '/develop-plugin/features-and-specs/plugin-types/general-specifications'
  | '/develop-plugin/features-and-specs/plugin-types/model-designing-rules'
  | '/develop-plugin/features-and-specs/plugin-types/model-schema'
  | '/develop-plugin/features-and-specs/plugin-types/multilingual-readme'
  | '/develop-plugin/features-and-specs/plugin-types/persistent-storage-kv'
  | '/develop-plugin/features-and-specs/plugin-types/plugin-info-by-manifest'
  | '/develop-plugin/features-and-specs/plugin-types/plugin-logging'
  | '/develop-plugin/features-and-specs/plugin-types/remote-debug-a-plugin'
  | '/develop-plugin/features-and-specs/plugin-types/tool'
  | '/develop-plugin/getting-started/choose-plugin-type'
  | '/develop-plugin/getting-started/cli'
  | '/develop-plugin/getting-started/getting-started-crew-plugin'
  | '/develop-plugin/publishing/faq/faq'
  | '/develop-plugin/publishing/marketplace-listing/plugin-auto-publish-pr'
  | '/develop-plugin/publishing/marketplace-listing/release-by-file'
  | '/develop-plugin/publishing/marketplace-listing/release-overview'
  | '/develop-plugin/publishing/marketplace-listing/release-to-crew-marketplace'
  | '/develop-plugin/publishing/marketplace-listing/release-to-individual-github-repo'
  | '/develop-plugin/publishing/standards/contributor-covenant-code-of-conduct'
  | '/develop-plugin/publishing/standards/privacy-protection-guidelines'
  | '/develop-plugin/publishing/standards/third-party-signature-verification'

// SelfHost paths
type SelfHostPath =
  | '/self-host/deploy/advanced-deployments/local-source-code'
  | '/self-host/deploy/advanced-deployments/start-the-frontend-docker-container'
  | '/self-host/deploy/configuration/environments'
  | '/self-host/deploy/overview'
  | '/self-host/deploy/platform-guides/bt-panel'
  | '/self-host/deploy/platform-guides/crew-premium'
  | '/self-host/deploy/quick-start/docker-compose'
  | '/self-host/deploy/quick-start/faqs'
  | '/self-host/deploy/troubleshooting/common-issues'
  | '/self-host/deploy/troubleshooting/docker-issues'
  | '/self-host/deploy/troubleshooting/integrations'
  | '/self-host/deploy/troubleshooting/storage-and-migration'
  | '/self-host/deploy/troubleshooting/weaviate-v4-migration'
  | '/self-host/use-crew/build/additional-features'
  | '/self-host/use-crew/build/agent'
  | '/self-host/use-crew/build/chatbot'
  | '/self-host/use-crew/build/new-agent/build'
  | '/self-host/use-crew/build/new-agent/overview'
  | '/self-host/use-crew/build/orchestrate-node'
  | '/self-host/use-crew/build/predefined-error-handling-logic'
  | '/self-host/use-crew/build/shortcut-key'
  | '/self-host/use-crew/build/text-generator'
  | '/self-host/use-crew/build/version-control'
  | '/self-host/use-crew/build/workflow-chatflow'
  | '/self-host/use-crew/build/workflow-collaboration'
  | '/self-host/use-crew/debug/error-type'
  | '/self-host/use-crew/debug/history-and-logs'
  | '/self-host/use-crew/debug/step-run'
  | '/self-host/use-crew/debug/variable-inspect'
  | '/self-host/use-crew/getting-started/introduction'
  | '/self-host/use-crew/knowledge/connect-external-knowledge-base'
  | '/self-host/use-crew/knowledge/create-knowledge/chunking-and-cleaning-text'
  | '/self-host/use-crew/knowledge/create-knowledge/import-text-data/readme'
  | '/self-host/use-crew/knowledge/create-knowledge/import-text-data/sync-from-notion'
  | '/self-host/use-crew/knowledge/create-knowledge/import-text-data/sync-from-website'
  | '/self-host/use-crew/knowledge/create-knowledge/introduction'
  | '/self-host/use-crew/knowledge/create-knowledge/setting-indexing-methods'
  | '/self-host/use-crew/knowledge/external-knowledge-api'
  | '/self-host/use-crew/knowledge/integrate-knowledge-within-application'
  | '/self-host/use-crew/knowledge/knowledge-pipeline/authorize-data-source'
  | '/self-host/use-crew/knowledge/knowledge-pipeline/create-knowledge-pipeline'
  | '/self-host/use-crew/knowledge/knowledge-pipeline/knowledge-pipeline-orchestration'
  | '/self-host/use-crew/knowledge/knowledge-pipeline/manage-knowledge-base'
  | '/self-host/use-crew/knowledge/knowledge-pipeline/publish-knowledge-pipeline'
  | '/self-host/use-crew/knowledge/knowledge-pipeline/readme'
  | '/self-host/use-crew/knowledge/knowledge-pipeline/upload-files'
  | '/self-host/use-crew/knowledge/manage-knowledge/introduction'
  | '/self-host/use-crew/knowledge/manage-knowledge/maintain-knowledge-documents'
  | '/self-host/use-crew/knowledge/metadata'
  | '/self-host/use-crew/knowledge/readme'
  | '/self-host/use-crew/knowledge/test-retrieval'
  | '/self-host/use-crew/monitor/analysis'
  | '/self-host/use-crew/monitor/annotation-reply'
  | '/self-host/use-crew/monitor/integrations/integrate-aliyun'
  | '/self-host/use-crew/monitor/integrations/integrate-arize'
  | '/self-host/use-crew/monitor/integrations/integrate-langfuse'
  | '/self-host/use-crew/monitor/integrations/integrate-langsmith'
  | '/self-host/use-crew/monitor/integrations/integrate-opik'
  | '/self-host/use-crew/monitor/integrations/integrate-phoenix'
  | '/self-host/use-crew/monitor/integrations/integrate-weave'
  | '/self-host/use-crew/monitor/logs'
  | '/self-host/use-crew/nodes/agent'
  | '/self-host/use-crew/nodes/answer'
  | '/self-host/use-crew/nodes/code'
  | '/self-host/use-crew/nodes/doc-extractor'
  | '/self-host/use-crew/nodes/http-request'
  | '/self-host/use-crew/nodes/human-input'
  | '/self-host/use-crew/nodes/ifelse'
  | '/self-host/use-crew/nodes/iteration'
  | '/self-host/use-crew/nodes/knowledge-retrieval'
  | '/self-host/use-crew/nodes/list-operator'
  | '/self-host/use-crew/nodes/llm'
  | '/self-host/use-crew/nodes/loop'
  | '/self-host/use-crew/nodes/output'
  | '/self-host/use-crew/nodes/parameter-extractor'
  | '/self-host/use-crew/nodes/question-classifier'
  | '/self-host/use-crew/nodes/start'
  | '/self-host/use-crew/nodes/template'
  | '/self-host/use-crew/nodes/tools'
  | '/self-host/use-crew/nodes/trigger/overview'
  | '/self-host/use-crew/nodes/trigger/plugin-trigger'
  | '/self-host/use-crew/nodes/trigger/schedule-trigger'
  | '/self-host/use-crew/nodes/trigger/webhook-trigger'
  | '/self-host/use-crew/nodes/user-input'
  | '/self-host/use-crew/nodes/variable-aggregator'
  | '/self-host/use-crew/nodes/variable-assigner'
  | '/self-host/use-crew/publish/README'
  | '/self-host/use-crew/publish/publish-mcp'
  | '/self-host/use-crew/publish/publish-to-marketplace'
  | '/self-host/use-crew/publish/webapp/chatflow-webapp'
  | '/self-host/use-crew/publish/webapp/embedding-in-websites'
  | '/self-host/use-crew/publish/webapp/web-app-settings'
  | '/self-host/use-crew/publish/webapp/workflow-webapp'
  | '/self-host/use-crew/workspace/api-extension/api-extension'
  | '/self-host/use-crew/workspace/api-extension/cloudflare-worker'
  | '/self-host/use-crew/workspace/api-extension/external-data-tool-api-extension'
  | '/self-host/use-crew/workspace/api-extension/moderation-api-extension'
  | '/self-host/use-crew/workspace/app-management'
  | '/self-host/use-crew/workspace/model-providers'
  | '/self-host/use-crew/workspace/personal-account-management'
  | '/self-host/use-crew/workspace/plugins'
  | '/self-host/use-crew/workspace/readme'
  | '/self-host/use-crew/workspace/team-members-management'
  | '/self-host/use-crew/workspace/tools'

// Deploy paths
type DeployPath =
  | '/deploy/advanced-deployments/local-source-code'
  | '/deploy/advanced-deployments/start-the-frontend-docker-container'
  | '/deploy/configuration/environments'
  | '/deploy/overview'
  | '/deploy/platform-guides/bt-panel'
  | '/deploy/platform-guides/crew-premium'
  | '/deploy/quick-start/docker-compose'
  | '/deploy/quick-start/faqs'
  | '/deploy/troubleshooting/common-issues'
  | '/deploy/troubleshooting/docker-issues'
  | '/deploy/troubleshooting/integrations'
  | '/deploy/troubleshooting/storage-and-migration'
  | '/deploy/troubleshooting/weaviate-v4-migration'

// API Reference endpoint paths
type ApiEndpointReferencePath =
  | '/api-reference/annotations/configure-annotation-reply'
  | '/api-reference/annotations/create-annotation'
  | '/api-reference/annotations/delete-annotation'
  | '/api-reference/annotations/get-annotation-reply-job-status'
  | '/api-reference/annotations/list-annotations'
  | '/api-reference/annotations/update-annotation'
  | '/api-reference/applications/get-app-info'
  | '/api-reference/applications/get-app-meta'
  | '/api-reference/applications/get-app-parameters'
  | '/api-reference/applications/get-app-webapp-settings'
  | '/api-reference/audio/convert-audio-to-text'
  | '/api-reference/audio/convert-text-to-audio'
  | '/api-reference/chat-messages/get-next-suggested-questions'
  | '/api-reference/chat-messages/send-chat-message'
  | '/api-reference/chat-messages/stop-chat-message-generation'
  | '/api-reference/chunks/create-child-chunk'
  | '/api-reference/chunks/create-chunks'
  | '/api-reference/chunks/delete-child-chunk'
  | '/api-reference/chunks/delete-chunk'
  | '/api-reference/chunks/get-chunk'
  | '/api-reference/chunks/list-child-chunks'
  | '/api-reference/chunks/list-chunks'
  | '/api-reference/chunks/update-child-chunk'
  | '/api-reference/chunks/update-chunk'
  | '/api-reference/completion-messages/send-completion-message'
  | '/api-reference/completion-messages/stop-completion-message-generation'
  | '/api-reference/conversations/delete-conversation'
  | '/api-reference/conversations/list-conversation-messages'
  | '/api-reference/conversations/list-conversation-variables'
  | '/api-reference/conversations/list-conversations'
  | '/api-reference/conversations/rename-conversation'
  | '/api-reference/conversations/update-conversation-variable'
  | '/api-reference/documents/create-document-by-file'
  | '/api-reference/documents/create-document-by-text'
  | '/api-reference/documents/delete-document'
  | '/api-reference/documents/download-document'
  | '/api-reference/documents/download-documents-as-zip'
  | '/api-reference/documents/get-document'
  | '/api-reference/documents/get-document-indexing-status'
  | '/api-reference/documents/list-documents'
  | '/api-reference/documents/update-document'
  | '/api-reference/documents/update-document-by-file'
  | '/api-reference/documents/update-document-by-text'
  | '/api-reference/documents/update-document-status-in-batch'
  | '/api-reference/end-users/get-end-user-info'
  | '/api-reference/feedback/list-app-feedbacks'
  | '/api-reference/feedback/submit-message-feedback'
  | '/api-reference/files/download-file'
  | '/api-reference/files/upload-file'
  | '/api-reference/human-input/get-human-input-form'
  | '/api-reference/human-input/submit-human-input-form'
  | '/api-reference/knowledge-bases/create-an-empty-knowledge-base'
  | '/api-reference/knowledge-bases/delete-knowledge-base'
  | '/api-reference/knowledge-bases/get-knowledge-base'
  | '/api-reference/knowledge-bases/list-knowledge-bases'
  | '/api-reference/knowledge-bases/retrieve-chunks-from-a-knowledge-base-/-test-retrieval'
  | '/api-reference/knowledge-bases/update-knowledge-base'
  | '/api-reference/knowledge-pipeline/list-datasource-plugins'
  | '/api-reference/knowledge-pipeline/run-datasource-node'
  | '/api-reference/knowledge-pipeline/run-pipeline'
  | '/api-reference/knowledge-pipeline/upload-pipeline-file'
  | '/api-reference/metadata/create-metadata-field'
  | '/api-reference/metadata/delete-metadata-field'
  | '/api-reference/metadata/get-built-in-metadata-fields'
  | '/api-reference/metadata/list-metadata-fields'
  | '/api-reference/metadata/update-built-in-metadata-field'
  | '/api-reference/metadata/update-document-metadata-in-batch'
  | '/api-reference/metadata/update-metadata-field'
  | '/api-reference/models/get-available-models'
  | '/api-reference/tags/create-knowledge-tag'
  | '/api-reference/tags/create-tag-binding'
  | '/api-reference/tags/delete-knowledge-tag'
  | '/api-reference/tags/delete-tag-binding'
  | '/api-reference/tags/get-knowledge-base-tags'
  | '/api-reference/tags/list-knowledge-tags'
  | '/api-reference/tags/update-knowledge-tag'
  | '/api-reference/workflow-runs/get-workflow-run-detail'
  | '/api-reference/workflow-runs/list-workflow-logs'
  | '/api-reference/workflow-runs/run-workflow'
  | '/api-reference/workflow-runs/run-workflow-by-id'
  | '/api-reference/workflow-runs/stop-workflow-task'
  | '/api-reference/workflow-runs/stream-workflow-events'

// Base path without language prefix
type DocPathWithoutLangBase =
  | CloudPath
  | UseCrewPath
  | HomePath
  | LearnPath
  | QuickStartPath
  | ApiReferencePath
  | CliPath
  | DevelopPluginPath
  | SelfHostPath
  | DeployPath
  | ApiEndpointReferencePath

// Combined path without language prefix (supports optional #anchor)
export type DocPathWithoutLang = DocPathWithoutLangBase | `${DocPathWithoutLangBase}#${string}`

// Product availability for productless docs paths
export const docPathProductAvailability: Record<string, readonly DocsProduct[]> = {
  '/deploy/advanced-deployments/local-source-code': ['self-host'],
  '/deploy/advanced-deployments/start-the-frontend-docker-container': ['self-host'],
  '/deploy/configuration/environments': ['self-host'],
  '/deploy/overview': ['self-host'],
  '/deploy/platform-guides/bt-panel': ['self-host'],
  '/deploy/platform-guides/crew-premium': ['self-host'],
  '/deploy/quick-start/docker-compose': ['self-host'],
  '/deploy/quick-start/faqs': ['self-host'],
  '/deploy/troubleshooting/common-issues': ['self-host'],
  '/deploy/troubleshooting/docker-issues': ['self-host'],
  '/deploy/troubleshooting/integrations': ['self-host'],
  '/deploy/troubleshooting/storage-and-migration': ['self-host'],
  '/deploy/troubleshooting/weaviate-v4-migration': ['self-host'],
  '/use-crew/build/additional-features': ['cloud', 'self-host'],
  '/use-crew/build/agent': ['cloud', 'self-host'],
  '/use-crew/build/chatbot': ['cloud', 'self-host'],
  '/use-crew/build/new-agent/build': ['self-host'],
  '/use-crew/build/new-agent/overview': ['self-host'],
  '/use-crew/build/orchestrate-node': ['cloud', 'self-host'],
  '/use-crew/build/predefined-error-handling-logic': ['cloud', 'self-host'],
  '/use-crew/build/shortcut-key': ['cloud', 'self-host'],
  '/use-crew/build/text-generator': ['cloud', 'self-host'],
  '/use-crew/build/version-control': ['cloud', 'self-host'],
  '/use-crew/build/workflow-chatflow': ['cloud', 'self-host'],
  '/use-crew/build/workflow-collaboration': ['self-host'],
  '/use-crew/debug/error-type': ['cloud', 'self-host'],
  '/use-crew/debug/history-and-logs': ['cloud', 'self-host'],
  '/use-crew/debug/step-run': ['cloud', 'self-host'],
  '/use-crew/debug/variable-inspect': ['cloud', 'self-host'],
  '/use-crew/getting-started/introduction': ['cloud', 'self-host'],
  '/use-crew/knowledge/connect-external-knowledge-base': ['cloud', 'self-host'],
  '/use-crew/knowledge/create-knowledge/chunking-and-cleaning-text': ['cloud', 'self-host'],
  '/use-crew/knowledge/create-knowledge/import-text-data/readme': ['cloud', 'self-host'],
  '/use-crew/knowledge/create-knowledge/import-text-data/sync-from-notion': ['cloud', 'self-host'],
  '/use-crew/knowledge/create-knowledge/import-text-data/sync-from-website': ['cloud', 'self-host'],
  '/use-crew/knowledge/create-knowledge/introduction': ['cloud', 'self-host'],
  '/use-crew/knowledge/create-knowledge/setting-indexing-methods': ['cloud', 'self-host'],
  '/use-crew/knowledge/external-knowledge-api': ['cloud', 'self-host'],
  '/use-crew/knowledge/integrate-knowledge-within-application': ['cloud', 'self-host'],
  '/use-crew/knowledge/knowledge-pipeline/authorize-data-source': ['cloud', 'self-host'],
  '/use-crew/knowledge/knowledge-pipeline/create-knowledge-pipeline': ['cloud', 'self-host'],
  '/use-crew/knowledge/knowledge-pipeline/knowledge-pipeline-orchestration': ['cloud', 'self-host'],
  '/use-crew/knowledge/knowledge-pipeline/manage-knowledge-base': ['cloud', 'self-host'],
  '/use-crew/knowledge/knowledge-pipeline/publish-knowledge-pipeline': ['cloud', 'self-host'],
  '/use-crew/knowledge/knowledge-pipeline/readme': ['cloud', 'self-host'],
  '/use-crew/knowledge/knowledge-pipeline/upload-files': ['cloud', 'self-host'],
  '/use-crew/knowledge/knowledge-request-rate-limit': ['cloud'],
  '/use-crew/knowledge/manage-knowledge/introduction': ['cloud', 'self-host'],
  '/use-crew/knowledge/manage-knowledge/maintain-knowledge-documents': ['cloud', 'self-host'],
  '/use-crew/knowledge/metadata': ['cloud', 'self-host'],
  '/use-crew/knowledge/readme': ['cloud', 'self-host'],
  '/use-crew/knowledge/test-retrieval': ['cloud', 'self-host'],
  '/use-crew/monitor/analysis': ['cloud', 'self-host'],
  '/use-crew/monitor/annotation-reply': ['cloud', 'self-host'],
  '/use-crew/monitor/integrations/integrate-aliyun': ['cloud', 'self-host'],
  '/use-crew/monitor/integrations/integrate-arize': ['cloud', 'self-host'],
  '/use-crew/monitor/integrations/integrate-langfuse': ['cloud', 'self-host'],
  '/use-crew/monitor/integrations/integrate-langsmith': ['cloud', 'self-host'],
  '/use-crew/monitor/integrations/integrate-opik': ['cloud', 'self-host'],
  '/use-crew/monitor/integrations/integrate-phoenix': ['cloud', 'self-host'],
  '/use-crew/monitor/integrations/integrate-weave': ['cloud', 'self-host'],
  '/use-crew/monitor/logs': ['cloud', 'self-host'],
  '/use-crew/nodes/agent': ['cloud', 'self-host'],
  '/use-crew/nodes/answer': ['cloud', 'self-host'],
  '/use-crew/nodes/code': ['cloud', 'self-host'],
  '/use-crew/nodes/doc-extractor': ['cloud', 'self-host'],
  '/use-crew/nodes/http-request': ['cloud', 'self-host'],
  '/use-crew/nodes/human-input': ['cloud', 'self-host'],
  '/use-crew/nodes/ifelse': ['cloud', 'self-host'],
  '/use-crew/nodes/iteration': ['cloud', 'self-host'],
  '/use-crew/nodes/knowledge-retrieval': ['cloud', 'self-host'],
  '/use-crew/nodes/list-operator': ['cloud', 'self-host'],
  '/use-crew/nodes/llm': ['cloud', 'self-host'],
  '/use-crew/nodes/loop': ['cloud', 'self-host'],
  '/use-crew/nodes/output': ['cloud', 'self-host'],
  '/use-crew/nodes/parameter-extractor': ['cloud', 'self-host'],
  '/use-crew/nodes/question-classifier': ['cloud', 'self-host'],
  '/use-crew/nodes/start': ['cloud', 'self-host'],
  '/use-crew/nodes/template': ['cloud', 'self-host'],
  '/use-crew/nodes/tools': ['cloud', 'self-host'],
  '/use-crew/nodes/trigger/overview': ['cloud', 'self-host'],
  '/use-crew/nodes/trigger/plugin-trigger': ['cloud', 'self-host'],
  '/use-crew/nodes/trigger/schedule-trigger': ['cloud', 'self-host'],
  '/use-crew/nodes/trigger/webhook-trigger': ['cloud', 'self-host'],
  '/use-crew/nodes/user-input': ['cloud', 'self-host'],
  '/use-crew/nodes/variable-aggregator': ['cloud', 'self-host'],
  '/use-crew/nodes/variable-assigner': ['cloud', 'self-host'],
  '/use-crew/publish/README': ['cloud', 'self-host'],
  '/use-crew/publish/publish-mcp': ['cloud', 'self-host'],
  '/use-crew/publish/publish-to-marketplace': ['cloud', 'self-host'],
  '/use-crew/publish/webapp/chatflow-webapp': ['cloud', 'self-host'],
  '/use-crew/publish/webapp/embedding-in-websites': ['cloud', 'self-host'],
  '/use-crew/publish/webapp/web-app-settings': ['cloud', 'self-host'],
  '/use-crew/publish/webapp/workflow-webapp': ['cloud', 'self-host'],
  '/use-crew/workspace/api-extension/api-extension': ['cloud', 'self-host'],
  '/use-crew/workspace/api-extension/cloudflare-worker': ['cloud', 'self-host'],
  '/use-crew/workspace/api-extension/external-data-tool-api-extension': ['cloud', 'self-host'],
  '/use-crew/workspace/api-extension/moderation-api-extension': ['cloud', 'self-host'],
  '/use-crew/workspace/app-management': ['cloud', 'self-host'],
  '/use-crew/workspace/model-providers': ['cloud', 'self-host'],
  '/use-crew/workspace/personal-account-management': ['cloud', 'self-host'],
  '/use-crew/workspace/plugins': ['cloud', 'self-host'],
  '/use-crew/workspace/readme': ['cloud', 'self-host'],
  '/use-crew/workspace/subscription-management': ['cloud'],
  '/use-crew/workspace/team-members-management': ['cloud', 'self-host'],
  '/use-crew/workspace/tools': ['cloud', 'self-host'],
}
