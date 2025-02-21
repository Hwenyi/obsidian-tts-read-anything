import { createOpenAICompatible } from "@ai-sdk/openai-compatible";
import { generateText } from 'ai';

export interface aiFilterOptions {
    enableAIForLatex: boolean;
    baseURL: string;
    apiKey: string;
    model: string;
}

export async function removeLaTeX(text: string, aiFilterOptions: aiFilterOptions): Promise<string> {

    if (!aiFilterOptions.enableAIForLatex) {
        return text;
    }

    const provider = createOpenAICompatible({
        name: 'openai-format',
        baseURL: aiFilterOptions.baseURL,
        apiKey: aiFilterOptions.apiKey,
    });

	const language = localStorage.getItem('language') || '';

	const model = aiFilterOptions.model;

    async function rewriteFormula(formula: string): Promise<string> {

        const rewritten = await generateText({
			model: provider(model),
            prompt: `Please respect the original meaning and rewrite the mathematical formula "${formula}" as a plain text description in "${language}" language`
        });

		return rewritten.text.replace(/。$/, '');
    }

    const blockRegex = /\$\$(.+?)\$\$/g;
    const inlineRegex = /\$(?!\$)(.+?)(?<!\$)\$/g;

    const formulas: { formula: string, fullMatch: string, index: number, length: number }[] = [];

    for (const match of text.matchAll(blockRegex)) {
        formulas.push({
            formula: match[1].trim(),
            fullMatch: match[0],
            index: match.index!,
            length: match[0].length,
        });
    }
    for (const match of text.matchAll(inlineRegex)) {
        formulas.push({
            formula: match[1].trim(),
            fullMatch: match[0],
            index: match.index!,
            length: match[0].length,
        });
    }

    if(formulas.length === 0) {
        return text;
    }

    formulas.sort((a, b) => a.index - b.index);

    let offset = 0;
    let result = text;

	for (const item of formulas) {

		const rewritten = await rewriteFormula(item.formula);
		
		const pos = item.index + offset;
		result = result.substring(0, pos) + rewritten + result.substring(pos + item.length);
		
		offset += rewritten.length - item.length;
	}

    return result;
}
