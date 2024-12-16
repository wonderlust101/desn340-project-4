export {applyHighlight, convertToTag};

function applyHighlight(text: string) {
    const parts = text.split(/(\[.*?\])/g);
    return (
        <>
            {parts.map((part, index) => {
                if (part.startsWith("[") && part.endsWith("]")) {
                    const content = part.slice(1, -1);
                    return (
                        <span key={index} className="text-highlight">{content}</span>
                    );
                }
                return part;
            })}
        </>
    );
}

function convertToTag(text: string): string {
    return text
        .toLowerCase()
        .replace(/\s+/g, "-")
        .replace(/-{2,}/g, "-")
        .trim();
}