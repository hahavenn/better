import type { TestProject } from "vitest/node";

import resetDb from "./helpers/db/reset";

export async function setup(project: TestProject) {
  await resetDb();

  project.onTestsRerun(async () => {
    await resetDb();
  });
}

export async function teardown() {
  await resetDb();
}
