/**
 * Test for custom esbuild loaders feature.
 * Verifies that non-standard file extensions (like .md) can be imported
 * when configured via esbuildLoaders in withWorkflow options.
 */
import PROMPT from '@/workflows/11_custom_loader.md';

async function logPrompt(): Promise<string> {
  'use step';

  console.log('Loaded prompt:', PROMPT.slice(0, 50));

  return PROMPT;
}

export async function customLoader() {
  'use workflow';

  const prompt = await logPrompt();
  console.log('Custom loader test completed. Prompt length:', prompt.length);

  return { success: true, promptLength: prompt.length };
}
