# Crew Enterprise Telemetry Data Dictionary

Quick reference for all telemetry signals emitted by Crew Enterprise. For configuration and architecture details, see [README.md](./README.md).

## Resource Attributes

Attached to every signal (Span, Metric, Log).

| Attribute | Type | Example |
|-----------|------|---------|
| `service.name` | string | `crew` |
| `host.name` | string | `crew-api-7f8b` |

## Traces (Spans)

### `crew.workflow.run`

| Attribute | Type | Description |
|-----------|------|-------------|
| `crew.trace_id` | string | Business trace ID (Workflow Run ID) |
| `crew.tenant_id` | string | Tenant identifier |
| `crew.app_id` | string | Application identifier |
| `crew.workflow.id` | string | Workflow definition ID |
| `crew.workflow.run_id` | string | Unique ID for this run |
| `crew.workflow.status` | string | `succeeded`, `failed`, `stopped`, etc. |
| `crew.workflow.error` | string | Error message if failed |
| `crew.workflow.elapsed_time` | float | Total execution time (seconds) |
| `crew.invoke_from` | string | `api`, `webapp`, `debug` |
| `crew.conversation.id` | string | Conversation ID (optional) |
| `crew.message.id` | string | Message ID (optional) |
| `crew.invoked_by` | string | User ID who triggered the run |
| `gen_ai.usage.total_tokens` | int | Total tokens across all nodes (optional) |
| `gen_ai.user.id` | string | End-user identifier (optional) |
| `crew.parent.trace_id` | string | Parent workflow trace ID (optional) |
| `crew.parent.workflow.run_id` | string | Parent workflow run ID (optional) |
| `crew.parent.node.execution_id` | string | Parent node execution ID (optional) |
| `crew.parent.app.id` | string | Parent app ID (optional) |

### `crew.node.execution`

| Attribute | Type | Description |
|-----------|------|-------------|
| `crew.trace_id` | string | Business trace ID |
| `crew.tenant_id` | string | Tenant identifier |
| `crew.app_id` | string | Application identifier |
| `crew.workflow.id` | string | Workflow definition ID |
| `crew.workflow.run_id` | string | Workflow Run ID |
| `crew.message.id` | string | Message ID (optional) |
| `crew.conversation.id` | string | Conversation ID (optional) |
| `crew.node.execution_id` | string | Unique node execution ID |
| `crew.node.id` | string | Node ID in workflow graph |
| `crew.node.type` | string | Node type (see appendix) |
| `crew.node.title` | string | Display title |
| `crew.node.status` | string | `succeeded`, `failed` |
| `crew.node.error` | string | Error message if failed |
| `crew.node.elapsed_time` | float | Execution time (seconds) |
| `crew.node.index` | int | Execution order index |
| `crew.node.predecessor_node_id` | string | Triggering node ID |
| `crew.node.iteration_id` | string | Iteration ID (optional) |
| `crew.node.loop_id` | string | Loop ID (optional) |
| `crew.node.parallel_id` | string | Parallel branch ID (optional) |
| `crew.node.invoked_by` | string | User ID who triggered execution |
| `gen_ai.usage.input_tokens` | int | Prompt tokens (LLM nodes only) |
| `gen_ai.usage.output_tokens` | int | Completion tokens (LLM nodes only) |
| `gen_ai.usage.total_tokens` | int | Total tokens (LLM nodes only) |
| `gen_ai.request.model` | string | LLM model name (LLM nodes only) |
| `gen_ai.provider.name` | string | LLM provider name (LLM nodes only) |
| `gen_ai.user.id` | string | End-user identifier (optional) |

### `crew.node.execution.draft`

Same attributes as `crew.node.execution`. Emitted during Preview/Debug runs.

## Counters

All counters are cumulative and emitted at 100% accuracy.

### Token Counters

| Metric | Unit | Description |
|--------|------|-------------|
| `crew.tokens.total` | `{token}` | Total tokens consumed |
| `crew.tokens.input` | `{token}` | Input (prompt) tokens |
| `crew.tokens.output` | `{token}` | Output (completion) tokens |

**Labels:**

- `tenant_id`, `app_id`, `operation_type`, `model_provider`, `model_name`, `node_type` (if node_execution)

⚠️ **Warning:** `crew.tokens.total` at workflow level includes all node tokens. Filter by `operation_type` to avoid double-counting.

#### Token Hierarchy & Query Patterns

Token metrics are emitted at multiple layers. Understanding the hierarchy prevents double-counting:

```
App-level total
├── workflow          ← sum of all node_execution tokens (DO NOT add both)
│   └── node_execution ← per-node breakdown
├── message           ← independent (non-workflow chat apps only)
├── rule_generate     ← independent helper LLM call
├── code_generate     ← independent helper LLM call
├── structured_output ← independent helper LLM call
└── instruction_modify← independent helper LLM call
```

**Key rule:** `workflow` tokens already include all `node_execution` tokens. Never sum both.

**Available labels on token metrics:** `tenant_id`, `app_id`, `operation_type`, `model_provider`, `model_name`, `node_type`.
App name is only available on span attributes (`crew.app.name`), not metric labels — use `app_id` for metric queries.

**Common queries** (PromQL):

```promql
# ── Totals ──────────────────────────────────────────────────
# App-level total (exclude node_execution to avoid double-counting)
sum by (app_id) (crew_tokens_total{operation_type!="node_execution"})

# Single app total
sum (crew_tokens_total{app_id="<app_id>", operation_type!="node_execution"})

# Per-tenant totals
sum by (tenant_id) (crew_tokens_total{operation_type!="node_execution"})

# ── Drill-down ──────────────────────────────────────────────
# Workflow-level tokens for an app
sum (crew_tokens_total{app_id="<app_id>", operation_type="workflow"})

# Node-level breakdown within an app
sum by (node_type) (crew_tokens_total{app_id="<app_id>", operation_type="node_execution"})

# Model breakdown for an app
sum by (model_provider, model_name) (crew_tokens_total{app_id="<app_id>"})

# Input vs output per model
sum by (model_name) (crew_tokens_input_total{app_id="<app_id>"})
sum by (model_name) (crew_tokens_output_total{app_id="<app_id>"})

# ── Rates ───────────────────────────────────────────────────
# Token consumption rate (per hour)
sum(rate(crew_tokens_total{operation_type!="node_execution"}[1h]))

# Per-app consumption rate
sum by (app_id) (rate(crew_tokens_total{operation_type!="node_execution"}[1h]))
```

**Finding `app_id` from app name** (trace query — Tempo / Jaeger):

```
{ resource.crew.app.name = "My Chatbot" } | select(resource.crew.app.id)
```

### Request Counters

| Metric | Unit | Description |
|--------|------|-------------|
| `crew.requests.total` | `{request}` | Total operations count |

**Labels by type:**

| `type` | Additional Labels |
|--------|-------------------|
| `workflow` | `tenant_id`, `app_id`, `status`, `invoke_from` |
| `node` | `tenant_id`, `app_id`, `node_type`, `model_provider`, `model_name`, `status` |
| `draft_node` | `tenant_id`, `app_id`, `node_type`, `model_provider`, `model_name`, `status` |
| `message` | `tenant_id`, `app_id`, `model_provider`, `model_name`, `status`, `invoke_from` |
| `tool` | `tenant_id`, `app_id`, `tool_name` |
| `moderation` | `tenant_id`, `app_id` |
| `suggested_question` | `tenant_id`, `app_id`, `model_provider`, `model_name` |
| `dataset_retrieval` | `tenant_id`, `app_id` |
| `generate_name` | `tenant_id`, `app_id` |
| `prompt_generation` | `tenant_id`, `app_id`, `operation_type`, `model_provider`, `model_name`, `status` |

### Error Counters

| Metric | Unit | Description |
|--------|------|-------------|
| `crew.errors.total` | `{error}` | Total failed operations |

**Labels by type:**

| `type` | Additional Labels |
|--------|-------------------|
| `workflow` | `tenant_id`, `app_id` |
| `node` | `tenant_id`, `app_id`, `node_type`, `model_provider`, `model_name` |
| `draft_node` | `tenant_id`, `app_id`, `node_type`, `model_provider`, `model_name` |
| `message` | `tenant_id`, `app_id`, `model_provider`, `model_name` |
| `tool` | `tenant_id`, `app_id`, `tool_name` |
| `prompt_generation` | `tenant_id`, `app_id`, `operation_type`, `model_provider`, `model_name` |

### Other Counters

| Metric | Unit | Labels |
|--------|------|--------|
| `crew.feedback.total` | `{feedback}` | `tenant_id`, `app_id`, `rating` |
| `crew.dataset.retrievals.total` | `{retrieval}` | `tenant_id`, `app_id`, `dataset_id`, `embedding_model_provider`, `embedding_model`, `rerank_model_provider`, `rerank_model` |
| `crew.app.created.total` | `{app}` | `tenant_id`, `app_id`, `mode` |
| `crew.app.updated.total` | `{app}` | `tenant_id`, `app_id` |
| `crew.app.deleted.total` | `{app}` | `tenant_id`, `app_id` |

## Histograms

| Metric | Unit | Labels |
|--------|------|--------|
| `crew.workflow.duration` | `s` | `tenant_id`, `app_id`, `status` |
| `crew.node.duration` | `s` | `tenant_id`, `app_id`, `node_type`, `model_provider`, `model_name`, `plugin_name` |
| `crew.message.duration` | `s` | `tenant_id`, `app_id`, `model_provider`, `model_name` |
| `crew.message.time_to_first_token` | `s` | `tenant_id`, `app_id`, `model_provider`, `model_name` |
| `crew.tool.duration` | `s` | `tenant_id`, `app_id`, `tool_name` |
| `crew.prompt_generation.duration` | `s` | `tenant_id`, `app_id`, `operation_type`, `model_provider`, `model_name` |

## Structured Logs

### Span Companion Logs

Logs that accompany spans. Signal type: `span_detail`

#### `crew.workflow.run` Companion Log

**Common attributes:** All span attributes (see Traces section) plus:

| Additional Attribute | Type | Always Present | Description |
|---------------------|------|----------------|-------------|
| `crew.app.name` | string | No | Application display name |
| `crew.workspace.name` | string | No | Workspace display name |
| `crew.workflow.version` | string | Yes | Workflow definition version |
| `crew.workflow.inputs` | string/JSON | Yes | Input parameters (content-gated) |
| `crew.workflow.outputs` | string/JSON | Yes | Output results (content-gated) |
| `crew.workflow.query` | string | No | User query text (content-gated) |

**Event attributes:**

- `crew.event.name`: `"crew.workflow.run"`
- `crew.event.signal`: `"span_detail"`
- `trace_id`, `span_id`, `tenant_id`, `user_id`

#### `crew.node.execution` and `crew.node.execution.draft` Companion Logs

**Common attributes:** All span attributes (see Traces section) plus:

| Additional Attribute | Type | Always Present | Description |
|---------------------|------|----------------|-------------|
| `crew.app.name` | string | No | Application display name |
| `crew.workspace.name` | string | No | Workspace display name |
| `crew.invoke_from` | string | No | Invocation source |
| `gen_ai.tool.name` | string | No | Tool name (tool nodes only) |
| `crew.node.total_price` | float | No | Cost (LLM nodes only) |
| `crew.node.currency` | string | No | Currency code (LLM nodes only) |
| `crew.node.iteration_index` | int | No | Iteration index (iteration nodes) |
| `crew.node.loop_index` | int | No | Loop index (loop nodes) |
| `crew.plugin.name` | string | No | Plugin name (tool/knowledge nodes) |
| `crew.credential.name` | string | No | Credential name (plugin nodes) |
| `crew.credential.id` | string | No | Credential ID (plugin nodes) |
| `crew.dataset.ids` | JSON array | No | Dataset IDs (knowledge nodes) |
| `crew.dataset.names` | JSON array | No | Dataset names (knowledge nodes) |
| `crew.node.inputs` | string/JSON | Yes | Node inputs (content-gated) |
| `crew.node.outputs` | string/JSON | Yes | Node outputs (content-gated) |
| `crew.node.process_data` | string/JSON | No | Processing data (content-gated) |

**Event attributes:**

- `crew.event.name`: `"crew.node.execution"` or `"crew.node.execution.draft"`
- `crew.event.signal`: `"span_detail"`
- `trace_id`, `span_id`, `tenant_id`, `user_id`

### Standalone Logs

Logs without structural spans. Signal type: `metric_only`

#### `crew.message.run`

| Attribute | Type | Description |
|-----------|------|-------------|
| `crew.event.name` | string | `"crew.message.run"` |
| `crew.event.signal` | string | `"metric_only"` |
| `trace_id` | string | OTEL trace ID (32-char hex) |
| `span_id` | string | OTEL span ID (16-char hex) |
| `tenant_id` | string | Tenant identifier |
| `user_id` | string | User identifier (optional) |
| `crew.app_id` | string | Application identifier |
| `crew.message.id` | string | Message identifier |
| `crew.conversation.id` | string | Conversation ID (optional) |
| `crew.workflow.run_id` | string | Workflow run ID (optional) |
| `crew.invoke_from` | string | `service-api`, `web-app`, `debugger`, `explore` |
| `gen_ai.provider.name` | string | LLM provider |
| `gen_ai.request.model` | string | LLM model |
| `gen_ai.usage.input_tokens` | int | Input tokens |
| `gen_ai.usage.output_tokens` | int | Output tokens |
| `gen_ai.usage.total_tokens` | int | Total tokens |
| `crew.message.status` | string | `succeeded`, `failed` |
| `crew.message.error` | string | Error message (if failed) |
| `crew.message.duration` | float | Duration (seconds) |
| `crew.message.time_to_first_token` | float | TTFT (seconds) |
| `crew.message.inputs` | string/JSON | Inputs (content-gated) |
| `crew.message.outputs` | string/JSON | Outputs (content-gated) |

#### `crew.tool.execution`

| Attribute | Type | Description |
|-----------|------|-------------|
| `crew.event.name` | string | `"crew.tool.execution"` |
| `crew.event.signal` | string | `"metric_only"` |
| `trace_id` | string | OTEL trace ID |
| `span_id` | string | OTEL span ID |
| `tenant_id` | string | Tenant identifier |
| `crew.app_id` | string | Application identifier |
| `crew.message.id` | string | Message identifier |
| `crew.tool.name` | string | Tool name |
| `crew.tool.duration` | float | Duration (seconds) |
| `crew.tool.status` | string | `succeeded`, `failed` |
| `crew.tool.error` | string | Error message (if failed) |
| `crew.tool.inputs` | string/JSON | Inputs (content-gated) |
| `crew.tool.outputs` | string/JSON | Outputs (content-gated) |
| `crew.tool.parameters` | string/JSON | Parameters (content-gated) |
| `crew.tool.config` | string/JSON | Configuration (content-gated) |

#### `crew.moderation.check`

| Attribute | Type | Description |
|-----------|------|-------------|
| `crew.event.name` | string | `"crew.moderation.check"` |
| `crew.event.signal` | string | `"metric_only"` |
| `trace_id` | string | OTEL trace ID |
| `span_id` | string | OTEL span ID |
| `tenant_id` | string | Tenant identifier |
| `crew.app_id` | string | Application identifier |
| `crew.message.id` | string | Message identifier |
| `crew.moderation.type` | string | `input`, `output` |
| `crew.moderation.action` | string | `pass`, `block`, `flag` |
| `crew.moderation.flagged` | boolean | Whether flagged |
| `crew.moderation.categories` | JSON array | Flagged categories |
| `crew.moderation.query` | string | Content (content-gated) |

#### `crew.suggested_question.generation`

| Attribute | Type | Description |
|-----------|------|-------------|
| `crew.event.name` | string | `"crew.suggested_question.generation"` |
| `crew.event.signal` | string | `"metric_only"` |
| `trace_id` | string | OTEL trace ID |
| `span_id` | string | OTEL span ID |
| `tenant_id` | string | Tenant identifier |
| `crew.app_id` | string | Application identifier |
| `crew.message.id` | string | Message identifier |
| `crew.suggested_question.count` | int | Number of questions |
| `crew.suggested_question.duration` | float | Duration (seconds) |
| `crew.suggested_question.status` | string | `succeeded`, `failed` |
| `crew.suggested_question.error` | string | Error message (if failed) |
| `crew.suggested_question.questions` | JSON array | Questions (content-gated) |

#### `crew.dataset.retrieval`

| Attribute | Type | Description |
|-----------|------|-------------|
| `crew.event.name` | string | `"crew.dataset.retrieval"` |
| `crew.event.signal` | string | `"metric_only"` |
| `trace_id` | string | OTEL trace ID |
| `span_id` | string | OTEL span ID |
| `tenant_id` | string | Tenant identifier |
| `crew.app_id` | string | Application identifier |
| `crew.message.id` | string | Message identifier |
| `crew.dataset.id` | string | Dataset identifier |
| `crew.dataset.name` | string | Dataset name |
| `crew.dataset.embedding_providers` | JSON array | Embedding model providers (one per dataset) |
| `crew.dataset.embedding_models` | JSON array | Embedding models (one per dataset) |
| `crew.retrieval.rerank_provider` | string | Rerank model provider |
| `crew.retrieval.rerank_model` | string | Rerank model name |
| `crew.retrieval.query` | string | Search query (content-gated) |
| `crew.retrieval.document_count` | int | Documents retrieved |
| `crew.retrieval.duration` | float | Duration (seconds) |
| `crew.retrieval.status` | string | `succeeded`, `failed` |
| `crew.retrieval.error` | string | Error message (if failed) |
| `crew.dataset.documents` | JSON array | Documents (content-gated) |

#### `crew.generate_name.execution`

| Attribute | Type | Description |
|-----------|------|-------------|
| `crew.event.name` | string | `"crew.generate_name.execution"` |
| `crew.event.signal` | string | `"metric_only"` |
| `trace_id` | string | OTEL trace ID |
| `span_id` | string | OTEL span ID |
| `tenant_id` | string | Tenant identifier |
| `crew.app_id` | string | Application identifier |
| `crew.conversation.id` | string | Conversation identifier |
| `crew.generate_name.duration` | float | Duration (seconds) |
| `crew.generate_name.status` | string | `succeeded`, `failed` |
| `crew.generate_name.error` | string | Error message (if failed) |
| `crew.generate_name.inputs` | string/JSON | Inputs (content-gated) |
| `crew.generate_name.outputs` | string | Generated name (content-gated) |

#### `crew.prompt_generation.execution`

| Attribute | Type | Description |
|-----------|------|-------------|
| `crew.event.name` | string | `"crew.prompt_generation.execution"` |
| `crew.event.signal` | string | `"metric_only"` |
| `trace_id` | string | OTEL trace ID |
| `span_id` | string | OTEL span ID |
| `tenant_id` | string | Tenant identifier |
| `crew.app_id` | string | Application identifier |
| `crew.prompt_generation.operation_type` | string | Operation type (see appendix) |
| `gen_ai.provider.name` | string | LLM provider |
| `gen_ai.request.model` | string | LLM model |
| `gen_ai.usage.input_tokens` | int | Input tokens |
| `gen_ai.usage.output_tokens` | int | Output tokens |
| `gen_ai.usage.total_tokens` | int | Total tokens |
| `crew.prompt_generation.duration` | float | Duration (seconds) |
| `crew.prompt_generation.status` | string | `succeeded`, `failed` |
| `crew.prompt_generation.error` | string | Error message (if failed) |
| `crew.prompt_generation.instruction` | string | Instruction (content-gated) |
| `crew.prompt_generation.output` | string/JSON | Output (content-gated) |

#### `crew.app.created`

| Attribute | Type | Description |
|-----------|------|-------------|
| `crew.event.name` | string | `"crew.app.created"` |
| `crew.event.signal` | string | `"metric_only"` |
| `tenant_id` | string | Tenant identifier |
| `crew.app_id` | string | Application identifier |
| `crew.app.mode` | string | `chat`, `completion`, `agent-chat`, `workflow` |
| `crew.app.created_at` | string | Timestamp (ISO 8601) |

#### `crew.app.updated`

| Attribute | Type | Description |
|-----------|------|-------------|
| `crew.event.name` | string | `"crew.app.updated"` |
| `crew.event.signal` | string | `"metric_only"` |
| `tenant_id` | string | Tenant identifier |
| `crew.app_id` | string | Application identifier |
| `crew.app.updated_at` | string | Timestamp (ISO 8601) |

#### `crew.app.deleted`

| Attribute | Type | Description |
|-----------|------|-------------|
| `crew.event.name` | string | `"crew.app.deleted"` |
| `crew.event.signal` | string | `"metric_only"` |
| `tenant_id` | string | Tenant identifier |
| `crew.app_id` | string | Application identifier |
| `crew.app.deleted_at` | string | Timestamp (ISO 8601) |

#### `crew.feedback.created`

| Attribute | Type | Description |
|-----------|------|-------------|
| `crew.event.name` | string | `"crew.feedback.created"` |
| `crew.event.signal` | string | `"metric_only"` |
| `trace_id` | string | OTEL trace ID |
| `span_id` | string | OTEL span ID |
| `tenant_id` | string | Tenant identifier |
| `crew.app_id` | string | Application identifier |
| `crew.message.id` | string | Message identifier |
| `crew.feedback.rating` | string | `like`, `dislike`, `null` |
| `crew.feedback.content` | string | Feedback text (content-gated) |
| `crew.feedback.created_at` | string | Timestamp (ISO 8601) |

#### `crew.telemetry.rehydration_failed`

Diagnostic event for telemetry system health monitoring.

| Attribute | Type | Description |
|-----------|------|-------------|
| `crew.event.name` | string | `"crew.telemetry.rehydration_failed"` |
| `crew.event.signal` | string | `"metric_only"` |
| `tenant_id` | string | Tenant identifier |
| `crew.telemetry.error` | string | Error message |
| `crew.telemetry.payload_type` | string | Payload type (see appendix) |
| `crew.telemetry.correlation_id` | string | Correlation ID |

## Content-Gated Attributes

When `ENTERPRISE_INCLUDE_CONTENT=false`, these attributes are replaced with reference strings (`ref:{id_type}={uuid}`).

| Attribute | Signal |
|-----------|--------|
| `crew.workflow.inputs` | `crew.workflow.run` |
| `crew.workflow.outputs` | `crew.workflow.run` |
| `crew.workflow.query` | `crew.workflow.run` |
| `crew.node.inputs` | `crew.node.execution` |
| `crew.node.outputs` | `crew.node.execution` |
| `crew.node.process_data` | `crew.node.execution` |
| `crew.message.inputs` | `crew.message.run` |
| `crew.message.outputs` | `crew.message.run` |
| `crew.tool.inputs` | `crew.tool.execution` |
| `crew.tool.outputs` | `crew.tool.execution` |
| `crew.tool.parameters` | `crew.tool.execution` |
| `crew.tool.config` | `crew.tool.execution` |
| `crew.moderation.query` | `crew.moderation.check` |
| `crew.suggested_question.questions` | `crew.suggested_question.generation` |
| `crew.retrieval.query` | `crew.dataset.retrieval` |
| `crew.dataset.documents` | `crew.dataset.retrieval` |
| `crew.generate_name.inputs` | `crew.generate_name.execution` |
| `crew.generate_name.outputs` | `crew.generate_name.execution` |
| `crew.prompt_generation.instruction` | `crew.prompt_generation.execution` |
| `crew.prompt_generation.output` | `crew.prompt_generation.execution` |
| `crew.feedback.content` | `crew.feedback.created` |

## Appendix

### Operation Types

- `workflow`, `node_execution`, `message`, `rule_generate`, `code_generate`, `structured_output`, `instruction_modify`

### Node Types

- `start`, `end`, `answer`, `llm`, `knowledge-retrieval`, `knowledge-index`, `if-else`, `code`, `template-transform`, `question-classifier`, `http-request`, `tool`, `datasource`, `variable-aggregator`, `loop`, `iteration`, `parameter-extractor`, `assigner`, `document-extractor`, `list-operator`, `agent`, `trigger-webhook`, `trigger-schedule`, `trigger-plugin`, `human-input`

### Workflow Statuses

- `running`, `succeeded`, `failed`, `stopped`, `partial-succeeded`, `paused`

### Payload Types

- `workflow`, `node`, `message`, `tool`, `moderation`, `suggested_question`, `dataset_retrieval`, `generate_name`, `prompt_generation`, `app`, `feedback`

### Null Value Behavior

**Spans:** Attributes with `null` values are omitted.

**Logs:** Attributes with `null` values appear as `null` in JSON.

**Content-Gated:** Replaced with reference strings, not set to `null`.
