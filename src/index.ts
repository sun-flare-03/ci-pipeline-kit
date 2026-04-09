/**
 * ci-pipeline-kit — Reusable CI/CD pipeline templates for GitHub Actions and GitLab CI
 */

interface Config {
  readonly name: string;
  readonly version: string;
  readonly debug: boolean;
}

const config: Config = {
  name: "ci-pipeline-kit",
  version: "1.0.0",
  debug: process.env.NODE_ENV !== "production",
};

function main(): void {
  console.log("Starting %s v%s", config.name, config.version);

  if (config.debug) {
    console.log("Debug mode enabled");
  }
}

main();
