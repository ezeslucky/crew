# Crew Node.js SDK

Official Node.js SDK for the Crew API. Build AI-powered applications with chat, completions, workflows, knowledge bases, and workspace management using a simple, fully typed JavaScript/TypeScript client.

## Features

- 🚀 Simple, promise-based API
- 💬 Chat and completion endpoints
- ⚡ Streaming responses with AsyncIterable support
- 🔄 Workflow execution
- 📚 Knowledge base and RAG pipeline APIs
- 🗂️ Workspace and model management
- 📝 TypeScript support

## Installation

```bash
npm install crew-client
```

or

```bash
pnpm add crew-client
```

or

```bash
yarn add crew-client
```

## Getting Started

```ts
import {
  CrewClient,
  ChatClient,
  CompletionClient,
  WorkflowClient,
  KnowledgeBaseClient,
  WorkspaceClient,
} from "crew-client"

const APP_API_KEY = "your-app-api-key"
const DATASET_API_KEY = "your-dataset-api-key"

const user = "user-123"
const query = "Please tell me a short story in 10 words or less."

const client = new CrewClient(APP_API_KEY)
const chatClient = new ChatClient(APP_API_KEY)
const completionClient = new CompletionClient(APP_API_KEY)
const workflowClient = new WorkflowClient(APP_API_KEY)

const kbClient = new KnowledgeBaseClient(DATASET_API_KEY)
const workspaceClient = new WorkspaceClient(DATASET_API_KEY)
```

---

# App API

## Get Application Parameters

```ts
await client.getApplicationParameters(user)
```

## Submit Message Feedback

```ts
await client.messageFeedback(
  "message-id",
  "like",
  user,
)
```

---

# Completion API

Generate a completion response.

```ts
await completionClient.createCompletionMessage({
  inputs: {
    query,
  },
  user,
  response_mode: "blocking",
})
```

---

# Chat API

## Blocking Response

```ts
const response = await chatClient.createChatMessage({
  inputs: {},
  query,
  user,
  response_mode: "blocking",
})
```

## Streaming Response

```ts
const stream = await chatClient.createChatMessage({
  inputs: {},
  query,
  user,
  response_mode: "streaming",
})

for await (const event of stream) {
  console.log(event.event)
  console.log(event.data)
}
```

Collect the generated text:

```ts
const text = await stream.toText()
```

## Chatflow

Execute a chatflow using a workflow ID.

```ts
await chatClient.createChatMessage({
  inputs: {},
  query,
  user,
  workflow_id: "workflow-id",
  response_mode: "blocking",
})
```

---

# Workflow API

Run a workflow.

```ts
await workflowClient.run({
  inputs: {
    query,
  },
  user,
  response_mode: "blocking",
})
```

Streaming workflows are also supported.

```ts
const stream = await workflowClient.run({
  inputs: {
    query,
  },
  user,
  response_mode: "streaming",
})

for await (const event of stream) {
  console.log(event.data)
}
```

---

# Knowledge Base API

> Requires a Dataset API Key.

## List Datasets

```ts
await kbClient.listDatasets({
  page: 1,
  limit: 20,
})
```

## Create Dataset

```ts
await kbClient.createDataset({
  name: "Knowledge Base",
  indexing_technique: "economy",
})
```

## Run a RAG Pipeline

```ts
const stream = await kbClient.runPipeline("dataset-id", {
  inputs: {},
  datasource_type: "online_document",
  datasource_info_list: [],
  start_node_id: "start-node-id",
  is_published: true,
  response_mode: "streaming",
})

for await (const event of stream) {
  console.log(event.data)
}
```

---

# Workspace API

> Requires a Dataset API Key.

Retrieve available models.

```ts
await workspaceClient.getModelsByType(
  "text-embedding",
)
```

---

# Authentication

Crew uses two different API tokens depending on the endpoint.

| API | Token |
| ---- | ----- |
| App API | App API Key |
| Chat API | App API Key |
| Completion API | App API Key |
| Workflow API | App API Key |
| Knowledge Base API | Dataset API Key |
| Workspace API | Dataset API Key |

---

# Streaming

Streaming endpoints return an `AsyncIterable`.

```ts
const stream = await chatClient.createChatMessage(...)

for await (const event of stream) {
  console.log(event)
}
```

To collect the entire response into a string:

```ts
const text = await stream.toText()
```

---

# Notes

- Every chat, completion, and workflow request must include a stable `user` identifier.
- Use the App API Key for application, chat, completion, and workflow endpoints.
- Use the Dataset API Key for knowledge base and workspace endpoints.
- Streaming responses are implemented with native async iterators and work in modern Node.js environments.

---

# Development

This package is published from the repository workspace.

Install dependencies:

```bash
pnpm install
```

Publish (or perform a dry run):

```bash
./scripts/publish.sh
```

The publish script automatically resolves workspace `catalog:` dependencies before publishing.

---

# License

Released under the **MIT License**.