# Crew PHP SDK

Official PHP SDK for the Crew API. Build AI-powered applications with chat, completions, workflows, file uploads, knowledge bases, and more from your PHP applications.

## Features

- 🚀 Lightweight PHP SDK
- 💬 Chat and completion APIs
- 🖼️ Vision model support
- 📁 File uploads
- 🔄 Conversation management
- 👍 Message feedback
- 📝 Application configuration APIs

## Requirements

- PHP 7.2 or later
- Guzzle HTTP Client

## Installation

If you'd like to run the included examples:

```bash
composer install
```

To use the SDK in an existing project:

1. Copy `crew-client.php` into your project.
2. Add the following to your `composer.json`.

```json
{
  "require": {
    "guzzlehttp/guzzle": "^7.9"
  },
  "autoload": {
    "files": [
      "path/to/crew-client.php"
    ]
  }
}
```

Then install dependencies:

```bash
composer install
composer dump-autoload
```

## Getting Started

```php
<?php

require "vendor/autoload.php";

$apiKey = "your-api-key";

$crewClient = new CrewClient($apiKey);

$completionClient = new CompletionClient($apiKey);

$chatClient = new ChatClient($apiKey);
```

---

# Completion API

Generate a completion response.

```php
$response = $completionClient->create_completion_message(
    [
        "query" => "Who are you?"
    ],
    "blocking",
    "user_id"
);
```

---

# Chat API

Create a chat message.

```php
$response = $chatClient->create_chat_message(
    [],
    "Who are you?",
    "user_id",
    "blocking",
    $conversation_id
);
```

---

# Vision Models

Vision-enabled models support image inputs using either a remote URL or a previously uploaded file.

## Remote Image

```php
$fileForVision = [
    [
        "type" => "image",
        "transfer_method" => "remote_url",
        "url" => "https://example.com/image.jpg"
    ]
];

$response = $completionClient->create_completion_message(
    [
        "query" => "Describe this image."
    ],
    "blocking",
    "user_id",
    $fileForVision
);
```

You can also use the same image input with chat.

```php
$response = $chatClient->create_chat_message(
    [],
    "Describe this image.",
    "user_id",
    "blocking",
    $conversation_id,
    $fileForVision
);
```

## Uploaded Image

```php
$fileForVision = [
    [
        "type" => "image",
        "transfer_method" => "local_file",
        "url" => "your_file_id"
    ]
];
```

---

# File Upload

Upload a file before using it with vision models.

```php
$fileForUpload = [
    [
        "tmp_name" => "/path/to/file/image.jpg",
        "name" => "image.jpg"
    ]
];

$response = $crewClient->file_upload(
    "user_id",
    $fileForUpload
);

$result = json_decode(
    $response->getBody(),
    true
);

echo $result["id"];
```

---

# Application API

Retrieve application configuration.

```php
$response = $crewClient->get_application_parameters(
    "user_id"
);
```

---

# Message Feedback

Submit feedback for a generated message.

```php
$response = $crewClient->message_feedback(
    $message_id,
    $rating,
    "user_id"
);
```

---

# Conversation APIs

The SDK also provides helper methods for conversation management.

Available methods include:

- `get_conversations()`
- `get_conversation_messages()`
- `rename_conversation()`

---

# Authentication

Use your Crew App API Key when creating the client.

```php
$apiKey = "your-api-key";

$crewClient = new CrewClient($apiKey);
```

---

# Notes

- Replace `"your-api-key"` with your Crew App API Key.
- Every request should include a stable `user_id`.
- Vision requests support both remote image URLs and uploaded files.
- File uploads return a file ID that can be reused in future requests.

---

# Development

Install project dependencies with Composer.

```bash
composer install
```

Regenerate Composer autoload files when needed.

```bash
composer dump-autoload
```

---

# License

Released under the **MIT License**.