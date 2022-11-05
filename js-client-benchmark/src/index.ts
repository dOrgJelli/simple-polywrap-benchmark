import { Add_Module } from "./wrap";

import { PolywrapClient } from "@polywrap/client-js";

const client = new PolywrapClient();

async function main() {
  const runs = [];
  for (let i = 0; i < 10; ++i) {
    const a = Math.random();
    const b = Math.random();
    const start = Date.now();
    await Add_Module.add({
      a, b
    }, client);
    const end = Date.now();
    runs.push({ start, end });
  }

  console.log("Benchmark Results:");
  console.log("runs - ", runs.length);
  runs.forEach((run, i) =>
    console.log(`#${i+1} - ${run.end - run.start} ms`)
  );
}

main()
  .then(() => process.exit(0))
  .catch((error) => {
    console.error(error);
    process.exit(1);
  });
