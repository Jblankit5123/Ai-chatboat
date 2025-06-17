type PromptTemplatesProps = {
  onSelect: (text: string) => void;
};

const templates = [
  "Hello!",
  "How are you?",
  "What can you do?",
  "Tell me about yourself",
  "Thank you"
];

export const PromptTemplates = ({ onSelect }: PromptTemplatesProps) => {
  return (
    <div className="px-4 py-2 bg-gray-200 dark:bg-gray-700">
      <div className="flex gap-2 overflow-x-auto pb-2">
        {templates.map((template, index) => (
          <button
            key={index}
            onClick={() => onSelect(template)}
            className="px-3 py-1 bg-white dark:bg-gray-600 rounded-full text-sm whitespace-nowrap shadow-sm"
          >
            {template}
          </button>
        ))}
      </div>
    </div>
  );
};