# ci-pipeline-kit

[![Build](https://img.shields.io/github/actions/workflow/status/user/ci-pipeline-kit/ci.yml?branch=main)]()
[![Node](https://img.shields.io/badge/node-20+-blue.svg)]()
[![License: MIT](https://img.shields.io/badge/license-MIT-green.svg)](LICENSE)

> Reusable CI/CD pipeline templates for GitHub Actions and GitLab CI

A TypeScript project focused on solving real-world engineering problems.

## Features

- Type Safety: Full TypeScript support with strict type definitions
- Comprehensive Types: Exported types for all public APIs and configurations
- Async Native: Built on async/await with proper error propagation
- Zero Config: Sensible defaults with optional deep customization

## Getting Started

### Installation

```bash
npm install ci-pipeline-kit
# or
pnpm add ci-pipeline-kit
```

## Usage

```typescript
import { createCiPipelineKit } from 'ci-pipeline-kit';

const instance = createCiPipelineKit({
  timeout: 30_000,
  retries: 3,
});

const result = await instance.execute();
console.log(result);
```

## Configuration

Configuration can be provided via environment variables, a config file, or programmatically.

| Variable | Description | Default |
|----------|-------------|--------|
| `CI_PIPELINE_KIT_TIMEOUT` | Request timeout in seconds | `30` |
| `CI_PIPELINE_KIT_RETRIES` | Number of retry attempts | `3` |
| `CI_PIPELINE_KIT_LOG_LEVEL` | Log verbosity (debug, info, warn, error) | `info` |

## Contributing

Contributions are welcome! Please read the [contributing guidelines](CONTRIBUTING.md) before submitting a pull request.

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'feat: add amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## License

This project is licensed under the MIT License — see the [LICENSE](LICENSE) file for details.
