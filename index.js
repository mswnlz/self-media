const core = require('@actions/core');

async function run() {
  try {
    const message = core.getInput('message');
    console.log(message);
  } catch (error) {
    core.setFailed(error.message);
  }
}

run();
