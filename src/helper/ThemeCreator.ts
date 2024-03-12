import { registeredBlocks } from './WordpressBlocks';
import type { WordpressBlockTemplate } from './WordpressBlocks';
import { promises as fs } from 'fs';
import * as path from 'path';

const themeDirectory = '_wordpress-theme/mp-portfolio-2024-theme';
const blocksDirectory = path.join(themeDirectory, 'blocks');
const functionsFilePath = path.join(themeDirectory, 'functions.php');

async function createBlockFiles() {
    await fs.mkdir(blocksDirectory, { recursive: true });

    // Start with a base PHP structure
    let functionsPhpContent = "<?php\n\nfunction e_s() {\n  wp_enqueue_style('mp-portfolio-2024-theme-admin-css', get_template_directory_uri() . '/astyle.css');\n}\n\nadd_action('enqueue_block_editor_assets', 'e_s');\n\n// Register custom ACF blocks and field groups\nfunction my_register_acf_block_types_and_fields() {\n    if (function_exists('acf_register_block_type') && function_exists('acf_add_local_field_group')) {\n\n";

    for (const block of registeredBlocks) {
        const blockPhpContent = generateBlockPhpContent(block);
        const blockFilePath = path.join(blocksDirectory, `${block.blockname}.php`);

        await fs.writeFile(blockFilePath, blockPhpContent, 'utf8');

        functionsPhpContent += generateBlockRegistration(block);
        functionsPhpContent += generateAcfFieldGroup(block);
    }

    // Close the function and add the action hook
    functionsPhpContent += "    }\n}\nadd_action('acf/init', 'my_register_acf_block_types_and_fields');\n";

    await fs.writeFile(functionsFilePath, functionsPhpContent, 'utf8');

    console.log('Blocks, ACF Field Groups, and functions.php updated successfully.');
}

function generateBlockPhpContent(block: WordpressBlockTemplate): string {
    const attributeVars = Object.entries(block.attributes)
        .map(([key, { fieldType, fieldName }]) => `$${key} = get_field('${fieldName}');`)
        .join('\n');

    return `<?php\n${attributeVars}\n?>\n\n<div class="mpmedia-block block-${block.blockname}">\n    <h1>${block.blockbeautifulname}</h1>\n</div>\n`;
}

function generateBlockRegistration(block: WordpressBlockTemplate): string {
    const keywords = block.blockkeywords.map(keyword => `'${keyword}'`).join(', ');

    return `        acf_register_block_type(array(\n` +
           `            'name'              => '${block.blockname}',\n` +
           `            'title'             => __('${block.blockbeautifulname}'),\n` +
           `            'description'       => __('${block.blockdescription}'),\n` +
           `            'render_template'   => 'blocks/${block.blockname}.php',\n` +
           `            'category'          => 'formatting',\n` +
           `            'icon'              => '${block.blockicon}',\n` +
           `            'keywords'          => array(${keywords}),\n` +
           `        ));\n\n`;
}

function generateAcfFieldGroup(block: WordpressBlockTemplate): string {
    if(!block.attributes) {
        return '';
    }
    let fieldsPhpArray = 'array(';
    Object.entries(block.attributes).forEach(([key, attr], index) => {
        fieldsPhpArray += `array(
                'key' => 'field_${attr.fieldName}',
                'label' => '${attr.fieldName}',
                'name' => '${attr.fieldName}',
                'type' => '${attr.fieldType}'
            ),`;
    });
    fieldsPhpArray += ')';

    return `        acf_add_local_field_group(array(
            'key' => 'group_${block.blockname}',
            'title' => 'block_${block.blockname}',
            'fields' => ${fieldsPhpArray},
            'location' => array(
                array(
                    array(
                        'param' => 'block',
                        'operator' => '==',
                        'value' => 'acf/${block.blockname}',
                    ),
                ),
            ),
        ));\n\n`;
}


export { createBlockFiles };
