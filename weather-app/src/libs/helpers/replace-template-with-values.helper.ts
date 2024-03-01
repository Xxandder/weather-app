
const replaceTemplateWithValues = (
    template: string, 
    replacements: Record<string, string>
    ) =>{
    let result = template;
    for(const [name, value] of Object.entries(replacements)){
        result.replace(`{${name}}`, value);
    }

    return result
}

export { replaceTemplateWithValues };